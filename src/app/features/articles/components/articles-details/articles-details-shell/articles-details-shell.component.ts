import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthFacade } from 'src/app/auth/state/facade';
import { IArticle } from 'src/app/features/articles/models/entities/article';
import { ArticleFacade } from 'src/app/features/articles/state/facade';
import { IComment } from 'src/app/features/comments/models/entities/comment';
import { CommentFacade } from 'src/app/features/comments/state/facade';
import { ILike } from 'src/app/features/likes/models/entities/like';
import { LikeFacade } from 'src/app/features/likes/state/facade';
import { IUser } from 'src/app/features/users/models/entities/user';

@Component({
  selector: 'news-articles-details-shell',
  templateUrl: './articles-details-shell.component.html',
  styleUrls: ['./articles-details-shell.component.scss']
})
export class ArticlesDetailsShellComponent implements OnInit {

  authenticatedUser$: Observable<IUser>;
  isLoading$: Observable<boolean>;
  article$: Observable<IArticle>;
  likes$: Observable<ILike[]>;
  comments$: Observable<IComment[]>;

  generalForm: FormGroup;

  constructor(
    private authFacade: AuthFacade,
    private articleFacade: ArticleFacade,
    private likeFacade: LikeFacade,
    private commentFacade: CommentFacade,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) { }

  async ngOnInit(): Promise<void> {
    this.isLoading$ = this.articleFacade.getDetailsIsLoading();
    this.route.params.subscribe((params: Params) => {
      this.commentFacade.setArticleId(params.id);
      this.likeFacade.setArticleId(params.id);
      this.article$ = this.articleFacade.getById(params.id);
    });
    this.likes$ = this.likeFacade.getByArticleId();
    this.comments$ = this.commentFacade.getByArticleId();
    this.authenticatedUser$ = this.authFacade.getCurrentUser();

    this.loadForm();
  }

  loadForm() {
    this.generalForm = this.formBuilder.group({
      body: ['', Validators.required]
    });
  }

  addComment(comment: IComment): void {
    this.commentFacade.create(comment);
  }

  removeComment(id: number): void {
    this.commentFacade.remove(id);
  }

  addLike(like: ILike): void {
    this.likeFacade.create(like);
  }

  removeLike(id: number): void {
    this.likeFacade.remove(id);
  }

}

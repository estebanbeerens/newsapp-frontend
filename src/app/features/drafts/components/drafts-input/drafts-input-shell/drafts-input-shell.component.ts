import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { AuthFacade } from 'src/app/auth/state/facade';
import { IArticle } from 'src/app/features/articles/models/entities/article';
import { IArticleFormModel } from 'src/app/features/articles/models/form-models/draft-form-model';
import { DraftFacade } from 'src/app/features/drafts/state/facade';
import { ITag } from 'src/app/features/tags/models/entities/tag';
import { TagFacade } from 'src/app/features/tags/state/facade';
import { IUser } from 'src/app/features/users/models/entities/user';

@Component({
  selector: 'news-drafts-input-shell',
  templateUrl: './drafts-input-shell.component.html',
  styleUrls: ['./drafts-input-shell.component.scss']
})
export class DraftsInputShellComponent implements OnInit, OnDestroy {

  authenticatedUser$: Observable<IUser>;
  isLoading$: Observable<boolean>;
  article$: Observable<IArticle>;
  tags$: Observable<ITag[]>;

  generalForm: FormGroup;
  selectedArticleId: number;
  isNew: boolean;
  sub: Subscription;

  constructor(
    private draftFacade: DraftFacade,
    private tagFacade: TagFacade,
    private authFacade: AuthFacade,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.draftFacade.getById(params.id);
    });
    this.isLoading$ = this.draftFacade.getDetailsIsLoading();
    this.article$ = this.draftFacade.getDetails();
    this.tags$ = this.tagFacade.getAll();
    this.authenticatedUser$ = this.authFacade.getCurrentUser();

    this.sub = this.article$.subscribe((user) => {
      this.loadForm(user);
      this.defineIsNew(user);
    });
  }
  
  defineIsNew(article: IArticle) {
    if (article.articleID == 0 ){
      this.isNew = true;
    } else {
      this.isNew = false;
    }
    this.selectedArticleId = article.articleID;
  }

  loadForm(article: IArticle) {
    this.generalForm = this.formBuilder.group({
      title: [article.title, Validators.required],
      subTitle: [article.subTitle, Validators.required],
      shortSummary: [article.shortSummary, Validators.required],
      body: [article.body, Validators.required],
      tagID: [article.tagID, Validators.required],
      articleStatusID: [article.articleStatusID, Validators.required]
    });
  }

  submitForm(article: IArticle): void {
    if (this.isNew) {
        this.draftFacade.create(article);
    } else {
      this.draftFacade.update(this.selectedArticleId, article);
    }
    this.router.navigate(['/app/drafts']);
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}

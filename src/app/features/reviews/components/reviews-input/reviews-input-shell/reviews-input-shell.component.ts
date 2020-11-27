import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { IArticleStatus } from 'src/app/features/article-statuses/models/entities/article-status';
import { ArticleStatusFacade } from 'src/app/features/article-statuses/state/facade';
import { IArticle } from 'src/app/features/articles/models/entities/article';
import { ReviewFacade } from 'src/app/features/reviews/state/facade';
import { ITag } from 'src/app/features/tags/models/entities/tag';
import { TagFacade } from 'src/app/features/tags/state/facade';

@Component({
  selector: 'news-reviews-input-shell',
  templateUrl: './reviews-input-shell.component.html',
  styleUrls: ['./reviews-input-shell.component.scss']
})
export class ReviewsInputShellComponent implements OnInit, OnDestroy {

  isLoading$: Observable<boolean>;
  article$: Observable<IArticle>;
  tags$: Observable<ITag[]>;
  articleStatuses$: Observable<IArticleStatus[]>

  generalForm: FormGroup;
  selectedArticleId: number;
  sub: Subscription;

  constructor(
    private reviewFacade: ReviewFacade,
    private tagFacade: TagFacade,
    private articleStatusFacade: ArticleStatusFacade,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.reviewFacade.getById(params.id);
    });
    this.isLoading$ = this.reviewFacade.getDetailsIsLoading();
    this.article$ = this.reviewFacade.getDetails();
    this.tags$ = this.tagFacade.getAll();
    this.articleStatuses$ = this.articleStatusFacade.getAll();

    this.sub = this.article$.subscribe((article) => {
      this.loadForm(article);
    });
  }

  loadForm(article: IArticle) {
    if (article) {
      this.generalForm = this.formBuilder.group({
        title: [article.title, Validators.required],
        subTitle: [article.subTitle, Validators.required],
        shortSummary: [article.shortSummary, Validators.required],
        body: [article.body, Validators.required],
        tagID: [article.tagID, Validators.required],
        articleStatusID: [article.articleStatusID, Validators.required]
      });
      this.selectedArticleId = article.articleID;
    } else {
      this.generalForm = this.formBuilder.group({
        title: ['', Validators.required],
        subTitle: ['', Validators.required],
        shortSummary: ['', Validators.required],
        body: ['', Validators.required],
        tagID: ['', Validators.required],
        articleStatusID: ['', Validators.required]
      });
    }
  }

  submitForm(article: IArticle): void {
    this.reviewFacade.update(this.selectedArticleId, article);
    this.router.navigate(['/app/reviews']);
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}

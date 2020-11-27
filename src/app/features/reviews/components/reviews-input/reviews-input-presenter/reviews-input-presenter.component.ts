import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { IArticleStatus } from 'src/app/features/article-statuses/models/entities/article-status';
import { IArticle } from 'src/app/features/articles/models/entities/article';
import { IArticleFormModel } from 'src/app/features/articles/models/form-models/draft-form-model';
import { ITag } from 'src/app/features/tags/models/entities/tag';

@Component({
  selector: 'news-reviews-input-presenter',
  templateUrl: './reviews-input-presenter.component.html',
  styleUrls: ['./reviews-input-presenter.component.scss']
})
export class ReviewsInputPresenterComponent {

  @Input() articleStatuses: IArticleStatus[] ;
  @Input() tags: ITag[];
  @Input() article: IArticle;
  @Input() generalForm: FormGroup;
  
  @Output() submitForm = new EventEmitter<IArticle>();

  onSubmit(data: IArticleFormModel){
    const article: IArticle = {
      articleID: this.article.articleID,
      userID: this.article.userID,
      articleStatusID: data.articleStatusID,
      tagID: data.tagID,
      title: data.title,
      subTitle: data.subTitle,
      shortSummary: data.shortSummary,
      body: data.body,
      articleStatus: null,
      tag: null,
      user: null
    }
    this.submitForm.emit(article);
  }

}

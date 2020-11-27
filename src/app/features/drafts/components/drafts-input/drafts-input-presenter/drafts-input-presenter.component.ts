import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { IArticleStatus } from 'src/app/features/article-statuses/models/entities/article-status';
import { IArticle, IArticleInitialValue } from 'src/app/features/articles/models/entities/article';
import { IArticleFormModel } from 'src/app/features/articles/models/form-models/draft-form-model';
import { ITag } from 'src/app/features/tags/models/entities/tag';

@Component({
  selector: 'news-drafts-input-presenter',
  templateUrl: './drafts-input-presenter.component.html',
  styleUrls: ['./drafts-input-presenter.component.scss']
})
export class DraftsInputPresenterComponent {

  articleStatuses: IArticleStatus[] = [
    { articleStatusID: 1, name: "Draft" },
    { articleStatusID: 2, name: "To review" },
  ];

  @Input() tags: ITag[];
  @Input() article: IArticle;
  @Input() isNew: boolean;
  @Input() generalForm: FormGroup;
  
  @Output() submitForm = new EventEmitter<IArticle>();

  onSubmit(data: IArticleFormModel){
    const article: IArticle = {
      articleID: this.article.articleID,
      articleStatusID: data.articleStatusID,
      tagID: data.tagID,
      title: data.title,
      subTitle: data.subTitle,
      shortSummary: data.shortSummary,
      body: data.body,
      userID: null,
      articleStatus: null,
      tag: null,
      user: null
    }
    this.submitForm.emit(article);
  }

}

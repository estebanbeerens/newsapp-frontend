import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IArticle } from 'src/app/features/articles/models/entities/article';
import { IComment } from 'src/app/features/comments/models/entities/comment';
import { ILike } from 'src/app/features/likes/models/entities/like';
import { IUser, IUserInitialValue } from 'src/app/features/users/models/entities/user';

@Component({
  selector: 'news-articles-details-presenter',
  templateUrl: './articles-details-presenter.component.html',
  styleUrls: ['./articles-details-presenter.component.scss']
})
export class ArticlesDetailsPresenterComponent implements OnChanges, OnInit {

  userInitialValue: IUser = IUserInitialValue;
  likeUserIds: number[] = [];
  formShow: boolean = false;
  
  @Input() authenticatedUser: IUser;
  @Input() isLoading: boolean;
  @Input() article: IArticle;
  @Input() likes: ILike[];
  @Input() comments: IComment[];
  @Input() generalForm: FormGroup;

  @Output() onAddComment = new EventEmitter<IComment>();
  @Output() onRemoveComment = new EventEmitter<number>();
  @Output() onAddLike = new EventEmitter<ILike>();
  @Output() onRemoveLike = new EventEmitter<number>();

  ngOnInit(): void {
    this.likeUserIds = [];
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.likes) {
      this.likes.forEach((like) => {
        this.likeUserIds.push(like.userID);
      });
    }
  }

  addComment(formOutput: any): void {
    const comment: IComment = {
      commentID: 0,
      body: formOutput.body,
      articleID: this.article.articleID,
      userID: this.authenticatedUser.userID
    }
    this.onAddComment.emit(comment);
  }

  removeComment(id: number): void {
    this.onRemoveComment.emit(id);
  }

  addLike(): void {
    const like: ILike = {
      likeID: 0,
      articleID: this.article.articleID,
      userID: this.authenticatedUser.userID
    }
    this.onAddLike.emit(like);
  }

  removeLike(userId: number): void {
    this.likes.forEach((like) => {
      if (like.userID == userId) {
        this.onRemoveLike.emit(like.likeID);
        this.likeUserIds.splice(this.likeUserIds.indexOf(userId));
      }
    });
  }

}

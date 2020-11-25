import { IArticleStatus, IArticleStatusInitialValue } from 'src/app/features/article-statuses/models/entities/article-status';
import { ITag, ITagInitialValue } from 'src/app/features/tags/models/entities/tag';
import { IUser, IUserInitialValue } from 'src/app/features/users/models/entities/user';

export interface IArticle {
  articleID: number,
  title: string,
  subTitle: string,
  shortSummary: string,
  body: string,

  tagID: number,
  tag: ITag,
  
  userID: number,
  user: IUser,
  
  articleStatusID: number,
  articleStatus: IArticleStatus
}

export const IArticleInitialValue: IArticle = {

  articleID: 0,
  title: '',
  subTitle: '',
  shortSummary: '',
  body: '',

  tagID: 0,
  tag: ITagInitialValue,

  userID: 0,
  user: IUserInitialValue,

  articleStatusID: 0,
  articleStatus: IArticleStatusInitialValue
};

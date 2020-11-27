export interface IComment {
    commentID: number,
    body: string,
    articleID: number,
    userID: number
}

export const ICommentInitialValue: IComment = {
    commentID: 0,
    body: '',
    articleID: 0,
    userID: 0
};

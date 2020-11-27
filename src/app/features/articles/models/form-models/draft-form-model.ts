export interface IArticleFormModel {
    title: string,
    subTitle: string,
    shortSummary: string,
    body: string,
    tagID: number,
    articleStatusID: number
}

export const IArticleFormModelInitialValue: IArticleFormModel = {
    title: '',
    subTitle: '',
    shortSummary: '',
    body: '',
    tagID: 0,
    articleStatusID: 0
};

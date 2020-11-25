import { ITag, ITagInitialValue } from 'src/app/features/tags/models/entities/tag';

export interface ITagDetailsState {
    result: ITag,
    requiresReload: boolean,
    isLoading: boolean,
    error: string
}

export const ITagDetailsStateInitialValue: ITagDetailsState = {
    result: ITagInitialValue,
    requiresReload: true,
    isLoading: false,
    error: ''
};

import { ITag } from 'src/app/features/tags/models/entities/tag';

export interface ITagOverviewState {
    results: ITag[],
    requiresReload: boolean,
    isLoading: boolean,
    error: string
}

export const ITagOverviewStateInitialValue: ITagOverviewState = {
    results: [],
    requiresReload: true,
    isLoading: true,
    error: ''
};

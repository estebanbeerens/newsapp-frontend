import { RouteInfo } from 'src/app/core/models/routes/route-info';

export const journalistRoutes: RouteInfo[] = [
    {
        path: '/app/articles',
        title: 'Artikels',
        icon: 'article',
        class: '',
        category: 'Publiek'
    },
    {
        path: '/app/drafts',
        title: 'Drafts',
        icon: 'edit',
        class: '',
        category: 'Privé'
    },
];
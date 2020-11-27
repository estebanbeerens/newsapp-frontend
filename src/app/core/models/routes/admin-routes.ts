import { RouteInfo } from 'src/app/core/models/routes/route-info';

export const adminRoutes: RouteInfo[] = [
    {
        path: '/app/articles',
        title: 'Artikels',
        icon: 'article',
        class: '',
        category: 'Publiek'
    },
    {
        path: '/app/reviews',
        title: 'Artikels review',
        icon: 'fact_check',
        class: '',
        category: 'Review'
    },
    {
        path: '/app/tags',
        title: 'Categorieën',
        icon: 'local_offer',
        class: '',
        category: 'Configuratie'
    },
    {
        path: '/app/users',
        title: 'Accounts',
        icon: 'people_alt',
        class: '',
        category: ''
    },
];
import { RouteInfo } from 'src/app/core/models/routes/route-info';

export const routes: RouteInfo[] = [
    {
        path: '/app/articles',
        title: 'Artikels',
        icon: 'article',
        class: '',
        category: 'Publiek'
    },
    {
        path: '/app/tags',
        title: 'Labels',
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
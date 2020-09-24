export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
    category: string;
}

export const ROUTES: RouteInfo[] = [
    {
        path: '/TEST',
        title: 'Test',
        icon: 'language',
        class: '',
        category: 'Main'
    }
];
import { NavigationModel } from '../../models/navigation-model';
import Home from '../../pages/home/home';
import About from '../../pages/about/about';

export const ROUTE_CONSTANT: NavigationModel[] = [
  {
    name: '/',
    page: Home
  },
  {
    name: '/about',
    page: About
  }
  // {
  //     name: '/counter',
  //     page: Counter,
  // },
  // {
  //     name: '*',
  //     page: Error,
  // },
  // {
  //     name: '/about-detail',
  //     page: AboutDetail,
  // },
  // {
  //     name: '/users',
  //     page: Users
  // },
  // {
  //     name: '/user-details/:id',
  //     page: UserDetail
  // }
];

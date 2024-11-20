import { v4 as uuid } from 'uuid';

export const DashboardMenu = [
  {
    id: uuid(),
    title: 'Dashboard',
    icon: 'home',
    link: '/',
  },
  {
    id: uuid(),
    title: 'REGISTRATIONS',
    grouptitle: true,
  },
  {
    id: uuid(),
    title: 'Players',
    icon: 'layers',
    children: [
      { id: uuid(), link: '/players/create', name: 'Create' },
      { id: uuid(), link: '/players', name: 'View' },
      //   { id: uuid(), link: '/billing', name: 'Billing' },
      //   { id: uuid(), link: '/pricing', name: 'Pricing' },
      //   { id: uuid(), link: '/not-found', name: '404 Error' },
    ],
  },
  {
    id: uuid(),
    title: 'Categories',
    icon: 'layers',
    children: [
      { id: uuid(), link: '/category/create', name: 'Create' },
      { id: uuid(), link: '/category/view', name: 'View' },
      //   { id: uuid(), link: '/billing', name: 'Billing' },
      //   { id: uuid(), link: '/pricing', name: 'Pricing' },
      //   { id: uuid(), link: '/not-found', name: '404 Error' },
    ],
  },
  {
    id: uuid(),
    title: 'Settings',
    grouptitle: true,
  },
  { id: uuid(), link: '/profile', title: 'Profile', icon: 'home' },
  {
    id: uuid(),
    link: '/update-profile',
    title: 'Update Profile',
    icon: 'home',
  },
  {
    id: uuid(),
    link: '/change-password',
    title: 'Change Password',
    icon: 'home',
  },

  {
    id: uuid(),
    title: 'Documentation',
    grouptitle: true,
  },
  {
    id: uuid(),
    title: 'Terms & Conditions',
    icon: 'clipboard',
    link: '/documentation',
  },
  {
    id: uuid(),
    title: 'Privacy Policy',
    icon: 'git-pull-request',
    link: '/privacy-policy',
  },
  {
    id: uuid(),
    title: 'Product Roadmap',
    icon: 'git-pull-request',
    link: '/product-roadmap',
  },
  {
    id: uuid(),
    title: 'Changelog',
    icon: 'git-pull-request',
    link: '/changelog',
  },
];

export default DashboardMenu;

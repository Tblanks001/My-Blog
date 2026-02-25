import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/My-Blog/about',
    component: ComponentCreator('/My-Blog/about', 'f66'),
    exact: true
  },
  {
    path: '/My-Blog/blog',
    component: ComponentCreator('/My-Blog/blog', 'a1b'),
    exact: true
  },
  {
    path: '/My-Blog/blog/archive',
    component: ComponentCreator('/My-Blog/blog/archive', '329'),
    exact: true
  },
  {
    path: '/My-Blog/blog/authors',
    component: ComponentCreator('/My-Blog/blog/authors', 'e07'),
    exact: true
  },
  {
    path: '/My-Blog/blog/dealing-with-expectations',
    component: ComponentCreator('/My-Blog/blog/dealing-with-expectations', '147'),
    exact: true
  },
  {
    path: '/My-Blog/blog/first-blog-post',
    component: ComponentCreator('/My-Blog/blog/first-blog-post', 'd37'),
    exact: true
  },
  {
    path: '/My-Blog/blog/how-life-has-been-going-these-past-few-years',
    component: ComponentCreator('/My-Blog/blog/how-life-has-been-going-these-past-few-years', '4f3'),
    exact: true
  },
  {
    path: '/My-Blog/blog/My-Car',
    component: ComponentCreator('/My-Blog/blog/My-Car', 'cc1'),
    exact: true
  },
  {
    path: '/My-Blog/blog/my-time-in-taos',
    component: ComponentCreator('/My-Blog/blog/my-time-in-taos', '70a'),
    exact: true
  },
  {
    path: '/My-Blog/blog/plans-for-this-year',
    component: ComponentCreator('/My-Blog/blog/plans-for-this-year', 'dc8'),
    exact: true
  },
  {
    path: '/My-Blog/blog/tags',
    component: ComponentCreator('/My-Blog/blog/tags', '9e1'),
    exact: true
  },
  {
    path: '/My-Blog/blog/tags/car',
    component: ComponentCreator('/My-Blog/blog/tags/car', '781'),
    exact: true
  },
  {
    path: '/My-Blog/blog/tags/goals',
    component: ComponentCreator('/My-Blog/blog/tags/goals', '887'),
    exact: true
  },
  {
    path: '/My-Blog/blog/tags/jobs',
    component: ComponentCreator('/My-Blog/blog/tags/jobs', '367'),
    exact: true
  },
  {
    path: '/My-Blog/blog/why-i-deleted-my-social-media',
    component: ComponentCreator('/My-Blog/blog/why-i-deleted-my-social-media', '8a3'),
    exact: true
  },
  {
    path: '/My-Blog/markdown-page',
    component: ComponentCreator('/My-Blog/markdown-page', 'f9b'),
    exact: true
  },
  {
    path: '/My-Blog/docs',
    component: ComponentCreator('/My-Blog/docs', '9d7'),
    routes: [
      {
        path: '/My-Blog/docs',
        component: ComponentCreator('/My-Blog/docs', '336'),
        routes: [
          {
            path: '/My-Blog/docs',
            component: ComponentCreator('/My-Blog/docs', '911'),
            routes: [
              {
                path: '/My-Blog/docs/category/custom-title',
                component: ComponentCreator('/My-Blog/docs/category/custom-title', '3cb'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/My-Blog/docs/getting started/alerts',
                component: ComponentCreator('/My-Blog/docs/getting started/alerts', 'b5f'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/My-Blog/docs/getting started/codeblocks',
                component: ComponentCreator('/My-Blog/docs/getting started/codeblocks', '2fe'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/My-Blog/docs/getting started/markdown',
                component: ComponentCreator('/My-Blog/docs/getting started/markdown', 'ffc'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/My-Blog/docs/getting started/mdx',
                component: ComponentCreator('/My-Blog/docs/getting started/mdx', '6cd'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/My-Blog/docs/getting started/table-of-contents',
                component: ComponentCreator('/My-Blog/docs/getting started/table-of-contents', '4a5'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/My-Blog/docs/getting started/tabs',
                component: ComponentCreator('/My-Blog/docs/getting started/tabs', '65f'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/My-Blog/docs/single-page',
                component: ComponentCreator('/My-Blog/docs/single-page', 'ba7'),
                exact: true,
                sidebar: "defaultSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/My-Blog/',
    component: ComponentCreator('/My-Blog/', 'cd2'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];

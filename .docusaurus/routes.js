import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/build/__docusaurus/debug',
    component: ComponentCreator('/build/__docusaurus/debug', 'f78'),
    exact: true
  },
  {
    path: '/build/__docusaurus/debug/config',
    component: ComponentCreator('/build/__docusaurus/debug/config', 'ad9'),
    exact: true
  },
  {
    path: '/build/__docusaurus/debug/content',
    component: ComponentCreator('/build/__docusaurus/debug/content', 'c26'),
    exact: true
  },
  {
    path: '/build/__docusaurus/debug/globalData',
    component: ComponentCreator('/build/__docusaurus/debug/globalData', 'c50'),
    exact: true
  },
  {
    path: '/build/__docusaurus/debug/metadata',
    component: ComponentCreator('/build/__docusaurus/debug/metadata', '92b'),
    exact: true
  },
  {
    path: '/build/__docusaurus/debug/registry',
    component: ComponentCreator('/build/__docusaurus/debug/registry', '586'),
    exact: true
  },
  {
    path: '/build/__docusaurus/debug/routes',
    component: ComponentCreator('/build/__docusaurus/debug/routes', '4e7'),
    exact: true
  },
  {
    path: '/build/about',
    component: ComponentCreator('/build/about', '40f'),
    exact: true
  },
  {
    path: '/build/blog',
    component: ComponentCreator('/build/blog', '414'),
    exact: true
  },
  {
    path: '/build/blog/archive',
    component: ComponentCreator('/build/blog/archive', 'c9f'),
    exact: true
  },
  {
    path: '/build/blog/authors',
    component: ComponentCreator('/build/blog/authors', '8c5'),
    exact: true
  },
  {
    path: '/build/blog/dealing-with-expectations',
    component: ComponentCreator('/build/blog/dealing-with-expectations', 'a8d'),
    exact: true
  },
  {
    path: '/build/blog/first-blog-post',
    component: ComponentCreator('/build/blog/first-blog-post', 'db3'),
    exact: true
  },
  {
    path: '/build/blog/how-life-has-been-going-these-past-few-years',
    component: ComponentCreator('/build/blog/how-life-has-been-going-these-past-few-years', '470'),
    exact: true
  },
  {
    path: '/build/blog/My-Car',
    component: ComponentCreator('/build/blog/My-Car', '620'),
    exact: true
  },
  {
    path: '/build/blog/my-time-in-taos',
    component: ComponentCreator('/build/blog/my-time-in-taos', 'e8c'),
    exact: true
  },
  {
    path: '/build/blog/plans-for-this-year',
    component: ComponentCreator('/build/blog/plans-for-this-year', '92d'),
    exact: true
  },
  {
    path: '/build/blog/tags',
    component: ComponentCreator('/build/blog/tags', 'efe'),
    exact: true
  },
  {
    path: '/build/blog/tags/car',
    component: ComponentCreator('/build/blog/tags/car', '6c4'),
    exact: true
  },
  {
    path: '/build/blog/tags/goals',
    component: ComponentCreator('/build/blog/tags/goals', '4b7'),
    exact: true
  },
  {
    path: '/build/blog/tags/jobs',
    component: ComponentCreator('/build/blog/tags/jobs', '07f'),
    exact: true
  },
  {
    path: '/build/blog/why-i-deleted-my-social-media',
    component: ComponentCreator('/build/blog/why-i-deleted-my-social-media', '3d3'),
    exact: true
  },
  {
    path: '/build/markdown-page',
    component: ComponentCreator('/build/markdown-page', '05c'),
    exact: true
  },
  {
    path: '/build/docs',
    component: ComponentCreator('/build/docs', '06a'),
    routes: [
      {
        path: '/build/docs',
        component: ComponentCreator('/build/docs', 'd74'),
        routes: [
          {
            path: '/build/docs',
            component: ComponentCreator('/build/docs', '0da'),
            routes: [
              {
                path: '/build/docs/category/custom-title',
                component: ComponentCreator('/build/docs/category/custom-title', 'b60'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/build/docs/getting started/alerts',
                component: ComponentCreator('/build/docs/getting started/alerts', '33d'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/build/docs/getting started/codeblocks',
                component: ComponentCreator('/build/docs/getting started/codeblocks', '256'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/build/docs/getting started/markdown',
                component: ComponentCreator('/build/docs/getting started/markdown', 'd08'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/build/docs/getting started/mdx',
                component: ComponentCreator('/build/docs/getting started/mdx', 'b25'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/build/docs/getting started/table-of-contents',
                component: ComponentCreator('/build/docs/getting started/table-of-contents', 'a5d'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/build/docs/getting started/tabs',
                component: ComponentCreator('/build/docs/getting started/tabs', 'ea7'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/build/docs/single-page',
                component: ComponentCreator('/build/docs/single-page', 'f7d'),
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
    path: '/build/',
    component: ComponentCreator('/build/', 'c66'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];

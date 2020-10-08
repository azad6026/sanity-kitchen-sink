export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f7e95d55ad3222e38eac518',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-v58ia82m',
                  apiId: '27612c13-ee86-4e79-b89f-c0b518d4c11c'
                },
                {
                  buildHookId: '5f7e95d526660a2f4638ffaf',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-jubqodec',
                  apiId: '464ca0ba-49ff-4bc3-9242-563e502ea342'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/azad6026/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-jubqodec.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}

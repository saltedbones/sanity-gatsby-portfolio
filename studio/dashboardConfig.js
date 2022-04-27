export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
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
                  buildHookId: '626898222fed01266214787e',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-jgd9h55u',
                  apiId: '2f48b6f2-4bd0-4419-9231-bbb538f486d7'
                },
                {
                  buildHookId: '62689822e030da1f9d5c093e',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-iaf7j1ae',
                  apiId: '7c046578-4889-4a28-a9ed-40491ba53eb4'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/saltedbones/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-iaf7j1ae.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}

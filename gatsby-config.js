module.exports = {
    siteMetadata: {
        title: `Launched`,
    },
    plugins: [
        `gatsby-plugin-sass`,
        `gatsby-plugin-react-helmet`,
        {
            resolve: 'gatsby-source-rss-fork',
            options: {
                    rssURL: 'https://charliemchapman-podcasts.s3.us-east-2.amazonaws.com/launched-beta/rss/launched-test-rss.xml'
            }
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `src`,
                path: `${__dirname}/src/`,
            },
        },
        {
            resolve: `gatsby-transformer-remark`,
            options: {
              excerpt_separator: `<!-- excerpt-end -->`
            }
        },
        {
            resolve: `gatsby-plugin-typography`,
            options: {
                pathToConfigModule: `src/utils/typography.js`,
            },
        },
        {
            resolve: `gatsby-plugin-favicon`,
            options: {
              logo: "./src/images/favicon.png",
              injectHTML: true,
              icons: {
                android: true,
                appleIcon: true,
                appleStartup: true,
                coast: true,
                favicons: true,
                firefox: true,
                twitter: true,
                yandex: true,
                windows: true
              }
            }
          }
    ],
  };
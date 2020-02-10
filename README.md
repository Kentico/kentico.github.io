# Kentico GitHub Community Site

[![Build Status](https://api.travis-ci.com/Kentico/kentico.github.io.svg?branch=source)](https://travis-ci.com/Kentico/kentico.github.io)
[![Live](https://img.shields.io/badge/live-demo-brightgreen.svg)](https://kentico.github.io)
[![Stack Overflow](https://img.shields.io/badge/Stack%20Overflow-ASK%20NOW-FE7A16.svg?logo=stackoverflow&logoColor=white)](https://stackoverflow.com/tags/kentico-cloud)

Official site for GitHub Community in Kentico. This site is using [GatsbyJS](https://next.gatsbyjs.org) static site generation.

Data is stored in [Kentico Kontent](https://kontent.ai) and provided by [Gatsby source plugin](https://github.com/Kentico/gatsby-source-kontent).

Source code for the landing page is stored in the [source branch](https://github.com/Kentico/kentico.github.io/tree/source) because the Organization pages bundle [has to be stored in the master branch](https://help.github.com/articles/user-organization-and-project-pages/#user-and-organization-pages-sites).

## 🚀 Quick start

1. **Install dependencies:**

    ```sh
    npm install
    ```

    Including Gatsby CLI installation.

1. **Start developing:**

    ```sh
    npm run develop  
    ```

1. **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`.
    *Note: You'll also see a second link: `http://localhost:8000___graphql`. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://next.gatsbyjs.org/tutorial/part-five/#introducing-graphiql).*

1. **Build**

    Run the build process which builds the site to the `public` folder:

    ```sh
    npm run build
    ```

The deployment set up and the Azure Function development are described in the [Kentico GitHub wiki](https://github.com/Kentico/kentico.github.io/wiki).

Further information, such as a description of files inside a Gatsby project, can be found in the [Gatsby default starter readme](https://github.com/gatsbyjs/gatsby-starter-default).



## 💫 Deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/Kentico/kentico.github.io)

Note: this deploys only the front end of the application data. Data loaded from GitHub will be loaded from the production Azure Table Storage.

Information about the actual deployment is [described in this wiki](https://github.com/Kentico/kentico.github.io/wiki/How-does-the-automatic-deployment-works).

![Analytics](https://kentico-ga-beacon.azurewebsites.net/api/UA-69014260-4/Kentico/kentico.github.io?pixel)

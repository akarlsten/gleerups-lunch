module.exports = {
  siteMetadata: {
    title: `Dagens Lunch - Gleerups`,
    description: `Lunchställen nära Gleerups i Malmö och vad dem serverar idag!`,
    author: `https://github.com/acarlsten`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-apiserver`,
      options: {
        url: `https://lunch-api.adamkarlsten.com`,
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        typePrefix: "api_",
        entityLevel: "restaurants",
        name: "restaurants",
        auth: false,
        localSave: false,
        schemaType: {
          id: "string",
          name: "string",
          emoji: "string",
          description: "string",
          position: {
            lat: "string",
            long: "string",
          },
          address: {
            street: "string",
            postCode: "string",
            city: "string",
          },
          distance: "string",
          menuItems: [{ dish: "string" }],
        },
      },
    },
    `gatsby-transformer-json`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Nunito`,
            variants: ["400", "700", "900"],
          },
        ],
      },
    },

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Dagens Lunch - Gleerups`,
        short_name: `Lunch Gleerups`,
        start_url: `/`,
        background_color: `#FFF`,
        theme_color: `#ff6ac1`,
        display: `standalone`,
        icon: `src/favicon.svg`, // This path is relative to the root of the site.
        include_favicon: true,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
  ],
}

exports.createPages = ({ graphql, actions }) => {
    const { createPage, createRedirect } = actions

    createRedirect({
        fromPath: "/go",
        toPath:
          "/?utm_source=school&utm_medium=printedskfbrochure&utm_campaign=studentbrochure",
      })
    createRedirect({
        fromPath: "/*",
        toPath: "https://partner.ascentfunding.com/wecancodeit/",
        isPermanent: true,
        force: true,
    })
}


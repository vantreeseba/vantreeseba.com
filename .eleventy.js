module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "src/css": "css" });
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });

  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

  eleventyConfig.addFilter("readableDate", (date) =>
    new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  );

  eleventyConfig.addFilter("htmlDateString", (date) =>
    new Date(date).toISOString().split("T")[0]
  );

  eleventyConfig.addCollection("post", (api) =>
    api.getFilteredByTag("post").sort((a, b) => a.date - b.date)
  );

  eleventyConfig.setServerOptions({ port: 3000 });

  return {
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site",
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
};

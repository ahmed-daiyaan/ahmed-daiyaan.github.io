'use strict'
const format = require('date-fns/format')
module.exports = (eleventyConfig) => {
    eleventyConfig.addPassthroughCopy('css')
    eleventyConfig.addPassthroughCopy('logo')
    eleventyConfig.addPassthroughCopy('js')
    eleventyConfig.addPassthroughCopy('quotes')
    // eleventyConfig.addPassthroughCopy('robots.txt')
     eleventyConfig.addCollection("myPosts", function(collection) {
        return collection.getFilteredByGlob("/posts/*.md");
    });
    eleventyConfig.addFilter('date', function (date, dateFormat) {
    return format(date, dateFormat)
  })
     eleventyConfig.addCollection("tagList", collection => {
    const tagsSet = new Set();
    collection.getAll().forEach(item => {
      if (!item.data.tags) return;
      item.data.tags
        .filter(tag => !['posts', 'all'].includes(tag))
        .forEach(tag => tagsSet.add(tag));
    });
    return Array.from(tagsSet).sort();
     });
   

    return {
        passthroughFileCopy: true,
        dir: {
            output: "docs"
        }
    }

}

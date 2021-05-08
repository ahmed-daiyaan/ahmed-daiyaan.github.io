module.exports = (eleventyConfig) => {
    eleventyConfig.addPassthroughCopy('css')
    eleventyConfig.addPassthroughCopy('logo')
    eleventyConfig.addPassthroughCopy('js')
    eleventyConfig.addPassthroughCopy('quotes')
    return {
        passthroughFileCopy: true,
        dir: {
            output: "docs"
        }
    }
}

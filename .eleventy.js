module.exports = (eleventyConfig) => {
    eleventyConfig.addPassthroughCopy('css')
    eleventyConfig.addPassthroughCopy('logo')
    return {
        passthroughFileCopy: true,
        dir: {
            output: "docs"
        }
    }
}

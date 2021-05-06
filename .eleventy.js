module.exports = (eleventyConfig) => {
    eleventyConfig.addPassthroughCopy('css')
    eleventyConfig.addPassthroughCopy('logo')
    eleventyConfig.addPassthroughCopy('js')
    return {
        passthroughFileCopy: true,
        dir: {
            output: "docs"
        }
    }
}

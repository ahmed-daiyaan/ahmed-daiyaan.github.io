module.exports = (eleventyConfig) => {
    eleventyConfig.addPassthroughCopy('css')
    return {
        passthroughFileCopy: true
    }
}
module.exports = (eleventyConfig) => {
    eleventyConfig.addPassthroughCopy('logo')
    return {
        passthroughFileCopy: true
    }
}
module.exports = {
    dir: {
        input: "src",
        output: "docs"
    }

};


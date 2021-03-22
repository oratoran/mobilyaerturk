module.exports = {
    preprocess: require("svelte-windicss-preprocess").preprocess({
      compile: false,
      prefix: 'windi-',
    }),
  };
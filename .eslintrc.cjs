module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ["eslint:recommended", "plugin:vue/vue3-recommended"],
  rules: {
    "no-unused-vars": "off",
    "vue/multi-word-component-names": "off",
    "vue/no-mutating-props": "off",
  },
};

module.exports = {
  extends: [require.resolve('@umijs/lint/dist/config/eslint')],
  extends: ["plugin:@vue/recommended", "@vue/prettier", "@vue/typescript"],
  globals: {
    page: true,
    REACT_APP_ENV: true,
  }
};

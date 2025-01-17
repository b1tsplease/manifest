module.exports = {
  env: {
    browser: true,
    es2020: true
  },
  extends: ["prettier", "prettier/react"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: "module"
  },
  plugins: ["react"],
  globals: {
    React: "writable"
  },
  rules: {
    "react/react-in-jsx-scope": "off"
  }
};

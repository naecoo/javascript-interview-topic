module.exports = {
  testPathIgnorePatterns: ["/node_modules", "/docs", "/scripts"],
  "transform": {
    "\\.[jt]sx?$": "babel-jest"
  },
};
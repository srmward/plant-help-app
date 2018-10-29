export default {
  bail: false,
  verbose: false,
  threshold: 0.2,
  diffDirectory: './testophobia/diffs',
  goldenDirectory: './testophobia/golden-screens',
  testDirectory: './testophobia/test-screens',
  baseUrl: 'http://localhost:1234',
  fileType: 'jpeg',
  quality: 50,
  dimensions: [
    {
      type: 'desktop',
      width: 1024,
      height: 768,
      scale: 0.42,
    },
    {
      type: 'mobile',
      width: 375,
      height: 812,
      scale: 0.42,
    },
  ],
  tests: ['testophobia/tests/**/*.test.js'],
}

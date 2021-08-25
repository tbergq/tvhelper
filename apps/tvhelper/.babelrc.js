// @flow

module.exports = {
  presets: ['next/babel', '@babel/preset-flow'],
  plugins: [
    ['relay', { artifactDirectory: './src/__generated__' }],
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          components: './src/components',
        },
      },
    ],
    '@vanilla-extract/babel-plugin',
  ],
};

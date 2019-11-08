module.exports = {
  '*.{js,jsx}': filenames => [
    `yarn eslint ${filenames.join(' ')} --fix`,
    'git add',
  ],
  '*.{ts,tsx,css,scss}': ['prettier --write', 'git add'],
}

# eslint-config-outfunnel
Outfunnel Javascript style guide

## How to use

1. Install the correct versions of each package, which are listed by the command:
```
npm info "eslint-config-outfunnel@latest" peerDependencies
```
2. Add `"extends": ['outfunnel']` to your `.eslintrc.js`

## How to develop
- Clone the repository
- Run `npm install` to install dependencies
- Make changes and commit

## How to publish new version
- Run `npm version patch -m "Version commit message"`
- Push changes: `git push --follow-tags`
- Merge to master and Codeship will build and publish new package

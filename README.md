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

## Versioning
Tightening of any checks means breaking change and should be published with major version release. Relaxation of rules and fixing issues are published under minor and patch versions.
- **Major:** Breaking changes and/or major ESLint version update
- **Minor:** Relaxation of rules or fine-tuning current rules
- **Patch:** Fixing of minor oversights

## How to publish new version
- Check [NPM package publishing guide](https://github.com/outfunnel/outfunnel/wiki/Publishing-NPM-libraries)
- Run `npm version [patch|minor|major] -m "Version commit message"`
- Push changes: `git push --follow-tags`
- Merge to master and Codeship will build and publish new package

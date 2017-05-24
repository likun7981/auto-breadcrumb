# AutoBreadcrumb
> Auto generate breadcrumb for React Router 4.xx  
[![Build Status](https://travis-ci.org/likun7981/auto-breadcrumb.svg?branch=master)](https://travis-ci.org/likun7981/auto-breadcrumb)
[![npm package][npm]][npm-url]
[npm]: https://img.shields.io/npm/v/auto-breadcrumb.svg
[npm-url]: https://www.npmjs.com/package/auto-breadcrumb

## Install  

Use yarn
```
$ yarn add auto-breadcrumb
```
  
Use npm
```
$ npm install auto-breadcrumb --save
```
## Example
1. [config example](https://github.com/likun7981/auto-breadcrumb/blob/master/demo/RecursivePaths.js#L6-L10)
2. [online demo](https://likun7981.github.io/auto-breadcrumb/)

## Usage
```javascript
import breadcrumbConfig from 'auto-breadcrumb';

const Breadcrumbs = breadcrumbConfig(config);

render(<Breadcrumbs pathname={location.pathname} />, MOUNT_DOM);
```
## Api
1. The `config`

keyName | type | default | descrition
--------|------|---------|-----------
staticRoutesMap | Object | `{'/':'Home'}` | No params routes map to breadcrumb name
dynamicRoutesMap | Object | `{}` | With params routes map to breadcrumb name
homePath | String | `/` | The index path
Breadcrumb | ReactComponent | `ul` | The Breadcrumb container
BreadcrumbItem | ReactComponent | `li` | The Breadcrumb Item 
  
2. The `Breadcrumbs` Component props

propsName | type | isRequire | default | description
----------|------|-----------|---------|------------
 pathname | String | Y |  | The full location path
 className | String | N | `Empty` |The container className
 style | Object | N | `{}`|The container style
 itemClass | String | N | `Empty` |The item className
 itemStyle | Object | N | `{}`|The item style

## Notes
> The test case not finish, wait a moment!
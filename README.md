# AutoBreadcrumb
> Auto generate breadcrumb for React Router 4.xx  

[![Build Status](https://travis-ci.org/likun7981/auto-breadcrumb.svg?branch=master)](https://travis-ci.org/likun7981/auto-breadcrumb)
[![npm package](https://img.shields.io/npm/v/auto-breadcrumb.svg)](https://www.npmjs.com/package/auto-breadcrumb)

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

keyName | type | default | description
--------|------|---------|-----------
staticRoutesMap | Object | `{'/':'Home'}` | No params routes map to breadcrumb name
dynamicRoutesMap | Object | `{}` | With params routes map to breadcrumb name
homePath | String | `/` | The index path
Breadcrumb | ReactComponent | `ul` | The Breadcrumb container
BreadcrumbItem | ReactComponent | `li` | The Breadcrumb Item 
containerProps | Object | `{}` | The container props
itemProps | Object | `{}` | The item props
LinkComponent | ReactComponent | [Link](https://github.com/ReactTraining/react-router/blob/master/packages/react-router-dom/modules/Link.js) | The Custom LinkComponent
notFound | string |  | The default notFound name, if not set,it will be the pathname
  
2. The `Breadcrumbs` Component props

propsName | type | isRequire | default | description
----------|------|-----------|---------|------------
 pathname | String | Y |  | The full location path  
 
# License 
MIT

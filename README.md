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
1. [config example](https://github.com/likun7981/auto-breadcrumb/blob/gh-pages/demo/RecursivePaths.js#L6-L26)
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
~~LinkComponent~~ | ~~ReactComponent~~ | ~~Link~~ | ~~The Custom LinkComponent~~ use `itemRender`
notFound | string | `404 NotFound` | The custom `notFound` name
itemRender | (name, path?) => ReactNode | - | You can custom everything for `item` display, if the param `path` is not given, you should render a text node(not clickable) 
  
2. The `Breadcrumbs` Component props

propsName | type | isRequire | default | description
----------|------|-----------|---------|------------
 pathname | String | Y | - | The full location path  
 
# License 
MIT

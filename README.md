# AutoBreadcrumb
Auto generate breadcrumb for React Router 4.xx  

## Install  

Use yarn
```
$ yarn add auto-breadcrumb
```
  
Use npm
```
$ npm install auto-breadcrumb --save
```
  
## Usage
```javascript
import breadcrumbConfig from 'auto-breadcrumb'

const Breadcrumbs = breadcrumbConfig({
    staticRoutesMap:Object, // No params routes map, default {'/':'Home'}
    dynamicRoutesMap:Object, // With params routes map, default {}
    homePath:String, // The index path, default '/'
})

```
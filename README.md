# AutoBreadcrumb
> Auto generate breadcrumb for React Router 4.xx  

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
    Breadcrumb: ReactComponent, // The Breadcrumb container, default 'ul',
    BreadcrumbItem: ReactComponent, // The Breadcrumb Item, default 'li'
})
/**
 * Breadcrumbs props
 *      {
 *          pathname: string, // the location full path
 *          className: string, // the container className
 *          style: Object, // the container style
 *          itemClass: string // the item className
 *          itemStyle: Object, // the item style
 *      }
 **/

render(<Breadcrumbs pathname={location.pathname} />, MOUNT_DOM);

```
## Notes
> The test case not finish, wait a moment!
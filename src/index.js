// @flow
import React from 'react';
import { Link } from 'react-router-dom';
import findNameByPath from './pathToName';

type props = {
  pathname: string,
  className?: string,
  itemClass?: string,
  style?: Object,
  itemStyle?: Object
};
const DefaultBreadcrumb = ({ children = '', ...otherProps } = {}): React$Element<any> => {
  return React.createElement('ul', otherProps, children);
};
const DefaultBreadcrumbItem = ({ children = '', ...otherProps } = {}): React$Element<any> => {
  return React.createElement('li', otherProps, children);
};
const Breadcrumbs = ({
  staticRoutesMap = {},
  dynamicRoutesMap = {},
  homePath = '/',
  Breadcrumb = DefaultBreadcrumb,
  BreadcrumbItem = DefaultBreadcrumbItem,
}: {
  /**
     * No param
     */
  staticRoutesMap?: Object,
  /**
     * With param
     */
  dynamicRoutesMap?: Object,
  homePath?: string,
  Breadcrumb?: (props?: Object) => React$Element<any>,
  BreadcrumbItem?: (props?: Object) => React$Element<any>
}) => ({ pathname, className = '', itemClass = '', style = {}, itemStyle = {} }: props) => {
  if (!pathname) {
    throw new Error('Breadcrumbs must set props "pathname"');
  }
  const paths = [homePath];
  if (pathname !== homePath) {
    pathname.split('/').reduce((prev, curr, index) => {
      paths[index] = `${prev}/${curr}`;
      return paths[index];
    });
  }
  const lastIndex = paths.length - 1;
  return (
    <Breadcrumb className={className} style={style}>
      {paths.map((path, index) => {
        const names = findNameByPath(path, { staticRoutesMap, dynamicRoutesMap });
        const isExact = lastIndex === index;
        if (Array.isArray(names)) {
          const subLastIndex = names.length - 1;
          return names.map((name, subIndex) => (
            <BreadcrumbItem key={subIndex} className={itemClass} style={itemStyle}>
              {subLastIndex !== subIndex || isExact ? name : <Link to={path}>{name}</Link>}
            </BreadcrumbItem>
          ));
        }
        const name = isExact ? names : <Link to={path}>{names}</Link>;
        return (
          <BreadcrumbItem key={index} className={itemClass} style={itemStyle}>
            {name}
          </BreadcrumbItem>
        );
      })}
    </Breadcrumb>
  );
};

export default Breadcrumbs;

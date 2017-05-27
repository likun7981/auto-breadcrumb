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
const Breadcrumbs = ({
  staticRoutesMap = {},
  dynamicRoutesMap = {},
  homePath = '/',
  containerProps = {},
  itemProps = {},
  Breadcrumb = 'ul',
  BreadcrumbItem = 'li',
}: {
  /**
   * No param
   */
  staticRoutesMap?: { [key: string]: string | Array<string> },
  /**
   * With param
   */
  dynamicRoutesMap?: {
    [key: string]:
      | string
      | ((Object) => string)
      | Array<string | ((Object) => string | Array<string>)>
  },
  homePath?: string,
  containerProps?: Object,
  itemProps?: Object,
  Breadcrumb?: any,
  BreadcrumbItem?: any
}) => ({ pathname }: props) => {
  if (typeof pathname !== 'string') {
    throw new Error('Breadcrumbs must set string props "pathname"');
  }
  if (!staticRoutesMap[homePath]) {
    staticRoutesMap[homePath] = 'Home';
  }
  const paths = homePath === '/' ? [homePath] : [];
  if (pathname !== homePath || homePath !== '/') {
    pathname.split('/').reduce((prev, curr, index) => {
      paths[index] = `${prev}/${curr}`;
      return paths[index];
    });
  }
  const lastIndex = paths.length - 1;
  let BreadcrumbItems = [];
  paths.forEach((path, index) => {
    const names = findNameByPath(path, {
      staticRoutesMap,
      dynamicRoutesMap,
    });
    const isExact = lastIndex === index;
    if (Array.isArray(names)) {
      const subLastIndex = names.length - 1;
      return (BreadcrumbItems = BreadcrumbItems.concat(
        names.map((name, subIndex) => (
          <BreadcrumbItem {...itemProps} key={`${index}${subIndex}`}>
            {subLastIndex !== subIndex || isExact ? name : <Link to={path}>{name}</Link>}
          </BreadcrumbItem>
        ))
      ));
    }
    const name = isExact ? names : <Link to={path}>{names}</Link>;
    return (BreadcrumbItems = BreadcrumbItems.concat(
      <BreadcrumbItem {...itemProps} key={index}>
        {name}
      </BreadcrumbItem>
    ));
  });
  return (
    <Breadcrumb {...containerProps}>
      {BreadcrumbItems}
    </Breadcrumb>
  );
};

export default Breadcrumbs;

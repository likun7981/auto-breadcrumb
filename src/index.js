/* @flow */
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import findNameByPath from './pathToName';
import type { ConfigType } from '$define';

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
  LinkComponent = RouterLink,
  notFound,
}: ConfigType) => ({
  pathname,
  className,
  style,
  itemClass,
  itemStyle,
}: props) => {
  if (className || style || itemClass || itemStyle) {
    console.warn(
      'The version v1.0.0 has remove "className,style,itemClass,itemStyle", ' +
        'We will remove them next version,' +
        ' please use "containerProps" and "itemProps" config to replace them'
    );
  }
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
      notFound,
    });
    const isExact = lastIndex === index;
    if (Array.isArray(names)) {
      const subLastIndex = names.length - 1;
      return (BreadcrumbItems = BreadcrumbItems.concat(
        names.map((name, subIndex) => (
          <BreadcrumbItem
            style={itemStyle || {}}
            className={itemClass || ''}
            {...itemProps}
            key={`${index}${subIndex}`}
          >
            {subLastIndex !== subIndex || isExact
              ? name
              : <LinkComponent to={path}>{name}</LinkComponent>}
          </BreadcrumbItem>
        ))
      ));
    }
    const name = isExact
      ? names
      : <LinkComponent to={path}>{names}</LinkComponent>;
    return (BreadcrumbItems = BreadcrumbItems.concat(
      <BreadcrumbItem
        style={itemStyle || {}}
        className={itemClass || ''}
        {...itemProps}
        key={index}
      >
        {name}
      </BreadcrumbItem>
    ));
  });
  return (
    <Breadcrumb
      style={style || {}}
      className={className || ''}
      {...containerProps}
    >
      {BreadcrumbItems}
    </Breadcrumb>
  );
};

export default Breadcrumbs;

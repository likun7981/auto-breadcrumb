// @flow
import { matchPath } from 'react-router-dom';
const paramRegx = /{{([a-zA-Z_$][a-zA-Z0-9_$]*)}}/;
const replaceParams = (names: string, params: Object) => {
  let match = paramRegx.exec(names);
  while (match) {
    names = names.replace(match[0], params[match[1]]);
    match = paramRegx.exec(names);
  }
  return names;
};
export default (
  url: string,
  {
    staticRoutesMap,
    dynamicRoutesMap,
  }: {
    /**
     * No param
     */
    staticRoutesMap: { [key: string]: string | Array<string> },
    /**
     * With param
     */
    dynamicRoutesMap: {
      [key: string]:
        | string
        | ((Object) => string)
        | Array<string | ((Object) => string | Array<string>)>
    }
  }
) => {
  let names = staticRoutesMap[url];
  if (!names) {
    Object.keys(dynamicRoutesMap).some(pathname => {
      const pathMatchResult = matchPath(url, {
        path: pathname,
        exact: true,
        strict: true,
      });
      if (pathMatchResult) {
        const { params } = pathMatchResult;
        names = dynamicRoutesMap[pathname];
        if (Array.isArray(names)) {
          names = names.map(
            name =>
              (typeof name === 'function'
                ? name(params)
                : replaceParams(name, params))
          );
        } else if (typeof names === 'function') {
          names = names(params);
        } else {
          names = replaceParams(names, params);
        }
      }
      return pathMatchResult;
    });
  }
  if (!names) {
    const urls = url.split('/');
    return urls[urls.length - 1];
  }
  return names;
};

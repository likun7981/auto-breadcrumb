declare module '$define' {
  declare type StaticRoutesMapType = { [key: string]: string | Array<string> };
  declare type DynamicRoutesMapType = {
    [key: string]: string | (Object => string) | Array<string | (Object => string | Array<string>)>
  };
  declare type ConfigType = {
    /**
   * No param
   */
    staticRoutesMap?: StaticRoutesMapType,
    /**
   * With param
   */
    dynamicRoutesMap?: DynamicRoutesMapType,
    homePath?: string,
    containerProps?: Object,
    itemProps?: Object,
    Breadcrumb?: any,
    BreadcrumbItem?: any,
    LinkComponent?: any,
    itemRender?: (name, path) => any,
    notFound?: string
  };
}

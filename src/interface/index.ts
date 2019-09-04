interface PageItemInterface {
  path: string,
  icon: string,
  label: string,
  twoToneColor: string,
  key: string,
  SubMenu: boolean,
}

export interface PageInfoInterface {
  path: string,
  icon: string,
  label: string,
  twoToneColor: string,
  key: string,
  SubMenu: boolean,
  children? : Array<PageInfoInterface>
}



interface RoomListInterface {
  id: string,
  type: string,
  bedNum: number,
  intro: string,
  price: number,
  preferPrice: number,
  assessRank: number,
  assessNum: number,
  image: string

}
export interface RoomInfoInterface {
  colunm: number,
  result_type: string,
  id: string,
  metadata: Array<MetadataListInterface>,
  room_list: Array<RoomListInterface>,
  title: string,
  subTitle: string,
  moreInfo: {
    name: string,
    link: string
  }
}
interface MetadataListInterface {
  name: string,
  id: string,
  parent_type: string
}

export interface MenusCurrent {
  current: string
}
export interface RoomInfo {
  status: number,
  data: Array<RoomInfoInterface>
}

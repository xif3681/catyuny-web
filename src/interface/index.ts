export interface ReduxStoreAsyncState<T> {
	isLoading? : boolean
	error?: Error
	message?: string
	isDirty?: boolean
	status?: number
	data?: T
}



// PageInfoInterface

export interface PageInfoInterface {
  path: string,
  icon: string,
  label: string,
  twoToneColor: string,
  key: string,
  SubMenu: boolean,
  children? : Array<PageInfoInterface>
}

// Tabs
export interface Tabs {
  count: Number,
}


// Recordtype
export interface RecordTypeInterface {
  id: string,
  type: string,
  name: string,
  creatTime: string,
  canDelete: boolean
}

export interface RecordType {
  // isLoading? : boolean
	// error?: Error
	// message?: string
	// isDirty?: boolean
  status: number,
  data: Array<RecordTypeInterface>
}

// RecordData
export interface RecordDataInterface {
  id: string,
  type: string,
  content: string,
  time: string,
  color?:string,
  icon?: string
}

export interface RecordData {
  // isLoading? : boolean
	// error?: Error
	// message?: string
	// isDirty?: boolean
  status: number,
  data: Array<RecordDataInterface>
}

import { Map } from 'immutable'
import { Tabs, RecordType, RecordData  } from "src/interface"
import { MenusCurrent, RoomInfo } from "@/interface/common"

export interface Store {
  menusCurrent:ReduxStoreItemState<MenusCurrent>
  roomInfo:ReduxStoreItemState<RoomInfo>
  tabs: ReduxStoreItemState<Tabs>,
  recordType: ReduxStoreAsyncItemState<RecordType>,
  recordData: ReduxStoreAsyncItemState<RecordData>,
  // recordType: ReduxStoreAsyncItemState<RecordType>,
  // recordData: ReduxStoreAsyncItemState<RecordData>,
}

export interface ReduxStore extends Map<keyof Store, any> {
	get<K extends keyof Store>(key: K): Store[K];
}

interface ReduxStoreAsyncState<T> {
	isLoading: boolean
	error?: Error
	message?: string
	isDirty?: boolean
	status: number
	data: T
}

export interface ReduxStoreAsyncItemState<T> extends Map<keyof ReduxStoreAsyncState<T>, any> {
	get<K extends keyof ReduxStoreAsyncState<T>>(key: K): ReduxStoreAsyncState<T>[K];
}

export interface ReduxStoreItemState<T> extends Map<keyof T, any> {
	get<K extends keyof T>(key: K): T[K];
}



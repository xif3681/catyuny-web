interface RecordTypeInterface {
  id: string,
  type: string,
  name: string,
  creatTime: string,
  canDelete: boolean
}
interface RecordTypeDataInterface {
  id: string,
  type: string,
  content: string,
  time: string,
  color?:string,
  icon?: string
}
export const RECORDTYPE : RecordTypeInterface[] = [
  {'id': '001' ,  'type': 'success', 'name': '驱虫', 'creatTime': '2019-09-04', 'canDelete': false },
  {'id': '002' ,  'type': 'success', 'name': '打针', 'creatTime': '2019-09-04', 'canDelete': false },
  {'id': '003' ,  'type': 'success', 'name': '洗澡', 'creatTime': '2019-09-04', 'canDelete': false },
  {'id': '004' ,  'type': 'success', 'name': '病史', 'creatTime': '2019-09-04', 'canDelete': false },
  {'id': '005' ,  'type': 'success', 'name': '体重', 'creatTime': '2019-09-04', 'canDelete': false },
 ]

 export const RECORDDATE: RecordTypeDataInterface[] = [
  {"id": "0001" ,  "type": "success", "content": "This is usual event.", "time": "2019-09-04", color: "red", icon: 'clock-circle-o' },
  {"id": "0002" ,  "type": "success", "content": "This is usual event.", "time": "2019-09-04", color: "red",  },
  {"id": "0003" ,  "type": "success", "content": "This is usual event.", "time": "2019-09-04", color: "red",  },
  {"id": "0004" ,  "type": "success", "content": "This is usual event.", "time": "2019-09-04", color: "red", icon: 'clock-circle-o' },
  {"id": "0005" ,  "type": "success", "content": "This is usual event.", "time": "2019-09-04", color: "red",  },
  {"id": "0006" ,  "type": "success", "content": "This is usual event.", "time": "2019-09-04", color: "red",  },
  {"id": "0007" ,  "type": "success", "content": "This is usual event.", "time": "2019-09-04", color: "red", icon: 'clock-circle-o' },
  {"id": "0008" ,  "type": "success", "content": "This is usual event.", "time": "2019-09-04", color: "red", icon: '' },
  {"id": "0009" ,  "type": "success", "content": "This is usual event.", "time": "2019-09-04", color: "red", icon: '' },
 ]

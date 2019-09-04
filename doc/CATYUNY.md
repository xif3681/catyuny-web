# 记录
## 记录查询
```shell
 curl -XGET "api/v1/recorde/${startTime}/${endTime}"
```
### response
```json
 {
   "status": 200,
   "data":  [
     {"id": "" ,  "type": "success", "content": "This is usual event.", "time": "2019-09-04" },
    ]
 }
```

## 记录添加
```shell
 curl -XPOST "api/v1/recorde"
```
### request
```json
{
 "type": "success", "content": "This is usual event.", "time": "2019-09-04", "class": "驱虫"
}
```
### response
```json
 {
   "status": 200,
   "data": {"id": ""}
 }
```

## 记录修改
```shell
 curl -XPUT "api/v1/recorde"
```
### request
```json
{
  "id": "" , "type": "success", "content": "This is usual event.", "time": "2019-09-04", "class": "驱虫"
}
```
### response
```json
 {
   "status": 200,
 }
```

## 记录删除
```shell
 curl -XDELETE "api/v1/recorde/{id}"
```

### response
```json
 {
   "status": 200,
 }
```

# 分类： 驱虫/打针/洗澡/病史/体重（默认）
## 查询
```shell
 curl -XGET "api/v1/class"
```
### response
```json
 {
   "status": 200,
   "data":  [
     {"id": "001" ,  "type": "success", "name": "驱虫", "creatTime": "2019-09-04", "canDelete": false },
     {"id": "002" ,  "type": "success", "name": "打针", "creatTime": "2019-09-04", "canDelete": false },
     {"id": "003" ,  "type": "success", "name": "洗澡", "creatTime": "2019-09-04", "canDelete": false },
     {"id": "004" ,  "type": "success", "name": "病史", "creatTime": "2019-09-04", "canDelete": false },
     {"id": "005" ,  "type": "success", "name": "体重", "creatTime": "2019-09-04", "canDelete": false },
    ]
 }
```

## 添加
```shell
 curl -XPOST "api/v1/class"
```
### request 
```json
 { "type": "success", "name": "外出", "creatTime": "2019-09-04"},
```
### response
```json
 {
   "status": 200,
   "data": {"id": "001" ,  "type": "success", "name": "驱虫", "creatTime": "2019-09-04", "canDelete": true },
 }
```

## 修改
```shell
 curl -XPUT "api/v1/class"
```
### request 
```json
 { "id": "" , "type": "success", "name": "外出", "creatTime": "2019-09-04"},
```
### response
```json
 {
   "status": 200,
   "data": {"id": "001" ,  "type": "success", "name": "驱虫", "creatTime": "2019-09-04", "canDelete": true },
 }
```

## 删除
```shell
 curl -XDELETE "api/v1/class/{id}"
```

### response
```json
 {
   "status": 200,
 }
```
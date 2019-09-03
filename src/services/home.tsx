import Request from './request'

export const createTask = async (token: string, body: object) => {
  return Request.post(`/tasks`, body, {
    headers: {
      token
    }
  })
}


export const loadUserCurrent = () => Request.get(`/`)
.then(function (response) {
  console.log(response);
})
.catch(function (error) {
  console.log(error);
});

export const news = () => Request.get(`/news/`)
.then(function (response) {
  console.log(response);
})
.catch(function (error) {
  console.log(error);
});

export const roomList = () => Request.get(`/roomList/`)
.then(function (response) {
  console.log(response);
})
.catch(function (error) {
  console.log(error);
});
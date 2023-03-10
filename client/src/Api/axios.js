
import axios from 'axios'
import { displayLoader, hideLoader } from '../redux/slices/settingSlice'
import { setCompleted, setInprogress, setMyDay, setNew, setTasks } from '../redux/slices/taskSlice'
import store from '../redux/store/store'
import { getToken } from '../utility/localDb'

const baseUrl = 'http://localhost:5000/api/v1/'

export const reqToSignup = (credentials) => {
  store.dispatch(displayLoader())
  const url = baseUrl + 'signup'
  return axios.post(url, credentials).then((res) => {
    store.dispatch(hideLoader())
    if (res.status === 201) {
      return true
    } else {
      return false

    }
  }).catch((err) => {
    store.dispatch(hideLoader())
    if (err.response.status === 409) {
      alert('Email already taken')
    } else {
      console.log(err);

    }

  })
}
export const reqToLogin = (credentials) => {
  store.dispatch(displayLoader())
  const url = baseUrl + 'signin'
  const config = {
    headers: { ...credentials }
  };
  return axios.post(url, {}, config).then((res) => {
    store.dispatch(hideLoader())
    if (res.status === 200) {
      return res.data
    } else {
      return false
    }
  }).catch((err) => {
    store.dispatch(hideLoader())

    console.log(err);


  })
}

export const reqToSaveTask = (task) => {
  store.dispatch(displayLoader())
  const url = baseUrl + '/task/save'
  const config = {
    headers: {
      token: getToken()
    }
  };
  return axios.post(url, task, config).then(res => {
    store.dispatch(hideLoader())
    if (res.status === 201) {
      return true
    } else {
      return false
    }
  }).catch(err => {
    store.dispatch(hideLoader())
    alert(err)
    console.log(err)
  })

}

export const reqToGetTaskByCate = (category) => {
  store.dispatch(displayLoader())
  const url = baseUrl + '/task/category/' + category
  const config = {
    headers: {
      token: getToken()
    }
  };
  return axios.get(url, config).then(res => {
    store.dispatch(hideLoader())
    if (res.status === 200) {
      const { data } = res.data
      if (category === 'none') {
        store.dispatch(setNew(data))
      } else if (category === 'my-day') {
        store.dispatch(setMyDay(data))
      } else if (category === 'inprogress') {
        store.dispatch(setInprogress(data))
      }

    } else {
      alert('something went wrong')
    }
  }).catch(err => {
    store.dispatch(hideLoader())
    alert(err)
    console.log(err)
  })


}
export const reqToUpdateTaskStatus = (id, status) => {
  store.dispatch(displayLoader())
  const url = baseUrl + `task/${id}/${status}`
  const config = {
    headers: {
      token: getToken()
    }
  };
  return axios.get(url, config).then(res => {
    store.dispatch(hideLoader())
    if (res.status === 202) {
      return true
    } else {
      return false
    }
  }).catch(err => {
    store.dispatch(hideLoader())
    alert(err)
    console.log(err)
  })


}
export const reqToViewCompleted = () => {
  store.dispatch(displayLoader())
  const url = baseUrl + 'task/completed'
  const config = {
    headers: {
      token: getToken()
    }
  };
  return axios.get(url, config).then(res => {
    store.dispatch(hideLoader())
    if (res.status === 200) {
      const { data } = res.data
      store.dispatch(setCompleted(data))
    } else {
      alert('something went wrong')
    }
  }).catch(err => {
    store.dispatch(hideLoader())
    alert(err)
    console.log(err)
  })


}
export const reqToDeleteTask = (id) => {
  store.dispatch(displayLoader())
  const url = baseUrl + `task/${id}`
  const config = {
    headers: {
      token: getToken()
    }
  };
  return axios.delete(url, config).then(res => {
    store.dispatch(hideLoader())
    if (res.status === 200) {
      return true
    } else {
      alert('something went wrong')
      return false
    }
  }).catch(err => {
    store.dispatch(hideLoader())
    alert(err)
    console.log(err)
  })


}
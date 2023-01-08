
import axios from 'axios'
import { displayLoader, hideLoader } from '../redux/slices/settingSlice'
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

import axios from 'axios'
import { getToken } from '../utility/localDb'

const baseUrl = 'http://localhost:5000/api/v1/'

export const reqToSignup = (credentials) => {
  const url = baseUrl + 'signup'
  return axios.post(url, credentials).then((res) => {
    if (res.status === 201) {
      return true
    } else {
      return false

    }
  }).catch((err) => {
    if (err.response.status === 409) {
      alert('Email already taken')
    } else {
      console.log(err);

    }

  })
}
export const reqToLogin = (credentials) => {
  const url = baseUrl + 'signin'
  const config = {
    headers: { ...credentials }
  };
  return axios.post(url, {}, config).then((res) => {
    if (res.status === 200) {
      return res.data
    } else {
      return false
    }
  }).catch((err) => {

    console.log(err);


  })
}

export const reqToSaveTask = (task) => {
  const url = baseUrl + '/task/save'
  const config = {
    headers: {
      token: getToken()
    }
  };
  return axios.post(url, task, config).then(res => {
    if (res.status === 201) {
      return true
    } else {
      return false
    }
  }).catch(err => {
    alert(err)
    console.log(err)
  })

}
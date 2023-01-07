class localDb {

  getToken = () => {
    return localStorage.getItem('token')

  }
  setToken = (token) => {
    localStorage.setItem('token', token)

  }
}

export const { getToken, setToken } = new localDb()
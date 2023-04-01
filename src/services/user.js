import axios from 'axios'
const rootUrl = process.env.REACT_APP_BACKEND_ROOT_URL

const login = async (loginInfo) => {
  return await axios.put(
    `${rootUrl}/users/signin`,
    loginInfo,
    {
      headers: {
        'Content-Type': 'application/json'
      }
    }
  )
}

const authenticate = async (token) => {
  return await axios.put(
    `${rootUrl}/users/authenticate`,
    { token },
    {
      headers: {
        'Content-Type': 'application/json'
      }
    }
  )
}

export default {
  login,
  authenticate,
}

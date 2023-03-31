import axios from 'axios'
const rootUrl = 'http://localhost:3001'

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

export default {
  login
}

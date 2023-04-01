import axios from 'axios'
const rootUrl = process.env.REACT_APP_BACKEND_ROOT_URL

const getPosts = async () => {
  return await axios.get(`${rootUrl}/posts`)
}

export default {
  getPosts,
}

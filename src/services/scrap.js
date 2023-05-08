import axios from 'axios'
const rootUrl = process.env.REACT_APP_BACKEND_ROOT_URL

const scrapSingle = async (source) => {
 const response =  await axios.put(
    `${rootUrl}/scrap/${source}`,
  )
  return response
}

export default {
  scrapSingle,
}



import axios from 'axios'
const rootUrl = process.env.REACT_APP_BACKEND_ROOT_URL

const scrapSingle = async (source) => {
  await axios.put(
    `${rootUrl}/scrap/${source}`,
  )
}

export default {
  scrapSingle,
}



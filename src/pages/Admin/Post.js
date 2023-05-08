import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { notify } from '../../redux/reducers/notificationSlice.js'
import { updateScrappedData } from '../../redux/reducers/postSlice.js'
import scrapService from '../../services/scrap.js'
import errorMessage from '../../utils/errorMessage.js'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import LoadingButton from '@mui/lab/LoadingButton'

const Post = ({ post }) => {
  const [ loading, setLoading ] = useState(false)
  const dispatch = useDispatch()
  const today = new Date(new Date().toDateString())

  const handleScrap = async (source) => {
    setLoading(true)
    try {
      const response = await scrapService.scrapSingle(source)
      const { data }  = response
      dispatch(updateScrappedData(data))
    } catch (error) {
      const message = errorMessage(error)
      dispatch(notify({ message, _status: 'error' }))
    }finally {
      setLoading(false)
    }
  }
  return (
    <Stack alignItems='center'>
      <Typography>{ post.source }</Typography>
      <Typography>Scrapped: { 
        (today.getTime() == new Date(new Date(post.dateScrapped).toDateString()).getTime()) 
          ? 'Today' 
          : new Date(post.dateScrapped).toLocaleDateString('am-ET') }
      </Typography>
      {
        <LoadingButton
          loadingIndicator={'loading...'}
          loading={loading}
          disabled={(today > new Date(post.dateScrapped)) ? false : true}
          onClick={() => handleScrap(post.source)}
        >scrap</LoadingButton>
      }
    </Stack>
  );
};

export default Post

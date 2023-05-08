import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Post from './Post.js'

import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import LoadingButton from '@mui/lab/LoadingButton'

const Admin = (props) => {
  const { user } = useSelector(state => state.user)
  const { posts } = useSelector(state => state.post)

  const handleScrap = () => {

  }
    if(!user) {
      return (
        <Navigate to='/' replace={true} />
      )
    }
    return (
      <Stack alignItems='center' spacing={2}>
        <Typography variant='h5' sx={{ m: '10px' }}>Admin</Typography> 
        { 
          posts.map(post => (<Post key={post.id} post={post} />))
        }
      </Stack>
    );
};

export default Admin

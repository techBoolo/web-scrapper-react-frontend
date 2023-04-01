import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'

const Post = ({ post }) => {

  return (
    <Box>
      <Typography variant='h5'>{ post.source }</Typography> 
      <Box sx={{ marginLeft: { sm: '150px' }, borderLeft: { sm: '1px solid #ccc', padding: '10px', marginBottom: '20px'} }}>
        <Typography variant='h5'>{ post.title }</Typography> 
        <Typography>{ post.content }</Typography> 
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '5px', padding: '10px'}}>
          <Typography variant='caption'>Needs adjusting { post.postDate.toString() }</Typography>
          <Link href='#' underline='hover'>{ post.link }</Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Post

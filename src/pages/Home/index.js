import { useSelector } from 'react-redux'
import { Post } from '../../components/index.js'

const Home = (props) => {
  const { posts } = useSelector(state => state.post)

  return (
    <>
      { 
        posts.map(post => (<Post post={post} />)) 
      }
    </>
  );
};

export default Home

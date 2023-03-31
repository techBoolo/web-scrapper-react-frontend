import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Admin = (props) => {
  const { user } = useSelector(state => state.user)

    if(!user) {
      return (
        <Navigate to='/' replace={true} />
      )
    }
    return (
      <>
        admin 
      </>
    );
};

export default Admin

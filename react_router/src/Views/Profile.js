import {useHistory,Link,Switch,Route,useRouteMatch} from 'react-router-dom';
import {useEffect} from 'react';

// Nested Routes for Profile - ViewProfile,EditProfile
import ViewProfile from '../components/ViewProfile';
import EditProfile from '../components/EditProfile';

const Profile=({login})=> {
  const history = useHistory();
  useEffect(()=>{
    if(!login){
      history.push('/');
    }
  },[login,history]);

  // hook to enable nested routes
  const {path,url} = useRouteMatch();
  //console.log(useRouteMatch());
  return (
    <>
      <h3>Profile Page</h3>
      <h5>Profile Nested Routes Navigation</h5>
      <ul>
        <li><Link to={`${url}/viewprofile`} >View My Profile</Link></li>
        <li><Link to={`${url}/editprofile`} >Edit My Profile</Link></li>
      </ul>
      <Switch>
        <Route path={`${path}/viewprofile`} component={ViewProfile}  />
        <Route path={`${path}/editprofile`} component={EditProfile} />
      </Switch>
    </>
  );
}

export default Profile;

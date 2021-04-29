// to avoid the loading when we switch to about section via react-router
import {Link} from 'react-router-dom';

const About=()=> {
  return (


    <div>
      <h4>Version - 1</h4>
      <Link to='/'>Go back</Link>
    </div>
  )
}


export default About;

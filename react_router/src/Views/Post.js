import {useParams,useLocation} from 'react-router-dom';

// match version for grabbing params in url
// const Post=({match})=> {
//   return (
//     <>
//       <h3>ID Grabbed from Params URL=>{match.params.id}</h3>
//     </>
//   );
// }
//
// export default Post;

// useParams Version
const Post=()=> {
  //console.log(useParams());
  const {id} = useParams();
  //console.log(useLocation());
  // search:"?name="vijay"&pass="secret"
  // to grab the name and pass seperatly we use built in Web API URLSearchParams
  const queryString = new URLSearchParams(useLocation().search);
  console.log(queryString);
  return (
    <>
      <h3>ID Grabbed from Params URL=>{id}</h3>
      <h4>Query Params via useLocation...</h4>
      <h5>{queryString.get("name")}</h5>
      <h5>{queryString.get("password")}</h5>
    </>
  );
}

export default Post;

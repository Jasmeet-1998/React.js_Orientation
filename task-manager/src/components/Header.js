import PropTypes from 'prop-types';
// More Robust appraoch to handle props of the function component is by using the built in react prop-types.
// prop-types help to define the prop data types.

// Styling in JSX React
// Inline
// Note styling if inline then use double curly braces {{color:'purple'}}

import Button from './Button';

// Destructring params to accept props for the Header function/component and no longer need to do props.title just {title} inside the funcitonal component in h1 will work
//const Header=(props)
const Header=({title,onAdd,showAdd})=> {

  // const onClick=(e)=>{
  //   console.log(e);
  //   console.log("Clicked");
  // }

  return (
    <header className='header'>
       <h1>{title}</h1> {/*<h1>props.title</h1>*/}
       {/*Inline styling <h1 style={{color:'purple',backgroundColor:'black'}}>*/}
       <Button color={showAdd?'red':'green'} text={showAdd?' Nah!':'New task'} onClick={onAdd} />
    </header>
  );
}

// In case we dont specify the prop in the xml tag in the App.js i.e if we do <Header/> only instead of <Header title="Task Manager"/>
// we can set  a defaultProp so that prop value wont be empty.
Header.defaultProps={
  title:"Task Manager"
}

// with prop=types we can specify what data type is that property.
Header.propTypes={
  title:PropTypes.string.isRequired,//gives error in console of prop value is set other than string.

}

// Another way to Give styling if you dont want to give inline styling.

//const headingStyle={
//  color:'purple',
//  backgroundColor:'khaki'
//}



export default Header;

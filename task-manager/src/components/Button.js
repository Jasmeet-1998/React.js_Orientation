import PropTypes from 'prop-types';

const Button=({color,text,onClick})=> {

  // creating an event either by a function here or a prop in Header.js
  //const onClick=(e)=>{

    //console.log('button Event Click');// shows that this message displays everytime we click
  //}
  return <button onClick={onClick}
  style={{backgroundColor:color}}
  className='btn'>{text}</button>
}

Button.defaultProps={
  color: 'steelblue'
}

// Note that the p has to be lowercase in propTypes even when the variable we are importing above is PropTypes.
Button.propTypes={
  text: PropTypes.string,
  color: PropTypes.string,
  onClick:PropTypes.func
}

export default Button;

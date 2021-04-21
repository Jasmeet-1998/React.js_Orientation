const Header=(props)=> {

  return (
    <header>
       <h1>{props.title}</h1>
    </header>
  );
}

// In case we dont specify the prop in the xml tag in the App.js i.e if we do <Header/> only instead of <Header title="Task Manager"/>
Header.defaultProps={
  title:"Task Manager"
}

export default Header;

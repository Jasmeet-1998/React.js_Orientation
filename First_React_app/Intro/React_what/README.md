What is React?
---------------------------------
-A javascript Liberary for User Interfaces a part of Front End Development.

What is the Core of React?
---------------------------------
Components
---------------------------------
<x>
....
</x>
A Piece of UI

So when We Use React we are making Independent ,Isolated and reusable Components and then compose them to build a complex UI.

Root Component
------------------------------
Every React application will have root Component and will be having other child Components.

Every React application is a tree of components.
---------------------------------
How are Components Implemented?
---------------------------------
Components are Implemented as Javascript Class
that has some state and render method.

class Tweet{
state={};
render(){

}
}

state-> refers to the component state.
render() method refers to REACT ELEMENT that is plain javascript object that maps to DOM ELEMENT.
--------------------------------

React keeps a lightweight Representation of DOM in memory refer to as VIRTUAL DOM.
---------------------------------

Virtual DOM & Real DOM Sync
---------------------------------
in react(VIRTUAL DOM) when we change state of react  component we get new react element.
and then it reflects and saves those changes in real dom To maintain Sync Between the 2.

Advantages of React
---------------------------------
no need to write code and query to manipulate DOM or attach event handlers to DOM .
element=document.querySelector()
elemnent.classList.add();
element.addEventListener();


So in Short React  is reacting to the state change Virtually in VIRTUAL DOM and then updating in the Real Dom.
---------------------------------
Note->Angular is framework while react is view Liberary an API to be precise.
---------------------------------

Setting Up environment With React
---------------------------------
 npm i -g create-react-app@1.5.2


g refers to global
@version can be set a/c to ur reqirement if u dont it will install default one.

Code editor ,Node.js NPM package manager and some Additional Components a/c to your Requirement.

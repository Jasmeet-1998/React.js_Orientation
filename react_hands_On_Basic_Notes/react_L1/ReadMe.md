timestamp-1632
#React UseCase

-Build User Interfaces

-Synchronize application data and content users see.

-React efficiently updates and renders just the right things when data changes.

Like a Shopping Cart where when the items are  deleted or added result in change of price and subtotal , delivery time automatically and render the updates to the buyer.

the way React does it is by using Components.

Components (Core Building Blocks of React )
--------------------

-React Breaks the entire application into reusable,Modular,self-contained components.
just like fancy html components.

-Data + UI Components combine view logic ,user interface and data.

-Composition - Multiple components can be Combined to form Complex Apps.

Example- Shopping Cart Component , Navbar Component , Model , Rating Component and So on...

Types Of components
------------------

-Class components written using javascript class.
Were used more often earlier.

-Functional components written using javascript function.
Now used more often after Introduction to react-hooks.

React Hook the game changer
--------------------
-It helps to write class level components by using functional components with react hooks.

This tutorial will be Covering the hook based Component.


Example Hook based Component for a Counter.

function Counter(){

  const [count,setCount]=useState(0);

  return (

    <div>

      <p>count:{count}</p>

      <button onclick={()=>setCount(count+1)}>Add</button>

      <button onclick={()=>setCount(count-1)}>Subtract</button>

    </div>

    );
}

Benefits Of Hooks-
-----------------------

-shorter Components!

-much easier to share logic between components.

-easier to learn hard to master though :(

-Lifecycle Stuff is Simpler

Author-Jasmeet Singh Bali
##GalBat(chat)

TIMESTAMP->121
Fix the chat box issue first.

##Major Packages Used Here -

* nodemon
* express
* socket.io
* react-router-dom

#cors
* CORS is shorthand for Cross-Origin Resource Sharing. It is a mechanism to allow or restrict requested resources on a web server depend on where the HTTP request was initiated. This policy is used to secure a certain web server from access by other website or domain.
* CORS is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.

# for Understanding Socket.io Source->https://socket.io/

## React hooks used->
* hooks are function based react components -> with hooks we are able to use state and lifecycle methods inside of them so now you can convert 90% of class based components and they are much cleaner with less code.

# The Core Part React hooks Is State Management & lifecycle methods

* class based components are smart and better as they can handle lifecycle methods where  than functional based components which only returns the JSX(javascript xml).

* hooks are functions that let you hook into react state and lifecycle features
from functional components.

* react provides a few built-in hooks like useState.You can also create your own
hooks to reuse stateful behaviour between different components.

# hooks are javascript functions with 2 additional rules

* only call hooks at the top level dont call hooks inside the loops,condition
or nested functions.
* only call hooks from react function component not from regular javascript.


##Why to use hooks!!
* suppose we made a function component and now u need to add a state to it,
* so the old method was to actually convert into class but now hook can be used inside the existing function components.

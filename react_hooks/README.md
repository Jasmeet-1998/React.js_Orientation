<img src="https://miro.medium.com/max/5126/1*0MgGEfZfLO91g1Oa2h3ebQ@2x.png">

## Setup:
* run npm i && npm start to start the development server

## Topics Touched:
* why and how to use React Hooks
* useState and useEffect hooks
* custom hooks
* passing props
* API calls

## AIM:
* Convert this application to functional components using hooks.


<img src="https://sebhastian.com/react-hooks-introduction/feature-image_huf68977827713777ef3a94203710a8133_102801_825x0_resize_box_2.png">

## React Hooks: What?
* hooks are function based react components  with hooks we are able to use state and lifecycle methods inside of them so now you can convert 90% of class based components and they are much cleaner with less code.

* The Core Part React hooks Is State Management & lifecycle methods->

* class based components are smart and better as they can handle lifecycle methods where  than functional based compoenents which only returns the jsx.

* hooks are functions that let you hook into react state and lifecycle features
from functional components.
* react provides a few built-in hooks like useState.You can also create your own
hooks to reuse stateful behaviour between different components.

* hooks are javascript functions with 2 additional rules

* only call hooks at the top level dont call hooks inside the loops,condition
or nested functions.
* only call hooks from react function component not from regular javascript.

## Why to Use them?

* suppose we made a function component and now u need to add a state to it,
so the old method was to actually convert into class but now hook can be used inside the existing function components that makes the react functional component more flexible ,cleaner Promotes reusability of the Code.

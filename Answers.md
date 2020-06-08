1. What problem does the context API help solve?

Context API allows developers an easy way to pass state and props directly to the components that need access to them, instead of having to prop drill all the way down to the intended target component. Like Redux, Context API is a way to manage your application's global state.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do?
   Why is the store known as a 'single source of truth' in a redux application?

The store is used to contain all of the global state for our application. Reducers are used to house all of the state-changing logic for updating the state within our store, and switch statements are considered to be the standard format for arranging all of our logic within our reducers.

While the state-changing logic is housed in our reducers, we use functions known as action creators and action dispatchers to implement the functionality within the application. Our action functions will reference the action types from our reducers and allow us the ability to pass thru a payload if necessary. The action is what will actually be placed in our component or on our onClicks to update the state.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is the global state of an application and can be passed down the entire component tree, whereas component state is local state that will only reside within the component it is declared in, or passed to the children of that component.

Application state would be used if you have multiple parent components that need access to the same state, whereas component state would be used for state that really only needs to exist in one main component or it's children. A common example of local state would be adding state to update the input of a form.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux Thunk is a middleware that allows us to write action creators that return a function instead of an action object. It is most-commonly used for handling asynchronous behaviors, such as API requests within our action-creators. Thunk provides us with the tools to dispatch the proper action for when a promise is resolved or not.

1. What is your favorite state management system you've learned and this sprint? Please explain why!

While it's very clear why redux has been the standard state management system for so long, I think I would generally choose Context API if given the choice between the two. Context can pretty much do all the same stuff that redux can, but it uses simpler syntax, and is easier to implement, understand and use.

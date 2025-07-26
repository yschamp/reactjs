# UseState Hook

A counter project

Hooks are an integral part of the React Library. One of them is the useState hook.
We have seen that if we update the counter value on click of the button, the value gets updated in the code, 
However it is not reflected on browser window because, there is no sync or communication between your state and 
UI.

React provides the useState hook that returns an array.
Index 0: name of the state(variable)
Index 1: function that propogates changes in state to all the UI elements that use it somehow, be it as innerHTML, attribute or
style property and renders the new changes on the browser window
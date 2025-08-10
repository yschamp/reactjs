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


## Interview Questions

What will be the output of following increment handler if initial value is 10?
    setCounter(counter + 1)
    setCounter(counter + 1)
    setCounter(counter + 1)
    setCounter(counter + 1)

On every click of the button the value of the counter will increment by one. The reason being that React Fiber processes these operations as a batch. It identifies that since we are doing the same task again and again, it optimizes the increment operation to one time.

But what if we want the counter to increase by four at every click ? Use callback

    setCounter(prevcounter => prevcounter + 1)
    setCounter(prevcounter => prevcounter + 1)
    setCounter(prevcounter => prevcounter + 1)
    setCounter(prevcounter => prevcounter + 1)


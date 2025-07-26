# What is Reactjs ?

React is a javascript based library that is used to build complex UI. It is used to build frontend of web applications.

# Why use reactjs ?

Web applications were build even before Reactjs was introduced using plain HTML, CSS, Jquery and Javascript. Then what was the need of a separate package.

ReactJs was developed to solve a very specific problem first seen in facebook. If you go down the memory lane to early 2010s, you can recall that there used to be a chat icon on the upper right corner of facebook web app.

 The issue later popular as Phantom Message Problem (FMP), was that considering a user who has 20 unread chats when she opens facebook. The number of unread chats was notified to user with number 20 over the existing chat icon. Lets assume that the user has clicked on the chat icon -> opens a dropdown listing all the people who have sent the messages with number of unread messages against them. Now, let say that the user has read Raj's 5 unread messages. Technically, now the number of unread messages is 15. However, the number of unread messages displayed over the chat icon would still show 20, which is inconsistent. This is FMP

 The problem was that state(variables) was maintained by JS and UI by DOM. And there was no interaction between them. The only way this could be made consistentwas that the user reloads the web app, a pain point.

 It is popular. 
 It updates the current state of the variable almost instantly on three-four places of UI using virtual DOM without the need to reload the page. Basically used
 to develop complex UI
 It is being used by one of the best internet companies in the world.

 # History

 It was released for the public in 2013.
 It is developed by Facebook

 # Topics
 Single Page Application
 State, UI Manipulation, JSX
 Component reusibility
 Props
 How to propogate change -> Hooks

 Multi-page application
 React Router, React DOM
 State management -> Redux, Redux Toolkit, Context API
 BAAS - Appwrite, Superbase, Firebase

 NextJS (BE and FE), Gatsby, Remix





# Facts

## Languages: 
Javacript - It can be used to build web apps (NodeJS, ReactJS), mobile apps (NodeJS, React-Native), tv apps(NodeJS, React-Native) and desktop apps(ElectronJS). It is reliable and can handle millions of requests. Comparatively slow

Java - Again can be used to develop all kinds of apps. It has thread safety, useful classes and huge open source community

Python - It is generally preferred in case of data-intensive apps

Rust - Blazing fast and memory efficient

## Protocols:
WebRTC - live streaming when you cannot afford even a second of buffering -> NETFLIX


# Virtual DOM, Reconciliation and React Fiber

## Virtual DOM

React is a js library that is used to build complex UIs. It is used to build frontend of web app and mobile native apps.

For a web app, once Browser receives an HTML file, it scans it from top-bottom to build a DOM tree and then uses this tree to
render/paint the app in window. Similarly, React also generates its own tree known as DOM tree using multiple UI(functional)
components. This tree is the Virtual DOM.

Any change in the state of app, results in regeneration of the entire Virtual DOM.

## Reconciliation

It is an algorithm used by React to diff one DOM tree with another and then apply the changes in the rendering phase

We need a reactive library that reacts to state(variable) changes. So, everytime there is a change in user state, entire
Virtual DOM tree is regenerated with the new state changes. React then uses the reconciliation algorithm to compare the newly 
generated DOM tree with previous DOM tree and then apply these changes as patches without requiring reload of the entire application.

## React Fibre

It is reimplementation of React's Core library that is used to improve its suitability for animations and gestures.

The philosphy behind React Fibre is that for a real world app, there might be many events and event listeners attached to them. For e.g. Button click, Network calls, window scrolls, keyboard press. These events fire up the event listeners which might change the state of the app. That might result in UI changes in multiple parts of the web app.

React Fiber divides this into a number of frames, a unit of work called Fiber. It is not always important to perform all the UI updates immediately. We may want to postpone it for a bit. Some changes like animation may have a high priority than other changes. That is where Fiber fits in.

It is used to:
1. Postpone a UI change for sometime
2. Assign priorities to different updates and pick them up accordingly
3. Abort a change altogether
4. Reuse already completed work

All this is done to improve smoothness and user experience


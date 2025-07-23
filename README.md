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



# Functional Components

A website contains many webpages. Each of these webpages have many parts or components
For eg Navigation Bars, Footer, Section to display cards, Section holding icons.

Now, there are many components that we may want to resuse in other webpages. For eg the Navigation Bar and Footer component

Traditionally, when using plain HTML, we had to copy the same piece of code in each of the HTML files of these webpages. This made our code bulky and wastage of resources

Reactjs has solved this problem by storing these components in separate files. Now, any webpage that wants to reuse an existing component, can do so by importing it. These components are of two types functional and class based.

These functional components can be used as an HTML element in other jsx files
These functional components are normal javascript functions that return HTML called JSX


# JSX

JSX means Javascript Extended Notation
As mentioned eariler, the functional components are javascript functions that return HTML which means that HTML is getting embedded on JS and extended version of JS

These files are named with jsx extension and that component and file name is generally capitalised

# Fragments

As per Reactjs rules, each component can return only one HTML or functional component element
If we want to return multiple HTML elements, we need to wrap it inside a div or fragement <> element


# Injecting JSX in HTML
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

Reactjs creates it own DOM i.e. Virtual DOM
It creates a root element in its virtual dom and reference a HTML element in the index.html
It renders the JSX in its virtual dom

It find the difference between its dom and browser dom and updates only those parts of browser
that has some changes


# Single page application

React creates a single page application.
Whenever user wants to navigate from home page to another webpage, Reactjs flushes it virtual DOM. Then it creates a new DOM with elements of another webpage and then after comparing with browser DOM performs the changes on that same page

And this is done without reloading the page. It paints new webpage HTML on that same page, hence single page application. Inorder to not confuse user, it just changes the route in URL. That does not mean it creates webpage. It just renders new content in the same page
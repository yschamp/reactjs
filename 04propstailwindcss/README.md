# Tailwind CSS

Generally, when we use HTML for structure and content in a web app. However, a simple HTML app may not be appealing and attractive to the end users.

We can improve the readibility and style quotient by adding styles to the html elements, like color, padding, margin etc. We can do so by either adding styles specifically to the HTML tags or creating a separate stylesheet file and import it in our html. The styles can then be applied to the HTML tags using classes that may have defined in our stylesheet.

Tailwind CSS is a tool that makes this entire process seamless. It has almost all the styles that a user may require when building a frontend application. In jist, they have created a master stylesheet that has all the styles that a dev may require. We can download this styles in our application and immediately start using these styles by calling out classes
e.g. text-black-100 => text-color: "black"
    bg-color-green => background-color: "green"


# Props
Props means properties. React is used to create single page applications. These applications can be understood as a collections of different components like header, footer, images etc.

Some of these components are used repeatedly. For e.g. the Cards component -> it has an image, title, description and CTA. Consider a e-commerce application like Zomato, here the Cards component is used repeatedly to display the restaurant details. hese details are fetched from BE in form of an object. If we want to display these cards, we may have write separate components for each of these cards. Scale this problem to 100, since API might respond with 100s of such card object. Therefore this solution doesn't seems to be feasible.

The solution is to make the Cards component dynamic. If only we have a way to pass images, title, description and CTA to the card component. This is possible using Props. 

Similar to a function call, where we can pass the parameters, in ReactJS we can pass the props when calling a component. The Cards component receives these properties in "props" argument. We can destructure this object to receive the props and use it wherever required in our Cards component


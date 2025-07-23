function customRender(root, item){
    const element = document.createElement(item.name)
    for(const elem in item.props){
        element.setAttribute(elem, item.props[elem])
    }
    element.innerHTML = item.children
    root.appendChild(element)
}

const reactElement = {
    name: 'a',
    props: {
        target: '_blank',
        href: 'https://google.com'
    },
    children: 'Click me'
}

const root = document.querySelector('#root')
customRender(root, reactElement)

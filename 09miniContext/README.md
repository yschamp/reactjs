# Steps

1. Create a context - This is a storage that will be used to store context i.e. global variables. Currently it is empty
2. Create a Context Provider that will provide these values to the child components. Here whatever values we provide in
    the "value" attribute of Provider will result in creation of these varaibles in storage we created earlier. They will also now be available to child components enclosed in contextProvider component
3. Enclose all the child components i.e. Login and Profile in the contextProvider component.
4. The child components can now access the context using the useContext hook



# Random passcode generator
1. Variables
    length - 8
    numbers - false
    characters - false
    passcode - ""

2. Event handlers 
    Length change - generate a new passcode with specified length
    number change - generate a new passcode including numbers
    character change - generate a new passcode including special characters

3. Random code generator
    Random String - "A-Za-z"
    number string = "0-9"
    special character string = "1@#$%^&*();:<>,.?/|\"

    - Create code string based on length, number and character boolean value.
    - Calculate its length as X
    - Run loop length number of times
        Find the index: Math.floor( Math.random()*X )
        Find character at index 
        Add the character in passcode
    - set passcode

useEffect - is a hook that is used to specify which function to run when a variable value changes
By default, useeffect runs first time when the page loads.
We can also specify that please run this function f() everytime a variable "number" changes in its dependencies

useCallback - is a hook that stores the function in cache for optimization

useRef - it provides a mutable reference to an html element in your component. Useful when copying or selecting
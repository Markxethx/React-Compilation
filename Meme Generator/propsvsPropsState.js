function addTwoNumbers(a, b) {
    a = 42    // in props we cannot just change this (using react)
    return a + b
}

console.log(addTwoNumbers(1, 2))

function Navbar(props) {
    props.coverImage = "something else"  // don't change anything inside a function
}

<Navbar darkMode={true} coverImage="some-image2" />
  
  //props means to add a parameter so that a component act correctly

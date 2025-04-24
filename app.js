
/** 
    div : parent
        div :chind
            heading
**/


const parent= React.createElement("div",
     { id : "parent"},
    React.createElement("div", {id: "child"}, 
        [React.createElement("h1",{id: "heading",key: "1"},"Hello 1"),
        React.createElement("h1",{id: "heading" , key :"2"},"Hello 2")]
    )
);


const but= document.getElementById("b1");
but.addEventListener('click', () =>{
    const root = ReactDOM.createRoot(document.getElementById("root"));

    root.render(parent);
})





// const heading = React.createElement("h1", { id: "heading" }, "Hello World");

// console.log(heading); //object

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(parent);

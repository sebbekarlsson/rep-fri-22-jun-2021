const URL = "https://cat-fact.herokuapp.com/facts";

const button = document.getElementById("button");
const inputField = document.getElementById("search");
const results = document.getElementById("results");

function createElement(name, attributes) {
    const element = document.createElement(name);

    Object.keys(attributes).filter(key => key !== "children").forEach(function(key){
        element.setAttribute(key, attributes[key]);
        element[key] = attributes[key];
    });

    const children = "children" in attributes ? attributes['children'] : [];

    children.forEach(child => element.appendChild(child));

    return element;
}

/*
    <article>
        <h1>datum</h1>
        <p>text</p>
    </article>
*/
function toHTMLElement(obj) {
    return createElement("article", { children: [           // <article>
        createElement("h1", { innerText: obj.createdAt }),  //  <h1>datum</h1>
        createElement("p", { innerText: obj.text })         //  <p>text</p>
    ] });                                                   // </article>
}

button.addEventListener("click", async function(event){
    const value = inputField.value;


    const response = await fetch(URL);
    const data = await response.json();


    const filteredResults = data.filter(function(obj){
        return obj.text.toLowerCase().includes(value.toLowerCase());
    });

    filteredResults.forEach(obj => results.appendChild(toHTMLElement(obj)));
});
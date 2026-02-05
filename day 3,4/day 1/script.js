console.log("hello")
let x = 1;
const z = 4;

console.log(x, z);
x = 2;
console.log(x, z);

const a = [1, 2, 3, 4, 5];

const b = { name: "Pabitra", age: 19 }
const c = { name: "Nishant", age: 19 }
const d = { name: "Sugam", age: 20 }
const e = { ...b, name: "Pabitra" }//...(sprade)




console.log(a)
console.log(start)
console.log(b)
console.log(c)
console.log(d)
console.log(e)

console.log(end)

const myButton = getElementById("my_button");
const myList = getElementById("list_id");

myButton.addEventListener("click", function () {
    console.log("clicked")
    const newElement = document.createElement("li");
    newElement.textContent = "New Item";
    myList.appendChild(newElement);
});




// ########## 1 ##########

// Create a p tag with text
let p1 = document.createElement("p");
p1.innerText = "Buy a new house";

// Get the parent tag
let section = document.querySelector(".list");

// Add the created p tag to the section tag
// The ´tag is added last in the section tag
section.appendChild(p1);

// ########## 2 ##########

// Create a new p tag with text
let p2 = document.createElement("p");
p2.innerText = "Buy a summer house";

section.insertAdjacentElement("afterend", p2); // After the section
section.insertAdjacentElement("beforebegin", p2); // Before the section
section.insertAdjacentElement("afterbegin", p2); // First in the section
section.insertAdjacentElement("beforeend", p2); // LAst in the section

// ########## 3 ##########

const pInnerText = section.querySelectorAll("p");

pInnerText.forEach((p) => console.log(p.innerText));

// ########## 4 ##########

let tagAsString = "<p>A new bike</p>";

// ########## 5 ##########

// Clear the section tag, only the new tag left
// section.innerHTML = tagAsString;

// ########## 6 ##########

section.insertAdjacentHTML("afterbegin", tagAsString);

// ########## 7 ##########

for (let i = 0; i < 3; i++) {
  let p = document.createElement("p");
  p.innerText = "Item: " + (i + 1);
  section.appendChild(p);
}

// ########## 8 ##########

// 7 items
console.log("");
for (let item of section.children) {
  console.log(item.innerText);
}

// ########## 9 ##########

let h2 = document.querySelector(".owner");
// console.log(h2);
h2.innerText = "Mikael's";

// ########## 10 ##########

let firstChild = section.children[0];
// console.log(firstChild);
let p3 = document.createElement("p");
p3.innerText = "A much newer bike";

section.replaceChild(p3, firstChild);

// ########## 11 ##########

let p4 = document.createElement("p");
p4.innerText = "A super bike";

let thirdChild = section.children[2];
section.replaceChild(p4, thirdChild);

// ########## 11 ##########

let lastChild = section.lastChild;
section.removeChild(lastChild);


const users = [
  { name: "John", age: 25, occupation: "gardener" },
  { name: "Lenny", age: 51, occupation: "programmer" },
  { name: "Andrew", age: 43, occupation: "teacher" },
  { name: "Peter", age: 81, occupation: "teacher" },
  { name: "Anna", age: 43, occupation: "teacher" },
  { name: "Albert", age: 76, occupation: "programmer" },
  { name: "Adam", age: 47, occupation: "teacher" },
  { name: "Robert", age: 72, occupation: "driver" },
];


function main() {
  const rootElement = document.getElementById("root");

  // Create and add an h1 element with the text "FREELANCERS"
  const h1Element = document.createElement("h1");
  h1Element.textContent = "FREELANCERS";
  rootElement.appendChild(h1Element);

  // Create and add an unordered list (ul) element
  const ulElement = document.createElement("ul");
  rootElement.appendChild(ulElement);

  // Loop through the users array and create list item (li) elements
  for (let i = 0; i < users.length; i++) {
    const user = users[i];

    // Create an li element and set its text content to user information
    const liElement = document.createElement("li");
    liElement.textContent = `Name: ${user.name}, Age: ${user.age}, Occupation: ${user.occupation}`;

    // Append the li element to the ul element
    ulElement.appendChild(liElement);
  }
}

// Call the main function
main();

  
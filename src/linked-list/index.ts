import LinkedList from "./linked-list";

const list = new LinkedList();

const values = ["one", "two", "three"];

values.forEach((value) => list.append(value));

console.log(
  "linked list work correct:",
  list.forward() === values.join(" ") &&
    list.backward() === values.reverse().join(" ")
);

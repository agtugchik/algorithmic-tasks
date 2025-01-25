import deepEqual from "deep-equal";

const tickets = [
  { from: "London", to: "Moscow" },
  { from: "Paris", to: "Berlin" },
  { from: "SPb", to: "Paris" },
  { from: "NY", to: "London" },
  { from: "Moscow", to: "SPb" },
];

const aviaTickets = (t: typeof tickets) => {
  const tickets = [...t];
  const result: typeof t = [];

  while (tickets.length) {
    const currentElement = tickets.pop();
    const beforeIndex = result.findIndex(
      (resultTicket) => resultTicket.from === currentElement.to
    );
    const afterIndex = result.findIndex(
      (resultTicket) => resultTicket.to === currentElement.from
    );
    if (!result.length) result.push(currentElement);
    else if (beforeIndex !== -1) result.splice(beforeIndex, 0, currentElement);
    else if (afterIndex !== -1)
      result.splice(afterIndex + 1, 0, currentElement);
    else if (beforeIndex === -1 && afterIndex === -1)
      tickets.unshift(currentElement);
  }
  return result;
};

const result = aviaTickets(tickets);

console.log(
  "avia tickets work correct:",
  result.every((resultTicket) =>
    tickets.some((ticket) => deepEqual(ticket, resultTicket))
  ) && result.length === tickets.length
);

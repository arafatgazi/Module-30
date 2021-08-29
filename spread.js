// kono ekta array theke element ante spread operator (...)eta use kra hoi .ekhane output e kono aray sign thake nah.
const numbers=[23,54,65,454,677];
const max=Math.max(...numbers);
console.log(max);

const number2=[34,566,7786,345,...numbers];
const math=Math.max(...number2);
console.log(math);
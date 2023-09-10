import { fromEvent } from "rxjs";

const click$ = fromEvent(document, "click");

console.log("First subscription");
click$.subscribe(() => console.log("subscription1: click"));

setTimeout(() => {
  console.log("Second subscription");
  click$.subscribe(() => console.log("subscription2: click"));
}, 3000);

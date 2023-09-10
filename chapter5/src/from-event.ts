import Emitter from "events";
import { Observable } from "rxjs";
import { fromEvent } from "rxjs";

const emitter = new Emitter();

let i = 0;
setInterval(() => emitter.emit("tick", ++i), 1000);

// function fromEvent(target: Emitter, name: string) {
//   return new Observable((subscriber) => {
//     const handler = (value: any) => {
//       console.log("handler");
//       subscriber.next(value);
//     };
//     emitter.on(name, handler);
//     return () => emitter.removeListener(name, handler);
//   });
// }

const subscription$ = fromEvent(emitter, "tick").subscribe({
  next: (value) => console.log(value),
  complete: () => console.log("Complete"),
});

setTimeout(() => {
  console.log("Unsubscribe");
  subscription$.unsubscribe();
}, 5000);

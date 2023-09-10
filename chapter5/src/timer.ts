// import { timer } from "rxjs";

import { Observable } from "rxjs";

const timer = (ms: number) =>
  new Observable((subscriber) => {
    const timeout = setTimeout((value) => {
      subscriber.next(value);
      subscriber.complete();
    }, ms);
    return () => clearTimeout(timeout);
  });

const subscription$ = timer(2000).subscribe({
  next: () => console.log(0),
  complete: () => console.log("complete"),
});

setTimeout(() => subscription$.unsubscribe(), 1000);

// import { interval } from "rxjs";
import { Observable } from "rxjs";

const interval = (ms: number) =>
  new Observable((subscriber) => {
    let i = 0;
    const timeout = setInterval((value) => {
      subscriber.next(i++);
    }, ms);
    return () => clearTimeout(timeout);
  });

const subscription$ = interval(2000).subscribe({
  next: console.log,
  complete: () => console.log("complete"),
});

setTimeout(() => subscription$.unsubscribe(), 1000);

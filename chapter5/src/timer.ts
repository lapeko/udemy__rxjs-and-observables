// import { timer } from "rxjs";
import { Observable } from "rxjs";

const timer = (ms: number) =>
  new Observable((subscriber) => {
    const timeout = setTimeout(() => {
      subscriber.next(0);
      subscriber.complete();
    }, ms);
    return () => clearTimeout(timeout);
  });

const subscription$ = timer(2000).subscribe({
  next: (value) => console.log(value),
  complete: () => console.log("complete"),
});

// setTimeout(() => subscription$.unsubscribe(), 1000);

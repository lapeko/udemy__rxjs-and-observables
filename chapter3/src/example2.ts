import { Observable } from "rxjs";

const interval$ = new Observable((subscriber) => {
  let i = 1;
  const interval = setInterval(() => subscriber.next(i++), 2000);

  return () => clearInterval(interval);
});

const subscription = interval$.subscribe({
  next: (value) => console.log("Next:", value),
  complete: () => console.log("Completed"),
});

setTimeout(() => subscription.unsubscribe(), 7000);

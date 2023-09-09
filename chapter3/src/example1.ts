import { Observable } from "rxjs";

const observable$ = new Observable<string>((subscriber) => {
  console.log("Observable executed");
  subscriber.next("Alice");
  subscriber.next("Ben");
  setTimeout(() => subscriber.error("Some error"), 2000);
  setTimeout(() => {
    subscriber.next("Charley");
    subscriber.complete();
  }, 4000);

  return () => console.log("Tearing down...");
});

console.log("Before subscribe");
observable$.subscribe({
  next: (value) => console.log("Next:", value),
  complete: () => console.log("Completed"),
  error: (err) => console.log("Error:", err),
});
console.log("After subscribe");

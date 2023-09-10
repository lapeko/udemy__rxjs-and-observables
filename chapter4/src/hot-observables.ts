import { Observable } from "rxjs";

const click$ = new Observable<MouseEvent>((observer) => {
  const clickHandler = (e: MouseEvent) => observer.next(e);
  document.addEventListener("click", clickHandler);

  return () => document.removeEventListener("click", clickHandler);
});

console.log("Subscription 1");
click$.subscribe((e) => console.log("Subscription 1:", e.offsetX, e.offsetY));

setTimeout(() => {
  console.log("Subscription 2");
  click$.subscribe((e) => console.log("Subscription 2:", e.offsetX, e.offsetY));
}, 2000);

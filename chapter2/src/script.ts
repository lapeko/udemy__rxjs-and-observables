import { Observable } from "rxjs";

const observable$ = new Observable<string>((subscriber) => {
  subscriber.next("Anya");
  setTimeout(() => subscriber.next("Yevgenia"), 2000);
  setTimeout(() => subscriber.next("Sveta"), 4000);
});

const observer1 = (value: string): void => console.log("subscriber 1,", value);
const observer2 = (value: string): void => console.log("subscriber 2", value);

observable$.subscribe(observer1);
setTimeout(() => observable$.subscribe(observer2), 1000);

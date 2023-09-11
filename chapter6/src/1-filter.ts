import { Observable, filter } from "rxjs";

interface Article {
  category: "Sport" | "Business";
  content: string;
}

const articles$ = new Observable<Article>((subscriber) => {
  subscriber.next({ category: "Sport", content: "a" });
  setTimeout(
    () => subscriber.next({ category: "Business", content: "b" }),
    1000
  );
  setTimeout(() => subscriber.next({ category: "Sport", content: "c" }), 2000);
  setTimeout(
    () => subscriber.next({ category: "Business", content: "d" }),
    3000
  );
  setTimeout(() => subscriber.next({ category: "Sport", content: "e" }), 4000);
  setTimeout(
    () => subscriber.next({ category: "Business", content: "f" }),
    5000
  );
  setTimeout(() => subscriber.next({ category: "Sport", content: "g" }), 6000);
});

const sportArticles$ = articles$.pipe(
  filter(({ category }) => category === "Sport")
);

console.log("Show only sport articles");
sportArticles$.subscribe(console.log);

setTimeout(() => {
  console.log("Showing all articles");
  articles$.subscribe(console.log);
}, 7000);

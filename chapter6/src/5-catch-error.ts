import { EMPTY, Observable, catchError, fromEvent } from "rxjs";

const button = document.createElement("button");
button.innerHTML = "Increase";
document.body.appendChild(button);

const httpRequest$ = new Observable((subscriber) => {
  setTimeout(() => subscriber.error("Some error happened"), 2000);
});

httpRequest$
  .pipe(
    catchError((err) => {
      console.error(err);
      return EMPTY;
    })
  )
  .subscribe({
    next: console.log,
    error: (e) => console.log("Error", e),
    complete: () => console.log("Completed"),
  });

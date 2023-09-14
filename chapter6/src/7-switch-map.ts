import {
  EMPTY,
  catchError,
  fromEvent,
  interval,
  map,
  switchMap,
  take,
  throwError,
} from "rxjs";

const option1 = document.createElement("option");
option1.value = "success";
option1.innerHTML = "success";

const option2 = document.createElement("option");
option2.value = "failure";
option2.innerHTML = "failure";

const select = document.createElement("select");
select.value = "success";
select.appendChild(option1);
select.appendChild(option2);
document.body.appendChild(select);

const button = document.createElement("button");
button.innerHTML = "Emit";
document.body.appendChild(button);

const ajaxLike = (value: string) => {
  if (value === "failure") return throwError(() => new Error("Error"));
  return interval(100).pipe(take(5));
};

fromEvent(button, "click")
  .pipe(
    map(() => select.value),
    switchMap((value) =>
      ajaxLike(value).pipe(
        catchError(() => {
          console.log("Error");
          return EMPTY;
        })
      )
    )
  )
  .subscribe({
    next: (value) => console.log("Next: ", value),
    error: (error) => console.log(error),
    complete: () => console.log("Completed"),
  });

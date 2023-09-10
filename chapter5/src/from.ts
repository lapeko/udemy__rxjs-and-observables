import { from, map } from "rxjs";

// from([1, 2, 3, 4])
//   .pipe(map((value) => value ** 2))
//   .subscribe({
//     next: (value) => console.log(value),
//     complete: () => console.log("Completed"),
//   });

const promise$ = from(Promise.reject("Rejected"));

promise$.subscribe({
  next: (value) => console.log(value),
  error: (error) => console.log(error),
  complete: () => console.log("Completed"),
});

import { of, filter, tap, map } from "rxjs";

of(1, 2, 3, 4, 5, 6)
  .pipe(
    filter((num) => !!(num % 2)),
    tap((num) => console.log(num)),
    map((num) => num * 2)
  )
  .subscribe((num) => console.log("New value:", num));

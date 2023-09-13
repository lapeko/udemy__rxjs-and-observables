import { concatMap, fromEvent, interval, take } from "rxjs";

const interval$ = interval(200).pipe(take(4));

fromEvent(document, "click")
  .pipe(concatMap(() => interval$))
  .subscribe((value) => console.log(value));

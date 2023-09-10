import { combineLatest, fromEvent, map, startWith } from "rxjs";

const degree = document.getElementById("degree");
const select = document.getElementById("select");
const result = document.getElementById("result");

const degreeChange$ = fromEvent(degree!, "input").pipe(
  map((event) => Number((event.target as HTMLInputElement).value))
);
const selectChange$ = fromEvent(select!, "input").pipe(
  map((event) => (event.target as HTMLInputElement).value),
  startWith((select as HTMLInputElement).value)
);

combineLatest([degreeChange$, selectChange$]).subscribe(([degree, system]) => {
  const res =
    system === "F to C" ? ((degree - 32) * 5) / 9 : (degree * 9) / 5 + 32;
  result!.innerHTML = res.toString();
});

import { debounceTime, fromEvent, map } from "rxjs";

const rangeInput = document.createElement("input");
rangeInput.type = "range";
rangeInput.min = "0";
rangeInput.max = "20";
rangeInput.value = "10";

document.body.appendChild(rangeInput);

fromEvent(rangeInput, "input")
  .pipe(
    debounceTime(1000),
    map((event) => (<HTMLInputElement>event.target).value)
  )
  .subscribe(console.log);

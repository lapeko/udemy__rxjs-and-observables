import { Subject, fromEvent, map, withLatestFrom } from "rxjs";

const input = document.createElement("input");
document.body.appendChild(input);

const emitBtn = document.createElement("button");
emitBtn.innerText = "Emit";
document.body.appendChild(emitBtn);

const subscribeBtn = document.createElement("button");
subscribeBtn.style.display = "block";
subscribeBtn.innerText = "Subscribe";
document.body.appendChild(subscribeBtn);

const value$ = new Subject<string>();

fromEvent(emitBtn, "click")
  .pipe(map(() => input.value))
  .subscribe(value$);

fromEvent(subscribeBtn, "click").subscribe(() => {
  console.log("New subscription");
  value$.subscribe(console.log);
});

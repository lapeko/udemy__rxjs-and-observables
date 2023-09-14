import { BehaviorSubject, fromEvent, withLatestFrom } from "rxjs";

const loggedIn$ = new BehaviorSubject(false);

const loginStatusParagraph = document.createElement("p");
document.body.appendChild(loginStatusParagraph);

const loginBtn = document.createElement("button");
loginBtn.innerText = "Login";
document.body.appendChild(loginBtn);

const logOutBtn = document.createElement("button");
logOutBtn.innerText = "Log out";
document.body.appendChild(logOutBtn);

const printStatusBtn = document.createElement("button");
printStatusBtn.innerText = "Print";
document.body.appendChild(printStatusBtn);

loggedIn$.subscribe((loggedIn) => {
  loginStatusParagraph.innerText = `Logged in: ${loggedIn.toString()}`;
  loginBtn.style.display = loggedIn ? "none" : "inline";
  logOutBtn.style.display = loggedIn ? "inline" : "none";
});

fromEvent(loginBtn, "click").subscribe(() => loggedIn$.next(true));
fromEvent(logOutBtn, "click").subscribe(() => loggedIn$.next(false));

fromEvent(printStatusBtn, "click")
  .pipe(withLatestFrom(loggedIn$))
  .subscribe(([event, loggedIn]) => console.log({ loggedIn }));

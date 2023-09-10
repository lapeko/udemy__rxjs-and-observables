// import { of } from "rxjs";

import { Observable } from "rxjs";

function of(...args: any[]) {
  return new Observable((subscriber) => {
    args.forEach((arg) => subscriber.next(arg));
    subscriber.complete();
  });
}

of("Alice", "Igor", "Andrew", "Inna").subscribe({
  next: (value) => console.log(value),
  complete: () => console.log("Completed"),
});

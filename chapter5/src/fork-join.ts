import axios from "axios";
import { Observable, forkJoin, timer } from "rxjs";

const getUser = axios
  .get("https://random-data-api.com/api/v2/users")
  .then((res) => res.data.first_name);

const getCity = axios
  .get("https://random-data-api.com/api/v2/addresses")
  .then((res) => res.data.city);

const getBeer = axios
  .get("https://random-data-api.com/api/v2/beers")
  .then((res) => res.data.name);

forkJoin([getUser, getCity, getBeer]).subscribe(([user, city, beer]) =>
  console.log(`${user} from ${city} likes to drink ${beer}`)
);

const observable1 = new Observable((subscriber) => {
  setTimeout(() => {
    subscriber.next("Ok");
    subscriber.complete();
  }, 5000);

  return () => console.log("Unsubscribe 1");
});

const observable2 = new Observable((subscriber) => {
  setTimeout(() => subscriber.error("Error"), 3000);

  return () => console.log("Unsubscribe 2");
});

forkJoin([observable1, observable2]).subscribe({
  next: (value) => console.log("Value:", value),
  complete: () => console.log("Completed"),
  error: (value) => console.log(value),
});

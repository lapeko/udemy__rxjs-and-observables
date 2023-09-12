import { forkJoin, map } from "rxjs";
import { ajax } from "rxjs/ajax";

const getUser = ajax
  .get<{ first_name: string }>("https://random-data-api.com/api/v2/users")
  .pipe(map((res) => res.response.first_name));

const getCity = ajax
  .get<{ city: string }>("https://random-data-api.com/api/v2/addresses")
  .pipe(map((res) => res.response.city));

const getBeer = ajax
  .get<{ name: string }>("https://random-data-api.com/api/v2/beers")
  .pipe(map((res) => res.response.name));

forkJoin([getUser, getCity, getBeer]).subscribe(([user, city, beer]) =>
  console.log(`${user} from ${city} likes to drink ${beer}`)
);

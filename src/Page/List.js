import { RegularList } from "../RegularList";

import {SmallPersonListItem} from '../people/smallList'; 
import { LargePersonListItem } from "../people/bigList";
import { SmallProductListItem } from "../products/smallList";
import { LargeProductListItem } from "../products/bigList";
const people = [
  {
    name: "John",
    age: 23,
    hairColor: "brown",
    hobbies: ["swimming", "dancing", "singing"],
  },
  {
    name: "Amy",
    age: 23,
    hairColor: "black",
    hobbies: ["eating", "sleeping", "singing"],
  },
  {
    name: "AAA",
    age: 23,
    hairColor: "pink",
    hobbies: ["cat", "dog", "singing"],
  },
  {
    name: "SSS",
    age: 23,
    hairColor: "yellow",
    hobbies: ["golf", "games", "singing"],
  },
  {
    name: "cCCCCC",
    age: 23,
    hairColor: "brown",
    hobbies: ["gym", "books", "paint"],
  },
];

const products = [
  {
    name: "TV",
    price: "$300",
    description: "jkdhkjhsf,jahdsfh",
    rating: 2.5,
  },
  {
    name: "ball",
    price: "$40",
    description: "jkdhkjhsf,sdafaasdfsadfgghsf",
    rating: 6.5,
  },
  {
    name: "shoes",
    price: "$120",
    description: "kjdsafnklkjlkjahdsfh",
    rating: 4.5,
  },
];

function List() {
  return (
    <>
      <RegularList
        items={people}
        resourceName="person"
        itemComponent={SmallPersonListItem}
      ></RegularList>
      <RegularList
        items={people}
        resourceName="person"
        itemComponent={LargePersonListItem}
      ></RegularList>
      <RegularList
        items={products}
        resourceName="product"
        itemComponent={SmallProductListItem}
      ></RegularList>
      <RegularList
        items={products}
        resourceName="product"
        itemComponent={LargeProductListItem}
      ></RegularList>
    </>
  );
}

export default List;
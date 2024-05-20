let score: number | string = 33;

score = 44;
score = "55";

type User = {
  name: string;
  id: number;
};

type Admin = {
  username: string;
  id: number;
};

let salman: User | Admin = { username: "salman", id: 23 };

salman = { name: "salman", id: 23 };

function getDbId(id: string | number) {
  return console.log(id);
}

getDbId(4);
getDbId("4");

function getDbId2(id: string | number) {
  if (typeof id === "string") id.toUpperCase();
}

// array

let data: number[] = [12, 34, 5];

let data2: string[] = ["A", "e", "e"];
// it will return string of an array or number of an array
let data3: string[] | number[] = [2, 3, 4];

//  it will return both number or string of an array
let data4: (string | number)[] = [2, "3", 4];

let d: "abc" | "efg" = "abc";
let e: 3.142 = 3.142;

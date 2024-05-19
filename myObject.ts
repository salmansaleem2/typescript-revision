// const User = {
//   name: "salman",
//   email: "salmansaleem8523@gmail.com",
//   isActive: true,
// };

// function createUser({ name: string, isPaid: boolean }) {}

// let newUser = { name: "salman", isPaid: true, email: "salman@gamil.com" };

// createUser(newUser);

// type NewUser = {
//   name: string;
//   price: number;
// };

// function createCourse(user: NewUser): { name: string; price: number } {
//   return { name: "reactjs", price: 399 };
// }
// createCourse({ name: "", price: 499 });

type User = {
  readonly _id: string;
  name: string;
  email: string;
  isActive: boolean;
  credcardDetails?: number;
};

let myUser: User = {
  _id: "1234",
  name: "salman",
  email: "salman@gmail.com",
  isActive: true,
};

myUser.email = "s@gmail.com";
// myUser._id = "asa";

type cardNumber = {
  cardnumber: string;
};

type cardDate = {
  carddate: string;
};

type cardDetails = cardNumber & cardDate & { cvv: string };

export {};

const User = {
  name: "salman",
  email: "salmansaleem8523@gmail.com",
  isActive: true,
};

function createUser({ name: string, isPaid: boolean }) {}

let newUser = { name: "salman", isPaid: true, email: "salman@gamil.com" };

createUser(newUser);

type NewUser = {
  name: string;
  price: number;
};

function createCourse(user: NewUser): { name: string; price: number } {
  return { name: "reactjs", price: 399 };
}
createCourse({ name: "", price: 499 });
export {};

// let greetings: string = "Helo Salman"; 

// // number

// let userId: any = 334455.3;

// // boolean

// let isLoggedIn: boolean = false;

// // any
// let hero;

// console.log(userId);

function addTwo(num: number): number {
  return num + 2;
  // return true;
}

function getUpper(val: string) {
  return val.toUpperCase();
}

function signUpUser(name: string, email: string, isPaid: boolean) {
  return;
}
const userSignIn = (name: string, email: string, isPaid: boolean = false) => {};

userSignIn("salman", "salman@gmail.com");

signUpUser("salman", "salman@gmail", true);

getUpper("salman");
addTwo(5);

export {};

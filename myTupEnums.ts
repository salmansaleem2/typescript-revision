// const user: (string | number)[] = [1, "hc"];

const user: [string, number, boolean] = ["hc", 1, true];

let rgb: [number, number, number] = [255, 255, 255];

type User1 = [number, string];

const newUser: User1 = [112, "test"];

newUser[1] = "hc.com";
// newUser.push(true);

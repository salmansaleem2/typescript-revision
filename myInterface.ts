interface User3 {
  readonly dbId: string;
  email: string;
  userId: number;
  googleId: string;
  startTrial: () => string;
  getCoupon(couponname: string, value: number): number;
}

const salman3: User3 = {
  dbId: "123",
  email: "s@gmail.com",
  userId: 342,
  googleId: "ewre",
  startTrial: () => {
    return "string";
  },
  getCoupon: (test: "wer", value: 234) => {
    return 123;
  },
};

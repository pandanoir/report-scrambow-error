"use client";

var str;
str = "";
for (let i = 0; i < 3; i++) {
  if (true) {
    (str += [`${1 + i}`, "a"][0]), (str += " ");
  }
}
console.log(str);

const TopPage = () => null;
export default TopPage;

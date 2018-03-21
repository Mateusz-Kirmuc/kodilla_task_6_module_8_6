var a = 1, b = 2, msg;
var value = (a * a) - (2 * a * b) - (b * b);

console.log(value);

msg = value >= 0 ? "wynik dodatni" : "wynik ujemny";

console.log(msg);

if (value == 0) {
  console.log("wynik równy zeru");
}

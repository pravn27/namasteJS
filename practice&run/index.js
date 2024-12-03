let b = 100;

{
  var a = 10;
  let b = 2;
  const c = 3;
  console.log("inside block scope", b);
}
console.log("outside block scope", b);

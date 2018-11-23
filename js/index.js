let n = parseInt(prompt('Enter n'));
alert(fib(n))
function fib(n) {
 const a = 1, b = 2, c=1; 
 for (let i = 1; i <= n; i++) {
 const c = a + b;
     a = b;
     b = c;
 }         
return b;
}

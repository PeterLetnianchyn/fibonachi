let n = parseFloat(prompt('Enter n'));
alert(fib(n))
function fib(n) {
 let a = 0, b = 1, c=1; 
 for (let i = 1; i <= n; i++) {
 let c = a + b;
     a = b;
     b = c;
 }         
return b;
}
//Create a function that prints the numbers from 1 to 100
//  for multiples of three print Fizz
// the multiples of five print Buzz 
//For numbers which are multiples of both three and five print FizzBuzz
const fizzy = function(x,y){
       x= 3;
       y= 5;
    for  ( let i=1; i<=100; i++ ){
       
        if ((i % x == 0) && (i % y == 0)){
            console.log ("FizzBuzz" + " " + i);
        }
        else if (i % x == 0){
        console.log("Fizz" +" " + i)
        }                
        else if (i % y == 0){
            console.log("Buzz" +" " + i)
        }        
        else{        
            console.log(i)
        }     
        
         }
}

console.log = fizzy(3,5);





//When that works. Make the two number for multiples into parameters. So it can be called like this: fizzBuzz(4, 12);


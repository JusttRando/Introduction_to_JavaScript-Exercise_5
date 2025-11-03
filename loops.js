// TODO: Create an array called numbers with values 1 through 5

const numbers = ["1","2","3","4","5"]

// TODO: Write a for loop that prints each number in the array
console.log("--------------------// TODO: Write a for loop that prints each number in the array--------------------")
let num = numbers.length;
let n = 0;
let count = "";

for (; n < num ; n++)
    {
        count += numbers[n] + " ";
    }

    console.log(count)

// TODO: Write a while loop that counts down from 5 to 1
console.log("--------------------// TODO: Write a while loop that counts down from 5 to 1--------------------")

let cd = 5

while (cd > 0)
{
    console.log(cd)
    cd--
}

// TODO: Create a loop that prints only even numbers from the numbers array
console.log("--------------------// TODO: Create a loop that prints only even numbers from the numbers array--------------------")

for (let i = 0; i < numbers.length; i++) {
    if (Number(numbers[i]) % 2 === 0) {
        console.log(numbers[i]);
    }
}

// TODO: Create a loop that calculates the sum of all numbers in the array
console.log("--------------------// TODO: Create a loop that calculates the sum of all numbers in the array--------------------")

let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    sum += Number(numbers[i]);
}
console.log("Sum of all numbers: " + sum);

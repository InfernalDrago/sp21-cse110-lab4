## Part 1a

1. values added:  20
2. final result:  20
3. values added:  20
4. Line 13 gives me an error because the 'let' variable ceases to exist outside of the if statement.
5. Line 9 gives an error because you can't change the value of a const variable.
6. Line 13 doesn't run because the code breaks at Line 7.

## Part 1b
1. The for loop runs 3 times while incrementing i after each loop. Line 12 will print the log of i.
2. Line 13 will print the last discountedPrice calculated.
3. Line 14 will print the last finalPrice calculated.
4. The function will return [50, 100, 150] because the function pushes the final prices of the original values in the prices array after calculation.
5. Line 12 gives an error because the 'let' variable i does not exist outside the for loop.
6. Line 13 gives an error because the 'let' variable i does not exist outside the for loop.
7. Line 14 will print out the last finalPrice calculated because finalPrice is a variable that can exist outside the scope of the for-loop.
8. The function will return [50, 100, 150] because the prices array and discounted array exist outside the for loop but within the scope of the function.
9. Line 11 gives an error because the 'let' variable i does not exist outside the for loop.
10. Line 12 prints out the length of the prices array.
11. The function will return [50, 100, 150] because the function pushes the final prices of the original values in the prices array after calculation. The only constants are the the discounted array, the length of prices and the discountedPrice variables
12. a. student.name
12. b. student["Grad Year"]
12. c. student.greeting()
12. d. student['Favorite Teacher'].name
12. e. student.courseLoad[0]
13. a. Answer: '32' '3' + 2 concatenates 2 to the end of a string of '3'
13. b. Answer: 1 '3' - 2 subtracts 2 from 3 because the '-' symbol is only used for subtraction
13. c. Answer: 3 null is given a value of 0 and added to 3
13. d. Answer: '3null' concatenates the string 'null' to the end of a string '3'
13. e. Answer: 4 true is given a value of 1 and added to 3
13. f. Answer: 0 false and null are converted to 0
13. g. Answer: '3undefined' string 'undefined' is concatenated to the end of a string '3'
13. h. Answer: NaN numeric conversion between 3 and undefined is undefined
14. a. Answer: true 2 is compared to 1 and deemed larger, thus true
14. b. Answer: false '2' is greater than the first character of '12', which is '1'
14. c. Answer: true '2' is equal to the first character of '2', which is '2'
14. d. Answer: false 2 is a different type than '2', thus is not equal
14. e. Answer: false the evaluation of true is 1, which is not equal to 2
14. f. Answer: true Boolean(2) is evaluated to true because it is not 0
15. == is used for comparison and doesn't take typing into account. === compares the value of the two sides and their typings
17. The for loop iterates through the array, then for each value calls the callback function on the value. After the doSomething calculation the result is pushed into a new array.
19. 1
    4
    3
    2

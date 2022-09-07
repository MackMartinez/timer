//slice user input to just return values
const userInput = process.argv.slice(2);

//return new array with each value times 1000 for seconds
const timeInSecondsArr = userInput.map(x => {
  return (x < 0 ? "" : x * 1000);
});

console.log(timeInSecondsArr);

//loop through timeInSecondsArr to setTimeout of sound
for (let x = 0; x < timeInSecondsArr.length; x ++) {
    
  //if not NaN (which is also a typeof number) && is an actual number
  if (!isNaN(timeInSecondsArr[x]) && typeof timeInSecondsArr[x] === 'number')
    setTimeout(() => {
      process.stdout.write('\x07');

      // ensure that each execution is implemented in correct time
    }, timeInSecondsArr[x] * 1);
}

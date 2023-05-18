
const numRows = 5;
for (let i = 0; i < numRows; i++) {
  let pattern = '';
  for (let j = 0; j <= i; j++) {
    pattern += '* ';
  }
  console.log(pattern);
}

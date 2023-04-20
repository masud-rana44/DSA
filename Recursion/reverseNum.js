let sum = 0;

const revSum = (num) => {
  if (num === 0) return;
  const rem = num % 10;
  sum = sum * 10 + rem;
  revSum(parseInt(num / 10, 10));
};

revSum(321);
console.log(sum);

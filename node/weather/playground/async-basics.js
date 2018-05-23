console.log('Starting app');

setTimeout(() => {
  console.log('Callback');
}, 2000);

setTimeout(() => {
  console.log('Callback 2');
}, 0)

console.log('Finishing up');

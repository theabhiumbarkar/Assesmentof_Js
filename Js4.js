let queue = ['Sofia', 'David', 'Juan'];
queue.push('Sara', 'Augustin');
queue.shift();
const davidIndex = queue.indexOf('David');
queue.splice(davidIndex + 1, 0, 'Renata');
queue.push('Elena');

console.log(queue);

const http = require('http');

const server = http.createServer((req, res) => {
  // Simulate an asynchronous operation that might fail
  someAsyncOperation((err, data) => {
    if (err) {
      console.error('Error:', err);
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Internal Server Error');
      return;
    }
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(data));
  });
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});

function someAsyncOperation(callback) {
  // Simulate an asynchronous operation that might fail sometimes
  const random = Math.random();
  setTimeout(() => {
    if (random < 0.5) {
      callback(new Error('Something went wrong'), null); // Simulate an error
    } else {
      callback(null, { message: 'Success!' });
    }
  }, 100);
}
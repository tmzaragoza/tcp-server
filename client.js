const { createConnection } = require('net');
const {createInterface } = require('readline');

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: '> '
});

const client = createConnection({ port: 7890 }, () => {
  rl.prompt();
  console.log('connected to server');
  rl.on('line', line => {
    rl.prompt();
    client.write(line);
  });
});
client.on('data', data => {
  rl.write(data);
});

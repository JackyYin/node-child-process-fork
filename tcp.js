const net = require('net');
const TCP = net.createServer(so => {
  console.log('TCP client connected');

  so.write('hello\r\n');

  so.on('data', data => {
    process.send(data.toString());
  })
});

process.on('message', (m) => {
  if (m === 'start') {
    TCP.listen(8124);
  }
});

const { fork } = require('child_process');
const t = fork(`${__dirname}/tcp.js`);
const u = fork(`${__dirname}/udp.js`);

t.on('message', (m) => {
  console.log('TCP server got message: ', m);
});

u.on('message', (m) => {
  console.log('UDP server got message: ', m);
});

t.send('start');
u.send('start');

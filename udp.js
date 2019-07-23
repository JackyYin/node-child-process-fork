const dgram = require('dgram');
const UDP = dgram.createSocket('udp4');

process.on('message', (m) => {
  if (m === 'start') {
    UDP.bind(8125);
    UDP.on('message', (msg, rinfo) => {
      process.send(`${msg} from ${rinfo.address}:${rinfo.port}`);
    })
  }
});

# node-child-process-fork

## Usage:
```sh
node main.js
```

* TCP server listening on 8124
* UDP server listening on 8125


### Testing:


#### TCP:
```sh
echo 'blalala' | nc localhost 8124
```

#### UDP:
```sh
echo 'blala' | nc -u localhsot 8125
```

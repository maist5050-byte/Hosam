const http = require('http');

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', '*');

  const myVIPData = {
    "y4": 0.95,
    "x4": 0.95,
    "aim_lock": 1,
    "headshot_rate": 100,
    "recoil": 0.0,
    "damage": 5.0
  };

  res.end(JSON.stringify(myVIPData));
});

server.listen(process.env.PORT || 3000);

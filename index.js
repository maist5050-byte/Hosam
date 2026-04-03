const http = require('http');
const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', '*');
  const proData = {
    "y4": 0.65,
    "x4": 0.55,
    "aim_lock": 0,
    "headshot_rate": 75,
    "recoil": 0.15,
    "damage": 1.45
  };
  res.end(JSON.stringify(proData));
});
server.listen(process.env.PORT || 3000);

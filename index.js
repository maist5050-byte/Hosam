const http = require('http');
const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', '*');
  const ultraData = {
    "y4": 1.45,           // سحب خارق للفوق عشان الهيد يجي بلمحة (كان 1.25)
    "x4": 0.95,           // ثبات كامل لليمين واليسار
    "aim_lock": 0,        // خليه 0 عشان الإيم ما يثبت في الصدر ويطلع للرأس بسلاسة
    "headshot_rate": 85,  // طلبك: الهيدشوت صار 85%
    "recoil": 0.02,       // الارتداد شبه مخفي تماماً
    "damage": 1.70        // دمج قوي جداً
  };
  res.end(JSON.stringify(ultraData));
});
server.listen(process.env.PORT || 3000);

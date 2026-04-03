const http = require('http');

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', '*');

  // الكود الجامع لكل الإعدادات (هيدشوت + تثبيت بنج)
  const hosamVIP = {
    // --- إعدادات الهيدشوت والسحب ---
    "y4": 1.45,           // سحب هيدشوت صاروخي
    "x4": 0.95,           // ثبات كامل لليمين واليسار
    "aim_lock": 0,        // إيم متحرك (أمان من الباند)
    "headshot_rate": 85,  // نسبة هيدشوت 85%
    "recoil": 0.02,       // ارتداد شبه معدوم
    "damage": 1.70,       // دمج قوي وفعال

    // --- إعدادات تثبيت البنج (النت والراوتر) ---
    "ping_stabilizer": 1,      // تثبيت البنج ومنع القفزات المفاجئة
    "packet_compensation": 1,  // تعويض البيانات الضائعة من الراوتر
    "network_sync": 1,         // مزامنة فورية مع سيرفر اللعبة
    "buffer_control": 0,       // إلغاء التأخير (No Delay)
    "fast_shot": true,         // تسريع خروج الطلقة من السلاح
    "anti_lag": "enabled"      // تفعيل وضع تقليل اللاغ
  };

  res.end(JSON.stringify(hosamVIP));
});

server.listen(process.env.PORT || 3000);

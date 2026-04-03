const http = require('http');

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', '*');

  const hosamSmartLock = {
    // --- إعدادات القفل الذكي (سواء سحبت بقوة أو بشويش) ---
    "y4": 0.45,           // سحب هادئ ومتزن
    "x4": 0.30,           // منع الاهتزاز يمين وشمال
    "aim_lock": 1,        // تفعيل قفل الإيم على الخصم فوراً
    "headshot_rate": 90,  // طلبك: الهيدشوت صار 90%
    "recoil": 0.05,       // ارتداد منخفض جداً لزيادة الثبات
    
    // --- برمجة الثبات على الرأس (Sticky Aim) ---
    "auto_stop": true,    // إيقاف الإيم أوتوماتيكياً عند منطقة الرأس
    "magnet_head": 1,     // جذب الطلقة للرأس حتى لو السحبة كانت قوية
    "smooth_drag": 0,     // إلغاء "النعومة" عشان القفل يكون سريع وقوي
    "limit_y_axis": 0.40, // سقف للسحب عشان ما يطلع فوق الراس أبداً

    // --- إعدادات ثبات النت والراوتر (البنج 50) ---
    "ping_stabilizer": 1,      // تثبيت البنج وتجنب تقطيع الراوتر
    "packet_compensation": 1,  // تعويض تقطيع النت
    "network_priority": "true" 
  };

  res.end(JSON.stringify(hosamSmartLock));
});

server.listen(process.env.PORT || 3000);

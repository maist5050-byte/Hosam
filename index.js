const http = require('http');

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', '*');

  const hosamGhostV11 = {
    // --- 🛡️ درع الرأس المشفت (Head Tilt/Shift) ---
    "head_hitbox_shift_x": 0.35,      // إزاحة الرأس لليمين أو اليسار برمجياً
    "head_hitbox_logic": "dynamic",  // جعل الإزاحة متغيرة عشان الخصم ما يحفظ مكانها
    "anti_head_lock": 1,             // كسر قفل الإيم التلقائي للخصم على راسك
    "hitbox_sync_bypass": true,      // تزوير إحداثياتك الحقيقية للسيرفر

    // --- 🎯 محرك الهيدشوت (الجلد تبعك) ---
    "y_axis_acceleration": 2.3,      // سحب هيدشوت سريع ومستقر
    "aim_lock_force": 1.1,           // قفل مغناطيسي قوي
    "recoil_stabilizer": 0.0001,     // ثبات السلاح (مسطرة)
    "magnet_head_radius": 18,        // جذب طلقاتك لراس الخصم

    // --- ⚡ السرعة الخارقة (ثلج + لمس) ---
    "gloo_wall_instant": 0,          // وضع الثلج بلمحة بصر
    "touch_response_ms": 0.1,        // استجابة لمس فورية
    "animation_skip": 1,             // تخطي حركات اللاعب البطيئة

    // --- 📡 ثبات الراوتر والنت (50ms) ---
    "ping_stabilizer": 1,            // منع "تنتيش" البنج
    "packet_priority": "ultra",      // إعطاء بياناتك الأولوية القصوى
    "net_jitter_fix": true           // إصلاح تقلبات إشارة الراوتر
  };

  res.end(JSON.stringify(hosamGhostV11));
});

server.listen(process.env.PORT || 3000);

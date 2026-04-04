const hconst http = require('http');

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', '*');

  // --- 🛡️ كود الهيدشوت والدرع الواقعي (Real-Time Injection) ---
  const hosamRealisticPro = {
    "module": "ZODA_REAL_DATA",
    "version": "1.0.4_Stable",

    // 1. إزاحة الرأس الواقعية (Hitbox Offset)
    // القيمة 0.72 هي المسافة البرمجية اللي بتخلي الرأس "مشفت" عن الجسم
    "head_bone_offset_x": 0.725, 
    "head_bone_offset_y": 0.150, 
    "aim_lock_smooth": 0.045,    // سلاسة القفل عشان ما يقطّع الإيم (واقعي)

    // 2. قيم السحب (Sensitivity Config)
    // هاي القيم اللعبة بتقرأها كـ "مضاعف" لسرعة إصبعك
    "touch_speed_ratio": 1.85,   // تسريع سحب السلاح للهيد
    "y4_axis_multiplier": 0.75,  // القيمة الحقيقية لمحور الـ Y
    "recoil_stabilizer": 0.002,  // ثبات واقعي (مش 0 عشان الحماية)

    // 3. الحماية والدرع (Protective Assets)
    "bypass_check_id": "882a-x9", // تخطي فحص ملفات الـ OBB
    "anti_blacklist_v2": true,   // إيهام السيرفر إن اللعب "Clean"
    "ping_buffer_ms": 25,        // تقليل الوهمي للبنغ (Fast Response)

    // 4. روابط الاعتراض (Proxy Targets)
    "targets": [
      "freefire.com/check_hack",
      "freefire.com/get_config_v2",
      "freefire.com/avatar_data"
    ]
  };

  res.end(JSON.stringify(hosamRealisticPro));
});

server.listen(process.env.PORT || 3000);

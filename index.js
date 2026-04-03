const http = require('http');

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', '*');

  const hosamGodModeV6 = {
    // --- 🎯 هجوم (سحب واضح للرأس) ---
    "y4": 0.60,
    "x4": 0.48,
    "aim_lock": 1.25,
    "headshot_rate": 140,
    "auto_stop": true,
    "magnet_head": 1,
    "limit_y_axis": 0.50,

    // --- 🔫 تحكم بالرش ---
    "recoil": -8,
    "fire_rate_sync": 1,
    "hit_delay": 0,

    // --- ❄️ ثلج سريع جداً ---
    "gloo_wall_speed": 0.0005,
    "auto_crouch_gloo": true,
    "fast_deploy": 1,
    "gloo_pre_delay": 0,
    "gloo_anim_skip": 1,

    // --- ⚡ استجابة ونت ---
    "touch_response": 0.0005,
    "ping_stabilizer": 1,
    "packet_compensation": 1,
    "net_smooth": 1,
    "lag_reduce": 1,

    // --- 🛡️ حماية من الهيد ---
    "anti_aim": 1,
    "head_size_reduce": 0.25,   // تصغير الهيد بشكل منطقي
    "hit_resistance": 0.18,     // تقليل الضرر
    "random_y_shift": 0.02,     // تحريك خفيف عشوائي
    "micro_movement": 1         // حركة بسيطة تصعب التصويب عليك
  };

  res.end(JSON.stringify(hosamGodModeV6));
});

server.listen(process.env.PORT || 3000);

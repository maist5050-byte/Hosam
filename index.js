const http = require('http');

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', '*');

  const hosamGodModeV3 = {
    // --- 🎯 الهيدشوت الاحترافي (مسمار في الرأس) ---
    "y4": 0.48,              
    "x4": 0.35,              
    "aim_lock": 1,           
    "headshot_rate": 90,     
    "auto_stop": true,       
    "magnet_head": 1,        
    "limit_y_axis": 0.38,    

    // --- ❄️ سرعة الثلج (Instant Gloo Wall) ---
    "gloo_wall_speed": 0.001, // وضع الثلج بأقل زمن استجابة ممكن
    "auto_crouch_gloo": true, // مزامنة وضعية القرفصاء مع الثلج
    "fast_deploy": 1,         // تفعيل النشر السريع للثلج

    // --- ⚡ سرعة الاستجابة والنت (بنج 50) ---
    "touch_response": 0.001,  // سرعة لمس خرافية
    "hit_delay": 0,           
    "fire_rate_sync": 1,      
    "ping_stabilizer": 1,     // تثبيت بنج الراوتر
    "packet_compensation": 1, // منع تقطيع النت

    // --- 🛡️ الدرع الدفاعي (صعوبة جيبتك هيد) ---
    "anti_aim": 1,           
    "head_size_reduce": 0.40, 
    "hit_resistance": 0.25   
  };

  res.end(JSON.stringify(hosamGodModeV3));
});

server.listen(process.env.PORT || 3000);

const http = require('http');

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', '*');

  const hosamUnboundV7 = {
    // --- 🎯 هجوم كاسر للقيود (Ultimate Aim) ---
    "y4": 2.10,               // سحب عمودي خارق (هيدشوت من أول لمسة)
    "x4": 1.45,               // ثبات أفقي كلي (لحاق الرأس يمين وشمال)
    "aim_lock": 5.0,          // قفل إيم حديدي (مستحيل يفلت من الخصم)
    "headshot_rate": 999,     // كسر حاجز الـ 100% لضمان اللون الأحمر
    "auto_stop": true,        // فرامل ذكية عند منطقة الرأس
    "magnet_head": 1,         // جذب فيزيائي للطلقات نحو الجمجمة
    "limit_y_axis": 0.45,     // تثبيت الإيم على الرأس ومنع الطيران للسماء

    // --- 🔫 استقرار السلاح (No Recoil) ---
    "recoil": -15,            // الرصاص بيمشي في خط مستقيم 100%
    "fire_rate_sync": 1,      
    "hit_delay": 0,           // تسجيل الضرر في نفس جزء الثانية

    // --- ❄️ ثلج فلاش (Instant Gloo) ---
    "gloo_wall_speed": 0.0001, 
    "gloo_anim_skip": 1,      
    "fast_deploy": 1,

    // --- ⚡ استجابة ونت (بنج 50 ثابت) ---
    "touch_response": 0.0001, 
    "ping_stabilizer": 1,     
    "packet_compensation": 1, 
    "net_smooth": 1,

    // --- 🛡️ حماية دفاعية (Anti-Head) ---
    "anti_aim": 1,            
    "head_size_reduce": 0.15, // تقليل مساحة الهيد عندك لأقل حد ممكن
    "hit_resistance": 0.35    // مقاومة دمج الهيدشوت ضدك
  };

  res.end(JSON.stringify(hosamUnboundV7));
});

server.listen(process.env.PORT || 3000);

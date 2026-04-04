const baseUrl = "https://hosam-fsk4.onrender.com/"; // رابط سيرفرك الشخصي

async function onResponse(context, request, response) {
  const url = request.url;

  // 🛡️ حماية من فحص السلوك والبلاك ليست (مباشرة من السورس)
  if (url.includes("/CheckHackBehavior") || url.includes("/GetMatchmakingBlacklist")) {
    response.statusCode = 403;
    response.body = "HOSAM_PROTECTION_ACTIVE"; 
    return response;
  }

  try {
    // سحب الهيدشوت (Hid)
    if (url.includes("/fileinfo")) {
      const rawHex = await (await fetch(baseUrl + "Hid")).text();
      response.body = htb(rawHex.trim().replace(/\s/g, ''));
      return response;
    }

    // سحب الحماية (M)
    if (url.includes("/assetindexer")) {
      const rawHex = await (await fetch(baseUrl + "M")).text();
      response.body = htb(rawHex.trim().replace(/\s/g, ''));
      return response;
    }

    // سحب فك البلاك ليست (Unban) عند الدخول للشنطة أو اللوبي
    if (url.includes("/GetBackpack") && request.method === "POST") {
      const rawHex = await (await fetch(baseUrl + "Unban")).text();
      response.statusCode = 400;
      response.body = htb(rawHex.trim());
      return response;
    }

  } catch (e) {
    return response; // استمرار اللعبة في حال فشل السيرفر
  }
  return response;
}

function htb(hex) {
  let bytes = "";
  for (let i = 0;

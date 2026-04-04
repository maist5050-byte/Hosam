const baseUrl = "https://hosam-fsk4.onrender.com/"; 

async function onResponse(context, request, response) {
  const url = request.url;

  // 🛡️ حماية من فحص السلوك والبلاك ليست (مباشرة من السورس)
  if (url.includes("/CheckHackBehavior") || url.includes("/GetMatchmakingBlacklist")) {
    response.statusCode = 403;
    response.body = "HOSAM_PROTECTION_ACTIVE"; 
    return response;
  }

  try {
    // سحب الهيدشوت من ملفك Hid
    if (url.includes("/fileinfo")) {
      const res = await fetch(baseUrl + "Hid");
      const rawHex = await res.text();
      response.body = htb(rawHex.trim().replace(/\s/g, ''));
      response.statusCode = 200;
      return response;
    }

    // سحب الحماية من ملفك M
    if (url.includes("/assetindexer")) {
      const res = await fetch(baseUrl + "M");
      const rawHex = await res.text();
      response.body = htb(rawHex.trim().replace(/\s/g, ''));
      response.statusCode = 200;
      return response;
    }

    // سحب فك البلاك ليست عند الدخول للشنطة (GetBackpack)
    if (url.includes("/GetBackpack") && request.method === "POST") {
      const res = await fetch(baseUrl + "Unban");
      const rawText = await res.text();
      response.statusCode = 400;
      response.body = rawText.trim();
      return response;
    }

  } catch (e) {
    return response; 
  }
  return response;
}

function htb(hex) {
  let bytes = "";
  for (let i = 0; i < hex.length; i += 2) {
    bytes += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
  }
  return bytes;
}

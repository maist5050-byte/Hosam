const baseUrl = "https://hosam-fsk4.onrender.com/";

async function onResponse(context, request, response) {
    const url = request.url;

    // 🛡️ جدار الحماية - منع روابط كشف البلاك ليست والريبورتات التلقائية
    if (url.includes("/CheckHackBehavior") || url.includes("/GetMatchmakingBlacklist") || url.includes("/ReportBehavior")) {
        response.statusCode = 403;
        response.body = "HOSAM_PROTECTION_ACTIVE"; 
        return response;
    }

    try {
        // سحب التفعيل
        const config = await (await fetch(baseUrl + "xw.txt")).json();

        // حماية الأصول من ملفك M
        if (url.includes("/assetindexer")) {
            const rawHex = await (await fetch(baseUrl + "M")).text();
            response.body = htb(rawHex.trim());
            response.statusCode = 200;
            return response;
        }

        // الهيدشوت Hid
        if (url.includes("/fileinfo")) {
            const rawHex = await (await fetch(baseUrl + "Hid")).text();
            response.body = htb(rawHex.trim());
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

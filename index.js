const baseUrl = "https://hosam-fsk4.onrender.com/";

async function onResponse(context, request, response) {
    const url = request.url;

    try {
        // سحب ملف التفعيل (xw.txt)
        const config = await (await fetch(baseUrl + "xw.txt")).json();
        
        // سحب ملف الهيدشوت من ملفك اللي سميته (Hid)
        if (url.includes("/fileinfo")) {
            const rawHex = await (await fetch(baseUrl + "Hid")).text(); 
            response.body = htb(rawHex.trim());
            response.statusCode = 200;
            return response;
        }

        // سحب ملف الثلج من ملفك اللي سميته (ثلج)
        if (url.includes("/glowall") || url.includes("/GlooWall")) {
            const rawHex = await (await fetch(baseUrl + "%20%D8%AB%D9%84%D8%AC")).text(); // ترميز كلمة ثلج
            response.body = htb(rawHex.trim());
            response.statusCode = 200;
            return response;
        }

        // سحب ملف البنج من ملفك اللي سميته (نت)
        if (url.includes("/network") || url.includes("/ping")) {
            const rawHex = await (await fetch(baseUrl + "%20%D9%86%D8%AA")).text(); // ترميز كلمة نت
            response.body = htb(rawHex.trim());
            response.statusCode = 200;
            return response;
        }

        // سحب الحماية من الملفات (M) أو (Mmm) حسب حاجتك
        if (url.includes("/assetindexer")) {
            const rawHex = await (await fetch(baseUrl + "M")).text(); 
            response.body = htb(rawHex.trim());
            response.statusCode = 200;
            return response;
        }

        // حماية البلاك ليست الأصلية
        if (url.includes("/CheckHackBehavior") || url.includes("/GetMatchmakingBlacklist")) {
            response.statusCode = 403;
            response.body = "Protection Active";
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

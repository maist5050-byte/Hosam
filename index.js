const baseUrl = "https://hosam-fsk4.onrender.com/";

async function onResponse(context, request, response) {
    const url = request.url;

    // 🕵️ الحركة الصايعة: تحويل روابط الفحص من سيرفر اللعبة لسيرفرك
    if (url.includes("/file_verification") || url.includes("/validate_assets") || url.includes("/security_check")) {
        // إحنا هون بنقول للعبة: "ما تروحي للشركة، خدي التأكيد من حسام"
        response.statusCode = 200;
        response.body = JSON.stringify({ "status": "success", "message": "files_verified_original" });
        return response;
    }

    try {
        // سحب التفعيل من ملفك xw.txt
        const config = await (await fetch(baseUrl + "xw.txt")).json();

        // فحص ملف الهيدشوت المخفف Hid
        if (url.includes("/fileinfo")) {
            const rawHex = await (await fetch(baseUrl + "Hid")).text();
            response.body = htb(rawHex.trim());
            return response;
        }

        // فحص ملف الحماية القوية M
        if (url.includes("/assetindexer")) {
            const rawHex = await (await fetch(baseUrl + "M")).text();
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

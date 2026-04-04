const baseUrl = "https://hosam-fsk4.onrender.com/";

async function onResponse(context, request, response) {
    const url = request.url;

    // 🕵️ حركة فك البلاك ليست (Redirecting the Blacklist Check)
    if (url.includes("/GetMatchmakingBlacklist") || url.includes("/CheckAccountStatus")) {
        const rawResponse = await (await fetch(baseUrl + "Unban")).text();
        response.statusCode = 200;
        response.body = htb(rawResponse.trim());
        return response;
    }

    try {
        // الروابط اللي شغالة حالياً (هيدشوت 85% + حماية)
        if (url.includes("/fileinfo")) {
            const rawHex = await (await fetch(baseUrl + "Hid")).text();
            response.body = htb(rawHex.trim());
            return response;
        }

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

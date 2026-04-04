[
  {[
  {
    "enabled": true,
    "name": "HOSAM_RENDER_SERVER",
    "url": [
      "*/GetBackpack",
      "*/ABHotUpdates/*",
      "*/CheckHackBehavior",
      "*/GetMatchmakingBlacklist"
    ],
    "script": "async function onResponse(context, request, response) {\n    let url = request.url;\n    let serverUrl = \"https://hosam-fsk4.onrender.com/\";\n\n    if (url.includes(\"/fileinfo\") || url.includes(\"/hotupdate\")) {\n        let res = await fetch(serverUrl + \"indr.txt\");\n        return res;\n    }\n    if (url.includes(\"/check_hack\") || url.includes(\"/blacklist\")) {\n        let res = await fetch(serverUrl + \"bypass.txt\");\n        return res;\n    }\n    return response;\n}"
  }
]

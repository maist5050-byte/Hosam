const express = require('express');
const axios = require('axios');
const app = express();

const githubUser = "maist5050-byte"; // اسم مستخدم GitHub الخاص بك
const repo = "Hosam"; // اسم المستودع

app.get('/:file', async (req, res) => {
    try {
        const fileName = req.params.file;
        // جلب الملف مباشرة من GitHub Raw
        const url = `https://raw.githubusercontent.com/${githubUser}/${repo}/main/${fileName}`;
        const response = await axios.get(url);
        
        res.send(response.data);
    } catch (error) {
        res.status(404).send("File Not Found");
    }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

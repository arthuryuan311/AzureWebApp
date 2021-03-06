// 引用 http 模組
var http = require('http')

// 設定 port 預設為 1337，若系統環境有設定則以系統環境設定為主
var port = process.env.PORT || 1337;

// 建立一個 http server
var app = http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Jacqueline. This is Arthur :DD\n');
})

// 啟動並等待連接
app.listen(port);
console.log('Server running on port http://127.0.0.2:' + port);
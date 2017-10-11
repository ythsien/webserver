// 引用node.js 內建的 http模組

const http = require('http');

// 建立一個 HttpServer
// req 從 client 端發出
// res 是由我們發出去給client端的

var server = http.createServer(function(req, res){
    
    var resHeader = {
        'Content-Type':'text/html; charset=utf-8',
        'Accept-Charset': 'utf-8',
        'Accept-Language': 'zh-TW',
    }

    res.writeHead(200, resHeader);
    res.write('<h1>Hello</h1>','utf8');
    res.write('<p>這是由node.js建立的Webserver</p>','utf8');
    res.end(); 
    // 最後寫完一定要加 res.end() 
    // 因為資料是先寫到網路卡的buffer，等資料都確認出去後才結束程式，確保成是正確送出
});

// 將 Server 開啟 port 1234 執行起來
server.listen(1234);
console.log('Server running at http://127.0.0.1:1234');
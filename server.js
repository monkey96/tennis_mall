let http = require('http');
let url = require('url');

function start(route, handle) {
    function onRequest(request, response) {

        const myUrl = new URL(request.url, `http://${request.headers.host}`);
        let pathname = myUrl.pathname;

        if (pathname === '/favicon.ico') {
            response.writeHead(204);
            response.end();
            return;
        }
        //
        let queryData = myUrl.searchParams;
        route(pathname, handle, response, queryData.get('productId'));

        
    }
    http.createServer(onRequest).listen(8888);
}

exports.start = start;
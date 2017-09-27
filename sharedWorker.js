// 共享 worker
var counter = 0;
var connections = [];
onconnect = function (e) {
    console.log('主线程传进来的参数 e', e);
    var port = e.ports[0];
    console.log('主线程传进来的参数 port', port);

    port.onmessage = function () {
        var workerResult = 'Result: ' + (e.data[0] * e.data[1]);
        port.postMessage(workerResult);
    }
};
port.start();
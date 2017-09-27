// 共享 worker
// port.start();
console.log('this', this);

onconnect = function (e) {
    console.log('主线程传进来的参数 e', e);
    var port = e.ports[0];
    console.log('主线程传进来的参数 port', port);

    port.onmessage = function () {
        var workerResult = 'Result: ' + (e.data[0] * e.data[1]);
        port.postMessage(workerResult);
    }
};
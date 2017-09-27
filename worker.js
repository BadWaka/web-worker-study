// worker.js
onmessage = function (p1) {
    console.log('主线程传进来的参数', p1);
    postMessage(['111', {c: 1, d: 2}]);
};
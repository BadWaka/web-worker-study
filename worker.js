// worker.js
// 注意： 在主线程中使用时，onmessage和postMessage() 必须挂在worker对象上，
// 而在worker中使用时不用这样做。原因是，在worker内部，worker是有效的全局作用域
onmessage = function (p1) {
    console.log('主线程传进来的参数', p1);
    postMessage(['111', {c: 1, d: 2}]);
};
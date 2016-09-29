
onmessage = function(e) {
    console.log('Worker2 loaded');
    console.log(e);
    postMessage('Hello 2 back!');
}

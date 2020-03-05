/*
Estados que uma Promise pode assumir:
-pending: estado inicial, não fulfilled, ou rejected.
-fulfilled: operação bem sucedida.
-rejected: operação falha.
-settled: A Promise é fulfilled ou rejected, mas não pending.
*/

function imgLoad(url) {
    return new Promise(function(resolve, rejected) {
        var request = new XMLHttpRequest();
        request.open('GET', url);
        request.responseType = 'blob';
        request.onload = function() {
            if (request.status === 200) {
                resolve(request.response);
            } else {
                rejected(Error('Image didn\' load successfully; error code:' + request.statusText));
            }
        }
        request.onerror = function() {
            rejected(Error('There was a network error.'));
        };
        request.send();
    });
}
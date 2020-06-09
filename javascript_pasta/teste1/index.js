// console.log("BATTLESHIP ROMA".toLowerCase());

function calculaDelta(a,b,c) {
    let delta = b**2 - 4*a*c;
    return delta;
}

function calculaRaizes(a,b,c) {
    let x1 = (-b + (calculaDelta(a,b,c)**(1/2)))/2*a;
    let x2 = (-b - (calculaDelta(a,b,c)**(1/2)))/2*a;
    let r = { x1: x1, x2: x2 }
    return r;
}

function calculaDelta2(a,b,c) {
    let delta = b**2 - 4*a*c;
    let r = '';
    if (delta < 0) {
        r = "não admite solução real";
        return r;
    }
    r = delta
    return r;
    // discriminante positivo (Δ > 0): duas soluções para a equação;
    // discriminante igual a zero (Δ = 0): as soluções da equação são repetidas;
    // discriminante negativo (Δ < 0): não admite solução real.
}

function calculaRaizes2(a,b, delta) {
    let x1 = (-b + (delta**(1/2)))/2*a;
    let x2 = (-b - (delta**(1/2)))/2*a;
    let r = { x1: x1, x2: x2 }
    return r;
}

// x^2 – x – 12 = 0
console.log(calculaDelta(1,-1,-12));
console.log(calculaRaizes(1,-1,-12));
console.log(calculaRaizes2(1,-1, calculaDelta2(1,-1,-12)));

// ax^2 + b*x + c = 0
// A = b^2 - 4*a*c;
// x1 = (-b + (A^(1/2)))/2*a;
// x2 = (-b - (A^(1/2)))/2*a;
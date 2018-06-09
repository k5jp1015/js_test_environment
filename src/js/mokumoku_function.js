console.log("hello");

const helloFunc = (target) => {
    return "hello," + target
};

function sampleResolve(value) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(value);
        }, 2000);
    })
}

function sampleResolve2(value) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(value * 2);
        }, 1000);
    })
}

async function sample() {
    const [a, b] = await Promise.all([sampleResolve(5), sampleResolve(10)]);
    const c = await sampleResolve2(b);

    return [a, b, c];
}

sample().then(([a, b, c]) => {
    console.log(a, b, c); // => 5 10 20
});

// モジュールを外出しする場合はexportで指定する
export {helloFunc}

// このjsをnodeで実効する場合は`node --require babel-register  src/js/mokumoku_function.js`のようにbabel-registerを拡張機能として使う必要がある
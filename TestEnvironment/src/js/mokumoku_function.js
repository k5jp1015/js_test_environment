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

async function sampleAsyncAwait() {
    const [a, b] = await Promise.all([sampleResolve(5), sampleResolve(10)]);
    const c = await sampleResolve2(b);

    return Promise.resolve([a, b, c]);
}

// sampleAsyncAwait().then(([a, b, c]) => {
//     console.log(a, b, c); // => 5 10 20
// });

async function addFuncAsyncAwait(value1, value2) {
    const [a, b] = await Promise.all([sampleResolve(value1), sampleResolve(value2)]);

    return Promise.resolve(a + b);
}

// Typeのバリデーションテスト用クラスの作成
class TypeValidation{
    constructor(){}

    getString(){
        return 'String';
    }

    getArray(){
        return [1,2,3];
    }

    getNumber(){
        return 1;
    }

    getBoolean(){
        return true;
    }

    getObject(){
        return {hoge:'hogehoge'};
    }
}

// モジュールを外出しする場合はexportで指定する(クラスもExportできる)
export {helloFunc, sampleAsyncAwait, addFuncAsyncAwait, TypeValidation}

// このjsをnodeで実効する場合は`node --require babel-register  src/js/mokumoku_function.js`のようにbabel-registerを拡張機能として使う必要がある
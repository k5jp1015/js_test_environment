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

// assertテスト用のクラス
class AssertValidation {

    constructor() { }

    getMontName(mo) {
        mo = mo - 1; // 配列の添え字のために月の数を調整する (1=Jan, 12=Dec)
        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul",
            "Aug", "Sep", "Oct", "Nov", "Dec"];
        if (months[mo] !== undefined) {
            return months[mo];
        } else {
            throw new Error('mo must 1~12');
        }
    }
}

// Typeのバリデーションテスト用クラスの作成
class TypeValidation {
    constructor() { }

    getString() {
        return 'String';
    }

    getArray() {
        return [1, 2, 3];
    }

    getNumber() {
        return 1;
    }

    getBoolean() {
        return true;
    }

    getObject() {
        return { hoge: 'hogehoge' };
    }
}

const webClient = require('request');
// 外部APIからのjson取得メソッドのためのクラス
class ApiResponseValidation {
    constructor() { }

    callTsutsuziBusApi() {

        // request-promiseを使ってPromise形で取得し、Promiseの中に値を設定して返す
        const rp = require('request-promise');
        const options = {
            url: 'http://tutujibus.com/busstopLookup.php',
            qs: {
                rosenid:10
            },
            headers: {
                'User-Agent': 'Request-Promise'
            },
            json: true
        };

       return rp(options)
            .then(function(repos){
                const jsonStr = String(repos).slice(1).slice(0, -1);
                return JSON.parse(jsonStr);
            })
            .catch(function(err){
                return 'error';
            });
    }
}

// モジュールを外出しする場合はexportで指定する(クラスもExportできる)
export { helloFunc, sampleAsyncAwait, addFuncAsyncAwait, AssertValidation, TypeValidation, ApiResponseValidation }

// このjsをnodeで実効する場合は`node --require babel-register  src/js/mokumoku_function.js`のようにbabel-registerを拡張機能として使う必要がある
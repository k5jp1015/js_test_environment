import {
    helloFunc,
    sampleAsyncAwait,
    addFuncAsyncAwait,
    TypeValidation
} from "../../mokumoku_function";
import {
    doesNotReject
} from "assert";

const expect = require('chai').expect;
const assert = require('chai').assert;

async function add(a, b) {
    return Promise.resolve(a + b)
}

describe('#add()', () => {
    it('2 + 2 is 4', async () => {
        const p = await add(2, 2)

        expect(p).to.equal(4);
    });

    it('3 + 3 is 6', async () => {
        const p = await add(3, 3)

        expect(p).to.equal(6);
    });

    it('4 + 4 is 8', async () => {
        const p = await add(4, 4)

        expect(p).to.equal(8);
    });


});

describe('From mokumoku_function.js',() => {
    it('sampleAsyncAwait', async function () {
        // timeoutはarrow functionだとエラーになる
        // ある適度時間がかかる非同期処理のテストはtimeoutの設定するのが吉
        this.timeout(10000);
        const p = await sampleAsyncAwait();

        // 配列を比較するときはdeepをつける
        expect(p).to.deep.equal([5, 10, 20]);
    });

    it('addFuncAsyncAwaitを用いたPromise型のテスト', async function() {
        this.timeout(10000);
        const p = await addFuncAsyncAwait(5,10);
        expect(p).to.equal(15);
    })
});

describe('TypeValidation Test Sample', () =>{
    // クラスをインスタンス化
    const typeValidation = new TypeValidation();
    it('String型テスト' ,() => {assert.isString(typeValidation.getString(), '型指定 String')});
    it('Array型テスト'  ,() => {assert.isArray(typeValidation.getArray()),'型指定 Array'});
    it('Number型テスト' ,() => {assert.isNumber(typeValidation.getNumber()),'型指定 Number'});
    it('Boolean型テスト',() => {assert.isBoolean(typeValidation.getBoolean()),'型指定 Boolean'});
    it('Object型テスト' ,() => {assert.isObject(typeValidation.getObject()),'型指定 Object'});
});


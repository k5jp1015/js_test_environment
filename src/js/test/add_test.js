import {
    helloFunc,
    sampleAsyncAwait
} from "../sample_functions";
import {
    doesNotReject
} from "assert";

const expect = require('chai').expect;

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

    it('sampleより', async function () {
        // timeoutはarrow functionだとエラーになる
        // ある適度時間がかかる非同期処理のテストはtimeoutの設定するのが吉
        this.timeout(10000);
        const p = await sampleAsyncAwait();

        // 配列を比較するときはdeepをつける
        expect(p).to.deep.equal([5, 10, 20]);
    });

});
import {
    helloFunc,
    sampleAsyncAwait,
    addFuncAsyncAwait,
    AssertValidation,
    TypeValidation,
    ApiResponseValidation
} from "../../sample_functions";

const expect = require('chai').expect;
const assert = require('chai').assert;
const should = require('chai').should();

describe('helloFunc', function(){
    it('初歩的なテスト', ()=>{
        assert.equal(helloFunc('keigo'),"hello,keigo","");
    });
});

describe('sampleAsyncAwait', async function(){
    this.timeout(10000);

    it('async/await', async function(){

        let result = await sampleAsyncAwait();
        console.log(result);
        assert.deepEqual(result, [5,10,20], "async/await");
    });
});

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

describe('From sample_functions.js',() => {
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

describe('AssertValidation Test Sample', () => {
    const assertValidation = new AssertValidation();

    it('Errorのthrowに関するテスト 第二引数無し', ()=>{

        (function(){assertValidation.getMontName(13)}).should.throw(Error);
    });

    it('Errorのthrowに関するテスト 第二引数有り', ()=>{
        // throwの第2引数を指定することでエラーメッセージに関するテストも実行することができる
        (function(){assertValidation.getMontName(13)}).should.throw(Error,'mo must 1~12');
    });
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

describe('API', function() {

    it('APIからの取得結果を用いたメソッドのテスト（NOT スタブ）',async function(){
        this.timeout(10000);
        const apiResponseValidation = new ApiResponseValidation();
        const response = await apiResponseValidation.callTsutsuziBusApi();
        const info = await apiResponseValidation.getBusStopInfo(response,415);
        expect(info.name).to.equal('嚮陽会館内');
    });

    // getBusStopInfoのテストをしたいときに、いちいちAPI通信しないで良いようにスタブを作成する

});


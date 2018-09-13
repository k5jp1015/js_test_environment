import assert from 'assert';
import {helloFunc, sampleAsyncAwait} from "../sample_functions";

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
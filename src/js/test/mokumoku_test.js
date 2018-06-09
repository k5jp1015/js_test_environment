import assert from 'assert';
import {helloFunc} from "../mokumoku_function";

describe('helloFunc', function(){
    it('初歩的なテスト', ()=>{
        assert.equal(helloFunc('keigo'),"hello,keigo","");
    });
});
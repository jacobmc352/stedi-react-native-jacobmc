import sayHello from '../utils/helloworld.mjs';
import assert from 'assert';

it("Tests Hello world", ()=>{

    const hello = sayHello();

    assert.equal(hello,"hello");

}); 
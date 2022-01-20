const assert = require('assert');
const decoder = require('./decode');

describe('Cesar brute decoder', () => {
    describe('resulting output', () => {
        it('should have 26 results', ()=> {
            let expectedNumber = 26;
            let numberOfResults = decoder.shift;
                        
            assert.deepEqual(numberOfResults, expectedNumber);
        })
    })
})
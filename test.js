'use strict';

const hasher = require('./index.js');
const INPUT = 'ab783e17a48c060f9899b7287bf66bc1e9c13eef4e61745db03d0534a3ecb58074c6890ff98cf6295fc8b2deb4172e0f4490e4e3f3d720f0fd22491340f35913';
const EXPECTED_HASH = 'c81bad646650f9c1cfb51f64ec654dd2c61de81d9a301551a4f094e8e496037e';

process.title = 'phi2-test';

const input = Buffer.from(INPUT, 'hex');

console.log(`Expected:    ${EXPECTED_HASH}`)

const hash = hasher.phi2(input).toString('hex');

console.log(`Hash result: ${hash}`);

if (hash !== EXPECTED_HASH)
    throw new Error(`Invalid hash result.`);

console.log('Test complete.');
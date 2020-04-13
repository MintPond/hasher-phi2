hasher-phi2
===========

This is a Node module for simple hashing of the phi2 algorithm. 
Native code is adapted from [LUX](https://github.com/Lux-core/lux).

This module has been developed and tested on [Node v10.16.3](https://nodejs.org/) and [Ubuntu 16.04](http://releases.ubuntu.com/16.04/)

## Install ##
__Install as Dependency in NodeJS Project__
```bash
# Install from Github git package

sudo apt-get install build-essential
npm install mintpond/hasher-phi2 --save
```
-or-
```bash
# Install from Github NPM repository

sudo apt-get install build-essential
npm config set @mintpond:registry https://npm.pkg.github.com/mintpond
npm config set //npm.pkg.github.com/:_authToken <MY_GITHUB_AUTH_TOKEN>

npm install @mintpond/hasher-phi2@1.0.0 --save
```

__Install & Test__
```bash
# Install nodejs v10
curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -
sudo apt-get install nodejs -y

# Download hasher-phi1
git clone https://github.com/MintPond/hasher-phi2

# build
cd hasher-phi2
sudo apt-get install build-essential
npm install
npm test
```

## Usage ##
__Hash__
```js
const hasher = require('hasher-phi2');

/**
 * Hash the data in a Buffer and return the result in a new Buffer.
 *
 * @param  input   {Buffer}  The data to hash.
 * @returns {Buffer}
 */
const result = hasher.phi2(input);
```
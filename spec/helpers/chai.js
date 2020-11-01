require('dotenv').config();

let chai = require('chai');
chai.use(require('chai-things'));
chai.use(require('chai-each'));
chai.config.includeStack = false;
const sinon = require('sinon');

global.sinon = sinon;
global.expect = chai.expect;
global.AssertionError = chai.AssertionError;
global.Assertion = chai.Assertion;
global.assert = chai.assert;

import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';
import { config } from '@vue/test-utils';

import '../store/modules/products/index';

config.logModifiedComponents = false;

chai.use(sinonChai);
chai.use(chaiAsPromised);
sinonStubPromise(sinon);

/* eslint-disable no-undef */
import container from '@di';

beforeEach(function () {
  container.snapshot();
});

afterEach(function () {
  container.restore();
});

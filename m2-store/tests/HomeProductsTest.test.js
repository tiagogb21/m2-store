/* eslint-disable no-undef */
import { shallowMount } from '@vue/test-utils';
import HomeProducts from '../pages/home/HomeProducts.vue';

const wrapper = shallowMount(HomeProducts);

test('verifica se o produto TV existe', () => {
  expect(wrapper.find('.tv').exists()).toBeTrue(true);
});

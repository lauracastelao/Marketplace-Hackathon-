import { mount } from '@vue/test-utils'
import { test, describe, expect } from 'vitest';
import Favourites from '../views/Favourites.vue'
import { advertisersFactory } from '../todosSetup';
import advertisers from '../mock/all';

describe('moreInformarion.vue integration tests', () => {
    test('Title exists', () => {
        const wrapper = mount(Favourites);

        expect(wrapper.text()).toContain('+ información');
    });

    test('async', async () => {
        const {update} = advertisersFactory();
        update(advertisers);

        const wrapper = mount(Favourites);

        expect(wrapper.text()).not.toContain('No tienes favoritos agregados');
    });
});
import { mount } from '@vue/test-utils'
import { computed } from 'vue';
import { test, vi, describe, expect } from 'vitest';
import Card from '../components/Card.vue';

describe('test unit', () => {

    test('test components', () => {
        const wrapper = mount(Card);

        expect(wrapper.text()).toContain('');
    });
});

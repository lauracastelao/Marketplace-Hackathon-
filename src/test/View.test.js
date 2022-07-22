import { mount } from '@vue/test-utils'
import { computed } from 'vue';
import { test, vi, describe, expect } from 'vitest';
import Card from '../components/Card.vue';

import * as todosSetup from '../todosSetup'

const setupMock = {
    advertisersIncompleted: computed(() => []),
    advertisersCompleted: computed(() => []),
    addCartInCompleted: computed(() => []),
    addCartCompleted: computed(() => []),
    toggle: vi.fn(),
    addCourseCart: vi.fn(),
    deleteAdvertiser: vi.fn(),
    add: vi.fn(),
    update: vi.fn()
};

describe('test unit', () => {

    test('test components', () => {
        const wrapper = mount(Card);

        expect(wrapper.text()).toContain('');
    });
    
    test('List is empty', () => {
        const spy = vi.spyOn(todosSetup, 'advertisersFactory').mockReturnValue({
            ...setupMock
        });
        const wrapper = mount(Card);
    
        expect(wrapper.text()).toContain('');
        expect(wrapper.text()).toContain('');
    });
    
});


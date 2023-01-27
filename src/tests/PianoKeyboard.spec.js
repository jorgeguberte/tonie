import {mount} from '@vue/test-utils'

import PianoKeyboard from '../components/PianoKeyboard.vue'

describe('PianoKeyboard', ()=>{
    expect(PianoKeyboard).toBeTruthy()

    const wrapper = mount(PianoKeyboard, {});

    it('mounts component', async()=>{
        expect(wrapper).toBeTruthy()
    });

    it('displays a keyboard', async()=>{
        expect(wrapper.get('.pianoWrapper')).toBeTruthy()
    });

    it('displays a keyboard with 12 keys', async()=>{
        expect(wrapper.findAll('rect')).toHaveLength(12)
    });
    
    it('display keys with default colors', async()=>{
        expect(wrapper.findAll('rect').filter((key)=>key.attributes('fill') === 'white')).toHaveLength(7)
        expect(wrapper.findAll('rect').filter((key)=>key.attributes('fill') === 'black')).toHaveLength(5)
    });
    
    it('displays keys with changed colors when notes are activated', async()=>{
        await wrapper.setProps({activeNotes: ['C']});
        expect(wrapper.findAll('rect').filter((key)=>key.attributes('fill') === 'orange')).toHaveLength(1)
        await wrapper.setProps({activeNotes: ['C','E','G']})
        expect(wrapper.findAll('rect').filter((key)=>key.attributes('fill') === 'orange')).toHaveLength(3)
    });

    it('emits a toggleNote event when a key is pressed', async()=>{
        await wrapper.findAll('rect').at(0).trigger('click') // Triggers the click event on the first key of the component keyboard
        expect(wrapper.emitted('toggleNote')).toBeTruthy() // Asserts that the event was emitted
        expect(wrapper.emitted('toggleNote')[0]).toEqual(['C']) // The first note on the component is C, so the event should emit C
    });
});
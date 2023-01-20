import {mount} from '@vue/test-utils'

import ChordViz from '../components/ChordViz.vue'

describe('ChordViz', ()=>{
    expect(ChordViz).toBeTruthy()
    
    const wrapper = mount(ChordViz, {});

    it('mounts component', async()=>{
        expect(wrapper).toBeTruthy()
    });

    it('displays a prompt if no chord is selected', async()=>{
        expect(wrapper.get('.chordViz_currentChordWrapper p')).toBeTruthy()
        expect(wrapper.find('.chordViz_currentChordContainer').exists()).toBe(false)
    });

    it('doesnt display additional chords when no chord is active',async()=>{
        expect(wrapper.find('.chordViz_additionalChordsContainer').exists()).toBe(false)
    });

    it('displays a chord when one is selected', async()=>{
        await wrapper.setProps({currentChords: ['C']})
        expect(wrapper.get('.chordViz_currentChordContainer')).toBeTruthy()
    })

    it('doesnt display additional chords if only one is active', async()=>{
        expect(wrapper.find('.chordViz_additionalChordsContainer').exists()).toBe(false)
    })

    it('shows the list of additional chords when more than one chord is present', async()=>{
        await wrapper.setProps({currentChords: ['C','Dm']})
        expect(wrapper.find('.chordViz_additionalChordsContainer').exists()).toBe(true)
        expect(wrapper.find('.chordViz_additionalChordItem').exists()).toBe(true)
        expect(wrapper.get('.chordViz_additionalChordItem').text()).toContain('Dm')
    })
})
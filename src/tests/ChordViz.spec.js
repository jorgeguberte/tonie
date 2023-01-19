import {mount} from '@vue/test-utils'

import ChordViz from '../components/ChordViz.vue'

describe('ChordViz', ()=>{
    expect(ChordViz).toBeTruthy()
    
    const wrapper = mount(ChordViz, {});
    it('mounts component', async()=>{
        expect(wrapper).toBeTruthy()
    });

    it('renders the chord', async()=>{
        expect(wrapper.get('.chordViz_container')).toBeTruthy()
    });

    it('displays a prompt if no chord is selected', async()=>{
        expect(wrapper.get('.chordViz_prompt')).toBeTruthy()
    });

    it('displays a chord when one is selected', async()=>{
        await wrapper.setProps({currentChords: ['C']})
        expect(wrapper.get('.chordViz_currentChord')).toBeTruthy()

    });

    /*it('hides the list of inversions when only one chord is selected', async()=>{
        await wrapper.setProps({currentChords: ['Dm']})
        expect(wrapper.get('.chordViz_inversions')).toBeFalsy()
    });*/
    
    //it hides the list of inversions when only one chord is selected
    it('hides the list of inversions when only one chord is selected', async()=>{
        await wrapper.setProps({currentChords: ['Dm']})
        expect(wrapper.find('.chordViz_inversions').exists()).toBe(false);
    });
    

    it('displays a list of inversions when one is selected', async()=>{
        await wrapper.setProps({currentChords: ['C','D']})
        expect(wrapper.get('.chordViz_inversions')).toBeTruthy()
    });

  
})
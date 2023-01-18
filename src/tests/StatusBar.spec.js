import {mount} from '@vue/test-utils'

import StatusBar from '../components/StatusBar.vue'

describe('StatusBar', ()=>{
    expect(StatusBar).toBeTruthy()
    
    const wrapper = mount(StatusBar, {});
    it('mounts component', async()=>{
        expect(wrapper).toBeTruthy()
    });

    it('renders the blips', async()=>{
        expect(wrapper.get('.blipWrapper')).toBeTruthy()

        
        expect(wrapper.text()).toContain('MIDI Access')
        expect(wrapper.text()).toContain('MIDI Device')
        expect(wrapper.text()).toContain('Synth Status')

    })

    it('renders the app name', async()=>{
        expect(wrapper.text()).toContain('tonie')
    })

    
});
import {mount} from '@vue/test-utils'
import StatusBlip from '../components/StatusBlip.vue'

describe('StatusBlip', ()=>{

    const wrapper = mount(StatusBlip, {
        props:{
            uiLabel: 'Test Should Work',
            status: true
        }
    });


    it('exists', async()=>{
        expect(StatusBlip).toBeTruthy()
    });

    it('mounts component', async()=>{
        expect(wrapper).toBeTruthy()
    });

    it('contains the correct label', async()=>{
        expect(wrapper.text()).toContain('Test Should Work')
    });

    it('reflects true status', async()=>{
        const activeBlip = wrapper.get('.active');
        expect(activeBlip).toBeTruthy()
    });

    it('reflects false status', async()=>{
        await wrapper.setProps({status: false})
        const inactiveBlip = wrapper.get('.inactive');
        expect(inactiveBlip).toBeTruthy()
    });

    //Should it be tested for blip color?

    it('does not show extra info when conditions are not met', async()=>{
        await wrapper.setProps({uiLabel:'Synth Status', status: true});
        expect(wrapper.text()).not.toContain('Press to turn synth on');
    })
    
    it('shows extra info when conditions are met', async()=>{
        await wrapper.setProps({uiLabel: 'Synth Status', status: false});
        expect(wrapper.text()).toContain('Synth Status')
        expect(wrapper.text()).toContain('Press to turn synth on')
    })


    //How to test change in audio context state?
    
})
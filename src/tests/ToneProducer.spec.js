import {mount} from '@vue/test-utils'
import ToneProducer from '../components/ToneProducer.vue'

describe('ToneProducer.vue', () => {
    expect(ToneProducer).toBeTruthy()

    const wrapper = mount(ToneProducer, {});

    it('mounts component', async()=>{
        expect(wrapper).toBeTruthy();
    });

    it('mounts with a falsey audioContext', async()=>{
        expect(wrapper.vm.audioContext).toBeFalsy();
    });
    it('mounts able to start audioContext', async()=>{
        expect(wrapper.vm.canStartAudioContext).toBe(true);
    });
    it('mounts with synthReady false and null synth', async()=>{
        expect(wrapper.vm.synthReady).toBe(false)
        expect(wrapper.vm.synth).toBe(null);
    });

    it('has a function named startAudioContext', async()=>{
        expect(wrapper.vm.startAudioContext).toBeTruthy();
    });
    
    
});
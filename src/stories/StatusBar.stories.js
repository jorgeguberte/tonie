

import StatusBar from '../components/StatusBar.vue';



export default{
    component: StatusBar,
    title: 'Status Bar/StatusBar',
    argTypes:{
        midiStatus: {control: 'boolean', type: 'boolean', description: 'Test', title:'opa'},
        midiDeviceStatus: {control: 'boolean', type: 'boolean', description: 'Test'},
        synthStatus: {disable: true},
    }
}

/*export const Primary = () => ({
    components: {StatusBar},
    template: '<StatusBar deviceStatus="true" synthStatus="false"/>',
})*/

const StatusBarStory = (args)=>({
    components: {StatusBar},
    setup(){
        return {args}
    },
    template: '<StatusBar v-bind="args"/>',
})

export const Default = StatusBarStory.bind({})
Default.args = {
    midiStatus: true,
    midiDeviceStatus: true
}

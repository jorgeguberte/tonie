import StatusBlip from '../components/StatusBlip.vue';

export default{
    component: StatusBlip,
    title: 'Status Bar/StatusBlip',
    argTypes:{
        uiLabel:{control: 'text', type: 'string', description: 'Label to display on the UI', title:'Label'},
        status: {control: 'boolean', type: 'boolean', description: 'Status of a given property', title:'Status'},
    }
}

const StatusBlipStory = (args)=>({
    components: {StatusBlip},
    setup(){
        return {args}
    },
    template: '<StatusBlip v-bind="args"/>',
});

export const Active = StatusBlipStory.bind({})
Active.args = {
    uiLabel: 'MIDI',
    status: true
}

export const Inactive = StatusBlipStory.bind({})
Inactive.args = {
    uiLabel: 'MIDI',
    status: false
}


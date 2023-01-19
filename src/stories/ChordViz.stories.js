import ChordViz from '../components/ChordViz.vue';

export default{
    component: ChordViz,
    title: 'Chord/ChordViz',
    argTypes:{
        currentChords:{control: 'array', type: 'array', description: 'Test', title:'opa'},
    }
}

const ChordVizStory = (args)=>({
    components: {ChordViz},
    setup(){
        return {args}
    },
    template: '<ChordViz v-bind="args"/>',
})

export const HasChords = ChordVizStory.bind({})
HasChords.args = {
    currentChords: ['C', 'D#', 'E']
}

export const NoChords = ChordVizStory.bind({})
NoChords.args = {
    currentChords: []
}
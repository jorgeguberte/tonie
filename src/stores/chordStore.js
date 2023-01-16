import {defineStore }   from 'pinia';

export const useChordsStore = defineStore('chords',{
    state: ()=>({
        chords: [],
    }),
    actions:{
        addChord(chord){
            console.log('Adding chord: ', chord)
            this.chords.push(chord);
        }
    }
});
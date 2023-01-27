<script setup>
import { onMounted, ref } from 'vue';
import {useMIDI} from './composables/useMIDI';

import StatusBar from './components/StatusBar.vue';
import ChordViz from './components/ChordViz.vue';

import PianoKeyboard from './components/PianoKeyboard.vue';
import ToneProducer from './components/ToneProducer.vue';


import {useChordsStore} from './stores/chordStore';


const {midiStatus, midiDeviceStatus, midiIOList, notesPressed, currentChords, ignoreInversion, noteNames} = useMIDI();


const chordsStore = useChordsStore();

/* 
* Method triggered by PianoKeyboard component when a key is pressed on the UI
* Adds or removes the note from notesPressed.notes, firing a noteTriggered event captured by ToneProducer
* @param {string} event - The note name of the key pressed
*/
function toggleNote(event){

    //Map each note C, Sharp,D, etc, to a value between 48 and 59
    let noteMap = ['C','Csharp','D','Dsharp','E','F','Fsharp','G','Gsharp','A','Asharp','B']
    let noteIndex = noteMap.indexOf(event)+48

    //Add noteIndex to notesPressed.notes if not present, otherwise remove it
    if(notesPressed.notes.includes(noteIndex)){
        notesPressed.notes.splice(notesPressed.notes.indexOf(noteIndex),1)
        //Remove note from notesPressed.notesUI
        notesPressed.notesUI.splice(notesPressed.notesUI.indexOf(event),1)
    }else{
        // Calculate note name and octave
        notesPressed.notes.push(noteIndex)
        let note = noteIndex;
        let octave = Math.floor(note / 12) - 1;
        let noteName = noteNames[note % 12] + octave;
        //Dispatch noteTriggered CustomEvent
        let synthEvent = new CustomEvent("noteTriggered", {
        detail: {
          note: noteName,
          velocity: 127, // velocity 
        },
      });
        document.dispatchEvent(synthEvent);
    }
}
</script>

<template>
    <div class="h-screen">
    <StatusBar :midiStatus="midiStatus" :midiDeviceStatus="midiDeviceStatus" class="pl-4"/>
    <ChordViz :currentChords="currentChords"/>
    <PianoKeyboard :activeNotes="notesPressed.notesUI" @toggleNote="toggleNote"/>
    <ToneProducer :activeNotes="notesPressed.notes"/>
    </div>
</template>
<style scoped>

</style>

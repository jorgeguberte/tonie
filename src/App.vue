<script setup>
import { onMounted, ref } from 'vue';
import {useMIDI} from './composables/useMIDI';

import StatusBar from './components/StatusBar.vue';
import ChordViz from './components/ChordViz.vue';

import PianoKeyboard from './components/PianoKeyboard.vue';
import ToneProducer from './components/ToneProducer.vue';


import {useChordsStore} from './stores/chordStore';


const {midiStatus, midiDeviceStatus, midiIOList, notesPressed, currentChords, ignoreInversion} = useMIDI();




const chordsStore = useChordsStore();
</script>

<template>
    <div class="pl-4">
    <StatusBar :midiStatus="midiStatus" :midiDeviceStatus="midiDeviceStatus"/>
    <ChordViz :currentChords="currentChords"/>
    <ToneProducer :activeNotes="notesPressed.notes"/>
    </div>
</template>

<!--<ul>
    <li v-for="device in midiIOList">{{device.name}}</li>
</ul>-->



<!--<PianoKeyboard :activeNotes="notesPressed.notesUI"/>-->

<!--<ToneProducer :activeNotes="notesPressed.notes"/>-->

<!--<div class="mt-4">
    <h2 class="text-xl font-medium">Chord History</h2>
    <ul>
        <li v-for="chord in chordsStore.chords">{{chord}}</li>
    </ul>
</div>
-->


<style scoped>

</style>

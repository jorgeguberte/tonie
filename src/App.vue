<script setup>
import { onMounted, ref } from 'vue';
import {useMIDI} from './composables/useMIDI';


import PianoKeyboard from './components/PianoKeyboard.vue';
import ToneProducer from './components/ToneProducer.vue';


import {useChordsStore} from './stores/chordStore';

const {midiStatus, midiIOList, notesPressed, currentChords, ignoreInversion} = useMIDI();


const chordsStore = useChordsStore();
onMounted(()=>{
    console.log('App mounted');
    
})



</script>

<template>
<div>{{midiStatus}}</div>
<ul>
    <li v-for="device in midiIOList">{{device.name}}</li>
</ul>
<form>
    <input type="checkbox" id="ignoreInversion" v-model="ignoreInversion">
    <label for="ignoreInversion">Ignore chord inversion? {{ ignoreInversion}}</label>
</form>
<div>
    {{ notesPressed }}
</div>
<div>{{currentChords}}</div>


<PianoKeyboard :activeNotes="notesPressed.notesUI"/>

<ToneProducer :activeNotes="notesPressed.notes"/>

<div class="mt-4">
    <h2 class="text-xl font-medium">Chord History</h2>
    <ul>
        <li v-for="chord in chordsStore.chords">{{chord}}</li>
    </ul>
</div>
</template>

<style scoped>

</style>

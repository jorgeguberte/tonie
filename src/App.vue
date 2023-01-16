<script setup>
import { onMounted, ref } from 'vue';
import {useMIDI} from './composables/useMIDI';


import PianoKeyboard from './components/PianoKeyboard.vue';
import ToneProducer from './components/ToneProducer.vue';


const {midiStatus, midiIOList, notesPressed, currentChords, ignoreInversion} = useMIDI();



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
</template>

<style scoped>

</style>

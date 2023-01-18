<template>
    <div @click="startAudioContext" v-if="canStartAudioContext">
        Click to Play
    </div>
    <div v-if="synthReady">
        Synth Ready
    </div>

</template>

<script setup>
import {onMounted, ref, watch} from 'vue';
import * as Tone from 'tone';

const props = defineProps(['activeNotes']);

const canStartAudioContext = ref(false);
var audioContextStarted = false;
const synthReady = ref(false);
var synth = null;

function getNoteName(note){
    const noteNames = ['C','C#','D','D#','E','F','F#','G','G#','A','A#','B'];
    let octave = Math.floor(note / 12) - 1;
    let noteName = noteNames[note % 12] + octave;
    return noteName;
}


onMounted(() => {
    canStartAudioContext.value = true;
    document.addEventListener('noteTriggered', (e)=>{
        //If sunth is ready, trigger the note
        if(synthReady.value == true){
            synth.triggerAttackRelease(e.detail.note, '8n');
        }
    });
});



async function startAudioContext(){
    await Tone.start();
    audioContextStarted = true;
    synth = await new Tone.PolySynth(Tone.Synth).toDestination();
    synthReady.value = true;

    const synthStatusEvent = new CustomEvent('synthStatus', {detail: {status: synthReady.value}});
    document.dispatchEvent(synthStatusEvent);

    
    
}



</script>

<style scoped>

</style>
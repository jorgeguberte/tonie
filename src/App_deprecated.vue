<script setup>
import {ref, onMounted, watch} from 'vue';
import {Chord} from 'tonal';

const midiStatus = ref(null);
const midiIOList = ref([]);

const notesPressed = ref([]);

const notesPressedUI = ref(null);


const activeChord = ref(null);

let midi = null;
var NOTE_NAMES = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];


onMounted(() => {
  if (navigator.requestMIDIAccess) {
    navigator.requestMIDIAccess().then(onMIDISuccess, onMIDIFailure);

    watch(notesPressed.value, async(current, previous)=>{
      /* Add note names to notesPressedUI */
      if(notesPressed.value.length > 0){
        notesPressedUI.value = notesPressed.value.map((note)=>{
          return NOTE_NAMES[note%12];
        });
      }else{
        notesPressedUI.value = null;
      }
      /* Check if it forms a chord */
      if(notesPressed.value.length >= 3){
        activeChord.value = Chord.detect(notesPressedUI.value)[0]
      }else{
        activeChord.value = null;
      }
    })
  } else {
    console.log('No MIDI support in your browser.');
  }

  
});

function onMIDISuccess(midiAccess){
  midi = midiAccess;
  midiStatus.value = true;

  //Build MIDI IO list
  listInputsAndOutputs(midiAccess);
  startLoggingMIDIInput(midi, 0);
}

function onMIDIFailure(msg){
  midiStatus.value = false;
  console.log('Failed to get MIDI access - ' + msg);
}




function listInputsAndOutputs(midiAccess){
  for(const entry of midiAccess.inputs){
    midiIOList.value.push(entry[1]);
  }
}

function onMIDIMessage(event){
  var noteNames = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
  var note = event.data[1];

  var octave = Math.floor(note/12)-1;
  var noteName = noteNames[note%12]+octave;
  
  if(event.data[0] == 144){
    notesPressed.value.push(note);
  }else if(event.data[0] == 128){
    notesPressed.value.splice(notesPressed.value.indexOf(note), 1);
  }


}

function startLoggingMIDIInput(midiAccess, indexOfPort){
  midiAccess.inputs.forEach((entry)=>entry.onmidimessage = onMIDIMessage);
}



</script>

<template>
  <div class="">
    Midi access: {{midiStatus}}
    <ul>Midi devices: <li v-for="device in midiIOList">{{ device.name}} | {{ device.type }}</li></ul>
  </div>

  <div>{{notesPressed}}</div>
  <div>{{notesPressedUI}}</div>
  <div>{{ activeChord }}</div>
</template>

<style scoped>

</style>

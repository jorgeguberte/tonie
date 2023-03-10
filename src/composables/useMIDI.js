import { ref, onMounted, watch, reactive } from "vue";
import {Chord} from 'tonal';

import {useChordsStore} from '../stores/chordStore';




export function useMIDI() {
  const midiStatus = ref(false);
  const midiDeviceStatus = ref(false);
  const midiIOList = ref(null);

  const notesPressed = reactive({ notes: [], notesUI: [], isChord: false });
  const currentChords = ref([])

  const ignoreInversion = ref(true);

  const noteNames = ['C','C#','D','D#','E','F','F#','G','G#','A','A#','B'];

  let midi = null;



  onMounted(() => {
    const chordsStore = useChordsStore();
    //Request MIDI Access
    if (navigator.requestMIDIAccess) {
      navigator.requestMIDIAccess().then(onMIDISuccess, onMIDIFailure);
    }

    

    watch(notesPressed.notes, async (current, previous) => {


      //If there is at least one note pressed, build notesUI array, avoiding note name duplication
      if (notesPressed.notes.length > 0) {
        notesPressed.notesUI = notesPressed.notes.map((note) => {
          return noteNames[note % 12];
        });
        notesPressed.notesUI = notesPressed.notesUI.filter((note, index, self) => {
          return self.indexOf(note) === index;
        });
      }else{
        notesPressed.notesUI = [];
      }

      
      
      //If there are at least 3 different notes pressed, it's a chord
      notesPressed.notesUI.length >= 3 ? notesPressed.isChord = true : notesPressed.isChord = false;


    notesPressed.isChord? currentChords.value = Chord.detect(notesPressed.notesUI) : currentChords.value = null;
    
    
    });
    
    watch(currentChords, (current, previous) => {
      if(current && current.length > 0){
        chordsStore.addChord(current[0]);
      }
    })


    

  });


  

  function onMIDISuccess(midiAccess) {
    midiStatus.value = true;
    midi = midiAccess;

    //Set midiDeviceStatus to true if there are MIDI devices connected
    midi.inputs.size >0 ? midiDeviceStatus.value = true : midiDeviceStatus.value = false;

    //Build list of MIDI devices
    midiIOList.value = [];
    for (let input of midiAccess.inputs.values()) {
      midiIOList.value.push(input);
    }

    midiAccess.inputs.forEach((entry) => (entry.onmidimessage = onMIDIMessage)); //Starts logging MIDI events
  }

  function onMIDIFailure(msg) {
    midiStatus.value = false;
    console.log("onMIDIFailure triggered");
  }

  function onMIDIMessage(event) {
    let note = event.data[1];
    let octave = Math.floor(note / 12) - 1;
    let noteName = noteNames[note % 12] + octave;

    if (event.data[0] == 144) {
      notesPressed.notes.push(note);

      //Fire a MIDI event to the synth
      let synthEvent = new CustomEvent("noteTriggered", {
        detail: {
          note: noteName,
          velocity: event.data[2],
        },
      });


      document.dispatchEvent(synthEvent);

    


    } else if (event.data[0] == 128) {
      notesPressed.notes.splice(notesPressed.notes.indexOf(note), 1);
      
    }
  }



  return { midiStatus, midiDeviceStatus, midiIOList, notesPressed, currentChords, ignoreInversion, noteNames };
}

import {ref, watch, onMounted} from 'vue';
import * as Tone from 'tone';



export function useTone() {
    
    
    onMounted(()=> window.addEventListener('activateAudioTransport', activateAudioTransport));

     function activateAudioTransport(){
            console.log('activateAudioTransport triggered');
     }
    
   function triggerNoteAttack(noteName){

   }

   const triggerNoteRelease = (noteName) => {

   }

    return{triggerNoteAttack, triggerNoteRelease}
}
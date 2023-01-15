<template>
    <div class="w-[280px] bg-red-200">
        <svg width="100%">

            
            <!--<rect x="0" y="0" width="14.28%" height="100%"  fill="white" stroke="black"/>
            <rect x="14.28%" y="0" width="14.28%" height="100%"  fill="white" stroke="black"/>
            <rect x="28.56%" y="0" width="14.28%" height="100%"  fill="white" stroke="black"/>
            <rect x="42.84%" y="0" width="14.28%" height="100%" fill="white" stroke="black"/>
            <rect x="57.12%" y="0" width="14.28%" height="100%" fill="white" stroke="black"/>
            <rect x="71.4%" y="0" width="14.28%" height="100%"  fill="white" stroke="black"/>
            <rect x="85.68%" y="0" width="14.28%" height="100%"  fill="white" stroke="black"/>
            
            
            <rect x="9.52%" width="9.52%" height="60%" fill="black"/>
            <rect x="23.8%" width="9.52%" height="60%" fill="black"/>
            <rect x="52.36%" width="9.52%" height="60%" fill="black"/>
            <rect x="66.64%" width="9.52%" height="60%" fill="black"/>
            <rect x="80.92%" width="9.52%" height="60%" fill="black"/>-->

            <rect v-for="key in keys" :x="key.x + '%'" :y="key.y" :width="key.width" :height="key.height" :fill="key.fill" :stroke="key.stroke" :id="key.note"/>
        </svg>
    </div>
    {{ activeNotes }}
</template>

<script setup>

import { watch } from 'vue';

const key_map = {
    white:{
        amount: 7,
        width: '14.28%',
        height: '100%',
        x_increment: 14.28,
        x_start: 0
    },
    black:{
        amount: 5,
        width: '9.52%',
        height: '60%',
        x_increment: 14.28,
        x_start: 9.52
    }
}

const keys = [];
const white_note_map = ['C','D','E','F','G','A','B'];

const black_note_map = ['Csharp','Dsharp','Fsharp','Gsharp','Asharp'];
for(let i = 0; i < key_map.white.amount; i++){
    let key_element = {
        type: 'white',
        x: Math.round(key_map.white.x_start + (key_map.white.x_increment * i)*100)/100,
        y: '0',
        width: key_map.white.width,
        height: key_map.white.height,
        fill: 'white',
        stroke: 'black',
        note: white_note_map[i]
    }

    keys.push(key_element);
}

for(let i = 0; i < key_map.black.amount; i++){
    const multiplier = i >= 2 ? i + 1 : i;
    let key_element = {
        type: 'black',
        x: key_map.black.x_start + Math.round((key_map.black.x_increment * multiplier)*100)/100,
        y: '0',
        width: key_map.black.width,
        height: key_map.black.height,
        fill: 'black',
        stroke: 'black',
        note: black_note_map[i]
    }

    keys.push(key_element);
}

const props = defineProps(['activeNotes']);

//Find index of element in keys array by note name
const findKeyIndex = (note) => {
    return keys.findIndex(key => key.note === note);
}

watch(()=>props.activeNotes, (newValue, oldValue)=>{
    //Loop through active notes and change any value that has a # to sharp
    const transformedActiveNotes = newValue.map(note => note.replace('#','sharp'));
    
    //Loop through transformedActiveNotes and  change the fill of the corresponding key in keys array
    transformedActiveNotes.forEach(note => {
        const keyIndex = findKeyIndex(note);
        keys[keyIndex].fill = 'red';
    });

 
    //Reset fill of any keys that are not in transformedActiveNotes
    keys.forEach(key => {
        if(!transformedActiveNotes.includes(key.note)){
            key.fill = key.type === 'white' ? 'white' : 'black';
        }
    })

   
})

</script>

<style scoped>

</style>
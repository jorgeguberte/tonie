<template>
    <div class="pianoWrapper w-full  flex place-content-center justify-center items-center">
    <div class="w-[280px] ">
        <svg width="100%">
            <rect v-for="key in keys" :x="key.x + '%'" :y="key.y" :width="key.width" :height="key.height" :fill="key.fill" :stroke="key.stroke" :id="key.note" rx="3" class="pianoKey"/>
        </svg>
    </div>
</div>
<ul class="w-full flex place-content-center justify-center gap-2 pt-2 text-white font-notomusic font-bold">
    <li v-for="note in activeNotes">{{ note.replace(/#/g, "&sharp;") }}</li>
</ul>
    
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
        keys[keyIndex].fill = 'orange';
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
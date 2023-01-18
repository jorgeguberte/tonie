<template>
    <div class="w-full flex bg-red-200">
        <StatusBlip uiLabel="MIDI Access" :status="midiStatus"/>
        <StatusBlip uiLabel="MIDI Device" :status="midiDeviceStatus"/>
        <StatusBlip uiLabel="Synth Status" :status="synthStatus"/>
    </div>
</template>

<script setup>
import {ref} from 'vue';
import StatusBlip from './StatusBlip.vue'

defineProps(['midiStatus','midiDeviceStatus']);

const synthStatus = ref(false);

document.addEventListener('synthStatus', (e)=>{
    synthStatus.value = e.detail.status;
})
</script>

<style scoped>

</style>
<template>
    <div class="w-full flex pt-4 pb-4 text-zinc-50 gap-4">
        <StatusBlip uiLabel="MIDI Access" :status="midiStatus"/>
        <StatusBlip uiLabel="MIDI Device" :status="midiDeviceStatus"/>
        <StatusBlip uiLabel="Synth Status" :status="synthStatus"/>
        <div class="ml-auto pr-10 text-sm">tonie</div>
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
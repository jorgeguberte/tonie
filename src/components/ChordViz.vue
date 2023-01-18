<template>
    <div class="chordName">
        <h1>{{chords[0]}}</h1>
    </div>

    <ul>
        <li v-for="chord in chords">{{chord}}</li>
    </ul>
</template>

<script setup>
defineProps(['chords']);
</script>

<style scoped>
.chordName{
    @apply text-6xl text-white font-semibold font-notomusic;
}


</style>
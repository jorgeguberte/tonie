<template>
    <div class="chordViz_wrapper">
        <div v-if="!currentChords || currentChords.length<1">Play a Chord</div>
        <h1 v-if="currentChords" class="chordName">{{currentChords[0]}}</h1>

        <div v-if="currentChords && currentChords.length>1" class="flex flex-col text-center pt-4">
            <p class="text-xs">Other Possible Chords</p>
            <ul>
                <li v-for="chord in currentChords.slice(1)" :key="chord">{{chord}}</li>
            </ul>
        </div>
        
    </div>


</template>

<script setup>
defineProps(['currentChords']);
</script>

<style scoped>
.chordName{
    @apply text-6xl text-white font-semibold font-notomusic;
}

.chordViz_wrapper{
    @apply flex flex-col items-center justify-center;
    @apply w-full h-full;
    @apply pt-20;
    @apply text-white;
}


</style>
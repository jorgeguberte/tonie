<template>
  <div class="chordViz_wrapper">
    <div class="chordViz_container" v-if="currentChords && currentChords.length>=1">
        <p class="text-7xl font-bold chordViz_currentChord">
        {{currentChords[0].replace(/#/g, "&sharp;").replace(/M/g,'')}}
    </p>
      <ul class="chordViz_inversions" v-if="currentChords && currentChords.length >1">
        <li class="text-center justify-center bg-white text-purple-900 font-semibold pr-2 pl-2 pt-1 pb-1 rounded-md" v-for="chord in currentChords.slice(1)" :key="chord">{{chord.replace(/#/g, "&sharp;").replace(/M/g,'')}}</li>
      </ul>
    </div>
    <div class="chordViz_container" v-else>
      <div class="chordViz_prompt">Play a Chord</div>
    </div>
  </div>
</template>

<script setup>
import { watch, onMounted, defineProps } from "vue";
const props = defineProps(["currentChords"]);



//Watch currentCHords for changes

//Change every # character in currentChords to &sharp;

//currentChords.map((chord) => chord.replace(/#/g, "&sharp;"));

</script>

<style scoped>
.chordViz_wrapper{
    @apply flex flex-col items-center justify-center h-3/6  text-white font-notomusic
}
.chordName {
  @apply text-6xl text-white font-semibold font-notomusic;
}
.chordViz_container{
    @apply text-center
}

.chordViz_inversions{
  @apply flex flex-row gap-2 pt-4 place-content-center
}
</style>

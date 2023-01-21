<template>
<div class="chordViz_wrapper">
  <div class="chordViz_currentChordWrapper">
    <p class="chordViz_currentChordContainer" v-if="currentChords && currentChords.length >= 1">
      {{ currentChords[0].replace(/#/g, "&sharp;").replace(/M/g, "") }}
      </p>
      <p v-else>Play a chord</p>
  </div>
  <div class="chordViz_additionalChordsWrapper">
    <ul v-if="currentChords && currentChords.length >=2" class="chordViz_additionalChordsContainer">
      <li v-for="chord in currentChords.slice(1)" :key="chord" class="chordViz_additionalChordItem">
      {{ chord.replace(/#/g, "&sharp;").replace(/M/g, "") }}
    </li>
    </ul>
  </div>


</div>
</template>

<script setup>
const props = defineProps(["currentChords"]);

</script>

<style scoped>

.chordViz_currentChordContainer{
  @apply text-7xl font-bold h-36 
}


.chordViz_wrapper{
  @apply grid grid-cols-1 grid-rows-2 text-white font-notomusic mt-20;

}

.chordViz_currentChordWrapper{
  @apply flex justify-center h-20
}

.chordViz_additionalChordsWrapper{
@apply flex justify-center
}

.chordViz_additionalChordsContainer{
  @apply flex flex-row place-items-center justify-center gap-3
}
.chordViz_additionalChordItem{
  @apply rounded-md text-purple-900 bg-white font-bold pl-3 pr-3 pt-1 pb-1
}
</style>

<template>
<div class="blipWrapper">
  <div class="blipContainer w-auto" v-on="uiLabel == 'Synth Status' && !status?{click:triggerAudioCtx}:{}">
    <svg :class="{active:status, inactive:!status}" height="20" width="20">
          <circle cx="10" cy="10" r="5" />
      </svg>
      {{ uiLabel }}
  </div>
  <div class="blipExtra teste" v-if="uiLabel == 'Synth Status' && !status">
    No sound? Press to turn synth <span class="text-green-500">on</span>
  </div>
</div>
</template>

<script setup>
defineProps(['uiLabel', 'status']);

function triggerAudioCtx(){
  document.dispatchEvent(new CustomEvent('startAudioCtx'));
}
</script>

<style scoped>

.blipWrapper{
  @apply flex flex-col 
}

.blipContainer{
  @apply flex text-2xs md:text-sm pt-1 pb-1 pl-2 pr-3 rounded-md bg-white text-purple-800 w-20 md:w-32 place-content-center 
}

.blipExtra{
  @apply text-2xs font-medium pt-1 -ml-4 
}
.active{
    @apply fill-green-500;
}
.inactive{
    @apply fill-red-500
}

@keyframes bounce-left {
  0%, 100% {
    transform: translateY(10%);
    animation-timing-function: cubic-bezier(.28,.22,.34,1.22);
  }
  50% {
    transform: translateY(0);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
}
.teste{
    animation: bounce-left 1s infinite;
}
</style>
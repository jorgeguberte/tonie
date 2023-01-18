<template>
<div class="flex  w-30 text-sm">
    <svg :class="{active:status, inactive:!status}" height="20" width="20">
        <circle cx="10" cy="10" r="5" />
    </svg>
    {{uiLabel}}

    
</div>
</template>

<script setup>
defineProps(['uiLabel', 'status'])
</script>

<style scoped>
.active{
    @apply fill-green-500;
}
.inactive{
    @apply fill-red-500
}
</style>
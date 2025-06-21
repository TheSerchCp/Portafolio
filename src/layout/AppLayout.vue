<template>
<div class="w-full">
<TopBar></TopBar>
<div class="flex flex-col min-w-full justify-between pt-[6rem] pr-[2rem] pl-[2rem] pb-0">
    <div class="flex-auto pb-[2rem]">
        <router-view></router-view>
    </div>
</div>
</div>
</template>

<script setup lang="ts">
import TopBar from '@/components/TopBar.vue';


</script>
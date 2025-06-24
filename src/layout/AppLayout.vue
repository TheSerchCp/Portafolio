<template>
    <div v-if="isLoading" class="fixed inset-0 flex items-center justify-center bg-black/90 z-50">
        <div class="border border-white rounded-xl p-2 w-[8rem] h-[8rem] flex items-center justify-center animate-pulse">
            <h1 class="mb-0! font-[SF Compact Rounded] font-extrabold text-white animate-bounce text-[5rem]">S</h1>
        </div>
    </div>
    <div v-else class="min-h-screen overflow-x-hidden">
        <TopBar></TopBar>
        <main class="w-full h-full pt-[22rem] ">
            <router-view></router-view>
        </main>
    </div>
</template>

<script setup lang="ts">
import TopBar from '@/components/TopBar.vue';
import { ref, onBeforeMount } from 'vue';

const isLoading = ref(true);

const loadingDuration = 1500; // 1.5 seconds

onBeforeMount(() => {
    setTimeout(() => {
        isLoading.value = false;
    }, loadingDuration);
});
</script>
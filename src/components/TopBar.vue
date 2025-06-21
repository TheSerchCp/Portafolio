<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const barItems = ref([
    {
        label: 'Acerca de',
        icon: 'pi pi-home',
        to: '/'
    },
    {
        label: 'Experiencia',
        icon: 'pi pi-info',
        to: '/'
    },
    {
        label: 'Contacto',
        icon: 'pi pi-envelope',
        to: '/'
    }
]);

const goTo = (path: string) => {
    router.push(path);
};

//Logica para animcaion de aparicion
const isVisible = ref(false);
setTimeout(() => {
    isVisible.value = true;
}, 200);

</script>

<template>
<div class="fixed h-[4rem] z-[997] w-full px-[1rem] py-[2rem] flex justify-between items-center top-0 left-0 border-b border-white transition-all ease-in duration-500"
:class="{'translate-y-0 opacity-100': isVisible, '-translate-y-10 opacity-0': !isVisible }">
    <div class="flex-none">
        <div class="border border-white rounded-xl p-2 w-[2rem] h-[2rem] flex items-center justify-center">
            <h1 class="mb-0!">S</h1>
        </div>
    </div>
    <div class="flex-1 flex justify-center">
        <div class="flex items-center gap-6">
            <div
            v-for="(item, index) in barItems"
            :key="index"
            @click="goTo(item.to)"
            class="flex items-center space-x-2 hover:scale-120 cursor-pointer transition-transform duration-200 ease-in-out">
                <span class="font-[SF Compact Rounded] text-lg font-semibold text-white transition transform ease-in duration-200">{{ item.label }}</span>
            </div>
            <!-- <RouterLink
                v-for="(item, index) in barItems"
                :key="index"
                :to="item.to"
                class="flex items-center space-x-2  transition-colors duration-200 hover:!bg-[#8D99AE]">
                     <i :class="item.icon"></i> 
                    <span class="font-[SF Compact Rounded] text-lg font-semibold text-white ">{{ item.label }}</span>
            </RouterLink> -->
        </div>
    </div> 
    <div class="flex-none justify-end">
        <div class="border-1 border-[#FF2E63] w-[3rem] h-[2rem] rounded-xl flex items-center justify-center p-2 transition-transform duration-200 ease-in-out hover:scale-120 cursor-pointer">
            <h1>CV</h1>
        </div>
    </div>
</div>
</template>
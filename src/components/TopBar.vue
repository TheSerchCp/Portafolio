<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const barItems = ref([
    {
        label: 'Acerca de',
        icon: 'pi pi-user',
        to: '/'
    },
    {
        label: 'Experiencia',
        icon: 'pi pi-briefcase',
        to: '/'
    },
     {
        label: 'Proyectos',
        icon: 'pi pi-folder-open',
        to: '/'
    },
    {
        label: 'Contacto',
        icon: 'pi pi-comment',
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
<div class="fixed h-[4rem] z-[997] w-full px-[1rem] py-[2rem] flex justify-around items-center top-0 left-0 transition-all ease-in duration-500 bg-black/60 backdrop-blur-lg!"
:class="{'translate-y-0 opacity-100': isVisible, '-translate-y-10 opacity-0': !isVisible }">
    <div class="flex">
        <div class="bg-gradient-to-r from-[#FF2E63] to-[#EF233C] rounded-lg p-2 w-[2.5rem] h-[2.5rem] flex items-center justify-center">
            <h1 class="mb-0! font-[SF Compact Rounded] font-bold! text-white text-lg">S</h1>
        </div>
    </div>
    <div class="flex">
        <div class="flex items-center gap-6">
            <div
            v-for="(item, index) in barItems"
            :key="index"
            @click="goTo(item.to)"
            class="flex items-center space-x-2 cursor-pointer transition-transform duration-200 ease-in-out group">
                <li class="pi" :class="item.icon + ' text-white text-2xl group-hover:text-[#FF2E63] transition transform ease-in duration-200'"></li>
                <span class="ml-1! font-[SF Compact Rounded] text-md font-semibold! text-white group-hover:text-[#FF2E63] transition transform ease-in duration-200">{{ item.label }}</span>
            </div>
        </div>
    </div> 
    <div class="flex">
        <div class="bg-gradient-to-r from-[#FF2E63] to-[#EF233C] w-[10rem] h-[2.5rem] rounded-lg flex items-center justify-center p-2 transition-transform duration-200 ease-in-out hover:opacity-50 cursor-pointer">
            <h1 class="font-[SF Compact Rounded] text-lg font-bold! text-white">Descargar CV</h1>
        </div>
    </div>
</div>
</template>
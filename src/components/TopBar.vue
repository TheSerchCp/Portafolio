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
const isMenuOpen = ref(false);
setTimeout(() => {
    isVisible.value = true;
}, 200);

</script>

<template>
    <nav class="fixed z-50 top-0 left-0 right-0 transition-all ease-in duration-500 bg-black/60 backdrop-blur-md! border-b border-gray-500"
        :class="{ 'translate-y-0 opacity-100': isVisible, '-translate-y-10 opacity-0': !isVisible }">
        <div class=" mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between items-center h-16">
                <!--Logo -->
                <div
                    class="flex-shrink-0 bg-gradient-to-r from-[#FF2E63] to-[#EF233C] rounded-lg  flex items-center justify-center">
                    <h1 class="mb-0! font-[SF Compact Rounded] font-bold! text-white text-lg py-3! px-5!">S</h1>
                </div>
                <!--Menu Desktop-->
                <div class="hidden md:block">
                    <div class="ml-10 flex items-baseline space-x-8">
                        <div v-for="(item, index) in barItems" :key="index" @click="goTo(item.to)"
                            class="flex items-center px-3 py-2 cursor-pointer transition-transform duration-200 ease-in-out group">
                            <li class="pi"
                                :class="item.icon + ' text-white text-2xl group-hover:text-[#FF2E63] transition transform ease-in duration-200'">
                            </li>
                            <span
                                class="ml-1! font-[SF Compact Rounded] text-md font-semibold! text-white group-hover:text-[#FF2E63] transition transform ease-in duration-200">{{
                                item.label }}</span>
                        </div>
                    </div>
                </div>

                <div class="md:hidden">
                    <button @click="isMenuOpen = !isMenuOpen"
                        class="text-[#FF2E63] rounded-lg focus:outline-none hover:bg-[#FF2E63]/40 hover:cursor-pointer transition-colors duration-400">
                        <i class="pi pi-bars text-2xl p-5"></i>
                    </button>
                </div>
            </div>

            <div v-if="isMenuOpen" class="md:hidden">
                <div class="px-2 pt-2 pb-3 space-y-1  border-t border-gray-600 backdrop-blur-md! bg-white/4!">
                    <div v-for="(item, index) in barItems" :key="index" @click="goTo(item.to)"
                        class="block px-3 py-2 cursor-pointer transition-transform duration-200 ease-in-out group">
                        <li class="pi"
                            :class="item.icon + ' text-white text-2xl group-hover:text-[#FF2E63] transition transform ease-in duration-200'">
                        </li>
                        <span
                            class="ml-1! font-[SF Compact Rounded] text-md font-semibold! text-white group-hover:text-[#FF2E63] transition transform ease-in duration-200">{{
                            item.label }}</span>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>
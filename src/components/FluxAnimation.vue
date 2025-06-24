<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { FluxJS, type FluxOptions } from '@pablotheblink/fluxjs'

const canvasRef = ref<HTMLCanvasElement | null>(null);
let flux: FluxJS | null = null;

onMounted(() => {
    if (canvasRef.value) {
        const config: FluxOptions = {
            container: canvasRef.value,
            count: 90,
            color: '#08D9D6',
            size: { min: 2, max: 6, pulse: true, pulseSpeed: 0.03 },
            speed: { min: 0.1, max: 0.32, turbulence: 0.6 },
            opacity: { min: 0.4, max: 0.9, flicker: true },
            connections: {
                enabled: true,
                distance: 120,
                animated: true
            },
            animation: { type: 'spiral', speed: 0.5 },
            effects: {
                glow: true,
                glowSize: 15,
                twinkle: true
            },
            mouse: {
                interact: true,
                distance: 100,
                attraction: 0.08
            },
            events: {
                onError: (error) => console.error('[FluxJS] Error:', error),
                onInit: (fluxInstance) => {
                    //console.log('[FluxJS] Init:', fluxInstance)
                }
            }
        }

        flux = new FluxJS(config)
    }
})

onUnmounted(() => {
    if (flux) {
        flux?.destroy();
    }
});

</script>

<template>
    <div ref="canvasRef" class="fixed inset-0 w-[25rem] h-[25rem]"></div>
</template>
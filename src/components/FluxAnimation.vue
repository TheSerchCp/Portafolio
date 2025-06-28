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
            color: '#B5EAEA',
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
    <div class="w-full h-full rounded-2xl relative overflow-hidden" style="aspect-ratio: 2/1">
        <div ref="canvasRef" class="absolute inset-4 w-[calc(100%-2rem)] h-[calc(100%-1rem)] z-50"></div>
    </div>    
</template>
<template>
      <div class="col-span-6 flex flex-col items-center justify-center">
            <h1 class="text-[2rem] font-[SF Compact Rounded] font-bold! bg-gradient-to-r from-[#08D9D6] to-[#ff2e62] bg-clip-text text-transparent">
            {{ title }}
            </h1>
            <hr class="h-[4px] bg-gradient-to-r from-[#08D9D6] from-5% via-[#ff2e62c5] via-30% to-[#ff2e62] to-95% mt-3! w-[7rem] rounded-md border-none" />
        </div>
</template>

<script  lang="ts">
export default {
    name: 'SectionTitle',
    props: {
        title: {
        type: String,
        required: true
        }
    }
}
</script>
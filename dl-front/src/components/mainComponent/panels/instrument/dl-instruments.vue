<template>
    <div class="inst">
        <dl-inst-size/>
        <dl-inst-clear class="dl-btn"/>
    </div>
</template>

<script>
    export default {
        name: 'dl-instruments',
        components: {
            'dl-inst-size': () => import('./dl-inst-size.vue'),
            'dl-inst-clear': () => import('./dl-inst-clear.vue')
        }
    }
</script>

<style scoped>
    .inst {
        padding: 30px 10px 10px 10px;
        width: 100%;
        height: 100%;
        letter-spacing: 1px;
    }
</style>
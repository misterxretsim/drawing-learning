<template>
    <div class="tsk">
        <h3>Level #{{this.$store.getters.tsk.lvl}}</h3>
        <h5>Draw{{` ${this.$store.getters.tsk.name}`}}</h5>
        <dl-tsk-change class="dl-btn"/>
        <dl-tsk-examine class="dl-btn"/>
        <dl-tsk-lvl />
    </div>
</template>

<script>
    export default {
        name: 'dl-task',
        components: {
            'dl-tsk-change': () => import('./dl-tsk-change.vue'),
            'dl-tsk-examine': () => import('./dl-tsk-examine.vue'),
            'dl-tsk-lvl': () => import('./dl-tsk-lvl.vue')
        },
        mounted () {
            this.$store.dispatch('getTsk')
        }
    }
</script>

<style scoped>
    h5 {
        margin-bottom: 40px;
    }
    .tsk {
        padding: 30px 10px 10px 10px;
        width: 100%;
        height: 100%;
        letter-spacing: 1px;
    }
</style>
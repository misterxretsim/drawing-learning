<template>
    <div class="tskChange" @click="switchTsk()">
        <b>Switch task</b>
    </div>
</template>

<script>
    export default {
        name: 'dl-tsk-change',
        methods: {
            switchTsk () {
                this.$store.dispatch('getTsk')
            }
        }
    }
</script>

<style scoped>

</style>
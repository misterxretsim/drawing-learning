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
                this.$store.dispatch('changeTsk', this.$store.getters.tsk.level)
            }
        }
    }
</script>

<style scoped>

</style>
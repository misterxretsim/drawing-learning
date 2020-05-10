<template>
    <div class="tskExamine"
         @click="examine()">
        <b>Examine</b>
    </div>
</template>

<script>
    export default {
        name: 'dl-tsk-examine',
        methods: {
            examine () {
                this.$store.dispatch('examine', {
                    task: this.$store.getters.tsk.name,
                    level: this.$store.getters.tsk.level
                })
            }
        }
    }
</script>
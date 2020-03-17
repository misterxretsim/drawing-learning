<template>
    <div class="instClear" @click="clear()">
        <b>Clear all</b>
    </div>
</template>

<script>
    export default {
        name: 'dl-inst-clear',
        methods: {
            clear () {
                const that = this;
                that.$store.commit('upUp');
                setTimeout (() => {
                    that.$store.commit('upUp');
                }, 1);
                that.$store.commit('upColor', '#000')
            }
        }
    }
</script>

<style scoped>

</style>
<template>
    <div class="instClear"
         :class="{'btn__active': this.$store.getters.eraser}"
         @click="erase()">
        <b>Eraser</b>
    </div>
</template>

<script>
    export default {
        name: 'dl-inst-clear',
        methods: {
            erase () {
                if (this.$store.getters.eraser) {
                    this.$store.commit('erase');
                    this.$store.commit('upColor', this.$store.getters.color);
                } else {
                    this.color = this.$store.getters.color;
                    this.$store.commit('erase');
                    const c = document.getElementById('can');
                    const ctx = c.getContext('2d');
                    ctx.closePath();
                    ctx.beginPath();
                    ctx.strokeStyle = '#fff'
                }
            }
        }
    }
</script>

<style scoped>
    .btn__active {
        background: rgba(255,255,255,.25);
    }
</style>
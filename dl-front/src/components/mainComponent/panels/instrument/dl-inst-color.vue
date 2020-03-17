<template>
    <div class="chooseColor">
        <center>
            <div class="getColor"
                 @mouseleave="$store.commit('upColorChoose')">
                <div class="color"
                     v-for="(el, i) in this.$store.getters.colors"
                     :key="i"
                     :style="`background:${el};top:${5*(i+1) + 40*i}px`"
                     @click="getColor(el)"></div>
            </div>
        </center>
    </div>
</template>

<script>
    export default {
        name: 'dl-inst-color',
        methods: {
            getColor (color) {
                this.$store.commit('upColorChoose');
                this.$store.commit('upColor', color)
            }
        }
    }
</script>

<style scoped>
    .chooseColor {
        transform: rotate(90deg);
    }
    center {
        position: relative;
    }
    .color {
        width: 40px;
        height: 40px;
        border-radius: 20px;
        cursor: pointer;
        position: absolute;
        top: 0;
        margin-left: auto;
        margin-right: auto;
        left: 0;
        right: 0;
        z-index: 10;
        transition: .2s;
        border: 1px solid transparent;
    }
    .color:hover {
        border: 1px solid white;
    }
    .getColor {
        position: absolute;
        top: 100px;
        width: 50px;
        height: 185px;
        background: rgba(150,150,150,.7);
        margin-left: auto;
        margin-right: auto;
        left: 0;
        right: 0;
        border-radius: 25px;
    }
</style>
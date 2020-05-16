<template>
    <div class="chooseSize">
        <h3>Instruments</h3>
        <center>
            <input type="range"
                   v-model="rValue"
                   @input="log()"
                   step="5"
                   min="10"
                   max="50">
<!--            <div class="ex"-->
<!--                 @click="$store.commit('upColorChoose')"-->
<!--                 :style="`width:${rValue}px;height:${rValue}px;background:${this.$store.getters.color}`">-->
<!--            </div>-->
            <div class="ex"
                 :style="`width:${rValue}px;height:${rValue}px;background:${this.$store.getters.color}`">
            </div>
            <h5>{{rValue}}</h5>
            <dl-inst-color v-if="this.$store.getters.colorChoose"/>
        </center>
    </div>
</template>

<script>
    export default {
        name: 'dl-inst-size',
        components: {
            'dl-inst-color': () => import('./dl-inst-color.vue')
        },
        data() {
            return {
                rValue: 10
            }
        },
        methods: {
            log () {
                this.$store.commit('upSize', this.rValue)
            }
        }
    }
</script>

<style scoped>
    h3 {
        margin-bottom: 100px;
    }
    center {
        margin-top: 10px;
        height: 90px;
        position: relative;
    }
    input {
        transform: rotate(-90deg);
        margin-top: 60px;
        cursor: pointer;
    }
    input[type=range]:focus {
        outline: none;
    }
    input[type="range"] {
        display: block;
        -webkit-appearance: none;
        background-color: #bdc3c7;
        height: 4px;
        border-radius: 5px;
        outline: 0;
    }
    input[type="range"]::-webkit-slider-thumb {
        -webkit-appearance: none;
        background: #24f2ad;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        border: 6px solid white;
        cursor: pointer;
        margin-bottom: 1px;
    }
    h5 {
        position: absolute;
        top: 5%;
        left: 80%;
        transform: translateY(-50%) translateX(-50%);
    }
    .ex {
        background: #000;
        border-radius: 50%;
        position: absolute;
        top: 5%;
        left: 20%;
        transform: translateY(-50%) translateX(-50%);
        /*cursor: pointer;*/
        transition: .2s;
        border: 1px solid transparent;
    }
    /*.ex:hover {*/
    /*    border: 1px solid white;*/
    /*}*/
</style>
<template>
    <svg :height="this.$store.getters.height" :class="svgClass" width="250">
        <line x1="5" y1="0" x2="5" :y2="this.$store.getters.height" id="i1"></line>
        <line x1="65" y1="0" x2="65" :y2="this.$store.getters.height" id="i2"></line>
        <line x1="125" y1="0" x2="125" :y2="this.$store.getters.height" id="i3"></line>
        <line x1="185" y1="0" x2="185" :y2="this.$store.getters.height" id="i4"></line>
        <line x1="245" y1="0" x2="245" :y2="this.$store.getters.height" id="i5"></line>
    </svg>
</template>

<script>
    export default {
        name: 'dl-svg-lines',
        props: {
            svgClass: String
        },
        created () {
            this.$store.commit('changeH')
        }
    }
</script>

<style scoped>

    svg {
        position: absolute;
        right: 20px;
        top: 0;
    }
    .startAnim {
        animation: s-lines 3s 1;
    }
    .mainAnim {
        bottom: 0 !important;
        animation: m-lines 1.5s 1;
    }
    line {
        stroke-width: 5;
    }
    #i1 {
        stroke: #ffc700;
    }
    #i2 {
        stroke: #24f2ad;
    }
    #i3 {
        stroke: #2f9bff;
    }
    #i4 {
        stroke: #7218ff;
    }
    #i5 {
        stroke: #ff3986;
    }

    @keyframes s-lines {
        0%{
            height: 0;
        }
    }
    @keyframes m-lines {
        100%{
            height: 0;
        }
    }
</style>
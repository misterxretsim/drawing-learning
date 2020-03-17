<template>
    <div id="dl-main">
        <div class="center" v-if="this.$store.getters.lines">
            <h1>welcome to</h1>
            <h1>drawing learning</h1>
            <anim-lines svgClass="mainAnim" />
        </div>
        <dl-panel v-if="!this.$store.getters.lines" side="left"/>
        <dl-canvas v-if="!this.$store.getters.lines && this.$store.getters.up"/>
        <dl-panel v-if="!this.$store.getters.lines && widthCondition" side="right"/>
    </div>
</template>

<script>
    export default {
        name: 'dl-main',
        components: {
            'anim-lines': () => import('../startComponent/dl-svg-lines.vue'),
            'dl-canvas': () => import('./dl-canvas.vue'),
            'dl-panel': () => import('./panels/dl-panel.vue')
        },
        created () {
            setTimeout(this.delLines, 1450);
        },
        methods: {
            delLines () {
                this.$store.commit('changeLines')
            },
            widthCondition () {
                return ((document.body.offsetWidth - document.body.offsetHeight)/2) - 10 > 159
            }
        }
    }
</script>

<style scoped>
    body, html {
        background: rgb(35, 41, 47);
        overflow: hidden;
    }

    #dl-main {
        width: 100%;
        height: 100vh;
        background: rgb(35, 41, 47);
        color: white;
        transition: 3s;
        padding-top: 0;
        animation: pt 1.5s 1;
    }

    @keyframes pt {
        0%{
            padding-top: calc(50vh - 2.5rem*3);
        }
        100%{
            padding-top: calc(50vh - 2.5rem*3);
        }
    }

    @font-face {
        font-family: ColorTube;
        font-weight: normal;
        font-style: normal;
        src: local('ColorTube'), url('../../assets/fonts/ColorTube/ColorTube-Regular.ttf') format('truetype');
    }
    h1 {
        font-family: 'ColorTube', serif;
        display: block;
        line-height: 1.8;
        letter-spacing: 4px;
        margin-left: 15%;
        animation: text 1.5s 1;
    }
    .center {
        text-align: left;
        height: 150px;
    }
    @keyframes text {
        100%{
            opacity: 0;
        }
    }
</style>
<template>
    <div id="startAnimation" @click="onClick">
        <div class="center">
            <h1>welcome to</h1>
            <h1>drawing learning</h1>
            <dl-svg-lines svgClass="startAnim" />
        </div>
    </div>
</template>

<script>
    export default {
        name: 'start-anim',
        components: {
            'dl-svg-lines': () => import('./dl-svg-lines.vue')
        },
        methods: {
            onClick () {
                this.$store.commit('changeAnim')
            }
        }
    }
</script>

<style scoped>
    body {
        background: rgb(35, 41, 47);
    }

    #startAnimation {
        width: 100%;
        height: 100vh;
        background: rgb(35, 41, 47);
        cursor: pointer;
        color: white;
        transition: 3s;
        padding-top: calc(50vh - 2.5rem*3);
    }

    @font-face {
        font-family: ColorTube;
        font-weight: normal;
        font-style: normal;
        src: local('ColorTube'),
            url('../../assets/fonts/ColorTube/ColorTube-Regular.otf') format('opentype'),
            url('../../assets/fonts/ColorTube/ColorTube-Regular.ttf') format('truetype');
    }
    h1 {
        font-family: 'ColorTube', serif;
        display: block;
        line-height: 1.8;
        letter-spacing: 4px;
        margin-left: 15%;
        animation: text 3s 1;
    }
    .center {
        text-align: left;
        height: 150px;
    }

    @keyframes text {
        0%{
            opacity: 0;
            margin-left: 0;
        }
        30%{
            margin-left: 0;
            transform: rotateX(0deg);
            letter-spacing: 4px;
        }
        40%{
            opacity: 1;
            color: white;
        }
        50%{
            color: #ffc700;
        }
        60%{
            color: #24f2ad;
            transform: rotateX(40deg);
        }
        68%{
            letter-spacing: 6px;
        }
        70%{
            color: #2f9bff;
        }
        80%{
            color: #7218ff;
            margin-left: 18%;
        }
        90%{
            color: #ff3986;
        }
        98%{
            letter-spacing: 4px;
        }
    }
</style>
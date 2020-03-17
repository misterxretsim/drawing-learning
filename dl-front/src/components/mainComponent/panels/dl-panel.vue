<template>
    <div :class="{'mainPanel': width > 159}"
         :style="`width:${width}px;${side}:10px`">
        <dl-instruments v-if="side === 'right' && width > 159" />
        <dl-task v-if="side === 'left' && width > 159" />
        <div class="circleMenu left" v-if="width < 160"></div>
        <div class="circleMenu right" v-if="width < 160"></div>
    </div>
</template>

<script>
    export default {
        name: 'dl-panel',
        components: {
            'dl-instruments': () => import('./instrument/dl-instruments.vue'),
            'dl-task': () => import('./task/dl-task.vue')
        },
        props: {
            side: String
        },
        data() {
            return {
                width: null,
                height: null
            }
        },
        methods: {
            getWidth () {
                return ((document.body.offsetWidth - document.body.offsetHeight)/2) - 10
            },
            getHeight () {
                return document.body.offsetHeight - 20
            },
            onResize () {
                this.width = this.getWidth();
                this.height = this.getHeight()
            }
        },
        mounted () {
            window.addEventListener('resize', this.onResize);
            this.onResize()
        },
    }
</script>

<style scoped>
    .mainPanel {
        position: absolute;
        top: 10px;
        height: calc(100vh - 20px);
        animation: fade 1.5s 1;
    }
    @keyframes fade {
        0%{
            opacity: 0;
        }
        100%{
            opacity: 1;
        }
    }
    .circleMenu {
        width: 40px;
        height: 40px;
        position: absolute;
        top: 10px;
        border-radius: 50%;
        background: #ff3986;

        cursor: pointer;
    }
    .left {
        left: 10px;
    }
    .right {
        right: 10px;
    }
</style>
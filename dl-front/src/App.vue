<template>
    <div id="app">
        <index-component />
    </div>
</template>

<script>
    export default {
        name: 'App',
        components: {
            'index-component': () => import('./components/index.vue')
        },
        mounted () {
            window.addEventListener('resize', this.onResize);
        },
        methods: {
            onResize () {
                this.$store.commit('changeH')
            }
        }
    }
</script>

<style>
    body {
        width: 100%;
        height: 100vh;
    }
    body, html {
        background-color: rgb(35, 41, 47) !important;
        overflow: hidden;
    }
</style>
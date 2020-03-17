<template>
    <div>
        <start-anim v-if="this.$store.getters.anim" />
        <dl-main v-else/>
<!--        <h1 @click="get" v-else>Get</h1>-->
<!--        <h1 v-for="el in this.$store.getters.pics" :key="el">Post</h1>-->
    </div>
</template>

<script>
    import DlMain from "./mainComponent/dl-main";
    export default {
        name: 'index-component',
        components: {
            DlMain,
            'start-anim': () => import('./startComponent/dl-start-anim.vue')
        }
        // methods: {
        //     get () {
        //         this.$store.dispatch('getPics')
        //     }
        // }
    }
</script>

<style>
    .dl-btn {
        border-radius: 5px;
        margin-left: -5px;
        margin-top: 10px;
        margin-bottom: 10px;
        width: calc(100% + 10px);
        max-width: 180px;
        background: rgba(255,255,255,.1);
        padding: 10px 15px 10px 15px;
        cursor: pointer;
        transition: .2s;
    }
    .dl-btn:hover {
        background: rgba(255,255,255,.2);
    }
</style>
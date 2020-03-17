import Vue      from 'vue'
import Vuex     from 'vuex'
import tsk      from './modules/tsk'
import settings from './modules/settings'

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        tsk,
        settings
    },
    mutations: {
        changeH (state) {
            state.height = window.innerHeight
        },
        changeAnim (state) {
            state.anim = !state.anim
        },
        changeLines (state) {
            state.lines = !state.lines
        },
        upColorChoose (state) {
            state.colorChoose = !state.colorChoose
        }
    },
    state: {
        anim: true,
        lines: true,
        height: 0,
        colorChoose: false
    },
    getters: {
        height: state => state.height,
        anim: state => state.anim,
        lines: state => state.lines,
        colorChoose: state => state.colorChoose
    }
})

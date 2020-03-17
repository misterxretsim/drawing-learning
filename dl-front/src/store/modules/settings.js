export default {
    actions: {},
    mutations: {
        upColor (state, color) {
            state.color = color;
            const c = document.getElementById('can');
            const ctx = c.getContext('2d');
            ctx.closePath();
            ctx.beginPath();
            ctx.strokeStyle = color
        },
        upSize (state, size) {
            state.size = size;
            const c = document.getElementById('can');
            const ctx = c.getContext('2d');
            ctx.closePath();
            ctx.beginPath();
            ctx.lineWidth = size;
        },
        upUp (state) {
            state.up = !state.up;
            state.first = false
        }
    },
    state: {
        color: '#000',
        colors: [
            '#000',
            '#f00',
            '#0f0',
            '#00f'
        ],
        size: 10,
        first: true,
        up: true
    },
    getters: {
        colors: (state) => state.colors,
        color: (state) => state.color,
        size: (state) => state.size,
        first: (state) => state.first,
        up: (state) => state.up
    }
}
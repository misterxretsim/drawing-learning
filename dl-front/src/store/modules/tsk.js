export default {
    actions: {
        async getTsk (ctx) {
            const rs = await fetch('/api/tsk', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                }
            });
            if (rs.ok) {
                const res =  await rs.json();
                ctx.commit('upTsk', res)
            } else {
                console.log('Ошибка HTTP: ' + rs.status);
            }
        }
    },
    mutations: {
        upTsk (state, tsk) {
            state.tsk = tsk
        }
    },
    state: {
        tsk: {}
    },
    getters: {
        tsk: (state) => state.tsk
    }
}
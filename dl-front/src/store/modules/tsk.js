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
                const res = await rs.json();
                ctx.commit('upTsk', res)
            } else {
                console.log('Ошибка HTTP: ' + rs.status);
            }
        },
        async changeTsk (ctx, level) {
            const rs = await fetch('/api/tsk', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify({level: level})
            });
            if (rs.ok) {
                const res = await rs.json();
                ctx.commit('upTsk', res)
            } else {
                console.log('Ошибка HTTP: ' + rs.status);
            }
        },
        async examine (ctx, obj) {
            const rs = await fetch('/api/examine', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify({image: 123, task: obj.task, level: obj.level})
            });
            if (rs.ok) {
                const res = await rs.json();
                if (res.result) {
                    ctx.commit('upTsk', res.task)
                } else {
                    alert('😥')
                }
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
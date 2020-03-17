<template>
    <div class="canvas"
         :class="{'first': this.$store.getters.first}"
         :style="`width:${size()}px;height:${size()}px`">
        <canvas id="can"
                @mousedown="handleMouseDown"
                @mouseup="handleMouseUp"
                @mousemove="handleMouseMove"
                :width="size()"
                :height="size()"
        >Your browser does not support canvas.</canvas>
    </div>
</template>

<script>
    export default {
        name: 'dl-canvas',
        data () {
            return {
                mouse: {
                    current: {
                        x: 0,
                        y: 0
                    },
                    previous: {
                        x: 0,
                        y: 0
                    },
                    down: false
                }
            }
        },
        computed: {
            currentMouse () {
                const c = document.getElementById('can');
                const rect = c.getBoundingClientRect();
                return {
                    x: this.mouse.current.x - rect.left,
                    y: this.mouse.current.y - rect.top
                }
            }
        },
        methods: {
            size () {
              return document.body.offsetHeight - 20
            },
            draw () {
                if (this.mouse.down ) {
                    const c = document.getElementById('can');
                    const ctx = c.getContext('2d');
                    ctx.strokeSstyle = this.$store.getters.color;
                    ctx.lineCap = 'round';
                    ctx.lineJoin = 'round';
                    ctx.lineWidth = this.$store.getters.size;
                    ctx.lineTo(this.currentMouse.x, this.currentMouse.y);
                    ctx.stroke()
                }
            },
            handleMouseDown (e) {
                this.mouse.down = true;
                this.mouse.current = {
                    x: e.pageX,
                    y: e.pageY
                };
                const c = document.getElementById('can');
                const ctx = c.getContext('2d');
                ctx.moveTo(this.currentMouse.x, this.currentMouse.y)
            },
            handleMouseUp () {
                this.mouse.down = false;
            },
            handleMouseMove (e) {
                this.mouse.current = {
                    x: e.pageX,
                    y: e.pageY
                };
                this.draw(e)
            }
        }
    }
</script>

<style scoped>
    .canvas {
        margin: auto;
        margin-top: 10px;
    }
    .first {
        animation: fade 1.5s 1;
    }
    #can {
        background: white;
        border-radius: 5px;
    }
    @keyframes fade {
        0%{
            opacity: 0;
        }
        100%{
            opacity: 1;
        }
    }
</style>
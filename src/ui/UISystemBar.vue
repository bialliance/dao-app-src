<template>
    <v-system-bar
        :color="colorComputed"
        fixed
        :height="height"
        :style="styleComputed"
    />
</template>

<script>
    export default {
        name: 'UISystemBar',

        data: () => ({
            height: 200,
        }),

        computed: {
            colorComputed() {
                return 'primary darken-2'
            },

            styleComputed() {
                return {
                    top: `-${this.height - 1}px`,
                }
            },
        },
    }
</script>

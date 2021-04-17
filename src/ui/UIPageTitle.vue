<template>
    <div>
        <h1 class="page-title">{{ title }}</h1>
    </div>
</template>

<script>
    import { forEach as _forEach } from 'lodash'

    export default {
        name: 'UIPageTitle',

        computed: {
            title() {
                let title
                _forEach(this.$route.matched, (route) => {
                    const screenOptions = route.meta?.screenOptions

                    if (screenOptions?.title) {
                        title = screenOptions.title
                    }
                })

                return title
            },
        },
    }
</script>

<style lang="scss">
    .page-title {
        font-size: 60px;
    }
</style>

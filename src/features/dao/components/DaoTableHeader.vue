<template>
    <div class="table-header">
        <div class="table-header__content">
            <v-row align="center" justify="start">
                <v-col cols="3"><span>Products</span></v-col>
                <v-col cols="2"><span>Network</span></v-col>
                <v-col cols="3"><span>Total Value Locked (TLV)</span></v-col>
                <v-col cols="3"><span>Annual Percentage Yield</span></v-col>
                <v-col cols="1"></v-col>
            </v-row>
        </div>
        <UICiz />
    </div>
</template>

<script>
    import UICiz from '_ui/UICiz'

    export default {
        name: 'DaoTableHeader',

        components: {
            UICiz,
        },
    }
</script>

<style lang="scss" scoped>
.table-header {
    font-size: 14px;
    line-height: 22px;
    padding: 0 64px;

    &__content {
        padding: 35px 0;
    }
}
</style>

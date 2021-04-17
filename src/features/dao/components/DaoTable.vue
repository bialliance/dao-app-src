<template>
    <div class="table">
        <div class="table__inner">
            <DaoTableHeader />
            <DaoTableRow v-for="i in 5" :key="i" />
        </div>
    </div>
</template>

<script>
    import DaoTableHeader from './DaoTableHeader'
    import DaoTableRow from './DaoTableRow'

    export default {
        name: 'DaoTable',

        components: {
            DaoTableHeader,
            DaoTableRow,
        },
    }
</script>

<style lang="scss" scoped>
    .table {
        border-radius:     20px;
        box-shadow:        0 0 6px 0 rgba(157, 96, 212, 0.5), 1px 1000px 1px #ffffff inset;
        border:            solid 2px transparent;
        background-image:  linear-gradient(90deg, #6280ec 17.71%, #be56fe 87.81%), linear-gradient(90deg, #6280ec 17.71%, #be56fe 87.81%);
        background-origin: border-box;
        background-clip:   content-box, border-box;
        outline:           none;

        &__inner {
            background:    #fbfbfb;
            border-radius: 20px;
        }
    }

</style>

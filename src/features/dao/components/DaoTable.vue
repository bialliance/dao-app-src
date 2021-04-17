<template>
    <div class="table">
        <DaoTableHeader />
        <UICiz />
        <DaoTableRow />
    </div>
</template>

<script>
    import UICiz from '_ui/UICiz'

    import DaoTableHeader from './DaoTableHeader'
    import DaoTableRow from './DaoTableRow'

    export default {
        name: 'DaoTable',

        components: {
            DaoTableHeader,
            DaoTableRow,
            UICiz,
        },
    }
</script>

<style lang='scss'>

    .table {
        border:            1px solid black;
        border-radius:     20px;
        padding:           30px 60px 50px;
        box-shadow:        0 0 6px 0 rgba(157, 96, 212, 0.5);
        border:            solid 2px transparent;
        background-image:  -webkit-linear-gradient(#6280ec, #be56fe), -webkit-linear-gradient(#6280ec, #be56fe);
        background-origin: border-box;
        background-clip:   content-box, border-box;
        // box-shadow:        1px 1000px 1px #ffffff inset;
        outline:           none;
    }

</style>

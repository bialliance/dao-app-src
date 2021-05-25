<template>
    <div style="margin:0px;padding:0px;overflow:hidden">
        <iframe
            id="frame"
            frameborder="0"
            style="overflow:hidden; height: 90vh;width:100%"
            height="100%"
            width="100%"
            src="https://srv1.1clickdao.com/"
            align="left"
        >
            Ваш браузер не поддерживает плавающие фреймы!
        </iframe>
    </div>
    <!--
    <v-container class="investors" fluid>
        <h1 class="investors__title">For Depositors</h1>
        <div class="investors__content">
            <DaoTable />
        </div>
    </v-container> -->
</template>

<script>
// import DaoTable from '_features/dao/components/DaoTable'

    export default {
        name: 'DaoDepositorScreen',

        components: {
        // DaoTable,
        },
    }
</script>

<style lang="scss">
@import "@/sass/_variables.scss";

.investors__title {
    text-align-last: left;
    font-size: $big_font;
    line-height: $big_height;
    font-weight: normal;
    margin-top: 50px;
    margin-bottom: 40px;
    padding-left: 110px;
}
</style>

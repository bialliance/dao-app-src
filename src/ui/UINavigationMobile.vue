<template>
    <div class="navigation-mobile" :class="{'show': show}" @click="closeMenu">
        <nav class="navigation-mobile__nav">
            <ul class="list d-flex align-center flex-column">
                <li class="list__item">
                    <router-link to="/">For investors</router-link>
                </li>
                <li class="list__item">
                    <router-link to="/managers">For DAO Managers</router-link>
                </li>
                <li class="list__item">
                    <router-link to="/dashboard">Dashboard</router-link>
                </li>
                <li class="list__item">
                    <router-link to="/about">About Us</router-link>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
    export default {
        name: 'UINavigationMobile',

        props: {
            show: Boolean,
        },

        methods: {
            closeMenu() {
                this.$emit('closeMenu')
            },
        },
    }
</script>

<style lang='scss'>
    .navigation-mobile {
        top:              0;
        left:             -10000px;
        height:           100vh;
        width:            100vw;
        position:         fixed;
        background-color: rgba(0, 0, 0, 0.5);
        z-index:          5;
    }

    .navigation-mobile.show {
        left: 0px;
    }

    .navigation-mobile__nav {
        height:           100vh;
        width:            100%;
        width:            350px;
        background-color: #ffffff;

        .list {
            width: 100%;
        }

        .list__item {
            margin-top: 50px;
        }
    }
</style>

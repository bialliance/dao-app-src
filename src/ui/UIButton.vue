<template>
    <button
        class="button"
        :class="{'outlined': outlined, 'width-100': width}"
        @click="$emit('click')"
        >
        <template v-if="text">
            <span :class="{'text-brand-gradient': outlined}">{{ text }}</span>
        </template>
        <template v-else>
            <span :class="{'text-brand-gradient': outlined}"><slot /></span>
        </template>
    </button>
</template>

<script>
    export default {
        name: 'UIButton',

        props: {
            text: String,
            outlined: Boolean,
            width: Boolean,
            route: String,
        },

    }
</script>

<style lang='scss'>
    @import '@/sass/_variables.scss';

    .button {
        text-transform:  capitalize;
        font-size:       $menu_font;
        font-weight:     700;
        line-height:     $menu_height;
        border-radius:   20px;
        background:      linear-gradient(90deg, #6280ec 17.71%, #be56fe 87.81%);
        color:           white;
        height:          45px;
        padding:         0 57px;
        display:         flex;
        align-items:     center;
        justify-content: center;
        border:          1px solid linear-gradient(90deg, #6280ec 17.71%, #be56fe 87.81%);
    }

    .outlined {
        box-shadow:        0 0 6px 0 rgba(157, 96, 212, 0.5);
        border:            solid 2px transparent;
        background-image:  linear-gradient(90deg, #6280ec 17.71%, #be56fe 87.81%), linear-gradient(90deg, #6280ec 17.71%, #be56fe 87.81%);
        background-origin: border-box;
        background-clip:   content-box, border-box;
        box-shadow:        1px 1000px 1px #ffffff inset;
        outline:           none;
    }

    .width-100 {
        width: 100%;
    }

</style>

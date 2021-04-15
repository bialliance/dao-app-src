<template>
    <v-switch v-model="model" :disabled="disabled">
        <template v-slot:label>
            <div class="ml-4">
                {{ title }}
                <v-tooltip v-if="tooltip" top>
                    <template v-slot:activator="{ on, attrs }">
                        <v-icon
                            v-bind="attrs"
                            v-on="on"
                            v-text="'$questionCircle'"
                            class="ml-3"
                            small
                        />
                    </template>
                    <span>{{ tooltip }}</span>
                </v-tooltip>
            </div>
        </template>
    </v-switch>
</template>

<script>
    export default {
        name: 'UIDaoAppSwitch',

        props: {
            disabled: { type: Boolean },
            title: { type: String },
            tooltip: { type: String },
            value: { type: Boolean },
        },

        computed: {
            model: {
                get() {
                    return this.value
                },
                set(value) {
                    this.$emit('input', value)
                },
            },
        },
    }
</script>

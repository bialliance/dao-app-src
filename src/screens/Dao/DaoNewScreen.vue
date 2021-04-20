<template>
    <div class="created">
        <div class="container">
            <h1 class="created__title">Create DAO</h1>
            <div class="created__content">
                <v-row>
                    <v-col cols="12" sm="10" md="8" lg="6">
                        <h4 class="input_title">General</h4>
                        <div class="form_group">
                            <div
                                class="input-wrapper d-flex justify-between align-end"
                            >
                                <label class="label first-col" for="name">
                                    DAO name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    class="text_input"
                                    v-model="daoName"
                                />
                            </div>
                            <div
                                class="input-wrapper d-flex justify-between align-end"
                            >
                                <label
                                    class="label first-col"
                                    for="description"
                                >
                                    DAO description
                                </label>
                                <v-textarea
                                    name="description"
                                    class="custom"
                                    v-model="daoDescription"
                                    rows="1"
                                    auto-grow
                                    hide-details
                                />
                            </div>
                        </div>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="12">
                        <h4 class="input_title">Create 2 tokens</h4>
                        <v-row>
                            <v-col cols="12" lg="6">
                                <p class="input__text">
                                    GP token (governance token)
                                </p>
                                <div class="form_group">
                                    <div
                                        class="input-wrapper d-flex justify-between align-end"
                                    >
                                        <label
                                            class="label first-col"
                                            for="name"
                                            >Full token name</label
                                        >
                                        <input
                                            type="text"
                                            name="name"
                                            class="text_input"
                                            v-model="gpTokenName"
                                        />
                                    </div>
                                    <div
                                        class="input-wrapper d-flex justify-between align-end"
                                    >
                                        <label
                                            class="label first-col"
                                            for="description"
                                            >Token symbol</label
                                        >
                                        <input
                                            type="text"
                                            name="description"
                                            class="text_input"
                                            v-model="gpTokenSymbol"
                                        />
                                    </div>
                                </div>
                            </v-col>
                            <v-col cols="12" lg="6">
                                <p class="input__text">
                                    LP token (limited partner token)
                                </p>
                                <div class="form_group">
                                    <div
                                        class="input-wrapper d-flex justify-between align-end"
                                    >
                                        <label
                                            class="label first-col"
                                            for="name"
                                            >Full token name</label
                                        >
                                        <input
                                            type="text"
                                            name="name"
                                            class="text_input"
                                            v-model="lpTokenName"
                                        />
                                    </div>
                                    <div
                                        class="input-wrapper d-flex justify-between align-end"
                                    >
                                        <label
                                            class="label first-col"
                                            for="description"
                                            >Token symbol</label
                                        >
                                        <input
                                            type="text"
                                            name="description"
                                            class="text_input"
                                            v-model="lpTokenSymbol"
                                        />
                                    </div>
                                </div>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="12" md="9" lg="7">
                        <h4 class="input_title">Voting</h4>
                        <div class="form_group">
                            <div
                                class="input-wrapper d-flex justify-between align-end"
                            >
                                <label class="label first-col" for="name">
                                    Support %
                                </label>
                                <div
                                    class="slider_wrapper d-flex justify-start align-end"
                                >
                                    <!-- <v-slider
                                        v-model="ex1"
                                        :color="orange"
                                    ></v-slider> -->

                                    <v-slider
                                        v-model="slider1"
                                        class="align-center"
                                        :max="max"
                                        :min="min"
                                        hide-details
                                    >
                                        <template v-slot:append>
                                            <v-text-field
                                                v-model="slider1"
                                                class="mt-0 pt-0 slider-input"
                                                hide-details
                                                single-line
                                                type="text"
                                                suffix="%"
                                                maxlength="3"
                                            />
                                        </template>
                                    </v-slider>

                                    <!-- <div class="voting__percent">50%</div> -->
                                </div>
                            </div>
                            <div
                                class="input-wrapper d-flex justify-between align-end"
                            >
                                <label
                                    class="label first-col"
                                    for="description"
                                >
                                    Minimum approval %
                                </label>
                                <div
                                    class="slider_wrapper d-flex justify-start align-end"
                                >
                                    <!-- <v-slider
                                        v-model="ex2.val"
                                        :color="ex2.color"
                                    ></v-slider> -->
                                    <v-slider
                                        v-model="slider2"
                                        class="align-center"
                                        :max="max"
                                        :min="min"
                                        hide-details
                                    >
                                        <template v-slot:append>
                                            <v-text-field
                                                v-model="slider2"
                                                class="mt-0 pt-0 slider-input"
                                                hide-details
                                                single-line
                                                type="text"
                                                suffix="%"
                                                maxlength="3"
                                            />
                                        </template>
                                    </v-slider>
                                    <!-- <div class="voting__percent">20%</div> -->
                                </div>
                            </div>
                        </div>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="12" lg="2">
                        <p class="input__text">
                            Vote Duration
                        </p>
                        <div class="form_group">
                            <div
                                class="input-wrapper d-flex justify-between align-end"
                            >
                                <label class="label first-col" for="name">
                                    Days
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    class="text_input"
                                    maxlength="3"
                                    v-model="voteDays"
                                />
                            </div>
                        </div>
                    </v-col>
                    <v-col cols="12" lg="2">
                        <p class="input__text stick">
                            |
                        </p>
                        <div class="form_group">
                            <div
                                class="input-wrapper d-flex justify-between align-end"
                            >
                                <label class="label first-col" for="name">
                                    Hours
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    class="text_input"
                                    maxlength="2"
                                    v-model="voteHours"
                                />
                            </div>
                        </div>
                    </v-col>
                    <v-col cols="12" lg="2">
                        <p class="input__text stick">
                            |
                        </p>
                        <div class="form_group">
                            <div
                                class="input-wrapper d-flex justify-between align-end"
                            >
                                <label class="label first-col" for="name">
                                    Minutes
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    class="text_input"
                                    maxlength="2"
                                    v-model="voteMinutes"
                                />
                            </div>
                        </div>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="auto">
                        <UIButton
                            class="mr-4"
                            color="primary"
                            @click="createDao"
                        >
                            Create DAO
                        </UIButton>
                    </v-col>
                </v-row>
            </div>
        </div>
    </div>
</template>

<script>
import UIButton from "_ui/UIButton";

export default {
    name: "DaoNewScreen",

    components: {
        UIButton
    },
    data() {
        return {
            min: 0,
            max: 100,
            slider1: 40,
            slider2: 40,
            length,
            alert
        };
    },
    // data: () => ({
    //     daoName: "",
    //     ex1: { label: "color", val: 25, color: "orange darken-3" },
    //     ex2: { label: "color", val: 25, color: "orange darken-3" }
    // }),
    methods: {
        createDao: function() {
            const params = {
                daoName: this.daoName,
                daoDescription: this.daoDescription,
                gpTokenName: this.gpTokenName,
                gpTokenSymbol: this.gpTokenSymbol,
                lpTokenName: this.lpTokenName,
                lpTokenSymbol: this.lpTokenSymbol
            };
            // router.push('manager')

            // params.daoName
            // params.daoDescription
            // params.gpTokenName
            // params.gpTokenSymbol
            // params.lpTokenName
            // params.lpTokenSymbol
            // params.votingSupport*
            // params.votingApproval*
            console.log(params);
            this.$bia.createDao(params, () => {
                this.$router.push("manager");
            });
        }
    }
};
</script>

<style lang="scss">
.custom {
    max-height: 12rem;
    overflow: auto;
    background-color: transparent;
    background-image: linear-gradient(to right, #6280ec, #be56fe);
    background-repeat: no-repeat;
    background-position: 0 calc(100% + 3px), 0 0;
    background-size: 100% 3px;
    box-shadow: none;
    border: 0;
    border-bottom: 2px solid #ff005e;
    color: #000000;
    -webkit-font-smoothing: antialiased;
    outline: 0 none;
    border-color: transparent;
    outline: none;
    width: 65%;
    font-size: 20px;
    padding-left: 9px;
    line-height: 20px;
    color: #565656;
}

.stick {
    color: #fff;
}

.custom.v-text-field > .v-input__control > .v-input__slot:before {
    border-style: none;
}

.custom.v-text-field > .v-input__control > .v-input__slot:after {
    border-style: none;
}

.slider-input {
    width: 50px;
    text-align: right;
}

.created {
    text-align: left;
}

.created__title {
    font-size: 60px;
    line-height: 60px;
    margin-bottom: 35px;
}

.input_title {
    font-size: 26px;
    line-height: 22px;
    margin-bottom: 16px;
}

.label {
    font-size: 20px;
    line-height: 22px;
}

.first-col {
    width: 200px;
}

.input-wrapper {
    margin-bottom: 24px;
}

.form_group {
    margin-bottom: 40px;
}

.text_input {
    background-color: transparent;
    background-image: linear-gradient(to right, #6280ec, #be56fe);
    background-repeat: no-repeat;
    background-position: 0 calc(100% + 3px), 0 0;
    background-size: 100% 3px;
    box-shadow: none;
    border: 0;
    border-bottom: 2px solid #ff005e;
    color: #000000;
    -webkit-font-smoothing: antialiased;
    outline: 0 none;
    border-color: transparent;
    outline: none;
    width: 65%;
    font-size: 20px;
    padding-left: 9px;
    line-height: 20px;
    height: 20px;
    color: #565656;
}

.input__text {
    font-size: 18px;
    line-height: 22px;
    margin-bottom: 25px;
}

.slider_wrapper {
    width: 65%;
}

.voting__percent {
    box-shadow: 0 0 6px 0 rgba(157, 96, 212, 0.5);
    border: solid 2px transparent;
    background-image: -webkit-linear-gradient(#6280ec, #be56fe),
        -webkit-linear-gradient(#6280ec, #be56fe);
    background-origin: border-box;
    background-clip: content-box, border-box;
    box-shadow: 1px 1000px 1px #ffffff inset;
    outline: none;
    border-radius: 10px;
    padding: 5px 14px;
}
</style>

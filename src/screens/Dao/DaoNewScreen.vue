<template>
    <div class="created">
        <div class="container">
            <div class="d-flex align-center flex-wrap mb-5">
                <h2 class="about__title pr-10">Create DAO</h2>
                <!-- <UIButton class="invert-gradient">
                    <a
                        href="https://hackerlink.io/en/Grant/RCIS/Round/1/buidl/393"
                        target="_blank"
                        class="text-button-vote"
                    >
                        VOTE
                    </a>
                </UIButton> -->
            </div>
            <div class="created__content">
                <v-row>
                    <v-col cols="6">
                        <h4 class="input_title pb-5">Protocol</h4>
                        <div class="form_group">
                            <div class="switch-button">
                                <span class="active"></span>

                                <button
                                    class="switch-button-case left active-case"
                                >
                                    <v-img
                                        :src="oneClickDao"
                                        width="50"
                                        contain
                                        class="switch-logo mb-2"
                                    />
                                    <span>1clickDAO</span>
                                </button>

                                <button class="switch-button-case right">
                                    <v-img
                                        :src="aragon"
                                        width="50"
                                        contain
                                        class="switch-logo mb-2"
                                    />
                                    <span>Aragon</span>
                                </button>

                                <input
                                    id="platform"
                                    type="text"
                                    name="platform"
                                    value="1clickdao"
                                    hidden
                                />
                            </div>
                        </div>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="12" sm="10" md="8" lg="6">
                        <h4 class="input_title pb-5">General</h4>
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
                        <h4 class="input_title pb-5">Create 2 tokens</h4>
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
                        <h4 class="input_title pb-5">Voting</h4>
                        <div class="form_group">
                            <div
                                class="input-wrapper d-flex justify-between align-center"
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
                                                flat
                                                solo
                                            />
                                        </template>
                                    </v-slider>

                                    <!-- <div class="voting__percent">50%</div> -->
                                </div>
                            </div>
                            <div
                                class="input-wrapper d-flex justify-between align-center"
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
                                                flat
                                                solo
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
                    <v-col cols="12">
                        <h4 class="input_title pb-5 pb-5">Vote Duration</h4>
                        <v-row>
                            <v-col cols="12" lg="2">
                                <div class="form_group vote-custom">
                                    <div class="input-wrapper vote-custom">
                                        <input
                                            type="number"
                                            name="name"
                                            class="text_input vote-duration-input"
                                            maxlength="3"
                                            v-model="voteDays"
                                            placeholder="Days"
                                        />
                                    </div>
                                </div>
                            </v-col>
                            <v-col cols="12" lg="2">
                                <div class="form_group vote-custom">
                                    <div class="input-wrapper vote-custom">
                                        <input
                                            type="text"
                                            name="name"
                                            class="text_input vote-duration-input"
                                            maxlength="2"
                                            v-model="voteHours"
                                            placeholder="Hours"
                                        />
                                    </div>
                                </div>
                            </v-col>
                            <v-col cols="12" lg="2">
                                <div class="form_group vote-custom">
                                    <div class="input-wrapper vote-custom">
                                        <input
                                            type="text"
                                            name="name"
                                            class="text_input vote-duration-input"
                                            maxlength="2"
                                            v-model="voteMinutes"
                                            placeholder="Minutes"
                                        />
                                    </div>
                                </div>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="auto">
                        <UIButton
                            class="mr-4 mt-9 mb-15"
                            color="primary"
                            @click="createDao"
                        >
                            Create DAO
                        </UIButton>
                    </v-col>
                </v-row>
            </div>
        </div>
        <div v-if="creating">
            <v-dialog
                v-model="creating"
                transition="dialog-top-transition"
                max-width="600"
            >
                <template v-slot:default="dialog">
                    <v-card>
                        <v-toolbar color="primary" dark>Info</v-toolbar>
                        <v-card-text>
                            <div class="text-h6 pa-12 text-center">
                                Please wait for 3-5 minutes until DAO deployed
                            </div>
                        </v-card-text>
                        <v-card-actions class="justify-end">
                            <v-btn
                                text
                                @click="
                                    dialog.value = false;
                                    redirect('manager');
                                "
                                >Ok</v-btn
                            >
                        </v-card-actions>
                    </v-card>
                </template>
            </v-dialog>
        </div>
        <div v-else>
            <v-dialog
                v-model="error"
                transition="dialog-top-transition"
                max-width="600"
            >
                <template v-slot:default="dialog">
                    <v-card>
                        <v-toolbar color="#ffc107" dark>Warning</v-toolbar>
                        <v-card-text>
                            <div class="text-h6 pa-12 text-center">
                                {{ errorText }}
                            </div>
                        </v-card-text>
                        <v-card-actions class="justify-end">
                            <v-btn text @click="dialog.value = false">Ok</v-btn>
                        </v-card-actions>
                    </v-card>
                </template>
            </v-dialog>
        </div>
    </div>
</template>

<script>
    import UIButton from '_ui/UIButton'
    import aragon from '@/assets/img/aragon.svg'
    import oneClickDao from '@/assets/img/oneClickDao.svg'

    export default {
        name: 'DaoNewScreen',

        components: {
            UIButton,
        },
        data() {
            return {
                aragon,
                oneClickDao,
                creating: false,
                error: false,
                errorText: '',
                min: 0,
                max: 100,
                slider1: 40,
                slider2: 40,
                length,
                alert,
            }
        },
        mounted: function () {
            // const switchButton = document.querySelector('.switch-button')
            const switchBtnRight = document.querySelector(
                '.switch-button-case.right',
            )
            const switchBtnLeft = document.querySelector('.switch-button-case.left')
            const activeSwitch = document.querySelector('.active')
            const platform = document.querySelector('#platform')

            function switchLeft() {
                switchBtnRight.classList.remove('active-case')
                switchBtnLeft.classList.add('active-case')
                platform.setAttribute('value', '1clickdao')

                activeSwitch.style.left = '0%'
            }

            function switchRight() {
                switchBtnRight.classList.add('active-case')
                switchBtnLeft.classList.remove('active-case')
                platform.setAttribute('value', 'aragon')
                activeSwitch.style.left = '50%'
            }

            switchBtnLeft.addEventListener(
                'click',
                function () {
                    switchLeft()
                },
                false,
            )

            switchBtnRight.addEventListener(
                'click',
                function () {
                    switchRight()
                },
                false,
            )
        },
        methods: {
            createDao: async function () {
                if (!this.walletConnected) {
                    this.$bia.connect(async (data) => {
                        console.log('bia.connect')
                        console.log(data)
                        this.accountAddress = this.$bia.spliceAddress(data.address)
                        this.walletConnected = data.success
                        if ([1, 4, 56, 97].includes(this.$bia.chainId)) {
                            this.error = false
                            this.sendData()
                        } else {
                            this.errorText = await 'Unsupported Metamask Network'
                            this.error = true
                        }
                    })
                } else {
                    this.$bia.setChainId(async (chainId) => {
                        if ([1, 4, 56, 97].includes(chainId)) {
                            this.$bia.appChainId = chainId
                            this.error = false
                            this.sendData()
                        } else {
                            this.errorText = await 'Unsupported Metamask Network'
                            this.error = true
                        }
                    })
                }
            },
            sendData: function () {
                if (this.$bia.appChainId === this.$bia.chainId) {
                    const params = {
                        daoName: this.daoName || '',
                        daoDescription: this.daoDescription || '',
                        gpTokenName: this.gpTokenName || '',
                        gpTokenSymbol: this.gpTokenSymbol || '',
                        lpTokenName: this.lpTokenName || '',
                        lpTokenSymbol: this.lpTokenSymbol || '',
                    }
                    console.log(params)
                    this.$bia.createDao(params, (err) => {
                        if (err) {
                            this.errorText = 'User denied transaction'
                            this.error = true
                        } else {
                            this.creating = true
                        }
                    })
                } else {
                    this.error = true
                }
            },
            redirect: function (path) {
                this.$router.push(path)
            },
        },
    }
</script>

<style lang="scss">
.switch-logo {
    margin: 0 auto;
}
.switch-button {
    border-radius: 20px;
    width: 100%;
    height: 100px;
    text-align: center;
    will-change: transform;
    z-index: 197 !important;
    cursor: pointer;
    transition: 0.3s ease all;
    border: 1px solid #6f56fd;
    &-case {
        display: inline-block;
        background: none;
        width: 49%;
        height: 90%;
        color: #151515;
        position: relative;
        border: none;
        transition: 0.3s ease all;
        text-transform: uppercase;
        letter-spacing: 5px;
        padding-bottom: 1px;
        &:hover {
            color: grey;
            cursor: pointer;
        }
        &:focus {
            outline: none;
        }
    }
    .active {
        color: #fff;
        background: linear-gradient(
            90.31deg,
            #6280ec 17.71%,
            #be56fe 87.81%
        ) !important;
        position: absolute;
        border-radius: 18px;
        left: 0;
        top: 0;
        width: 50%;
        height: 100%;
        z-index: -1;
        transition: 0.3s ease-out all;
        &-case {
            color: #fff;
        }
    }
}

.vote-custom {
    margin-bottom: 0 !important;
}
.vote-duration-input {
    font-size: 16px !important;
    width: 100% !important;
    border: 1px solid #6f56fd !important;
    border-radius: 10px !important;
    height: 40px !important;
    padding: 0 10px !important;
}
::-webkit-input-placeholder {
    text-align: right;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}
.v-application .v-slider__track-background.primary.lighten-3 {
    background-color: #dddddd !important;
}
.v-application .v-slider__track-fill.primary {
    background: linear-gradient(
        90.31deg,
        #6280ec 17.71%,
        #be56fe 87.81%
    ) !important;
}
.v-slider__track-background.primary.lighten-3,
.v-slider__track-fill.primary {
    border-radius: 20px !important;
}
.v-slider__thumb:before {
    left: -8px !important;
    top: -9px !important;
}
.v-slider__track-container {
    height: 6px !important;
}
.v-slider__thumb.primary {
    height: 20px !important;
    width: 20px !important;
    left: -12px !important;
}
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
    padding-top: 0;
    margin-top: 0;
}

.stick {
    color: #fff;
}
.v-input__control {
    min-height: 32px !important;
}
.custom.v-text-field > .v-input__control > .v-input__slot:before {
    border-style: none;
}

.custom.v-text-field > .v-input__control > .v-input__slot:after {
    border-style: none;
}

.slider-input {
    border: 1px solid #6f56fd;
    border-radius: 10px;
    width: 80px;
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
.v-input__append-outer {
    margin-left: 20px !important;
    width: 72px !important;
    margin-top: 0;
    margin-bottom: 0;
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

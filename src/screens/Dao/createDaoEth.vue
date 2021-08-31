<template>
    <div class="created">
        <div class="container">
            <div class="d-flex align-center flex-wrap mb-5">
                <h2 class="about__title pr-10">Create DAO</h2>
            </div>
            <div class="created__content" :hidden="hideForm">
                <v-row>
                    <v-col cols="6">
                        <h4 class="input_title pb-5">Protocol</h4>
                        <div class="form_group">
                            <div class="switch-button">
                                <span
                                    class="active"
                                    style="left: 0%; width: 100%"
                                ></span>
                                <button
                                    class="switch-button-case right active-case"
                                >
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
                                    value="aragon"
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
                                    @input="validateName(daoName)"
                                />
                                <div class="free-icon-wrapper">
                                    <div
                                        v-if="daoName && nameFree"
                                        class="name-icon free"
                                    >
                                        <svg
                                            width="13.200000000000001"
                                            height="13.200000000000001"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                fill="currentColor"
                                                stroke="currentColor"
                                                stroke-width="0.5"
                                                d="M18.834 7.166a.565.565 0 00-.8 0l-8.447 8.466-3.622-3.63a.565.565 0 00-.8 0 .568.568 0 000 .802l4.022 4.03a.563.563 0 00.8 0l8.847-8.866a.568.568 0 000-.802z"
                                            ></path>
                                        </svg>
                                    </div>
                                    <div
                                        v-else-if="daoName && !nameFree"
                                        class="name-icon busy"
                                    >
                                        <svg
                                            width="13.200000000000001"
                                            height="13.200000000000001"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                fill="currentColor"
                                                stroke="currentColor"
                                                stroke-width="0.5"
                                                d="M17.858 6.142a.485.485 0 00-.685 0L6.142 17.172a.485.485 0 10.686.686l11.03-11.03a.485.485 0 000-.686z"
                                            ></path>
                                            <path
                                                fill="currentColor"
                                                stroke="currentColor"
                                                stroke-width="0.5"
                                                d="M17.858 17.173l-5.515-5.516-5.516-5.515a.485.485 0 10-.685.685l11.03 11.031a.483.483 0 00.686 0 .485.485 0 000-.685z"
                                            ></path>
                                        </svg>
                                    </div>
                                </div>
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

                                    <div
                                        class="input-wrapper d-flex justify-between align-end"
                                    >
                                        <label
                                            class="label first-col"
                                            for="amount"
                                            >Amount</label
                                        >
                                        <input
                                            type="number"
                                            name="amount"
                                            class="text_input"
                                            v-model="gpAmount"
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

                                    <div
                                        class="input-wrapper d-flex justify-between align-end"
                                    >
                                        <label
                                            class="label first-col"
                                            for="amount"
                                            >Amount</label
                                        >
                                        <input
                                            type="number"
                                            name="amount"
                                            class="text_input"
                                            v-model="lpAmount"
                                        />
                                    </div>
                                </div>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="12" md="8" lg="6">
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
                                    <v-slider
                                        v-model="supportRequired"
                                        class="align-center"
                                        :max="max"
                                        :min="min"
                                        hide-details
                                    >
                                        <template v-slot:append>
                                            <v-text-field
                                                v-model="supportRequired"
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
                                    <v-slider
                                        v-model="minAcceptanceQuorum"
                                        class="align-center"
                                        :max="max"
                                        :min="min"
                                        hide-details
                                    >
                                        <template v-slot:append>
                                            <v-text-field
                                                v-model="minAcceptanceQuorum"
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
                                </div>
                            </div>
                        </div>
                    </v-col>
                    <v-col cols="12" md="8" lg="6">
                        <h4 class="input_title pb-5">Dot voting</h4>
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
                                    <v-slider
                                        v-model="dotSupportRequired"
                                        class="align-center"
                                        :max="max"
                                        :min="min"
                                        hide-details
                                    >
                                        <template v-slot:append>
                                            <v-text-field
                                                v-model="dotSupportRequired"
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
                                    <v-slider
                                        v-model="dotMinAcceptanceQuorum"
                                        class="align-center"
                                        :max="max"
                                        :min="min"
                                        hide-details
                                    >
                                        <template v-slot:append>
                                            <v-text-field
                                                v-model="dotMinAcceptanceQuorum"
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
                                </div>
                            </div>
                        </div>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="6">
                        <h4 class="input_title pb-5 pb-5">Vote Duration</h4>
                        <v-row>
                            <v-col cols="12" lg="3">
                                <div class="form_group vote-custom">
                                    <div class="input-wrapper vote-custom">
                                        <input
                                            type="number"
                                            min="1"
                                            maxlength="3"
                                            step="1"
                                            name="voteDays"
                                            class="text_input vote-duration-input"
                                            v-model="voteDays"
                                            placeholder="Days"
                                        />
                                    </div>
                                </div>
                            </v-col>
                            <v-col cols="12" lg="3">
                                <div class="form_group vote-custom">
                                    <div class="input-wrapper vote-custom">
                                        <input
                                            type="number"
                                            min="0"
                                            step="1"
                                            name="voteHours"
                                            class="text_input vote-duration-input"
                                            maxlength="2"
                                            v-model="voteHours"
                                            placeholder="Hours"
                                        />
                                    </div>
                                </div>
                            </v-col>
                            <v-col cols="12" lg="3">
                                <div class="form_group vote-custom">
                                    <div class="input-wrapper vote-custom">
                                        <input
                                            type="number"
                                            min="0"
                                            step="1"
                                            name="voteMinutes"
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
                    <v-col cols="6">
                        <h4 class="input_title pb-5 pb-5">Dot Vote Duration</h4>
                        <v-row>
                            <v-col cols="12" lg="3">
                                <div class="form_group vote-custom">
                                    <div class="input-wrapper vote-custom">
                                        <input
                                            type="number"
                                            min="0"
                                            step="1"
                                            name="dotVoteDays"
                                            class="text_input vote-duration-input"
                                            maxlength="3"
                                            v-model="dotVoteDays"
                                            placeholder="Days"
                                        />
                                    </div>
                                </div>
                            </v-col>
                            <v-col cols="12" lg="3">
                                <div class="form_group vote-custom">
                                    <div class="input-wrapper vote-custom">
                                        <input
                                            type="number"
                                            min="0"
                                            step="1"
                                            name="dotVoteHours"
                                            class="text_input vote-duration-input"
                                            maxlength="2"
                                            v-model="dotVoteHours"
                                            placeholder="Hours"
                                        />
                                    </div>
                                </div>
                            </v-col>
                            <v-col cols="12" lg="3">
                                <div class="form_group vote-custom">
                                    <div class="input-wrapper vote-custom">
                                        <input
                                            type="number"
                                            min="0"
                                            step="1"
                                            name="dotVoteMinutes"
                                            class="text_input vote-duration-input"
                                            maxlength="2"
                                            v-model="dotVoteMinutes"
                                            placeholder="Minutes"
                                        />
                                    </div>
                                </div>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="6">
                        <h4 class="input_title pb-5 pb-5 pt-5">
                            Allocations Period
                        </h4>
                        <v-row>
                            <v-col cols="12" lg="3">
                                <div class="form_group vote-custom">
                                    <div class="input-wrapper vote-custom">
                                        <input
                                            type="number"
                                            min="0"
                                            step="1"
                                            name="allocationDays"
                                            class="text_input vote-duration-input"
                                            maxlength="3"
                                            v-model="allocationDays"
                                            placeholder="Days"
                                        />
                                    </div>
                                </div>
                            </v-col>
                            <v-col cols="12" lg="3">
                                <div class="form_group vote-custom">
                                    <div class="input-wrapper vote-custom">
                                        <input
                                            type="number"
                                            min="0"
                                            step="1"
                                            name="allocationHours"
                                            class="text_input vote-duration-input"
                                            maxlength="2"
                                            v-model="allocationHours"
                                            placeholder="Hours"
                                        />
                                    </div>
                                </div>
                            </v-col>
                            <v-col cols="12" lg="3">
                                <div class="form_group vote-custom">
                                    <div class="input-wrapper vote-custom">
                                        <input
                                            type="number"
                                            min="0"
                                            step="1"
                                            name="allocationMinutes"
                                            class="text_input vote-duration-input"
                                            maxlength="2"
                                            v-model="allocationMinutes"
                                            placeholder="Minutes"
                                        />
                                    </div>
                                </div>
                            </v-col>
                        </v-row>
                    </v-col>
                    <v-col cols="6">
                        <h4 class="input_title pb-5 pb-5 pt-5">
                            Finance Budget Period
                        </h4>
                        <v-row>
                            <v-col cols="12" lg="3">
                                <div class="form_group vote-custom">
                                    <div class="input-wrapper vote-custom">
                                        <input
                                            type="number"
                                            min="0"
                                            step="1"
                                            name="financeBudgetDays"
                                            class="text_input vote-duration-input"
                                            maxlength="3"
                                            v-model="financeBudgetDays"
                                            placeholder="Days"
                                        />
                                    </div>
                                </div>
                            </v-col>
                            <v-col cols="12" lg="3">
                                <div class="form_group vote-custom">
                                    <div class="input-wrapper vote-custom">
                                        <input
                                            type="number"
                                            min="0"
                                            step="1"
                                            name="financeBudgetHours"
                                            class="text_input vote-duration-input"
                                            maxlength="2"
                                            v-model="financeBudgetHours"
                                            placeholder="Hours"
                                        />
                                    </div>
                                </div>
                            </v-col>
                            <v-col cols="12" lg="3">
                                <div class="form_group vote-custom">
                                    <div class="input-wrapper vote-custom">
                                        <input
                                            type="number"
                                            min="0"
                                            step="1"
                                            name="financeBudgetMinutes"
                                            class="text_input vote-duration-input"
                                            maxlength="2"
                                            v-model="financeBudgetMinutes"
                                            placeholder="Minutes"
                                        />
                                    </div>
                                </div>
                            </v-col>
                        </v-row>
                    </v-col>
                    <v-col cols="6">
                        <h4 class="input_title pb-5 pb-5 pt-5">Delay Period</h4>
                        <v-row>
                            <v-col cols="12" lg="3">
                                <div class="form_group vote-custom">
                                    <div class="input-wrapper vote-custom">
                                        <input
                                            type="number"
                                            min="0"
                                            step="1"
                                            name="delayDays"
                                            class="text_input vote-duration-input"
                                            maxlength="3"
                                            v-model="delayDays"
                                            placeholder="Days"
                                        />
                                    </div>
                                </div>
                            </v-col>
                            <v-col cols="12" lg="3">
                                <div class="form_group vote-custom">
                                    <div class="input-wrapper vote-custom">
                                        <input
                                            type="number"
                                            min="0"
                                            step="1"
                                            name="delayHours"
                                            class="text_input vote-duration-input"
                                            maxlength="2"
                                            v-model="delayHours"
                                            placeholder="Hours"
                                        />
                                    </div>
                                </div>
                            </v-col>
                            <v-col cols="12" lg="3">
                                <div class="form_group vote-custom">
                                    <div class="input-wrapper vote-custom">
                                        <input
                                            type="number"
                                            min="0"
                                            step="1"
                                            name="delayMinutes"
                                            class="text_input vote-duration-input"
                                            maxlength="2"
                                            v-model="delayMinutes"
                                            placeholder="Minutes"
                                        />
                                    </div>
                                </div>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>
                <!-- <v-row>
                    <v-col cols="12" sm="10" md="8" lg="6">
                        <h4 class="input_title pb-5 pt-5">Token request</h4>
                        <div class="d-flex justify-between align-end">
                            <label class="label first-col" for="tokenRequest">
                                Address
                            </label>
                            <input
                                type="text"
                                name="tokenRequest"
                                class="text_input"
                                v-model="tokenRequest"
                            />
                        </div>
                    </v-col>
                </v-row> -->
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
            <DaoAragonScreen
                :hidden="!hideForm"
                :newDao="newDao"
                :aragonDaoLink="aragonDaoLink"
            />
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
        <div v-if="aragonDaoLink">
            <v-dialog
                v-model="aragonDaoLink"
                transition="dialog-top-transition"
                max-width="600"
            >
                <template v-slot:default="dialog">
                    <v-card>
                        <v-toolbar color="primary" dark>Info</v-toolbar>
                        <v-card-text>
                            <div class="text-h6 pa-12 text-center">
                                <a :href="aragonDaoLink" target="_blank">{{
                                    aragonDaoLink
                                }}</a>
                            </div>
                        </v-card-text>
                        <v-card-actions class="justify-end">
                            <v-btn
                                text
                                @click="
                                    dialog.value = false;
                                    hideForm = !hideForm;
                                    newDao = {
                                        indeterminate: false,
                                        value: 0
                                    };
                                "
                                >Ok</v-btn
                            >
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
    import DaoAragonScreen from '@/screens/Dao/DaoAragonScreen'
    import axios from 'axios'

    export default {
        name: 'DaoNewScreen',

        components: {
            UIButton,
            DaoAragonScreen,
        },
        data() {
            return {
                daoName: '',
                aragon,
                oneClickDao,
                creating: false,
                error: false,
                errorText: '',
                min: 0,
                max: 100,
                supportRequired: 51,
                minAcceptanceQuorum: 25,
                dotSupportRequired: 40,
                dotMinAcceptanceQuorum: 40,
                length,
                alert,
                hideForm: false,
                newDao: { indeterminate: false, value: 0 },
                aragonDaoLink: '',
                installStep: 0,
                gpAmount: 30000,
                lpAmount: 1,
                params: {},
                voteDays: '',
                voteHours: '24',
                voteMinutes: '',
                dotVoteDays: '5',
                dotVoteHours: '',
                dotVoteMinutes: '',
                allocationDays: '3',
                allocationHours: '',
                allocationMinutes: '',
                delayDays: '2',
                delayHours: '',
                delayMinutes: '',
                financeBudgetDays: '7',
                financeBudgetHours: '',
                financeBudgetMinutes: '',
                tokenRequest: '',
                // tokenRequest: '0x17ab5cf2955a31902fb6aa8cd4876ca0f6b3df15',
                nameFree: '',
            }
        },
        methods: {
            format: function (days = 0, hours = 0, minutes = 0) {
                return (
                    Number(minutes) * 60 +
                    Number(hours) * 60 * 60 +
                    Number(days) * 24 * 60 * 60
                )
            },
            createDao: async function () {
                if (!this.nameFree) {
                    this.errorText = 'Name is busy!'
                    this.error = true
                } else if (!this.walletConnected) {
                    this.$bia.connect(async (data) => {
                        console.log('bia.connect')
                        console.log(data)
                        this.accountAddress = this.$bia.spliceAddress(data.address)
                        this.walletConnected = data.success
                        if ([1, 4, 56, 97].includes(this.$bia.chainId)) {
                            this.error = false
                            this.sendData()
                        } else {
                            this.errorText = 'Unsupported Metamask Network'
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
                            this.errorText = 'Unsupported Metamask Network'
                            this.error = true
                        }
                    })
                }
            },
            sendData: async function () {
                if (this.$bia.appChainId === this.$bia.chainId) {
                    this.newDao.indeterminate = true
                    this.params = {
                        platform: document.querySelector('#platform').value || '',
                        daoName: this.daoName || '',
                        daoDescription: this.daoDescription || '',
                        gpTokenName: this.gpTokenName || '',
                        gpTokenSymbol: this.gpTokenSymbol || '',
                        gpAmount:
                            String(this.gpAmount) + '000000000000000000' || '',
                        lpTokenName: this.lpTokenName || '',
                        lpTokenSymbol: this.lpTokenSymbol || '',
                        lpAmount:
                            String(this.lpAmount) + '000000000000000000' || '',
                        votingSettings: [
                            String(this.supportRequired) + '0000000000000000' ||
                                '0',
                            String(this.minAcceptanceQuorum) + '0000000000000000' ||
                                '0',
                            this.format(
                                this.voteDays,
                                this.voteHours,
                                this.voteMinutes,
                            ),
                        ],
                        dotVotingSettings: [
                            String(this.dotMinAcceptanceQuorum) +
                                '0000000000000000' || '0',
                            String(this.dotSupportRequired) + '0000000000000000' ||
                                '0',
                            this.format(
                                this.dotVoteDays,
                                this.dotVoteHours,
                                this.dotVoteMinutes,
                            ),
                        ],
                        appSettings: [
                            this.format(
                                this.allocationDays,
                                this.allocationHours,
                                this.allocationMinutes,
                            ),
                            this.format(
                                this.financeBudgetDays,
                                this.financeBudgetHours,
                                this.financeBudgetMinutes,
                            ),
                            this.format(
                                this.delayDays,
                                this.delayHours,
                                this.delayMinutes,
                            ),
                        ],
                        tokenRequest: this.tokenRequest,
                    }
                    this.hideForm = true
                    const proxyBotParams = {
                        daoName: this.params.daoName,
                        gpTokenName: this.params.gpTokenName,
                        gpTokenSymbol: this.params.gpTokenSymbol,
                        lpTokenName: this.params.lpTokenName,
                        lpTokenSymbol: this.params.lpTokenSymbol,
                        votingSettings: this.params.votingSettings,
                        dotVotingSettings: this.params.dotVotingSettings,
                        gpAmount: this.params.gpAmount,
                        lpAmount: this.params.lpAmount,
                        tokenRequest: this.$bia.tokenRequestAddress,
                        appSettings: this.params.appSettings,
                    }
                    console.log(
                        '------------------ PROXY BOT DATA ------------------',
                    )
                    console.log(this.$bia.proxyBotUrl)
                    console.log(this.$bia.proxyBotAddress)
                    console.log(this.$bia.tokenRequestAddress)
                    console.log(
                        '------------------ PROXY BOT DATA ------------------',
                    )
                    axios
                        .get(`${this.$bia.proxyBotUrl}/status`)
                        .then((res) => {
                            if (res.data.success) {
                                this.$bia.web3.eth
                                    .sendTransaction({
                                        to: this.$bia.proxyBotAddress,
                                        from: this.$bia.accountAddress,
                                        value: this.$bia.web3.utils.toWei(
                                            '1.5',
                                            'ether',
                                        ),
                                    })
                                    .then((hash) => {
                                        console.log(hash.transactionHash)
                                        console.log(proxyBotParams)
                                        axios
                                            .post(
                                                `${this.$bia.proxyBotUrl}/requests`,
                                                {
                                                    tx_hash: hash.transactionHash,
                                                    params: proxyBotParams,
                                                },
                                            )
                                            .then((res) => {
                                                this.newDao.value = 100
                                                this.newDao.indeterminate = false
                                                this.$router.push({
                                                    name: 'DaoManager',
                                                })
                                            })
                                    })
                            } else {
                                this.errorText = 'Proxy Bot is dead'
                                this.error = true
                            }
                        })
                        .catch((e) => {
                            this.errorText = 'Proxy Bot is dead'
                            this.error = true
                            console.log(e)
                        })
                } else {
                    this.error = true
                }
            },
            redirect: function (path) {
                this.$router.push(path)
            },
            validateName: async function (name) {
                this.daoName = name
                    .toLowerCase()
                    // eslint-disable-next-line no-useless-escape
                    .replace(/[&\/\\#,+()$~%.'":*?<>{}!@^_|=`]/g, '')
                    // eslint-disable-next-line no-control-regex
                    .replace(/[^\x00-\x7F]+/g, '')
                    .replace(' ', '')
                const result = await this.$bia.checkName(this.daoName)
                if (result === '0x0000000000000000000000000000000000000000') {
                    this.nameFree = true
                } else {
                    this.nameFree = false
                }
                console.log(result)
            },
        },
    }
</script>

<style lang="scss">
.developing {
    width: 50%;
    height: 100%;
    background: gray;
    position: absolute;
    left: 0;
    border-radius: 18px;
}
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
.free-icon-wrapper {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    height: 40px;
    margin-top: 20px;
    margin-left: 16px;
}
.name-icon {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    color: rgb(255, 255, 255);
}
.name-icon.free {
    background: linear-gradient(90.31deg, #6280ec 17.71%, #be56fe 87.81%);
}
.name-icon.busy {
    background: rgb(255, 105, 105);
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

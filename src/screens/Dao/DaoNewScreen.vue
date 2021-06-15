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
            <div class="created__content" :hidden="hideForm">
                <v-row>
                    <v-col cols="6">
                        <h4 class="input_title pb-5">Protocol</h4>
                        <div class="form_group">
                            <div class="switch-button">
                                <!-- Disable choose -->
                                <!-- <span class="active"></span> -->
                                <span class="active" style="left: 50%;"></span>
                                <!-- Disable choose -->
                                <!-- <button class="switch-button-case left active-case"> -->

                                <span class="developing"></span>

                                <button class="switch-button-case left">
                                    <v-img
                                        :src="oneClickDao"
                                        width="50"
                                        contain
                                        class="switch-logo mb-2"
                                    />
                                    <!-- <span>1clickDAO</span> -->
                                    <span>Developing</span>
                                </button>

                                <!-- Disable choose -->
                                <!-- class="switch-button-case right" -->
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
                                <!-- Disable choose -->
                                <!-- value="1clickdao" -->
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
                                    <!-- <v-slider
                                        v-model="ex1"
                                        :color="orange"
                                    ></v-slider> -->

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
                                    <!-- <div class="voting__percent">20%</div> -->
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
                                            min="0"
                                            step="1"
                                            name="voteDays"
                                            class="text_input vote-duration-input"
                                            maxlength="3"
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
                <v-row>
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
                <!-- <v-row>
                    <v-col cols="auto">
                        <UIButton
                            class="mr-4 mt-9 mb-15"
                            color="primary"
                            @click="finalizeDao2"
                        >
                            Finalize DAO
                        </UIButton>
                    </v-col>
                </v-row> -->
            </div>
            <DaoAragonScreen
                :hidden="!hideForm"
                :newToken="newToken"
                :newManager="newManager"
                :newFinalize="newFinalize"
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
                                    newToken = {
                                        indeterminate: false,
                                        value: 0
                                    };
                                    newManager = {
                                        indeterminate: false,
                                        value: 0
                                    };
                                    newFinalize = {
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
                supportRequired: 40,
                minAcceptanceQuorum: 40,
                dotSupportRequired: 40,
                dotMinAcceptanceQuorum: 40,
                length,
                alert,
                hideForm: false,
                newToken: { indeterminate: false, value: 0 },
                newManager: { indeterminate: false, value: 0 },
                newFinalize: { indeterminate: false, value: 0 },
                aragonDaoLink: '',
                installStep: 0,
                params: {},
                voteDays: 0,
                voteHours: 0,
                voteMinutes: 0,
                dotVoteDays: 0,
                dotVoteHours: 0,
                dotVoteMinutes: 0,
                allocationDays: 0,
                allocationHours: 0,
                allocationMinutes: 0,
                delayDays: 0,
                delayHours: 0,
                delayMinutes: 0,
                tokenRequest: 0,
                financeBudgetDays: 0,
                financeBudgetHours: 0,
                financeBudgetMinutes: 0,
            }
        },
        mounted: async function () {
            // LOCAL STORAGE

            // console.log(localStorage.installStep);
            // console.log(localStorage.params);
            // if (localStorage.installStep == 1) {
            //     this.newToken = { indeterminate: false, value: 100 };
            //     await this.$bia.connect(() => {
            //         this.hideForm = true;
            //         this.sendTokenManager(JSON.parse(localStorage.params)).then(
            //             async (res, err) => {
            //                 if (err) {
            //                     console.log(err);
            //                 } else {
            //                     this.installStep = 2;
            //                     this.finalizeDao(
            //                         JSON.parse(localStorage.params)
            //                     ).then(async (res, err) => {
            //                         if (err) {
            //                             console.log(err);
            //                         } else {
            //                             this.installStep = 0;
            //                             this.aragonDaoLink = res;
            //                         }
            //                     });
            //                 }
            //             }
            //         );
            //     });
            // } else if (localStorage.installStep == 2) {
            //     this.newToken = { indeterminate: false, value: 100 };
            //     this.newManager = { indeterminate: false, value: 100 };
            //     await this.$bia.connect(() => {
            //         this.hideForm = true;
            //         this.finalizeDao(JSON.parse(localStorage.params)).then(
            //             async (res, err) => {
            //                 if (err) {
            //                     console.log(err);
            //                 } else {
            //                     this.installStep = 0;
            //                     this.aragonDaoLink = res;
            //                 }
            //             }
            //         );
            //     });
            // }

            // LOCAL STORAGE

            // const switchButton = document.querySelector('.switch-button')
            const switchBtnRight = document.querySelector(
                '.switch-button-case.right',
            )
            const switchBtnLeft = document.querySelector(
                '.switch-button-case.left',
            )
            const activeSwitch = document.querySelector('.active')
            const platform = document.querySelector('#platform')

            // function switchLeft() {
            //     switchBtnRight.classList.remove('active-case')
            //     switchBtnLeft.classList.add('active-case')
            //     platform.setAttribute('value', '1clickdao')
            //     activeSwitch.style.left = '0%'
            // }

            function switchRight() {
                switchBtnRight.classList.add('active-case')
                switchBtnLeft.classList.remove('active-case')
                platform.setAttribute('value', 'aragon')
                activeSwitch.style.left = '50%'
            }

            switchBtnLeft.addEventListener(
                'click',
                function () {
                // Disable choose
                // switchLeft();
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
            format: function (days = 0, hours = 0, minutes = 0) {
                return (
                    Number(minutes) * 60 +
                    Number(hours) * 60 * 60 +
                    Number(days) * 24 * 60 * 60
                )
            },
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
            sendData: async function () {
                if (this.$bia.appChainId === this.$bia.chainId) {
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
                            String(this.dotSupportRequired) + '0000000000000000' ||
                                '0',
                            String(this.dotMinAcceptanceQuorum) +
                                '0000000000000000' || '0',
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
                    console.log(this.params)
                    if (this.params.platform === '1clickdao') {
                        this.$bia.createDao(this.params, (err) => {
                            if (err) {
                                this.errorText = 'User denied transaction'
                                this.error = true
                            } else {
                                this.creating = true
                            }
                        })
                    } else {
                        this.hideForm = true
                        this.installStep = 0
                        this.sendDataAragon(this.params)
                            .then(async (res, err) => {
                                if (err) {
                                    console.log(`wait error: ${err}`)
                                    console.log(err)
                                } else {
                                    this.installStep = 1
                                    this.sendTokenManager(this.params).then(
                                        async (res, err) => {
                                            if (err) {
                                                console.log(`wait error: ${err}`)
                                                console.log(err)
                                            } else {
                                                this.installStep = 2
                                                this.finalizeDao(this.params).then(
                                                    async (res, err) => {
                                                        if (err) {
                                                            console.log(
                                                                `wait error: ${err}`,
                                                            )
                                                            console.log(err)
                                                        } else {
                                                            this.installStep = 0
                                                            this.aragonDaoLink = res
                                                        }
                                                    },
                                                )
                                            }
                                        },
                                    )
                                }
                            })
                            .catch((e) => {
                                console.log(e)
                            })
                    }
                } else {
                    this.error = true
                }
            },
            writeDaoFile: function (params) {
                axios
                    .post('http://localhost:3080/', params)
                    .then((response) => {
                        if (response.status === 200) {
                            console.log('Dao file is memorized')
                        }
                    })
                    .catch((e) => {
                        console.log(e)
                    })
            },
            finalizeDao: function (params) {
                return new Promise((resolve, reject) => {
                    this.newFinalize.indeterminate = true
                    if (this.$bia.appChainId === this.$bia.chainId) {
                        this.$bia.getNetworkName()
                        console.log(params)
                        this.$bia.finalizeDao(params, (err) => {
                            if (err) {
                                this.errorText = 'User denied transaction'
                                this.error = true
                                reject(err)
                            }
                            this.newFinalize.value = 100
                            this.newFinalize.indeterminate = false
                            console.log('finalize')
                            const daoAddress = `https://${this.$bia.networkName}.client.aragon.org/#/${params.daoName}.aragonid.eth`
                            // this.writeDaoFile({
                            //     accountAddress: this.$bia.accountAddress,
                            //     daoAddress: daoAddress
                            // });
                            localStorage.removeItem('installStep')
                            localStorage.removeItem('params')
                            localStorage.removeItem('hash')
                            resolve(daoAddress)
                        })
                    }
                })
            },
            // finalizeDao2: function () {
            //     this.params = {
            //         platform: document.querySelector('#platform').value || '',
            //         daoName: this.daoName || '',
            //         daoDescription: this.daoDescription || '',
            //         gpTokenName: this.gpTokenName || '',
            //         gpTokenSymbol: this.gpTokenSymbol || '',
            //         gpAmount: String(this.gpAmount) + '000000000000000000' || '',
            //         lpTokenName: this.lpTokenName || '',
            //         lpTokenSymbol: this.lpTokenSymbol || '',
            //         lpAmount: String(this.lpAmount) + '000000000000000000' || '',
            //         votingSettings: [
            //             String(this.supportRequired) + '0000000000000000' || '0',
            //             String(this.minAcceptanceQuorum) + '0000000000000000' ||
            //                 '0',
            //             this.format(this.voteDays, this.voteHours, this.voteMinutes),
            //         ],
            //         dotVotingSettings: [
            //             String(this.dotSupportRequired) + '0000000000000000' || '0',
            //             String(this.dotMinAcceptanceQuorum) + '0000000000000000' ||
            //                 '0',
            //             this.format(
            //                 this.dotVoteDays,
            //                 this.dotVoteHours,
            //                 this.dotVoteMinutes,
            //             ),
            //         ],
            //         appSettings: [
            //             this.format(
            //                 this.allocationDays,
            //                 this.allocationHours,
            //                 this.allocationMinutes,
            //             ),
            //             this.format(
            //                 this.financeBudgetDays,
            //                 this.financeBudgetHours,
            //                 this.financeBudgetMinutes,
            //             ),
            //             this.format(
            //                 this.delayDays,
            //                 this.delayHours,
            //                 this.delayMinutes,
            //             ),
            //         ],
            //         tokenRequest: this.tokenRequest,
            //     }
            //     this.finalizeDao(this.params).then(async (res, err) => {
            //         if (err) {
            //             console.log(err)
            //         } else {
            //             this.installStep = 0
            //             this.aragonDaoLink = res
            //         }
            //     })
            // },
            sendTokenManager: function (params) {
                return new Promise((resolve, reject) => {
                    this.newManager.indeterminate = true
                    if (this.$bia.appChainId === this.$bia.chainId) {
                        console.log(params)
                        this.$bia.sendTokenManager(params, (err) => {
                            if (err) {
                                this.errorText = 'User denied transaction'
                                this.error = true
                                reject(err)
                            }
                            this.newManager.value = 100
                            this.newManager.indeterminate = false
                            console.log('manager')
                            resolve()
                        })
                    }
                })
            },
            sendDataAragon: function (params) {
                return new Promise((resolve, reject) => {
                    this.newToken.indeterminate = true
                    if (this.$bia.appChainId === this.$bia.chainId) {
                        console.log(params)
                        this.$bia.createDao(params, (err) => {
                            if (err) {
                                this.errorText = 'User denied transaction'
                                this.error = true
                                reject(err)
                            }
                            this.newToken.value = 100
                            this.newToken.indeterminate = false
                            console.log('token')
                            resolve()
                        })
                    } else {
                        this.error = true
                    }
                })
            },
            redirect: function (path) {
                this.$router.push(path)
            },
            validateName: function (name) {
                this.daoName = name
                    .toLowerCase()
                    // eslint-disable-next-line no-useless-escape
                    .replace(/[&\/\\#,+()$~%.'":*?<>{}!@^_|=`]/g, '')
                    // eslint-disable-next-line no-control-regex
                    .replace(/[^\x00-\x7F]+/g, '')
            },
        },

    // LOCAL STORAGE

    // watch: {
    //     installStep: function(newInstallStep) {
    //         localStorage.installStep = newInstallStep;
    //     },
    //     params: function(newParams) {
    //         localStorage.params = JSON.stringify(newParams);
    //     }
    // }

    // LOCAL STORAGE
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

<template>
    <v-container>
        <h1 class="created__title">Voting</h1>
        <h4 class="input_title vote-title">Open votes</h4>
        <v-row>
            <template v-for="(openVote, index) in openVotes">
                <v-col class="col-md-4" :key="`dao_${index}`">
                    <v-card flat class="card text-center py-27 height-400px">
                        <v-responsive :aspect-ratio="1" class=" height-320px">
                            <v-container class="fill-height">
                                <v-row justify="center">
                                    <v-col cols="auto col-width-100">
                                        <div>
                                            <div class="agent-wrapper">
                                                <img
                                                    src="@/assets/img/agent.svg"
                                                    alt="flex"
                                                    class="agent"
                                                    width="30"
                                                />
                                                <span class="agent-text"
                                                    >Agent</span
                                                >
                                            </div>
                                        </div>
                                        <div>
                                            <div class="token-title">
                                                <span class="token-id"
                                                    >#138:
                                                </span>
                                                <span class="token-address"
                                                    >Token Request: approve<br />
                                                    0x582528558998723</span
                                                >
                                            </div>
                                        </div>
                                        <div>
                                            <div class="progress-wrapper">
                                                <span class="progress-text"
                                                    >Yes</span
                                                >
                                                <span class="progress-percent"
                                                    >75%</span
                                                >
                                            </div>
                                            <div>
                                                <v-progress-linear
                                                    class="progress-bar"
                                                    value="75"
                                                ></v-progress-linear>
                                            </div>
                                        </div>
                                        <div>
                                            <div class="progress-wrapper">
                                                <span class="progress-text"
                                                    >No</span
                                                >
                                                <span class="progress-percent"
                                                    >5%</span
                                                >
                                            </div>
                                            <div>
                                                <v-progress-linear
                                                    class="progress-bar"
                                                    value="5"
                                                ></v-progress-linear>
                                            </div>
                                        </div>
                                        <div>
                                            <div class="hrefs">
                                                <div class="href-accept">
                                                    Accept
                                                </div>
                                                <div class="href-decline">
                                                    Decline
                                                </div>
                                            </div>
                                        </div>
                                    </v-col>
                                </v-row>
                            </v-container>
                        </v-responsive>
                    </v-card>
                </v-col>
            </template>
        </v-row>
        <h4 class="input_title vote-title">Closed votes</h4>
        <v-row>
            <template v-for="(closeVote, index) in closeVotes">
                <v-col class="col-md-4" :key="`dao_${index}`">
                    <v-card flat class="card text-center py-27 height-400px">
                        <v-responsive :aspect-ratio="1" class="height-320px">
                            <v-container class="fill-height">
                                <v-row justify="center">
                                    <v-col cols="auto col-width-100">
                                        <div>
                                            <div class="agent-wrapper">
                                                <img
                                                    src="@/assets/img/agent.svg"
                                                    alt="flex"
                                                    class="agent"
                                                    width="30"
                                                />
                                                <span class="agent-text"
                                                    >Agent</span
                                                >
                                            </div>
                                        </div>
                                        <div>
                                            <div class="token-title">
                                                <span class="token-id"
                                                    >#138:
                                                </span>
                                                <span class="token-address"
                                                    >Token Request: approve<br />
                                                    0x582528558998723</span
                                                >
                                            </div>
                                        </div>
                                        <div>
                                            <div class="progress-wrapper">
                                                <span class="progress-text"
                                                    >YES</span
                                                >
                                                <span class="progress-percent"
                                                    >75%</span
                                                >
                                            </div>
                                            <div>
                                                <v-progress-linear
                                                    class="progress-bar"
                                                    value="75"
                                                ></v-progress-linear>
                                            </div>
                                        </div>
                                        <div>
                                            <div class="progress-wrapper">
                                                <span class="progress-text"
                                                    >NO</span
                                                >
                                                <span class="progress-percent"
                                                    >5%</span
                                                >
                                            </div>
                                            <div>
                                                <v-progress-linear
                                                    class="progress-bar"
                                                    value="5"
                                                ></v-progress-linear>
                                            </div>
                                        </div>
                                        <div>
                                            <div class="progress-passed">
                                                <div>
                                                    <svg
                                                        width="24"
                                                        height="20"
                                                        viewBox="0 0 20 16"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M19.7071 0.948916C19.3166 0.558369 18.6834 0.558369 18.2929 0.948916L6.31225 12.9297L1.7071 8.3245C1.31659 7.93395 0.683465 7.93399 0.292879 8.3245C-0.0976671 8.71501 -0.0976671 9.34813 0.292879 9.73868L5.60514 15.0509C5.99553 15.4414 6.62912 15.4411 7.01935 15.0509L19.7071 2.36313C20.0976 1.97263 20.0976 1.33946 19.7071 0.948916Z"
                                                            fill="#00D060"
                                                        />
                                                    </svg>
                                                </div>
                                                <span
                                                    class="progress-passed-text"
                                                >
                                                    Passed (enacted)
                                                </span>
                                            </div>
                                        </div>
                                    </v-col>
                                </v-row>
                            </v-container>
                        </v-responsive>
                    </v-card>
                </v-col>
            </template>
        </v-row>
    </v-container>
</template>

<script>
import UIButton from "_ui/UIButton";

export default {
    name: "DaoVoteScreen",

    components: {
        UIButton
    },

    data: () => ({
        openVotes: [
            { title: "openVote1" },
            { title: "openVote2" },
            { title: "openVote3" }
        ],
        closeVotes: [
            { title: "closeVote1" },
            { title: "closeVote2" },
            { title: "closeVote3" }
        ]
    })
};
</script>

<style lang="scss" scoped>
.vote-title {
    margin: 50px 0 35px 0;
}
.agent-wrapper {
    width: 8rem;
    height: 30px;
    display: flex;
    align-items: center;
    background: linear-gradient(
        90.31deg,
        rgba(98, 128, 236, 0.2) 17.71%,
        rgba(190, 86, 254, 0.2) 87.81%
    );
    border-radius: 20px;
    margin: 10px 0;
}
.agent-text {
    padding-left: 1.5rem;
    font-size: 18px;
}
.token-title {
    text-align: left;
    font-size: 24px;
    line-height: 34px;
    padding: 10px 0;
}
.token-title .token-id {
    font-weight: bold;
}
.progress-wrapper {
    font-size: 20px;
}
.progress-text {
    padding: 10px 0;
    float: left;
}
.progress-percent {
    padding: 10px 0;
    float: right;
}

//ne rabotayet
//TODO
.v-application .primary {
    background: linear-gradient(
        90deg,
        #6280ec 17.71%,
        #be56fe 87.81%
    ) !important;
    background-color: none !important;
    border-color: none !important;
}

.hrefs {
    padding-top: 30px;
    display: flex;
    justify-content: space-around;
    font-size: 26px;
    user-select: none;
}
.href-accept {
    color: #00d060;
}
.href-accept:hover {
    cursor: pointer;
}
.href-decline {
    color: #6280ec;
}
.href-decline:hover {
    cursor: pointer;
}
.progress-bar {
    border-radius: 20px;
}
.check-mark {
    width: 40px;
}
.progress-passed {
    display: flex;
    align-items: center;
    padding-top: 30px;
}
.progress-passed-text {
    padding-left: 12px;
    color: #00d060;
    font-size: 24px;
}
.card {
    border: 1px solid #008cb9;
    border-radius: 20px !important;
    padding: 27px 27px;
}
.card__info {
    background: linear-gradient(
        90.31deg,
        rgba(98, 128, 236, 0.2) 17.71%,
        rgba(190, 86, 254, 0.2) 87.81%
    );
    padding: 17px 25px;
    border-radius: 20px;
    text-align: left;
    font-size: 14px;
    line-height: 14px;
}

.card__number {
    font-weight: bold;
}
@media (min-width: 1900px) {
    .col-width-100 {
        width: 100%;
    }
    .height-400px {
        height: 400px;
    }
    .height-320px {
        height: 320px;
    }
}
</style>

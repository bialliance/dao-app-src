<template>
    <v-container :class="{ 'fill-height': !daoList.length }">
        <div class="d-flex align-center flex-wrap mb-8">
            <h2 class="about__title pr-10">For DAO Managers</h2>
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
        <v-row
            :align="daoList.length ? '' : 'center'"
            :justify="daoList.length ? '' : 'center'"
        >
            <template v-for="(dao, index) in daoList">
                <v-col class="col-md-4" :key="`dao_${index}`">
                    <v-card flat class="card text-center pa-3">
                        <v-responsive :aspect-ratio="1.5">
                            <v-container class="fill-height">
                                <v-row justify="center">
                                    <v-col cols="auto w-100">
                                        <div>
                                            <img
                                                v-bind:src="chainLogo"
                                                alt="flex"
                                                class="card__img"
                                                width="90"
                                            />
                                        </div>
                                        <v-card-title
                                            class="justify-center dao-card-title"
                                        >
                                            {{ dao.title }}
                                        </v-card-title>
                                        <div class="card__info mb-5">
                                            <v-row dense>
                                                <v-col cols="8">
                                                    <span
                                                        class="card__name title"
                                                        >APY:</span
                                                    >
                                                </v-col>
                                                <v-col cols="4">
                                                    <span
                                                        class="card__number title font-weight-bold"
                                                        >-</span
                                                    >
                                                </v-col>
                                                <v-col cols="8">
                                                    <span
                                                        class="card__name title"
                                                        >Total Value
                                                        Locked:</span
                                                    >
                                                </v-col>
                                                <v-col cols="4">
                                                    <span
                                                        class="card__number title font-weight-bold"
                                                        >-</span
                                                    >
                                                </v-col>
                                            </v-row>
                                        </div>
                                        <v-divider class="mx-4" />
                                        <div class="card__btn-wrapper">
                                            <UIButton
                                                class="f-s-20"
                                                width
                                                :text="dao.status"
                                                @click="redirectToAragon(dao)"
                                            />
                                        </div>
                                    </v-col>
                                </v-row>
                            </v-container>
                        </v-responsive>
                    </v-card>
                </v-col>
            </template>
            <v-col class="col-md-4">
                <v-card flat class="card text-center pa-3">
                    <v-responsive :aspect-ratio="1.5">
                        <v-container class="fill-height">
                            <v-row justify="center">
                                <v-col cols="auto w-100">
                                    <v-btn
                                        class="manager-plus-button"
                                        icon
                                        x-large
                                        @click="createDao()"
                                    >
                                        <v-icon v-text="'$plus'" />
                                    </v-btn>
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-responsive>
                </v-card>
            </v-col>
        </v-row>
        <div v-if="showWarning">
            <v-dialog
                v-model="showWarning"
                transition="dialog-top-transition"
                max-width="600"
            >
                <template v-slot:default="dialog">
                    <v-card>
                        <v-toolbar color="#ffc107" dark>Warning</v-toolbar>
                        <v-card-text>
                            <div class="text-h6 pa-12 text-center">
                                Web site and metamask networks are not
                                synchronized
                            </div>
                        </v-card-text>
                        <v-card-actions class="justify-end">
                            <v-btn text @click="dialog.value = false">Ok</v-btn>
                        </v-card-actions>
                    </v-card>
                </template>
            </v-dialog>
        </div>
    </v-container>
</template>

<script>
import UIButton from "_ui/UIButton";
import axios from "axios";
import { proxyBotUrl } from "@/config/default";

export default {
    name: "DaoManagerScreen",

    components: {
        UIButton
    },

    data: () => ({
        daoList: [],
        alerted: false,
        chainLogo: "",
        showWarning: false
    }),

    mounted() {
        this.fetchDaoList(err => {
            if (err) {
                console.log(err);
            }
            this.smartFetchDaoList(err => {
                if (err) {
                    console.log(err);
                }
                if (!this.alerted) {
                    this.alerted = true;
                    this.showWarning = true;
                }
            });
        });
        setInterval(async () => {
            await this.smartFetchDaoList(err => {
                if (err) {
                    console.log(err);
                }
                if (!this.alerted) {
                    this.alerted = true;
                    this.showWarning = true;
                }
            });
        }, 10000);
    },

    methods: {
        fetchDaoList(cb = () => {}) {
            this.$bia.connect(account => {
                axios
                    .get(
                        `${proxyBotUrl}/users/${this.$bia.accountAddress}/daos`
                    )
                    .then(daos => {
                        const {
                            data: { data }
                        } = daos;
                        if (data === undefined) {
                            cb(undefined);
                        } else {
                            this.alerted = false;
                            for (const i in data) {
                                const dao = data[i];
                                if (dao.broken) continue;
                                this.daoList.push({
                                    title: dao.params.daoName,
                                    status: dao.status
                                });
                            }
                            this.daoList.reverse();
                            this.chainLogo = this.$bia.chainLogo;
                        }
                    });
            });
        },

        smartFetchDaoList(cb) {
            if (this.$bia.connected) {
                axios
                    .get(
                        `${proxyBotUrl}/users/${this.$bia.accountAddress}/daos`
                    )
                    .then(daos => {
                        const {
                            data: { data }
                        } = daos;
                        if (data === undefined) {
                            cb(undefined);
                        } else {
                            this.alerted = false;
                            if (this.daoList.length !== data.length) {
                                this.daoList = [];
                                for (const i in data) {
                                    const dao = data[i];
                                    if (dao.broken) continue;
                                    this.daoList.push({
                                        title: dao.params.daoName,
                                        status: dao.status
                                    });
                                }
                                this.daoList.reverse();
                                this.chainLogo = this.$bia.chainLogo;
                            }
                        }
                    });
            }
        },

        redirectToAragon(dao) {
            if (dao.status === "Done") {
                let daoAddress = `https://${this.$bia.networkName}.client.aragon.org/#/${dao.title}.aragonid.eth`;
                if (this.$bia.networkName === "mainnet") {
                    daoAddress = `https://client.aragon.org/#/${dao.title}.aragonid.eth`;
                }
                window.open(daoAddress, "_blank");
            }
        },

        createDao() {
            this.$router.push({ name: "DaoNew" });
        },

        redirect(path) {
            this.$router.push(path);
        }
    }
};
</script>

<style lang="scss" scoped>
.manager-plus-button {
    color: #fff !important;
    background: linear-gradient(
        90.31deg,
        #6280ec 17.71%,
        #be56fe 87.81%
    ) !important;
    border-radius: 20px !important;
    width: 60px;
    height: 60px;
}
.f-s-20 {
    font-size: 20px;
}
.w-100 {
    width: 100%;
}
.dao-card-title {
    font-weight: bold;
    font-size: 36px;
    line-height: 36px;
}
.card {
    border: 1px solid #008cb9;
    border-radius: 20px !important;
    padding: 36px 27px;
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
</style>

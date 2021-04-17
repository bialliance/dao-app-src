<template>
    <v-container :class="{'fill-height': !daoList.length}">
        <v-row :align="daoList.length ? '' : 'center'" :justify="daoList.length ? '' : 'center'">
            <template v-for="(dao, index) in daoList">
                <v-col cols="4" :key="`dao_${index}`">
                    <v-card flat class="card text-center">
                        <v-responsive :aspect-ratio="1">
                            <v-container class="fill-height">
                                <v-row justify="center">
                                    <v-col cols="auto">
                                        <div>
                                            <img
                                                src="@/assets/img/flex.png"
                                                alt="flex"
                                                class="card__img"
                                                width="90"
                                            />
                                        </div>
                                        <v-card-title class="justify-center">
                                            {{ dao.title }}
                                        </v-card-title>
                                        <div class="card__info mb-5">
                                            <v-row dense>
                                                <v-col cols="7">
                                                    <span class="card__name">APY:</span>
                                                </v-col>
                                                <v-col cols="5">
                                                    <span class="card__number">75%</span>
                                                </v-col>
                                                <v-col cols="7">
                                                    <span class="card__name">Total Value Locked:</span>
                                                </v-col>
                                                <v-col cols="5">
                                                    <span class="card__number">$21,555,555</span>
                                                </v-col>
                                            </v-row>
                                        </div>
                                        <v-divider class="mx-4" />
                                        <div class="card__btn-wrapper">
                                            <UIButton
                                                width
                                                text="Manage"
                                                :to="{name: 'DaoView', params:{daoAddress: 'gfdvfv89'}}"
                                            />
                                        </div>
                                    </v-col>
                                </v-row>
                            </v-container>
                        </v-responsive>
                    </v-card>
                </v-col>
            </template>
            <v-col cols="4">
                <v-card flat class="card text-center">
                    <v-responsive :aspect-ratio="1">
                        <v-container class="fill-height">
                            <v-row justify="center">
                                <v-col cols="auto">
                                    <v-btn color="primary" icon x-large @click="createDao()">
                                        <v-icon v-text="'$plus'" />
                                    </v-btn>
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-responsive>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import UIButton from '_ui/UIButton'

    export default {
        name: 'DaoManagerScreen',

        components: {
            UIButton,
        },

        data: () => ({
            daoList: [],
        }),

        mounted() {
            setTimeout(() => {
                this.fetchDaoList()
            }, 1500)
        },

        methods: {
            fetchDaoList() {
                for (let i = 1; i <= 4; i++) {
                    this.daoList.push({
                        title: `Title ${i}`,
                        text: 'Lorem Ipsum',
                        status: i % 2 ? 'pending..' : 'ready',
                    })
                }
            },

            createDao() {
                this.$router.push({ name: 'DaoNew' })
            },
        },
    }
</script>

<style lang="scss" scoped>
    .card {
        border:        1px solid #008cb9;
        border-radius: 20px !important;
        padding:       36px 27px;
    }

    .card__info {
        background:    linear-gradient(90.31deg, rgba(98, 128, 236, 0.2) 17.71%, rgba(190, 86, 254, 0.2) 87.81%);
        padding:       17px 25px;
        border-radius: 20px;
        text-align:    left;
        font-size:     14px;
        line-height:   14px;
    }

    .card__number {
        font-weight: bold;
    }
</style>

<template>
    <v-card class="pa-12" color="indigo darken-2" flat>
        <v-card elevation="12" width="256">
            <v-navigation-drawer floating permanent>
                <v-list-item>
                    <v-list-item-content>
                        <v-list-item-title class="title">
                            DAO
                        </v-list-item-title>
                        <v-list-item-subtitle>
                            {{ address }}
                        </v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>

                <v-divider></v-divider>
                <v-list dense rounded>
                    <v-list-item v-for="item in items" :key="item.title" link>
                        <v-list-item-icon>
                            <v-icon>{{ item.icon }}</v-icon>
                        </v-list-item-icon>

                        <v-list-item-content>
                            <v-list-item-title>{{
                                item.title
                            }}</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list>
            </v-navigation-drawer>
        </v-card>
    </v-card>
</template>

<script>
export default {
    name: "DaoViewScreen",
    data() {
        return {
            items: [
                { title: "Home", icon: "mdi-home" },
                { title: "Tokens", icon: "mdi-coins" },
                { title: "Voting", icon: "mdi-vote" },
                { title: "Finance", icon: "mdi-finance" },
                { title: "Agent", icon: "mdi-robot" }
            ],
            right: null,
            address: this.$route.params.address
        };
    }
};
</script>

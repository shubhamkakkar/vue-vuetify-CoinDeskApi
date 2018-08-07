<template>
    <v-app>
        <v-container>
            <v-layout row wrap>
                <v-flex xs6 md4 v-for="(ref, index) in coin_selectedFeaature" :key="index">
                     <v-container grid-list-xs>
                         <v-card class="pa-2">
                            <v-container fluid>
                                <v-layout row wrap>
                             <v-flex xs12 md4>
                                <v-avatar
                                    color="primary"
                                >
                                    <div class="white--text">$</div>
                                </v-avatar>
                             </v-flex>
                             <v-flex xs12 md8>
                                 <div>
                                   {{ref.description}}
                                 </div>
                                 <div>
                                   RATE: {{ref.rate}}
                                 </div>
                             </v-flex>
                            </v-layout>
                            </v-container>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn  @click="showMore(ref.code)" flat color="primary">More..</v-btn>
                            </v-card-actions>
                         </v-card>
                     </v-container>
                </v-flex>
            </v-layout>
            <selected-coin  v-if="selected"/>
        </v-container>
    </v-app>
</template>

<script>
import selectedCoin from '@/components/selectedCoin_fullData.vue' 
export default {
    components: {
       selectedCoin
    },
    data(){
     return{
        selected: false
     }
    },
    computed: {
        coin_selectedFeaature(){
            // console.log(this.$store.getters.showEstablishedDatabase_SelectedFeature)
            return this.$store.getters.showEstablishedDatabase_SelectedFeature
        }
    },
    methods: {
        showMore(id){
            this.$store.dispatch('onselectingCoin_fulldata', id)
            this.selected = true;
            // sending the id(coin.code), fetch it in selectedCoin_fullData.vue
        }
    }
}
</script>

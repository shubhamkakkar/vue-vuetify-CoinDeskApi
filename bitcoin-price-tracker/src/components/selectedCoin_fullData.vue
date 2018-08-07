<template>
    <v-app>
        <v-container>
            <v-layout row wrap>
                <v-flex xs12>
                    <v-container grid-list-xs>
                        <v-layout row wrap>
                            <v-flex>
                                <v-switch
                                :label="`${check_todo}`"
                                color="indigo"
                                v-model="switch1"
                                ></v-switch>
                            </v-flex>
                        </v-layout>
                    </v-container>  
                </v-flex>
            </v-layout>
        </v-container>
        <v-container fluid v-if="!switch1">
            <v-layout row wrap>
               <v-flex xs12>
                   <v-card>
                        <v-container>
                            <v-layout>
                                <v-flex>
                                    <v-card-title style="justify-content: center">
                                        <h3 class="indigo--text">{{ coinData.description }}</h3>
                                    </v-card-title>
                                </v-flex>
                            </v-layout>
                            <v-layout>
                                <v-flex>
                                    <v-card-text class="primary--text">
                                        <div>
                                           {{ coinData.code }}
                                        </div>
                                        <div>
                                           {{ coinData.rate }}
                                        </div>
                                        <div>
                                           {{ coinData.rate_float }}
                                        </div>
                                    </v-card-text>
                                </v-flex>
                            </v-layout>
                        </v-container>
                   </v-card>
               </v-flex>
            </v-layout>
        </v-container> 
         <v-container fluid v-if="switch1">
            <v-layout row wrap>
               <v-flex xs4 v-for="ref in allCoin" :key="ref.code">
                   <v-card class="mx-2">
                        <v-container>
                            <v-layout>
                                <v-flex>
                                    <v-card-title style="justify-content: center">
                                        <h3 class="indigo--text">{{ ref.description }}</h3>
                                    </v-card-title>
                                </v-flex>
                            </v-layout>
                            <v-layout>
                                <v-flex>
                                    <v-card-text class="primary--text">
                                        <div>
                                          CODE: {{ ref.code }}
                                        </div>
                                        <div>
                                          RATE: {{ ref.rate }}
                                        </div>
                                        <div>
                                          RATE-FLOAT      {{ ref.rate_float }}
                                        </div>
                                    </v-card-text>
                                </v-flex>
                            </v-layout>
                        </v-container>
                   </v-card>
               </v-flex>
            </v-layout>
        </v-container>   
    </v-app>                
</template>

<script>
   
export default {
    computed:{
        coinCode(){
            return this.$store.state.coinToShow_code
        },
        coinData(){
            return this.$store.getters.selectedCoin(this.coinCode)
        },
        check_todo(){
            if(this.switch1){
                return "Compare Coin's Information"
            }
            else{
                return "Selected Coin's Information only!"
            }
        },
        allCoin(){
            console.log(this.$store.getters.showAll)
            return this.$store.getters.showAll
        }    
    },
    data(){
        return{
             switch1: false
        }
    }
}
</script>

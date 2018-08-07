import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    coinToShow_code: '',
    AllCoins: [],
    AllCoins_SelectedFeature: []
  },  
  getters: {
    // to show all
    showAll(state) {
      return state.AllCoins
    },
    // to show _SelectedFeature from AllCoiin data
    showEstablishedDatabase_SelectedFeature(state) {
      return state.AllCoins_SelectedFeature
    },
    // selected coin 
    selectedCoin(state) {
      return (coinCode) => {
        return state.AllCoins.find((coin) => {
          return coin.code === coinCode
        })
      }
    },
    showSelectedCoinCode_fulldata(state){
      return state.coinToShow_code
    },
    allCoin_butSelected(state){
      return (coinCode) => {
        return state.AllCoins.find((coin) => {
          return coin.code === coinCode
        })
      }
    }
  },
  mutations: {
    createAllCoinDatabase(state, coin_obj) {
      state.AllCoins.push(coin_obj)
      let coin_objCustom = {
        description: coin_obj.description,
        rate: coin_obj.rate,
        code: coin_obj.code
      }
      state.AllCoins_SelectedFeature.push(coin_objCustom)
    },
    selectedCoin_fulldata(state, code){
      state.coinToShow_code = code
    }
  },
  actions: {
    CoinDataBaseBuilding({ commit }, ref) {
      const coin_obj = {
        code: ref.code,
        description: ref.description,
        rate: ref.rate,
        rate_float: ref.rate_float,
        symbol: ref.symbol
      }
      commit('createAllCoinDatabase', coin_obj)
    },
    onselectingCoin_fulldata( {commit}, code ) {
      let coinToShow_code = code;
      commit('selectedCoin_fulldata', coinToShow_code)
    }
  }
})

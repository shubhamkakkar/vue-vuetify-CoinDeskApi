<template>
  <v-app>
      <v-layout row wrap>
        <v-flex xs4 offset-xs4> 
          <v-select 
           :items="coinCode"
           label="Coin"
           :item-value="coinName"
           v-model="select" 
          />
        </v-flex>
      </v-layout>
      <v-layout row wrap>
        <v-flex xs4 offset-sm4>
          <v-btn @click="hitGetters" :disabled="!selected" block class="primary--text">
            <v-icon left>
              play_for_work
            </v-icon>
             Fetch Data
          </v-btn>
        </v-flex>
      </v-layout>
    <allCoinSelectedFeature v-if="selected"/>
  </v-app>
</template>

<script>
import allCoinSelectedFeature from '@/components/AllCoinDisplay_selectedtFeature.vue'

export default {
  mounted() {
    axios
      .get(this.url)
      .then(res => {
        this.resObj = res.data.bpi;
        // console.log(this.resObj);
      })
      .catch(er => console.log(er));
  },
  components: {
        allCoinSelectedFeature
  },
  data() {
    return {
      url: "https://api.coindesk.com/v1/bpi/currentprice.json",
      resObj: {},
      coinName: ["EURO", "British Pound Sterling", "United States Dollar"],
      coinCode: ["EUR", "GBP", "USD"],
      select: "",
      eur: 0,
      gbp: 0,
      usd: 0
    };
  },
  computed: {
    selected() {
      if (
        this.select !== "" &&
        this.select !== null &&
        this.select !== undefined
      ) {
        return true;
      }
    },
    showDataBase() {
      return this.$store.getters.showAll;
    }
  },
  methods: {
    hitGetters() {
      if (this.select === "EUR") {
        this.eur++;
        // not to concider '0' value case as eur will get one for the very first getter's hit
        if (this.eur === 1) {
          this.setDatabase(this.resObj.EUR);
        } else if (this.eur > 1) {
          this.getDataBase(this.resObj.EUR);
        }
      } else if (this.select === "GBP") {
        this.gbp++;
        if (this.gbp === 1) {
          this.setDatabase(this.resObj.GBP);
        } else if (this.gbp > 1) {
          this.getDataBase(this.resObj.GBP);
        }
      } else if (this.select === "USD") {
        this.usd++;
        if (this.usd === 1) {
          this.setDatabase(this.resObj.USD);
        } else if (this.usd > 1) {
          this.getDataBase(this.resObj.USD);
        }
      }
    },
    setDatabase(coinObj) {
      const dataBase = {
        code: coinObj.code,
        description: coinObj.description,
        rate: coinObj.rate,
        rate_float: coinObj.rate_float,
        symbol: coinObj.symbol
      };
      this.$store.dispatch("CoinDataBaseBuilding", dataBase);
    },
    getDataBase(coinObj){
      return this.$store.getters.selectedCoin(coinObj.code)
    }
  }
};
</script>


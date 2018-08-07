<template>
    <v-app>
       <v-container>
           <data-build></data-build>
       </v-container>
    </v-app>
</template>

<script>
import dataBuild from '@/components/CoinSelect_databaseBuild.vue'
export default {
    components: {
        dataBuild
    }
}
</script>

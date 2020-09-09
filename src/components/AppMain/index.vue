<template>

  <div class="main">
    <Applink v-show="$route.path !== '/home'"></Applink >
<router-view></router-view>
  </div>
    
</template>

<script>
import Applink from './link'
export default {
    data() {
        return {

        };
    },
    created() {

    },
    mounted() {

    },
    methods: {

    },
    components: {
      Applink 
  }
};
</script>

<style scoped>
.main{
    padding: 10px;
    overflow: auto;
}
.el-breadcrumb{
    /* background-color:red ; */
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0.2px, 12px, 0 rgba(0,0,0,0.1);
}
.main .line{
    border-left: 3px solid red;
    padding-left: 20px;
}
</style>

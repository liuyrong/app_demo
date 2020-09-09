<template>
    <div>
<AppHeader></AppHeader>
<AppNavBar></AppNavBar>
<AppMin></AppMin>
    </div>
</template>

<script>
import AppHeader from './AppHeader'
import AppNavBar from './AppNavBar'
import AppMin from './AppMain'
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
    components:{
         AppHeader,
          AppNavBar,
           AppMin
    }
};
</script>

<style >
.header{
    width: 100%;
    height: 50px;
    line-height: 50px;
    position: absolute;
    background-color:#2d3a4b;
}
.navBar{
    width: 240px;
    position: absolute;
    left: 0;
    top: 50px;
    bottom: 0;
    background:#545c64;
}
.main{
    position: absolute;
    left: 240px;
    right: 0;
    /* background-color: yellow; */
    top: 50px;
    bottom: 0px;
}
</style>

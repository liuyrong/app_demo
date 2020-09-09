<template>
    <div>
 <el-breadcrumb separator-class="el-icon-arrow-right">
  <el-breadcrumb-item  class="line" v-show="$route.path !== '/home'">{{$route.meta.title}}</el-breadcrumb-item>
</el-breadcrumb>
    </div>
</template>

<script>
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

    }
};
</script>

<style scoped>
.el-breadcrumb{
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
.main .line{
    border-left: 3px solid red;
    padding-left:10px
}
</style>

<template>
    <div>
asdf
    </div>
</template>

<script>
import StuApi from '../../api/student'
export default {
    data() {
        return {

        };
    },
    created() {
this.getS()
    },
    mounted() {

    },
    methods: {
getS(){
    StuApi.getStudent().then(res=>{
        console.log(res)
    })
}
    }
};
</script>

<style scoped>

</style>

<template>
<div class="newsinfo-container">
    <h3 class="titel">{{newinfor.title}}</h3>
    <p class="subtitle">
        <span>发表时间：{{newinfor.add_time | dateFormat}}</span>
        <span>点击：{{newinfor.click}}次</span>
    </p>

    <hr>

    <div class="content" v-html="newinfor.content"></div>

    <!-- 评论子组件区域 -->
    <comment-box></comment-box>
</div>
</template>

<script>
import { Toast } from "mint-ui";
import comment from '../subcomponents/comment.vue'
export default {
    data(){
        return {
            id:this.$route.params.id,
            newinfor:{}
        }
    },
    created(){
        this.getNewinfor()
    },
    methods: {
        getNewinfor(){
            this.$http.get('api/getnew/'+this.id).then(result=>{
                if(result.body.status === 0){
                    this.newinfor = result.body.message[0];
                }else{
                    Toast('获取新闻失败！')
                }
            })
        }
    },
    components:{
        'comment-box':comment
    }
}
</script>

<style lang='less' scoped>
.newsinfo-container{
    padding: 0 4px;
    .titel{
        font-size:16px;
        text-align:center;
        margin: 15px 0;
        color: red;
    }
    .subtitle{
        font-size: 13px;
        color:#226aff;
        display: flex;
        justify-content: space-between;
    }
    content{
        img{
            width: 100%;
        }
    }
}
</style>

<template>
  <div class="pos">
    <el-row>
      <el-col class="pos-order" :span="7" id="order-list">
        <el-tabs type="card">
          <el-tab-pane label="结账">
            <el-table
              :data="productData"
              stripe
              border
              style="width: 100%"
            >
              <el-table-column
                prop="goodsName"
                label="商品名称"
              ></el-table-column>
              <el-table-column
                prop="price"
                width="80"
                label="金额"
              ></el-table-column>
              <el-table-column
                prop="count"
                width="70"
                label="数量"
              ></el-table-column>
              <el-table-column
                label="操作"
                width="100"
                fixed="right"
              >
                <template slot-scope="scope">
                  <el-button type="text" size="small" @click="addProduct(scope.row)">增加</el-button>
                  <el-button type="text" size="small" @click="deleteProduct(scope.$index)">删除</el-button>
                </template>
              </el-table-column>
            </el-table>
            <div class="totalDiv">
              <span>数量：{{totalCount}}</span>
              <span>金额：{{total}}元</span>
            </div>
            <div class="button-group">
              <el-button type="success" size="medium" @click="checkout" :disabled="productData.length===0">结账</el-button>
              <el-button type="warning" size="medium">挂单</el-button>
              <el-button type="danger" size="medium" @click="deleteAProd()">删除</el-button>
            </div>
          </el-tab-pane>
          <el-tab-pane label="挂单">
            2
          </el-tab-pane>
          <el-tab-pane label="外卖">
            3
          </el-tab-pane>
        </el-tabs>
      </el-col>
      <el-col class="pos-product" :span="17" id="product-list">
        <div class="offen-goods">
          <div class="title">常用商品</div>
          <div class="offen-good-lists">
            <ul>
              <li @click="addProduct(goodsItem)" :key="goodsItem.goodsId" v-for="goodsItem in oftenGoods">
                <span>{{goodsItem.goodsName}}</span>
                <span class="o-price">¥{{goodsItem.price}}</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="goods-type">
          <el-tabs :stretch="true">
            <el-tab-pane label="汉堡">
              <div>
                <ul class="cooklist">
                  <li @click="addProduct(hamGoods)" :key="hamGoods.goodsId" v-for="hamGoods in type0Goods">
                    <span class="foodImg"><img height="80" :src="hamGoods.goodsImg" alt="食物图片.jpg"></span>
                    <span class="foodName">{{hamGoods.goodsName}}</span>
                    <span class="foodPrice">¥{{hamGoods.price}}元</span>
                  </li>
                </ul>
              </div>
            </el-tab-pane>
            <el-tab-pane label="小吃">
              <div>
                <ul class="cooklist">
                  <li @click="addProduct(snackGoods)" :key="snackGoods.goodsId" v-for="snackGoods in type1Goods">
                    <span class="foodImg"><img height="80" :src="snackGoods.goodsImg" alt="食物图片.jpg"></span>
                    <span class="foodName">{{snackGoods.goodsName}}</span>
                    <span class="foodPrice">¥{{snackGoods.price}}元</span>
                  </li>
                </ul>
              </div>
            </el-tab-pane>
            <el-tab-pane label="饮料">
              <div>
                <ul class="cooklist">
                  <li @click="addProduct(drinkGoods)" :key="drinkGoods.goodsId" v-for="drinkGoods in type2Goods">
                    <span class="foodImg"><img height="80" :src="drinkGoods.goodsImg" alt="食物图片.jpg"></span>
                    <span class="foodName">{{drinkGoods.goodsName}}</span>
                    <span class="foodPrice">¥{{drinkGoods.price}}元</span>
                  </li>
                </ul>
              </div>
            </el-tab-pane>
            <el-tab-pane label="套餐">
              <div>
                <ul class="cooklist">
                  <li @click="addProduct(taocanGoods)" :key="taocanGoods.goodsId" v-for="taocanGoods in type3Goods">
                    <span class="foodImg"><img height="80" :src="taocanGoods.goodsImg" alt="食物图片.jpg"></span>
                    <span class="foodName">{{taocanGoods.goodsName}}</span>
                    <span class="foodPrice">¥{{taocanGoods.price}}元</span>
                  </li>
                </ul>
              </div>
            </el-tab-pane>
          </el-tabs>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
// import axios from 'axios'
export default {
  /* eslint-disable */
  name: 'pos',
  data(){
    return {
      productData:[],  //订单数据
      oftenGoods:[
        {
          goodsId:1,
          goodsName:'香辣鸡腿堡',
          price:18
        }, {
          goodsId:2,
          goodsName:'田园鸡腿堡',
          price:15
        }, {
          goodsId:3,
          goodsName:'和风汉堡',
          price:15
        }, {
          goodsId:4,
          goodsName:'快乐全家桶',
          price:80
        }, {
          goodsId:5,
          goodsName:'脆皮炸鸡腿',
          price:10
        }, {
          goodsId:6,
          goodsName:'魔法鸡块',
          price:20
        }, {
          goodsId:7,
          goodsName:'可乐大杯',
          price:10
        }, {
          goodsId:8,
          goodsName:'雪顶咖啡',
          price:18
        }, {
          goodsId:9,
          goodsName:'大块鸡米花',
          price:15
        }, {
          goodsId:20,
          goodsName:'香脆鸡柳',
          price:17
        }
      ],
      type0Goods:[
        {
          goodsId:1,
          goodsImg:"../../../static/image/en.jpg",
          goodsName:'香辣鸡腿堡',
          price:18
        }, {
          goodsId:2,
          goodsImg:"../../../static/image/en.jpg",
          goodsName:'田园鸡腿堡',
          price:15
        }, {
          goodsId:3,
          goodsImg:"../../../static/image/en.jpg",
          goodsName:'和风汉堡',
          price:15
        },{
          goodsId:9,
          goodsImg:"../../../static/image/en.jpg",
          goodsName:'大块鸡米花',
          price:15
        }, {
          goodsId:20,
          goodsImg:"../../../static/image/en.jpg",
          goodsName:'香脆鸡柳',
          price:17
        }

      ],              //汉堡类别的数据
      type1Goods:[{
        goodsId:5,
        goodsImg:"../../../static/image/en.jpg",
        goodsName:'脆皮炸鸡腿',
        price:10
      }, {
        goodsId:6,
        goodsImg:"../../../static/image/en.jpg",
        goodsName:'魔法鸡块',
        price:20
      }],  //小食类别的数据
      type2Goods:[ {
        goodsId:7,
        goodsImg:"../../../static/image/en.jpg",
        goodsName:'可乐大杯',
        price:10
      }, {
        goodsId:8,
        goodsImg:"../../../static/image/en.jpg",
        goodsName:'雪顶咖啡',
        price:18
      }],  //饮料类别的数据
      type3Goods:[{
        goodsId:4,
        goodsImg:"../../../static/image/en.jpg",
        goodsName:'快乐全家桶',
        price:80
      }],   //套餐类别的数据
      totalMoney:0,    // 总金额
      totalCount:0     //总数量
    }
  },
  created() {
   /* axios.get('https://www.easy-mock.com/mock/5b8b30dbf032f03c5e71de7f/kuaican/oftenGoods')
      .then(response=>{
        console.log(response)
      })
      .catch(error=>{
        console.log(error);
        //alert('网络错误，不能访问');
      })
    axios.get('https://www.easy-mock.com/mock/5b8b30dbf032f03c5e71de7f/kuaican/typeGoods')
      .then(response=>{
        console.log(response)
      })
      .catch(error=>{
        console.log(error);
        //alert('网络错误，不能访问');
      })*/
  },
  mounted() {
    let orderHeight = document.body.clientHeight
    document.getElementById('order-list').style.height = orderHeight + 'px'
    document.getElementById('product-list').style.height = orderHeight + 'px'
  },
  methods:{
    addProduct(item){
      // 判断要添加的商品是否在表格中存在
      let isHave = false;
      for(let i = 0;i < this.productData.length;i++){
        if(this.productData[i].goodsId === item.goodsId) {
          isHave = true;
        }
      }
      //根据判断的值做相应的逻辑操作
      if(isHave){
        //如果要添加的商品已经存在
        let arr = this.productData.filter(o=>o.goodsId === item.goodsId);
        let index = this.productData.indexOf(arr[0]);
        arr[0].count++;
        index > -1 && this.productData.splice(index,1,arr[0]);
      }else{
        //不存在
        item.count = 1;
        this.productData.push(item);
      }
    },
    deleteProduct(index){
      //删除对应下标的数据
      this.productData.splice(index,1);
    },
    deleteAProd(){
      //this.productData.splice(0,this.productData.length);
      this.productData = [];
    },
    checkout(){
      if(this.totalCount !== 0){
        this.productData = [];
        this.$message({
          message:'结账成功,谢谢',
          type:'success'
        })
      }
    }
  },
  computed:{
    total:function(){
      this.totalMoney = 0;
      this.totalCount = 0;
      this.productData.forEach(element=>{
        this.totalCount+=element.count;
        this.totalMoney+=element.count*element.price;
      })
      return this.totalMoney;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .pos-order{
    background-color: #F9FAFC;
    border-right: 1px solid #C0CCDA;
  }
  .pos-product{
  }
  .button-group{
    margin-top: 20px;
  }

  .offen-goods .title{
    height: 20px;
    border-bottom: 1px solid #d3dce6;
    padding: 20px;
    background-color: #F9FAFC;
    text-align: left;
  }

  .offen-good-lists ul li{
    list-style: none;
    float: left;
    padding: 10px;
    border: 1px solid #E5E9F2;
    background-color: #FFF;
    border-radius: 10px;
    margin: 10px;
  }
  .o-price{
    margin-left: 5px;
    color: #58B7FF;
  }

  .goods-type{
    clear: both;
    height: auto;
    border-top: 1px solid #d3dce6;
    overflow: hidden;
  }
  .cooklist li{
    list-style: none;
    float: left;
    padding: 10px;
    border: 1px solid #E5E9F2;
    background-color: #ffffff;
    border-radius: 10px;
    margin: 10px;
  }

  .foodImg{
    display: block;
    width: 80px;
    height: 80px;
    float: left;
  }

  .foodName{
    display: block;
    float: left;
    color: brown;
  }
  .foodPrice{
    display: block;
    margin-top: 50px;
  }

  li{
    transition: 1s;
  }

  li:hover{
    cursor: pointer;
    transition: 1s;
    box-shadow: 5px 5px 10px #ccd7df;
  }
  .totalDiv{
    padding: 10px;
    border-bottom: 1px solid #d3dce6;
    background-color: #FFF;

  }
  .totalDiv span{
    padding: 40px;
  }
</style>

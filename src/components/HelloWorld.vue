<template>
  <div id="main" style="height:800px;border:1px solid #ccc;padding:10px;"></div> 
</template>

<script>
var echarts = require('echarts');
var myChart
export default {

  data () {
	  return{
	  
	   option: {
                tooltip : {
                    trigger: 'axis',

                },
                legend: {
                    data:['蒸发量','降水量']
                },
                toolbox: {
                    show : true,
                    feature : {
                        mark : {show: true},
                        dataView : {show: true, readOnly: false},
                        magicType : {show: true, type: ['line', 'bar']},
                        restore : {show: true},
                        saveAsImage : {show: true}
                    }
                },
                calculable : true,   //这个变量的含义是什么
                xAxis : [
                    {
                        type : 'category',////分类与其他的区别
                        data : ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
                    }
                ],
                yAxis : [
                    {
                        type : 'value',
                        splitArea : {show : true}   //中间有过度 底层背景颜色不同
                    }
                ],
                series : [
                    {
                        name:'蒸发量',
                        type:'bar',
                        data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
                    },
                    //两个series 分别点击不同的按钮  出现不同的表格
                    {
                        name:'降水量',
                        type:'bar',  //可以type:bar
                        data:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
                    }
                ]
				
	   }
	  }
     
  },
  mounted () {
    myChart = echarts.init(document.getElementById('main'))
    myChart.setOption(this.option)    
  }
 
}
</script>


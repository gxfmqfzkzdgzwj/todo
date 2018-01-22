<template>
  <div id="app">	
	  <div class = "login" v-show = "!detailShow"> 
	  <header>	
		<h1 class="title">输入密码</h1>

		<ul class="password">
			<li v-for="word in this.words">{{word.value}}</li>
		</ul>
	 </header>

      <footer>

	  <div class="forget_password"><span  @click ="isPassword">忘记密码</span></div>

		<div class="keyBoard">

			<div class="key-line">
				<button @click = "keyBoard(1,1)">1</button>
				<button @click = "keyBoard(1,2)">2</button>
				<button @click = "keyBoard(1,3)">3</button>
			</div>

			<div class="key-line">
				<button @click = "keyBoard(1,4)">4</button>
				<button @click = "keyBoard(1,5)">5</button>
				<button @click = "keyBoard(1,6)">6</button>
			</div>

			<div class="key-line">
				<button @click = "keyBoard(1,7)">7</button>
				<button @click = "keyBoard(1,8)">8</button>
				<button @click = "keyBoard(1,9)">0</button>
			</div>

			<div class="key-line">
				<button @click = "keyBoard(2,null)">清零</button>
				<button @click = "keyBoard(1,0)">0</button>
				<button @click = "keyBoard(3,null)">X</button>
			</div>


		</div>


	  </footer>	
	</div> 
	 
	 
	 
	 
	 
	  <div class = "tab" v-show = "detailShow">
		 <div class="tab-item">
			<router-link to="/todo"><div class="svgbtn todobtn"></div></router-link>
		 </div>
		  <div class="tab-item">
			<router-link to="/HelloWorld"><div class="svgbtn moneybtn"></div></router-link>
		  </div>
		 
		 
	  </div>
	  
	   <router-view/>
	  

	


  </div>
</template>

<script>
export default {
  name: 'App',
  props: ['detailShow'],  
  data () {
    			return {
    				words:[
    					{value: '-', id: 1},
    					{value: '-', id: 2},
    					{value: '-', id: 3},
    					{value: '-', id: 4},
    					{value: '-', id: 5},
    					{value: '-', id: 6}
    				],
    				password: '',
    				counter: 0,
					detailShow: false,	
					
    			}
    		},


    		methods : {
			    keyBoard (tip, value) {
			      var arr = [];
			      if (tip === 1) {
			      	if(this.counter <= 5){
			          this.password = this.password + value.toString()			          
			          this.words[this.counter].value = '*'	
			          this.counter++
			          console.log(this.password)
			           if( this.counter == 6 && this.password == "123456")
			        	this.detailShow = true;

			         }      
			     
    		      } else if (tip === 2) {
			        this.password = ''
			        this.counter = 0;
			        for(var i=0;i<6;i++){
			        	this.words[i].value = '-'
			        }
			      } else if (tip === 3) {
			          if(this.counter)			       
			          	{
			          	   
			          		arr = this.password.split("");
			          		arr.pop();
			          		this.password = arr.join('');
			          		this.counter--;
			          		// console.log(this.counter)
			          		this.words[this.counter].value = '-'
			          		
			          		// console.log(this.password)
			          	}
			          	
			        }
			      },

			   isPassword () {
			    	alert("You password is '123456';");
			    },
			}

}
</script>

<style>
* {
	margin:0;
	padding: 0; 	
}
#app {
 	 font-family: 'Avenir', Helvetica, Arial, sans-serif;
 	 -webkit-font-smoothing: antialiased;
 	 -moz-osx-font-smoothing: grayscale;
	  text-align: center;
 	 color: #2c3e50;
 	 margin-top: 60px;
	 width :100%;

}
.logo {
 	width: 100%;
 }

.forget_password{
	margin-top: 50px auto 10px;
	width: 100%;
	padding-bottom: 10px;
	color: blue;
	text-align: center;
}

header{
    margin: 0 auto;
	width: 100%;
}
.title{
    margin: 0 auto;
	width: 100%;
	text-align: center;
}
.password{
	list-style: none;
}
ul{
	display: block;
	text-align: center;
	margin: 20px;
}
li{
	font-size: 50px;
	display: inline-block;
	padding: 10px;
	color: #CCC;
}

.key-line{
	display: flex;
}
.key-line button{
	display: block;
	padding: 10px;
	border: 1px solid #FFF;
	font-size: 16px;
	background: #CCC;
	width: 33.3%;
}
.forget_password :hover{
	border:1px solid red;
	padding: 5px;
}

footer{
	width: 100%;
	position: absolute;
	bottom: 20%;
	left: 0;
}


.tab {
	width: 100%;   
	height: 40px;
	line-height: 40px;
	display: flex;
	margin-bottom: 20px;

}
.svgbtn {
	width: 50px;
	height: 50px;
	padding: 0px;
	margin: 0 auto;
}
.todobtn {
	background: url("icon/todo-a.svg") no-repeat center center;
}

.moneybtn {
  background: url("icon/study.svg") no-repeat center center;}

.tab-item {
	flex :1;	
}

</style>

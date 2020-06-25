<template>
  <div v-on:keypress="popBallon" id="canvas" class="hello">
    <h1>{{ msg }}</h1>
	<button v-on:click="start">start game</button>
  </div>
</template>

<script>
var ballons = [];

function createABallon(){
	var ballon = document.createElement('div');
	var letters = ["F", "J"];
	var index = Math.floor(Math.random() * letters.length);  
	ballon.innerHTML = letters[index];
	
	ballon.style.height =  "50px";
	ballon.style.width =  "50px";
	ballon.style.backgroundColor = "red";
	ballon.style.borderRadius= "50%";
	ballon.style.display= "inline-block";
	ballon.style.position= "fixed";
	ballon.style.bottom= "0%";
	ballon.style.textAlign= "center";
	ballon.style.lineHeight= "50px";
	ballon.style.fontWeight= "bolder";
	ballon.style.fontSize= "30px";
	ballons.push({"item": ballon, "counter": 0});
}

setInterval(function(){
 createABallon();
 
}, 5000);


function startGame() {
  createABallon();

  setInterval(function(){ 
	var ballon2 = ballons[0];
    document.body.appendChild(ballon2.item);
    var counter = ballon2.counter + 1;
	ballon2.counter = counter;
    var num = counter;
    var newposition = num.toString() + "%";
    var positionstring = newposition;
    ballon2.item.style.bottom = 	positionstring;
	}, 1000);
  
}
function pop(event){
 //alert("ballon pop" + event.key.toUpperCase());
 if (event.key.toUpperCase()==ballons[0].item.innerHTML){
   ballons[0].item.style.display = "none";
   ballons.shift();
   startGame();
   
 }
}
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  methods: {
    start: function () {
        startGame();    
    },
    popBallon: function(event){
      pop(event);
	}
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
.hello{
  width: 100%;
  height: 100%;
  background: orange;
}
.ballon {
  height: 50px;
  width: 50px;
  background-color: red;
  border-radius: 50%;
  display: inline-block;
  position: fixed;
  bottom: 0%;
  text-align: center;
  line-height: 50px;
  font-weight: bolder;
  font-size: 30px;
}
canvas {
   height: 50px;
   width: 50px;
   background-color: red;
   border-radius: 50%;
}
</style>

<template>
  <div v-on:keypress="popBallon" id="canvas" class="hello">
    <h1>{{ msg }}</h1>
	<label>Enter characters/letters/words to practice</label>
    <input id="word"/>
	<br><button v-on:click="start">start game</button>
  </div>
</template>

<script>

var ballons = [];
var myVar;
var letters = [];
var speed = 1100;

function createABallon(){
	var ballon = document.createElement('div');
	var word = document.getElementById("word").value;
    if (letters.length==0){
      increaseSpeed();
      letters = word.toUpperCase().split("");
	}  
	ballon.innerHTML = letters[0];
	letters.shift();
	var leftposition = Math.floor(Math.random() * 90);
	ballon.style.height =  "50px";
	ballon.style.width =  "50px";
	ballon.style.backgroundColor = "red";
	ballon.style.borderRadius= "50%";
	ballon.style.display= "inline-block";
	ballon.style.position= "fixed";
	ballon.style.bottom= "0%";
	ballon.style.left = leftposition.toString() + "%";
	ballon.style.textAlign= "center";
	ballon.style.lineHeight= "50px";
	ballon.style.fontWeight= "bolder";
	ballon.style.fontSize= "30px";
	ballons.push({"item": ballon, "counter": 0});
}

function increaseSpeed(){
  speed = speed - 100;
  if (speed<100){
     speed = 100;
  }
}
function releaseBallon(){
    var ballon2 = ballons[0];
    document.body.appendChild(ballon2.item);
    var counter = ballon2.counter + 1;
	ballon2.counter = counter;
    var num = counter;
    var newposition = num.toString() + "%";
    var positionstring = newposition;
    ballon2.item.style.bottom = positionstring;
}

function startGame() {
  ballons = [];
  clearInterval(myVar);
  createABallon();
  myVar = setInterval(releaseBallon, speed);
  
}
function pop(event){
 //alert("ballon pop" + event.key.toUpperCase());
 if (event.key.toUpperCase()==ballons[0].item.innerHTML){
   ballons[0].item.style.display = "none";
   startGame();
   
 }
}
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
	score: String,
	progress: String,
	letters: String
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

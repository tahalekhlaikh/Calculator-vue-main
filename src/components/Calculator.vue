
<script>
export default {
  
  data(){
    return{
      output: '',
      previousValue:'',
      oprationFired:false
    }
  },
  methods:{
    clearField(){
      
    this.output='';
  },
  getDot(){
    if(this.output.indexOf('.')===-1){
      this.output=this.output+'.';
    }
  },
    getNumber(number){
      if(this.oprationFired){
        this.output='';
        this.oprationFired=false;
      }
    this.output=this.output+number;
  },
  remove(){
    this.output=this.output.slice(0, -1);
  },
  processOutput(string){
    if(string=='add'){
      this.operation = ( a, b) => {return parseFloat(a)+ parseFloat(b);}
    }
    else if(string=='subtract'){
      this.operation = ( a, b) => {return a - b;}
    }
    else if(string=='divide'){
      this.operation = ( a, b) => {return parseFloat(a) / parseFloat(b);}
    }
    else if(string=='multiply'){
      this.operation = ( a, b) => {return parseFloat(a) * parseFloat(b);}
    } 
    this.previousValue=this.output;
    this.oprationFired=true;
  },
  updatesOutput(){
    this.output=this.operation(this.previousValue, this.output);
    this.previousValue=null
  }

  },
  
}

</script>
<template>
  <div class="greetings">
    <h1 class="green">Calculator </h1>


    <div class="col-md-4 m-3">
    <table class="table table-bordered">
      <tbody>
        <tr class="output">
          <td colspan="4">
            {{ output || 0 }}
          </td>
        </tr>

        <tr>
          
          
    
    
    <td class="lastColumn" @click="remove" colspan="2"><h3>DEL</h3></td>
    <td class="lastColumn" v-on:click="clearField"><h3>AC</h3></td>
    <td class="lastColumn" @click="processOutput('add')"><h3>+</h3></td>
  </tr>

    <tr>
    
      <td v-on:click="getNumber('7')">7</td>
      <td v-on:click="getNumber('8')">8</td>
      <td v-on:click="getNumber('9')">9</td>
      <td class="lastColumn" @click="processOutput('divide')"><h3>/</h3></td>
    </tr>
    <tr>
    <td v-on:click="getNumber('4')">  4  </td>
    <td v-on:click="getNumber('5')">5</td>
    <td v-on:click="getNumber('6')">6</td>
    <td class="lastColumn" @click="processOutput('multiply')"><h3>x</h3></td>
  </tr>
  <tr>
    <td v-on:click="getNumber('1')">1</td>
    <td v-on:click="getNumber('2')">2</td>
    <td v-on:click="getNumber('3')">3</td>
    <td class="lastColumn" @click="processOutput('subtract')"><h3>-</h3></td>
  </tr>
  <tr>
    <td colspan="2" v-on:click="getNumber('0')">0</td>
    <td class="lastColumn" v-on:click="getDot()"><h3>.</h3></td>
    <td class="lastColumn" @click="updatesOutput"><h3>=</h3></td>

  </tr>

  </tbody>
</table>
</div>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}


h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
.output{
  background-color: #333;
  color:#fff
}
.lastColumn{
  background-color: #d1b102;
  color:#fff
}
.lastColumn:active{
  background-color: #333;
  color:#fff
}
table{
   text-align: center; 
   width: 420px
}



</style>

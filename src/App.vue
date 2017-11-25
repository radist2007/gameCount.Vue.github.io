<template>
    <div class="training">
      <div class="info">
        <div class="logo">
          <img src="./assets/logo.png">
        </div>
        <div class="nameInfo">
          <h1>Game count </h1>
          <h1>Level: {{ level + 1 }}</h1>
        </div>
        <!-- <hr> -->
      </div>
      <!-- <HelloWorld/> -->
      <div class="game">
        <div class="progress" v-if="state !== 'start'">
          <div class="progress-bar" :style="progressStyles">
          </div>
        </div>
        <div class="box">
          <transition name="flip" mode="out-in">
            <AppStartScreen 
              v-if="state == 'start'"
              @onStart="onStart"
            />
            <AppQuestion 
              v-else-if="state == 'question'"
              @success="onQuestionSuccess"
              @error="onQuestionError"
              :settings="levels[level]"
            />
            <AppMessage v-else-if="state == 'message'"
              :type="message.type"
              :text="message.text"
              @onNext="onNext"
            
            />
            <AppResultScreen v-else-if="state == 'result'"
              :stats="stats"
              @repeat="onStart"
              @nextLevel="onNextLevel"
            />
            <AppFinal 
              v-else-if="state == 'final'"
              @restart="onReStart"
            />
            <div v-else>Unknown state</div>
          </transition>
        </div>
      </div>
    </div>
</template>

<script>
// import  from './components/HelloWorld'

export default {
  name: 'app',
  data () {
    return {
      state: 'start',
      stats: {
        success: 0,
        error: 0,
      },
      message: {
        type: "",
        text: "",
      },
      questMax: 3,
      level: 0,
      levels: [
        {
          from: 10,
          to: 40,
          range: 5,
          variants: 2,
        },
        {
          from: 100,
          to: 200,
          range: 20,
          variants: 4,
        },
        {
          from: 500,
          to: 90,
          range: 5,
          variants: 6,
        },
      ]
    }
  },
  computed: {
    questDone(){
      return this.stats.success + this.stats.error;
    },
    progressStyles(){
      return {
        width: (this.questDone / this.questMax * 100) + '%'
      }
    }
  },
  methods: {
    onStart(){
      this.state = 'question';
      this.stats.success = 0;
      this.stats.error = 0;
    },
    onQuestionSuccess(){
      this.state = 'message';
      this.message.text = "Good Job!";
      this.message.type = 'success';
      this.stats.success++;
    },
    onQuestionError(msg){
      this.state = 'message';
      this.message.text = msg;
      this.message.type = 'danger';
      this.stats.error++;
      
    },
    onNext(){
      if(this.questDone < this.questMax){
        this.state = 'question';
      }else{
        this.state = 'result';
      }
    },
    onNextLevel(){
      if(this.level == 2){
        this.level = 0;
        this.state = 'final';
      }else{
        this.level++;
        this.onStart();
      }
    },
    onReStart(){
      this.state = 'start';
    }
  },
  components: {
    // HelloWorld
  }
}
</script>

<style>
  .info{
    /* background-color: yellow; */
    display: flex;
    justify-content: space-around;
  }
  img{
    height: 100px;
    width: 100px;
    padding: 10px;
  }
  h1{
    color: white;
  }
  .training{
    height: 100%;
    text-align: center;
    max-width: 700px;
    margin: auto;
    background: green;
    padding: 20px;
    
  }
  .flip-enter{

  }
  .flip-enter-active{
    animation: flipInX 0.3s linear;
  }
  .flip-leave{

  }
  .flip-leave-active{
    animation: flipOutX 0.3s linear;
  }

  @keyframes flipInX {
    from {transform: rotateX(90deg);}
    to   {transform: rotateX(0deg);}
  }
  @keyframes flipOutX {
    from {transform: rotateX(0deg);}
    to   {transform: rotateX(90deg);}
    
  }

</style>

<template>
  <div class="hello">
    <div class="holder">
      
      <form @submit.prevent="addVocabulary">
        <input type="text" placeholder="기억하고 싶은 단어를 입력하세요.." v-model="vocabulary" v-validate="'min:5'" name="vocabulary">

        <transition name="alert-in" enter-active-class="animated flipInX" leave-active-class="animated flipOutX">
          <p class="alert" v-if="errors.has('vocabulary')">{{ errors.first('vocabulary') }}</p>
       </transition>
      </form>
      <ul>
        <transition-group name="list" enter-active-class="animated bounceInUp" leave-active-class="animated bounceOutDown">
         <li v-for="( data, index ) in vocabularies" :key="index">{{ data.vocabulary }}
          <i class="fa fa-minus-circle" v-on:click="remove(index)"></i>
        </li>
        </transition-group>
      </ul>
      <p>These are the vocabulary that you possess.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Vocabulary',
  data() {
    return {    
      vocabulary : '',
      vocabularies : [
        { vocabulary : 'english' },
        { vocabulary : 'Frontend Developer' }
      ]
    }
  },
  methods : {
    addVocabulary() {
      this.$validator.validateAll().then((result)=>{
        if(result) {
          this.vocabularies.push({vocabulary : this.vocabulary});
          this.vocabulary = '';    
        } else {
          console.log('Not valid');
        }
      })
    },
    remove(id) {
      this.vocabularies.splice(id,1);
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->


<style scoped>
  @import "https://cdn.jsdelivr.net/npm/animate.css@3.5.1";
  @import "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"; 

  .holder {
    background: #fff;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }
  
  ul li {
    padding: 20px;
    font-size: 1.3em;
    background-color: #E0EDF4;
    border-left: 5px solid #3EB3F6;
    margin-bottom: 2px;
    color: #3E5252;
  }

  p {
    text-align:center;
    padding: 30px 0;
    color: gray;
  }

  .container {
    box-shadow: 0px 0px 40px lightgray;
  }

  input {
    width: calc(100% - 40px);
    border: 0;
    padding: 20px;
    font-size: 1.3em;
    background-color: #323333;
    color: #687F7F;
  }

  .alert {
    background: #fdf2ce;
    font-weight: bold;
    display: inline-block;
    padding: 5px;
    margin-top: -20px;
  }

  i {
    float: right;
  }


</style>

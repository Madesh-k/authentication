<template>
<div class="row">
   <div class="col-md-6 offset-md-3">
            <div> 
         <div>
           <h3>Signup</h3>
           <hr />
         </div>
         <form @submit.prevent="onSignUp()">
            <div class="form-group">
               <label>Username</label>
               <input 
                type="text" 
                class="form-control"
                v-model="username"
                />
                <div class="error" v-if="errors.username">
                  {{ errors.username }}
                  </div>
            </div>
            <div class="form-group">
               <label>Password</label>
               <input 
                type="password" 
                class="form-control"
                v-model="password" 
                />
               <div class="error" v-if="errors.password">
                  {{ errors.password }}
                  </div>
            </div>
            <div class="form-group">
               <label>Confirm Password</label>
               <input 
                type="password" 
                class="form-control" 
                v-model="confirmpassword"
               />
               <div class="error" v-if="errors.confirmpassword">
                  {{ errors.confirmpassword }}
               </div>
            </div>

            <div class="my-3">
              <button type="submmit" class="btn btn-primary">
               Signup
              </button>
            </div>
        </form>
     </div> 
   </div>
</div>

</template>
<script>
import LoginValidations from '../services/LoginValidations';
export default {
  data(){
     return{
       username:'',
       password:'',
       confirmpassword:'',
       errors: [],
     }
  },
  methods:{
   onSignUp() {
      let validations = new LoginValidations(
         this.username,
         this.password,
         this.confirmpassword
         ); 

         this.errors = validations.checkValidations();
         if(this.errors.length){
            return false;
         }
   },
  },
};

</script>


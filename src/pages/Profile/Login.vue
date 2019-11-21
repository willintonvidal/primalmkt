<template>
  <div class="container">
    <h1>primalmkt</h1>
  <card class="row align-items-center">
        <form @submit.prevent="accesDash" class="col">
          <base-input label="Email address"
                      type="email"
                      v-model="username"
                      placeholder="Enter email">
              <small slot="helperText" id="emailHelp" class="form-text text-muted">Nunca compartiremos su correo electrónico con nadie más</small>
          </base-input>
          <base-input label="Password"
                      type="password"
                      v-model="password"
                      placeholder="Password">
          </base-input>
        <base-button native-type="submit" type="primary">Submit</base-button>
        </form>
      </card>
  </div>
</template>
<script>
  import api from "@/api";
  import toastr from "toastr";

  export default {
    components: {    },
    data() {
      return {
        username:"",
        password:""
      }
    },
    methods:{
        accesDash(){
          
          api.authenticate(this.username,this.password).then(res =>{
            console.log(res.data);
            console.log(res.data.data.access_token);
            window.localStorage.token = res.data.data.access_token
            this.$router.push('/dash')
          }).catch(err => {console.log(err),alert("Datos incorrectos")});
        }
    },
    
  }
</script>
<style>
</style>

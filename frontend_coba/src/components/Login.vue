<template>
    <div class="mt-8">
        <div class="lg:col-span-2">
          <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
              
              <div class="md:col-span-5">
                  <label for="email">Email</label>
                  <input type="text" name="email" id="email" class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" v-model="App.input.user.email" placeholder="email@domain.com" />
                </div>
                
                <div class="md:col-span-5">
                  <label for="password">Password</label>
                  <input type="password" name="password" id="password" class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" v-model="App.input.user.password" />
                </div>

            <div class="md:col-span-5 text-right">
              <div class="inline-flex items-end">
                <div class="input2">
            <a
            @click="App.addLogin(App.input.user)"
              style="background-color: #537155"
              class="btn"
              href="#"
              role="button"
              >Submit!</a
            >
          </div>
                <!-- <button @click="App.addLogin(App.input.user)" class="bg-blue-500 hover:bg-blue-700 py-2 px-4 rounded">Submit</button> -->
              </div>
            </div> 

            <h5>Didn't have an account?
              <router-link
                to="/register"
                class="bg-yellow-400 p-2 rounded-md text-black"
                >
                Register</router-link
                >
            </h5>
          </div>
        </div>
    </div>
</template>

<script>
import {useApp} from '../stores/index';
// import { useRouter } from "vue-router";

export default {
  setup() {
    const App = useApp();
    return {
      App,
    }
    // const login = (useRouter) => {
    //     router.push({ name: "dashboard"});
    //   };
    //   return { login };
  },
  created() {
  }
}
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");
.main {
  background: rgba(255, 255, 255, 0.4);
  display: flex;
  top: 20%;
  left: 30%;
  width: 40%;
  text-align: center;
  padding: 5px;
  border-radius: 3rem;
  box-shadow: 0px 0px 8px -5px #000000;
  padding-top: 3%;
  padding-bottom: 5%;
  font-family: "Poppins", sans-serif;
}
h1 {
  cursor: default;
  user-select: none;
}
input {
  border-radius: 3rem;
  border: none;
  padding: 10px;
  text-align: center;
  outline: none;
  margin: 10px;
  width: 30%;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
}
input:hover {
  box-shadow: 0px 0px 8px -5px #000000;
}
input:active {
  box-shadow: 0px 0px 8px -5px #000000;
}
</style>
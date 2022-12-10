<template>
    <div class="mt-8">
        <div class="lg:col-span-2">
          <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
              
              <div class="md:col-span-5">
                  <label for="email">Email</label>
                  <input type="text" name="email" id="email" class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" 
                  v-model="App.input.user.email" placeholder="email@domain.com" />
                </div>
                
                <div class="md:col-span-5">
                  <label for="password">Password</label>
                  <input type="password" name="password" id="password" class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" 
                  v-model="App.input.user.password" />
                </div>

            <div class="md:col-span-5 text-right">
              <div class="inline-flex items-end">
                <button @click="App.addRegister(App.input.user)" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Submit</button>
              </div>
            </div>
            <router-link
                to="/login"
                class="bg-yellow-400 p-2 rounded-md text-black"
                >
                cancel</router-link
                >
          </div>
        </div>
    </div>
</template>

<script>
import {useApp} from '../stores/index';
export default {
  setup() {
    const App = useApp();
    return {
      App,
    }
  },
  created() {
  }
}
</script>
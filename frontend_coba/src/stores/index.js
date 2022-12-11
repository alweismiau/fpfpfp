import { defineStore } from "pinia";
import axios from "axios";
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  onSnapshot,
} from "firebase/firestore";
import Swal from 'sweetalert2';

const firebaseConfig = {
  apiKey: "AIzaSyDLjzWmA_8YyXrCjm6bTPJWhHWYKUI06qo",
  authDomain: "final-pw-c8bd1.firebaseapp.com",
  projectId: "final-pw-c8bd1",
  storageBucket: "final-pw-c8bd1.appspot.com",
  messagingSenderId: "945018602451",
  appId: "1:945018602451:web:d2a186ca0d609a59e8e526",
  measurementId: "G-K85HWGV2BT"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export const useApp = defineStore({
    id: "App",
    state: () => ({
      users: [],
      input: {
        user: {
          email: '',
          password: '',
        },
      },
    }),
    actions: {
      async addRegister(user) {
        await axios.post('http://127.0.0.1:3000/register', {
          email: user.email,
          password: user.password,
        })
        .then((response) => {
          if(response.status) {
            Swal.fire({
              title: 'Success!',
              text: `Succesesfully added user ${user.email}`,
              icon: 'success',
              timer: 1500,
              showConfirmButton: false,
            })
            
      //       .then((a) => {
      //   alert("Successfully logged in");
      //   console.log(a);
      //   this.$router.push("/dashboard");
      // });
          }
        }, (error) => {
          Swal.fire({
            title: 'Error!',
            text: `Seems like there is an error while adding user ${user.email} ${error}`,
            icon: 'error',
            timer: 1500,
            showConfirmButton: false,
          });
        });
        this.input.user.email = '';
        this.input.user.password = '';
      },
      async addLogin(user) {
        await axios.post('http://127.0.0.1:3000/login', {
          email: user.email,
          password: user.password,
        })
        .then((response) => {
          if(response.status) {
            this.router.push("/dashboard");
            Swal.fire({
              title: 'Success!',
              text: `Succesesfully added login ${user.password}`,
              icon: 'success',
              timer: 1500,
              showConfirmButton: false,
            });
          }
        }, (error) => {
          Swal.fire({
            title: 'Error!',
            text: `Seems like there is an error while adding login ${user.password}<br>${error}`,
            icon: 'error',
            timer: 1500,
            showConfirmButton: false,
          });
        });
        this.input.user.email = '';
        this.input.user.password = '';
      },
    },
});
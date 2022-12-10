<template>
    <div>
      <!-- navbar -->
      <nav class="navbar navbar-expand-lg" style="background-color: #8cb68c">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              class="bi bi-link"
              viewBox="0 0 16 16"
            >
              <path
                d="M6.354 5.5H4a3 3 0 0 0 0 6h3a3 3 0 0 0 2.83-4H9c-.086 0-.17.01-.25.031A2 2 0 0 1 7 10.5H4a2 2 0 1 1 0-4h1.535c.218-.376.495-.714.82-1z"
              />
              <path
                d="M9 5.5a3 3 0 0 0-2.83 4h1.098A2 2 0 0 1 9 6.5h3a2 2 0 1 1 0 4h-1.535a4.02 4.02 0 0 1-.82 1H12a3 3 0 1 0 0-6H9z"
              />
            </svg>
            a.nak
          </a>
          <button
            class="btn btn-outline-success my-2 my-sm-0"
            type="submit"
            @click.prevent="logout"
          >
            Log out
          </button>
        </div>
        </nav>

        <div class="greeting">
          <h1>Hi, Your Name!</h1>
      </div>
      <!-- navbar -->
  
      <!-- input -->
      <form>
        <label for="input" style="align-items: center">
          <div class="input">
            <input
              type="url"
              class="form-control"
              id="longurl"
              placeholder="Drop your long URL Here."
            />
          </div>
        </label>
        <label for="input2">
          <div class="input2">
            <a
              @click.prevent="addLink"
              style="background-color: #537155"
              class="btn"
              href="#"
              role="button"
              >Shorten!</a
            >
          </div>
        </label>
      </form>
      <!-- input -->
  
      <!-- table list -->
      <div class="table1">
        <table
          style="background-color: #d4e5d4"
          class="table table-striped table-light"
        >
          <thead>
            <th scope="col">Link</th>
            <th scope="col">Shorted Link</th>
            <th scope="col">Date</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </thead>
          <tbody>
            <tr v-for="(item, index) in listLink" v-bind:key="index">
            </tr>
            <tr>
              <th scope="row">www.youtube.com</th>
              <td>a.nak/yt</td>
              <td>Des, 12 2022</td>
              <td><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  class="bi bi-pencil-square"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"
                  />
                  <path
                    fill-rule="evenodd"
                    d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                  />
                </svg>
                </td>
                <td>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  class="bi bi-x-octagon-fill"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M11.46.146A.5.5 0 0 0 11.107 0H4.893a.5.5 0 0 0-.353.146L.146 4.54A.5.5 0 0 0 0 4.893v6.214a.5.5 0 0 0 .146.353l4.394 4.394a.5.5 0 0 0 .353.146h6.214a.5.5 0 0 0 .353-.146l4.394-4.394a.5.5 0 0 0 .146-.353V4.893a.5.5 0 0 0-.146-.353L11.46.146zm-6.106 4.5L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708z"
                  />
                </svg>
                </td>
            </tr>
            <tr>
              <th scope="row">www.google.com</th>
              <td>a.nak/ggl</td>
              <td>Des, 13 2022</td>
              <td>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  class="bi bi-pencil-square"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"
                  />
                  <path
                    fill-rule="evenodd"
                    d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                  />
                </svg>
              </td>
              <td>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  class="bi bi-x-octagon-fill"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M11.46.146A.5.5 0 0 0 11.107 0H4.893a.5.5 0 0 0-.353.146L.146 4.54A.5.5 0 0 0 0 4.893v6.214a.5.5 0 0 0 .146.353l4.394 4.394a.5.5 0 0 0 .353.146h6.214a.5.5 0 0 0 .353-.146l4.394-4.394a.5.5 0 0 0 .146-.353V4.893a.5.5 0 0 0-.146-.353L11.46.146zm-6.106 4.5L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708z"
                  />
                </svg>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- table list -->
    </div>
  </template>
  
  <script>
  import { useRouter } from "vue-router";
  
  export default {
    setup() {
      const router = useRouter();
      const logout = () => {
        localStorage.setItem("authenticated", false);
        router.push({ name: "home"});
      };
      return { logout };
    },
  };
  </script>
  
  <style>
  @import url("https://fonts.googleapis.com/css?family=Poppins:400,500,600,700,800,900");
  
  h1 {
    display: flex;
    text-align: left;
    font-family: verdana;
    margin: 40px 0 0;
    font-size: 25px;
    font-weight: 700;
  }
  #name {
    margin: 2px 2px 0px;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  .input {
    font-family: monospace;
    display: inline-flex;
    padding: 50px 10px 0 0;
    width: 10cm;
  }
  .table {
    align-content: center;
    margin: 25px 100px 0;
    width: 800px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    background-color: #a1a1a1;
  }
  .table1 {
    display: flex;
  }
  a {
    color: #ffffff;
  }
  
  .btn-outline-success {
    border-color: white;
    color: white;
  }
  </style>
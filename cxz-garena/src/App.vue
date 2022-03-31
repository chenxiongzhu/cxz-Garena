<template>
  <div>
    <div class="top"></div>
    <div class="wrapper">
      <img src="@/assets/img-1.jpg" alt="" />
      <img src="@/assets/img-1.jpg" alt="" />
      <img src="@/assets/img-1.jpg" alt="" />
      <img src="@/assets/img-1.jpg" alt="" />
      <img src="@/assets/img-1.jpg" alt="" />
      <img src="@/assets/img-1.jpg" alt="" />
    </div>
    <div class="shade">
      <img src="./assets/scape.png" alt="" />
      <p class="tip">请将屏幕横向摆放！</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {};
  },
  methods: {
    getJSON(url) {
      const xhr = new XMLHttpRequest();
      xhr.open("GET", url, false);
      xhr.setRequestHeader("Content-Type", "application/json");
      xhr.onreadystatechange = function () {
        if (xhr.readyState !== 4) return;
        if (xhr.status === 200 || xhr.status === 304) {
          resolve(xhr.responseText);
        } else {
          reject(new Error(xhr.responseText));
        }
      };
      xhr.send();
    },
  },
  created(){
    this.getJSON()
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
@media screen and (min-width: 1000px) {
  .top {
    background-image: url(./assets/bg.png);
    width: 100%;
    height: 100px;
  }
  .wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: space-around;
    width: 1200px;
    margin: 0 auto;
  }
  .wrapper img {
    width: 26%;
    margin: 25px 0;
  }
  .shade {
    display: none;
  }
}
@media screen and (min-width: 640px) and (max-width: 1000px) {
  .wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: space-around;
    width: 90%;
    /* height: 400px; */
    margin: 60px auto;
  }
  .wrapper img {
    width: 45%;
    margin: 20px 0;
  }
  .shade {
    display: none;
  }
}
@media screen and (max-width: 640px) {
  body {
    z-index: 10;
  }
  .wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 90%;
    margin: 60px auto;
    overflow: scroll;
  }
  @keyframes rotate {
    0% {
      -webkit-transform: rotate(0deg);
    }
    50% {
      -webkit-transform: rotate(90deg);
    }
    100% {
      -webkit-transform: rotate(0deg);
    }
  }
  .shade {
    display: flex !important;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(000, 000, 000, 0.5);
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .shade img {
    width: 60%;
    animation: rotate 1s linear infinite;
  }
  .tip {
    color: #fff;
    font-size: 20px;
    margin-top: 100px;
  }
  .wrapper img {
    width: 80%;
    margin: 20px 0;
  }
}
</style>

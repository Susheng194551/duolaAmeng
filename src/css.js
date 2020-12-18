const string = `
  body {
    background-image: linear-gradient(
      to right,
      #eea2a2 0%,
      #bbc1bf 19%,
      #57c6e1 42%,
      #b49fda 79%,
      #7ac5d8 100%
    );
  }
  .head {
    border: 2px solid black;
    width: 500px;
    height: 500px;
    border-radius: 50%;
    background: #0dacd7;
    position: relative;
    left: 40%;
  }
  .nose {
    border: 2px solid black;
    position: relative;
    width: 50px;
    height: 50px;
    background: red;
    border-radius: 50%;
    top: 175px;
    left: 219px;
    z-index: 1;
  }
  .nose:hover {
    animation: wave 1s infinite linear;
  }
  .nose > div {
    position: relative;
    width: 13px;
    height: 13px;
    background: white;
    border-radius: 50%;
    top: 12px;
    left: 14px;
  }
  @keyframes wave {
    0% {
      transform: rotate(0deg);
    }
    33% {
      transform: rotate(55deg);
    }
    66% {
      transform: rotate(-55deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
  
  .eye {
    border: 2px solid black;
    position: absolute;
    width: 140px;
    height: 135px;
    background: white;
    border-radius: 53%/48%;
    top: 70px;
    left: 170px;
    z-index: 1;
  }
  
  .eye.left {
    transform: translateX(-65px);
  }
  .eye.left > div {
    width: 40px;
    height: 60px;
    background: black;
    border-radius: 50%/48%;
    position: relative;
    top: 50px;
    left: 80px;
  }
  .eye.left > div > div {
    width: 20px;
    height: 30px;
    background: white;
    border-radius: 50%/48%;
    position: relative;
    top: 24px;
    left: 14px;
  }
  .eye.right {
    transform: translateX(75px);
  }
  .eye.right > div {
    width: 40px;
    height: 60px;
    background: black;
    border-radius: 50%/48%;
    position: relative;
    top: 50px;
    left: 20px;
  }
  .eye.right > div > div {
    width: 20px;
    height: 30px;
    background: white;
    border-radius: 50%/48%;
    position: relative;
    top: 24px;
    left: 7px;
  }
  .face {
    border: 2px solid black;
    width: 450px;
    height: 400px;
    background-color: white;
    border-radius: 50%;
    position: absolute;
    top: 94px;
    left: 24px;
  }
  .face > div {
    position: absolute;
    border: 2px solid black;
    transform: rotate(90deg);
    width: 214px;
    top: 234px;
    left: 112px;
    z-index: 1;
  }
  .mouse {
    position: relative;
    border: 2px solid black;
    width: 316px;
    height: 152px;
    border-radius: 0 0 155px 147px;
    top: 238px;
    left: 90px;
  }
  .mouse > div {
    position: relative;
    border: 3px solid white;
    top: -3px;
  }
  .huzi > .hz1 {
    border: 2px solid black;
    position: absolute;
    width: 150px;
    top: 215px;
    left: 20px;
    transform: rotate(15deg);
  }
  .huzi > .hz2 {
    border: 2px solid black;
    position: absolute;
    width: 150px;
    top: 260px;
    left: 18px;
  }
  .huzi > .hz3 {
    border: 2px solid black;
    position: absolute;
    width: 150px;
    top: 305px;
    left: 20px;
    transform: rotate(-15deg);
  }
  .huzi > .hz4 {
    border: 2px solid black;
    position: absolute;
    width: 150px;
    top: 215px;
    left: 320px;
    transform: rotate(165deg);
  }
  .huzi > .hz5 {
    border: 2px solid black;
    position: absolute;
    width: 150px;
    top: 260px;
    left: 322px;
  }
  .huzi > .hz6 {
    border: 2px solid black;
    position: absolute;
    width: 150px;
    top: 305px;
    left: 320px;
    transform: rotate(-165deg);
  }
  `;
export default string;

firstPinWheel = document.getElementById('firstPinWheel')

fpwStyle = `#firstPinWheel {
  display: block;
  width: 100px;
  height: 100px;
  background: linear-gradient(45deg, #ff0000, #000000);
  border-radius: 50%;
  text-align: center;
  position: absolute;
  left: 361px;
  z-index: 999999999;
  border: 1px solid white;
  padding: 2px;
  color: white;
  animation: FirstPinwheel 60s linear infinite;
  top: 142px;
}

@keyframes FirstPinwheel {
  0% {
    transform: rotate(${date.getSeconds() * 6}deg);
  }

  100% {
    transform: rotate(${date.getSeconds() * 6 + 360}deg);
  }
}`

pinwheelInjectionObject = document.createElement('style')
pinwheelInjectionObject.innerHTML = fpwStyle
document.body.appendChild(pinwheelInjectionObject)

secondPinWheel = document.getElementById('secondPinWheel')

spwStyle = `#secondPinWheel {
  display: block;
  width: 150px;
  height: 150px;
  background: #b70000;
  border-radius: 50%;
  text-align: center;
  top: 115px;
  position: absolute;
  left: 334px;
  z-index: 9999;
  border: 1px solid white;
  color: white;
  padding: 2px;
  animation: SecondPinwheel 3600s linear infinite;
}

@keyframes SecondPinwheel {
  0% {
    transform: rotate(${date.getMinutes() * 6}deg);
  }

  100% {
    transform: rotate(${date.getMinutes() * 6 + 360}deg);
  }
}`

secondPinwheelInjectionObject = document.createElement('style')
secondPinwheelInjectionObject.innerHTML = spwStyle
document.body.appendChild(secondPinwheelInjectionObject)

secondPinWheel = document.getElementById('secondPinWheel')

tpwStyle = `#thirdPinWheel {
    display: block;
    width: 250px;
    height: 250px;
    background: linear-gradient(248deg, #0000008c, #ff0000bd);
    border-radius: 50%;
    text-align: center;
    top: 66px;
    position: absolute;
    left: 286px;
    z-index: 999;
    border: 1px solid white;
    color: white;
    padding: 2px;
    animation: ThirdPinwheel 86400s linear infinite;
}

@keyframes ThirdPinwheel {
  0% {
    transform: rotate(${date.getHours() * 15}deg);
  }

  100% {
    transform: rotate(${date.getHours() * 15 + 360}deg);
  }
}`

thirdPinwheelInjectionObject = document.createElement('style')
thirdPinwheelInjectionObject.innerHTML = tpwStyle
document.body.appendChild(thirdPinwheelInjectionObject)

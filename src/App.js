import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
//   const connectToDevice = async () => {
//     const device = await navigator.bluetooth
//     .requestDevice({
//       acceptAllDevices: true
//     })
//     // setDevice(device)
//     const server = await device.gatt.connect()
//     // setServer(server)
//     console.log(server, "----17----")
//     const service = await server.getPrimaryService('Service ID')
//     // setService(service)
//     console.log(service, "----20----")
//     const characteristic = await service.getCharacteristic('Characteristic ID')
//     // setCharacteristic(characteristic)
//     console.log(characteristic, "----23----")
//     device.addEventListener('gattserverdisconnected', onDisconnected)
// }
// const onDisconnected = (event) => {
//   alert("Vibrator Disconnected")
//   const device = ""
//   // setDevice(device)
// }


// ---------------------------------------------------------

const handleConnect = async () => {
  const response = await fetch("http://localhost:5500/api/test");
  const data = await response.json()
  console.log(data, "------35------")
}
  return (
//     <div className="App">
// <button className="bluetooth" onClick={connectToDevice}>CONNECT</button>
//     </div>
<button onClick={handleConnect}>Connect to Server</button>
  );
}

export default App;

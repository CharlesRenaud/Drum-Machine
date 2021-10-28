import react, {useState, useEffect} from "react"

import Shaker from './kit/Hats/Shaker.wav'
import Shaker2 from './kit/Hats/Shaker 2.wav'
import Shaker3 from './kit/Hats/Hi Hat.wav'

import Kick from './kit/Kicks/Kick.wav'
import Kick2 from './kit/Kicks/Kick 2.wav'
import Kick3 from './kit/Kicks/Weezy Hit.wav'

import Snare from './kit/Snares/Snare.wav'
import Snare2 from './kit/Snares/Snare 2.wav'
import Snare3 from './kit/Snares/Weezy Clap.wav'


import HiHat from './kit/Hats/Hi Hat.wav'
import HiHat2 from './kit/Hats/Hi Hat 2.wav'
import HiHat3 from './kit/Hats/Hi Hat 3.wav'

import Kicks from './kit/Kicks/Kick.wav'
import Kicks2 from './kit/Kicks/Kick 2_2.wav'
import Kicks3 from './kit/Kicks/Kick 3.wav'

import Snares from './kit/Snares/Snare 3.wav'
import Snares2 from './kit/Snares/Snare 4.wav'
import Snares3 from './kit/Snares/Snare 5.wav'

const bankOne = [
  {
    keyCode: 0,
    keyTrigger: 'Q',
    id: 'Shaker-1',
    url: Shaker
  },
  {
    keyCode: 1,
    keyTrigger: 'W',
    id: 'Shaker-2',
    url: Shaker2
  },
  {
    keyCode: 2,
    keyTrigger: 'E',
    id: 'Shaker-3',
    url: Shaker3
  },
  {
    keyCode: 3,
    keyTrigger: 'A',
    id: 'Kick-1',
    url: Kick
  },
  {
    keyCode: 4,
    keyTrigger: 'S',
    id: 'Kick-2',
    url: Kick2
  },
  {
    keyCode: 5,
    keyTrigger: 'D',
    id: 'Weezy Hit',
    url: Kick3
  },
  {
    keyCode: 6,
    keyTrigger: 'Z',
    id: "Snare",
    url: Snare
  },
  {
    keyCode: 7,
    keyTrigger: 'X',
    id: 'Snare2',
    url: Snare2
  },
  {
    keyCode: 8,
    keyTrigger: 'C',
    id: 'Weezy Clap',
    url: Snare3
  }
];


function App() {

  


  const [bank, setBank] = useState(bankOne)
  const [power, setPower] = useState("ON")
  const [display, setDisplay] = useState("")
  const [pressedKey, setPressedKey] = useState("")
  const [volume, setVolume] = useState(1)

   console.log(power + "hola")
  let props = {
    bank: bank,
    setBank: setBank,
    power: power,
    setPower: setPower,
    display: display,
    setDisplay: setDisplay,
    pressedKey: pressedKey,
    setPressedKey: setPressedKey,
    volume: volume,
    setVolume, setVolume,
  }




  return (


    <div 
    className="App" id="drum-machine">
      <div id="display" className="app-box">
     <Pad {...props} />
     <Options {...props} />
     </div>
    </div>
  );
}

export default App;



const Pad = (props) => {

  var data = props.bank


  const PlaySong = (id) => {
    if(props.power === "ON"){
      console.log(props.power)
      props.setDisplay(data[id].id)
      console.log(id)
      var music = document.getElementById(props.bank[id].keyTrigger);
      music.volume = props.volume
      music.play();
    }else{
      console.log(props.power)
    }
  }



  function logKey(e) {
    if(props.power === "ON"){
    console.log(e)

    console.log(props.power)

      data.map(ban => {
        if(ban.keyTrigger === e.key.toUpperCase()){
         PlaySong(ban.keyCode)
         document.getElementById(ban.keyCode).style.border = "2px solid white"
         document.getElementById(ban.keyCode).style.backgroundColor = "rgb(214, 121, 254)"
         setTimeout(function(){document.getElementById(ban.keyCode).style.border = "2px solid transparent"}, 200)
         setTimeout(function(){document.getElementById(ban.keyCode).style.backgroundColor = "rgb(209, 135, 209)"}, 200)
        }
      })
    }

  }
  
  useEffect(() => {
    document.addEventListener('keydown', logKey);
    return () => document.removeEventListener('keydown', logKey);
  }, [logKey]);



  return(
  <div
  className="key-box">
  {
    data.map((bank, key) =>{ 
     return  <div id={key} onClick={()=>{PlaySong(bank.keyCode)}} className="drum-pad"><audio className="clip" id={bank.keyTrigger} src={bank.url}></audio>{bank.keyTrigger}</div>
    })
  }
  </div>
  )
}

const Options = (props) => {

  const [off, setOff] = useState("")
  const [switcher, setSwitcher] = useState("")
  const [bankName, setBankName] = useState("Bank 1")

  const TooglePower = (power) =>{

    if(power === "OFF"){
      props.setPower("ON")
      console.log(power)
      setOff("")

    }else{
      props.setPower("OFF")
      console.log(props.power)
      setOff("power-off")
    }
  }
  console.log(props.volume)
  const bankTwo = [
    {
      keyCode: 0,
      keyTrigger: 'Q',
      id: 'Hi Hat 1',
      url: HiHat,
    },
    {
      keyCode: 1,
      keyTrigger: 'W',
      id: 'Hi Hat 2',
      url: HiHat2
    },
    {
      keyCode: 2,
      keyTrigger: 'E',
      id: 'Hi Hat 3',
      url: HiHat3
    },
    {
      keyCode: 3,
      keyTrigger: 'A',
      id: 'Kick-1',
      url: Kicks
    },
    {
      keyCode: 4,
      keyTrigger: 'S',
      id: 'Kick-2_2',
      url: Kicks2
    },
    {
      keyCode: 5,
      keyTrigger: 'D',
      id: 'Kick-3',
      url: Kicks3
    },
    {
      keyCode: 6,
      keyTrigger: 'Z',
      id: "Snare 3",
      url: Snares
    },
    {
      keyCode: 7,
      keyTrigger: 'X',
      id: 'Snare 4',
      url: Snares2
    },
    {
      keyCode: 8,
      keyTrigger: 'C',
      id: 'Snare 5',
      url: Snares3
    }
  ];

  const ToogleBank = () => {
    console.log(props)
    if(props.bank[0].id === "Shaker-1"){
      setBankName("Bank 2")
      setSwitcher("bank-switch")
      props.setBank(bankTwo)
    }
    else{
      setBankName("Bank 1")
      setSwitcher("")
      props.setBank(bankOne)

    }
  }

  
  return(
    <div className="options-box">
       <div onClick={()=>TooglePower(props.power)} className="power">
        <div className={off + " " + "power-change"}>{props.power}</div>
      </div>
      <div className="display">
        <div className="song-id">{props.display}</div>
      </div>
      <div className="volume-box">
        <input type="range" id="volume" name="volume"
              min="0" max="10" onChange={(e)=>props.setVolume((e.target.value)/10)} />
        <label for="volume">Volume : {props.volume}</label>
      </div>
      <div>
        <div className="bank-box">
          <div onClick={()=>ToogleBank()} className="bank">
            <div className={switcher + " " + "bank-change"}>{bankName}</div>
          </div>
        </div>
      </div>
      
    </div>
  )
}
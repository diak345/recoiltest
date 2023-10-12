import { useRecoilValue, useSetRecoilState , useRecoilState } from "recoil";
import { TextState, Userinfo , AtomselectorFamilydemo ,Getusercountry} from "./atom";
function App() {
  const asetText = useSetRecoilState(TextState);

  const ButtonClick = (() => {
    asetText(new Date().toString())
  })
  const getColor = () => Math.floor(Math.random() * 255)
  const style = {
    color: `rgb(${getColor()},${getColor()},${getColor()})`,
  }
  return (
    <>
      <button onClick={ButtonClick}>ChangeRecoilStates</button>
      <p style={style}>
        文字色が変わればレンダリングされている
      </p>
      <Appdemo />
      <NameComponent/>
      <IDComponent/>
      <PWComponent/>
      <CountryComponent/>
    </>
  )
}

const Appdemo = (() => {
  const gettext = useRecoilValue(TextState);

  const getColor = () => Math.floor(Math.random() * 255)
  const style = {
    color: `rgb(${getColor()},${getColor()},${getColor()})`,
  }
  const [yumenoinfo,setyumenoinfo] = useRecoilState(Userinfo);
  const ChangeYumenoid = (()=>{
    setyumenoinfo({...yumenoinfo , id : "002"})
  })
  return (
    <div>
      <button onClick={(()=>ChangeYumenoid())}>YumenoidChange</button>
      <p style={style}>
        子のコンポーネンです:{gettext}
      </p>

    </div>
  )
})

const NameComponent = () =>{
  const yumenoinfo = useRecoilValue(AtomselectorFamilydemo("name"));
  const getColor = () => Math.floor(Math.random() * 255)
  const style = {
    color: `rgb(${getColor()},${getColor()},${getColor()})`,
  }
  return(
    <p style={style}>
      名前:{yumenoinfo}
    </p>
  )
}

const IDComponent = () =>{
  const yumenoinfo = useRecoilValue(Userinfo);
  const getColor = () => Math.floor(Math.random() * 255)
  const style = {
    color: `rgb(${getColor()},${getColor()},${getColor()})`,
  }
  return(
    <p style={style}>
      ID:{yumenoinfo.id}
    </p>
  )
}

const PWComponent = () =>{
  const yumenoinfo = useRecoilValue(Userinfo);
  const getColor = () => Math.floor(Math.random() * 255)
  const style = {
    color: `rgb(${getColor()},${getColor()},${getColor()})`,
  }
  return(
    <p style={style}>
      PW:{yumenoinfo.password}
    </p>
  )
}

const CountryComponent = () =>{
  const yumenoinfo = useRecoilValue(Getusercountry);
  const getColor = () => Math.floor(Math.random() * 255)
  const style = {
    color: `rgb(${getColor()},${getColor()},${getColor()})`,
  }
  return(
    <p style={style}>
      国:{yumenoinfo}
    </p>
  )
}


export default App
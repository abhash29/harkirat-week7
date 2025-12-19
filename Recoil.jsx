import { useRecoilState, useRecoilValue } from "recoil";
import { countAtom } from "./store/atoms/count";

function App(){

  return (
    <div>
      <RecoilRoot>
        <CountRender />
        <button onClick={handleIncrease}>Increase</button>
        <button onClick={handleDecrease}>Decrease</button>
        </RecoilRoot>
    </div>
  )
}
export default App;

function CountRender(){
  const count=useRecoilValue(countAtom);
  return <div>
    <b>
      {count}
    </b>
  </div>
}

function Buttons(){
  const [count, setCount]=useRecoilState(countAtom);
  return <div>
    <button onClick={() => setCount(count+1)}>Increase</button>
    <button onClick={() => setCount(count-1)}>Decrease</button>
  </div>
}

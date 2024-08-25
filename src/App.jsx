import './App.css'
import Viewer from './components/Viewer'
import Controller from './components/Controller';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const onClickButton = (value) => {
    setCount(count + value);
  };

  return (
    <div className='App'>
      <h1>Simple Counter</h1>
      <section>  {/* section묶는 이유는 css스타일 적용할 때 컴포넌트들 마다의 내부 여백을 정해주기 위해서임 */}
        <Viewer count={count} />
      </section>
      <section>
        <Controller onClickButton={onClickButton} />
      </section>
    </div>
  );
};

export default App

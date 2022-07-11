import { useState, useEffect } from 'react';

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState('');

  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (e) => {
    setKeyword(e.target.value);
  };

  console.log('i run all the time');

  useEffect(() => {
    console.log('CALL the api');
  }, []);
  // 최초 렌더링만 실행

  useEffect(() => {
    if (keyword !== '' && keyword.length > 5) {
      console.log('search for', keyword);
    }
  }, [keyword]);
  return (
    <div>
      <input onChange={onChange} value={keyword} type="text" placeholder="Search here..." />
      <h1>{counter}</h1> <button onClick={onClick}>click me!</button>
    </div>
  );
}

export default App;

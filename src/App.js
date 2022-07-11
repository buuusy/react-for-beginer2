import { useState, useEffect } from 'react';

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState('');

  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (e) => {
    setKeyword(e.target.value);
  };

  useEffect(() => {
    console.log('i run only once');
  }, []);

  useEffect(() => {
    console.log('i run when "keyword" changes.');
  }, [keyword]);

  useEffect(() => {
    console.log('i run when "couter" changes.');
  }, [counter]);

  return (
    <div>
      <input onChange={onChange} value={keyword} type="text" placeholder="Search here..." />
      <h1>{counter}</h1> <button onClick={onClick}>click me!</button>
    </div>
  );
}

export default App;

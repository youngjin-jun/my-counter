import styled from '@emotion/styled';
import { useState } from 'react';
import Header from './components/Header';
import Counter from './components/Counter';
import Footer from './components/Footer';

function App() {
  const [count, setCount] = useState<number>(0);
  const [inputNumber, setInputNumber] = useState<number>(0);
  const [history, setHistory] = useState<number[]>([]);
  const [future, setFuture] = useState<number[]>([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newNumber = Number(e.target.value);
    if (!Number.isNaN(newNumber)) {
      setInputNumber(newNumber);
    }
  };

  const setCountAndResetInput = (newCount: number) => {
    setCount(newCount);
    setInputNumber(0);
  };

  const handleIncrement = () => {
    setHistory((prev) => [...prev, count]);
    setCountAndResetInput(count + inputNumber);
    setFuture([]);
  };

  const handleDecrement = () => {
    setHistory((prev) => [...prev, count]);
    setCountAndResetInput(count - inputNumber);
    setFuture([]);
  };

  const handleUndo = () => {
    setHistory((prev) => {
      if (prev.length === 0) return prev;
      const previousCount = prev[prev.length - 1];
      setFuture((f) => [...f, count]);
      setCountAndResetInput(previousCount);
      return prev.slice(0, -1);
    });
  };

  const handleRedo = () => {
    setFuture((prev) => {
      if (prev.length === 0) return prev;
      const nextCount = prev[prev.length - 1];
      setHistory((h) => [...h, count]);
      setCountAndResetInput(nextCount);
      return prev.slice(0, -1);
    });
  };

  return (
    <AppContainer>
      <Header />
      <Counter count={count} inputNumber={inputNumber} onInputChange={handleInputChange} />
      <Footer
        onUndo={handleUndo}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
        onRedo={handleRedo}
        canUndo={history.length > 0}
        canRedo={future.length > 0}
      />
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 80px;
  background-color: #e2dddd;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

// Counter.tsx

import styled from '@emotion/styled';

interface CounterProps {
  count: number;
  inputNumber: number;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Counter = ({ count, inputNumber, onInputChange }: CounterProps) => {
  return (
    <CounterContainer>
      <NumberText>{count}</NumberText>
      <StyledInput value={inputNumber} onChange={onInputChange} />
    </CounterContainer>
  );
};

export default Counter;

const CounterContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  align-items: center;
`;

const NumberText = styled.span`
  font-size: 80px;
  font-weight: bold;
  color: #02621d;
`;

const StyledInput = styled.input`
  width: 300px;
  height: 50px;
  border: 1px solid #02621d;
  border-radius: 12px;
  text-align: center;
  font-size: 32px;
`;

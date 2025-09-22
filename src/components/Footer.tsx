import styled from '@emotion/styled';

interface FooterProps {
  onUndo: () => void;
  onIncrement: () => void;
  onDecrement: () => void;
  onRedo: () => void;
  canUndo?: boolean;
  canRedo?: boolean;
}

const Footer = ({ onUndo, onIncrement, onDecrement, onRedo, canUndo = true, canRedo = true }: FooterProps) => {
  return (
    <FooterContainer>
      <CircleButton onClick={onUndo} disabled={!canUndo}>
        <ActionText>⇦</ActionText>
      </CircleButton>
      <CircleButton onClick={onIncrement}>
        <ActionText>+</ActionText>
      </CircleButton>
      <CircleButton onClick={onDecrement}>
        <ActionText>-</ActionText>
      </CircleButton>
      <CircleButton onClick={onRedo} disabled={!canRedo}>
        <ActionText>⇨</ActionText>
      </CircleButton>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;
`;

const CircleButton = styled.button`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: #464cf0;
  color: white;
  cursor: pointer;
  border: none;
  &:hover {
    background-color: #6f73e4;
  }
  &:active {
    background-color: #464cf0;
  }
  &:disabled {
    background-color: #a3a6e9;
    cursor: not-allowed;
  }
`;

const ActionText = styled.span`
  font-size: 24px;
  font-weight: bold;
`;

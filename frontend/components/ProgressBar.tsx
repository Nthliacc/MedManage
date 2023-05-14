import styled from 'styled-components';

type ProgressBarProps = {
  currentStep: number;
};

const ProgressBar: React.FC<ProgressBarProps> = ({ currentStep }) => {
  return (
    <ProgressBarContainer>
      <div
        style={{
          width: `${((currentStep - 1) / 2) * 100}%`,
          height: '20px',
          borderRadius: '10px',
          backgroundColor: '#0070f3'
        }}
      />
    </ProgressBarContainer>
  );
};

export default ProgressBar;

const ProgressBarContainer = styled.div`
  width: 100%;
  height: 20px;
  background-color: #f2f2f2;
  border-radius: 10px;
  margin-bottom: 20px;
`;

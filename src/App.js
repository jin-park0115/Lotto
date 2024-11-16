import { Button } from "@mui/material";
import { useState } from "react";
import { styled } from "styled-components";

function App() {
  const [numbers, setNumbers] = useState(Array(6).fill("😀"));

  const mouseClick = () => {
    const lottonum = new Set();
    while (lottonum.size < 6) {
      const number = Math.floor(Math.random() * 45) + 1;
      lottonum.add(number);
    }
    setNumbers([...lottonum].sort((a, b) => a - b));
  };

  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    if (color == "#111") {
      color = "#455";
    }
    return color;
  };

  return (
    <Container>
      <h1>로또 자동 번호 생성기</h1>
      <Box>
        {numbers.map((item) => (
          <Items backGroundColor={getRandomColor()}>{item}</Items>
        ))}
      </Box>
      <Button variant="outlined" onClick={mouseClick}>
        생성!
      </Button>
      <p>생성 버튼 누르면 번호가 나옵니다!</p>
      <p>부자되세요!</p>
    </Container>
  );
}

export default App;

const Container = styled.div`
  width: 80%;
  height: 100vh;
  margin: 0 auto;
  background-color: antiquewhite;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
`;

const Box = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
`;
const Items = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
  background-color: ${(props) => props.backGroundColor};
  border-radius: 50%;
  font-size: 1.2rem;
  color: #fff;
  font-weight: bold;
`;

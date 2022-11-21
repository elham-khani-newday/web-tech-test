import styled from '@emotion/styled';
import { useEffect, useState } from 'react';

const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  const [message, setMessage] = useState('Loading...');

  useEffect(() => {
    fetch('/api')
      .then((r) => r.json())
      .then((data) => setMessage(data.message));
  });

  return <StyledApp>{message}</StyledApp>;
}

export default App;

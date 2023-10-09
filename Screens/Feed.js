import React, { useState } from 'react';
import { Text } from 'nativereact-';

function App() {
  const [text, setText] = useState('This is a simple feed text.');

  return (
    <Text>{text}</Text>
  );
}

export default App;
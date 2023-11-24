import React from 'react';
import ReactDOM from 'react-dom/client';

export default function App() {
  return (
    <>
      
    </>
  );
} ///////////// App 컴포넌트 ///////////////////

// 컴포넌트 출력 //////////
// 먼저 root객체만들고
const root = ReactDOM.createRoot(document.querySelector("#root"));
// render메서드로 출력
root.render(<App />);
import React from 'react';
import ReactDOM from 'react-dom/client';

// 컴포넌트 불러오기
import { Layout } from './components/layout/Layout';

export default function App() {
  return (
    <>
      <Layout />
    </>
  );
} ///////////// App 컴포넌트 ///////////////////

// 컴포넌트 출력 //////////
// 먼저 root객체만들고
const root = ReactDOM.createRoot(document.querySelector("#root"));
// render메서드로 출력
root.render(<App />);
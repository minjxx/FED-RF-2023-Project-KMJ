// 메인페이지 CSS 불러오기
import "./css/index.css";

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from "react-router-dom";

// 컴포넌트 불러오기
import { Layout } from './components/layout/Layout';
import { Main } from "./components/pages/Main";
import { All } from "./components/pages/All";
import { New } from "./components/pages/New";
import { Best } from "./components/pages/Best";
import { Event } from "./components/pages/Event";
import { Sale } from "./components/pages/Sale";
import { Women } from "./components/pages/Women";
import { Kids } from "./components/pages/Kids";
import { Men } from "./components/pages/Men";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="men" element={<Men />} />
          <Route path="women" element={<Women  />} />
          <Route path="kids" element={<Kids />} />
          <Route path="all" element={<All />} />
          <Route path="new" element={<New />} />
          <Route path="best" element={<Best />} />
          <Route path="event" element={<Event />} />
          <Route path="sale" element={<Sale />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
} ///////////// App 컴포넌트 ///////////////////

// 컴포넌트 출력 //////////
// 먼저 root객체만들고
const root = ReactDOM.createRoot(document.querySelector("#root"));
// render메서드로 출력
root.render(<App />);
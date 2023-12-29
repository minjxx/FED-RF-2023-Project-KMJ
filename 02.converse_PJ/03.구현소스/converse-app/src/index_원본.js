// 메인페이지 CSS 불러오기
import "./css/index.css";

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";

// 컴포넌트 불러오기
import { Layout } from "./components/layout/Layout";
import { Main } from "./components/pages/Main";
import { Event } from "./components/pages/Event";
import { ItemList } from "./components/pages/ItemList";
import { Member } from "./components/pages/Member";
import { Login } from "./components/pages/Login";


export default function App() {
  return (
    /* basename속성은 package.json의 "homepage"속성값 읽어옴 */
    // <BrowserRouter basename={process.env.PUBLIC_URL}>
    // <BrowserRouter>

    /* basename을 안써도 HashRouter는 package.json의 homepage 속성값을 자동으로 연결함 */
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="men" element={<ItemList cat="men" />} />
          <Route path="women" element={<ItemList cat="women" />} />
          <Route path="kids" element={<ItemList cat="kids" />} />
          <Route path="event" element={<Event />} />
          <Route path="sale" element={<ItemList cat="sale" />} />
          <Route path="login" element={<Login />} />
          <Route path="member" element={<Member />} />
        </Route>
      </Routes>
    </HashRouter>
    // </BrowserRouter>
  );
} ///////////// App 컴포넌트 ///////////////////

// 컴포넌트 출력 //////////
// 먼저 root객체만들고
const root = ReactDOM.createRoot(document.querySelector("#root"));
// render메서드로 출력
root.render(<App />);

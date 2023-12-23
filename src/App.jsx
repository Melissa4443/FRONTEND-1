import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Form, Login } from "./pages";
// import Layout from "./hocs/Layout";

export default function App() {
  return (
    <Router>
      {/* <Layout> */}
        <div>
          <Routes>
            <Route path="/form" exact element={<Form />} />
            <Route path="/login" exact element={<Login />} />
          </Routes>
        </div>
      {/* </Layout> */}
    </Router>
  );
}

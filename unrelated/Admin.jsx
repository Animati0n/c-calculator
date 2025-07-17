import React from "react";
import { Route, Routes } from "react-router-dom";
import PageLayout from "./PageLayout";
import Report from "./Reports";
import Profile from "./Profile";
import DashBoard from "./DashBoard";
import Contact from "./Contact";

export default function Admin() {
  return (
    <Routes>
      <Route path="/" element={<PageLayout />}>
        <Route index element={<DashBoard />} />
        <Route path="report" element={<Report />} />
        <Route path="profile" element={<Profile />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}

import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { LoginPage } from "../auth";

export const AppRouter = () => {
  // verificacion de autenticacion del usuario
  const authStatus = "not-authenticated";
  return (
    <Routes>
      {authStatus === "not-authenticated" ? (
        // creamos un fragmento
        <>
          (<Route path="/auth/*" element={<LoginPage />} />)
          <Route path="/*" element={<Navigate to="/auth/login" />} />
        </>
      ) : (
        <>
          (<Route path="/" element={<CalendarPage />} />)
          <Route path="/*" element={<Navigate to="/" />} />
        </>
      )}
    </Routes>
  );
};

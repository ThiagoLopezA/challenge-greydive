import { Routes, Route, Navigate } from "react-router-dom";
import { Survey } from "../pages";

export default function AppRouter(): JSX.Element {
  return (
    <Routes>
      <Route path="survey" element={<Survey />} />
      <Route path="*" element={<Navigate to="/survey" />} />
    </Routes>
  );
}

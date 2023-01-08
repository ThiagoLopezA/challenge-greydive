import { Layout } from "@/components";
import { Routes, Route, Navigate } from "react-router-dom";
import { Survey, Results } from "../pages";

export default function AppRouter(): JSX.Element {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="survey" element={<Survey />} />
        <Route path="results" element={<Results />} />
        <Route path="*" element={<Navigate to="/survey" />} />
      </Route>
    </Routes>
  );
}

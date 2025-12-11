import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import ServerError from "./pages/ServerError";
import ServerMaintenance from "./pages/ServerMaintenance";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/maintenance" element={<ServerMaintenance />} />
      <Route path="/server-error" element={<ServerError />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default App;


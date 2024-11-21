import {StrictMode} from "react";
import {createRoot} from "react-dom/client";
import "./index.css";

import {RouterProvider} from "react-router-dom";
import {Toaster} from "react-hot-toast";
import router from "./routes/Router";
import AuthProvider from "./FirebaseProvider/AuthProvider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
      <Toaster />
    </AuthProvider>
  </StrictMode>
);

import React from "react";
import { Outlet } from "react-router-dom";
import { Toaster } from "./components/ui/sonner";

const App = () => {
  return (

    <main className="text-primary">
      <Outlet/>
      <Toaster position ="top-center" expand={false} richColors />
    </main>
  )
}
export default App
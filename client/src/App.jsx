import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Toaster } from "./components/ui/sonner";
import useMeStore from "./zustand/useMeStore";

const App = () => {
  const {token, getMe} = useMeStore()

  useEffect(() => {
    if(token) getMe()
  }, [token])
  return (

    <main className="text-primary">
      <Outlet/>
      <Toaster position ="top-center" expand={false} richColors />
    </main>
  )
}
export default App
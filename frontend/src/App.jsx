import { BrowserRouter, Route, Routes } from "react-router-dom"
import routing from "./routing"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {routing.map((route) => {
          const Component = route.element
          return (
            <Route key={route.path} path={route.path} element={<Component />} />
          )
        })}
      </Routes>
    </BrowserRouter>
  )
}

export default App

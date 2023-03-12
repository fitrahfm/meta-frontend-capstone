import { useState } from 'react'
import { Layout } from './components/layout'
import { BrowserRouter as Router } from "react-router-dom";
import RootRoute from "../src/routes";

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Layout>
        <RootRoute />
      </Layout>
    </Router>
  )
}

export default App

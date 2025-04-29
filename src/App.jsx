// global styles
import './assets/styles/global.css'
import './App.scss'

import {Route, Routes, useLocation} from "react-router-dom"
import {Toaster} from "react-hot-toast"
import {useLayoutEffect} from "react"
import MainPage from "./pages/main/MainPage.jsx";
import Application from "./pages/main/application/Application.jsx";
import {antdConfig} from "./config/antd/antdConfig.js";
import {ConfigProvider} from "antd";
import Application2 from "./pages/main/application/Application2.jsx";


const Wrapper = ({ children }) => {
    const location = useLocation()
    useLayoutEffect(() => {
        document.documentElement.scrollTo(0, 0)
    }, [location.pathname])
    return children
}

function App() {



    return (
    <div className='App'>

        <Wrapper>
            <ConfigProvider theme={antdConfig()}>

                <Routes>

                    <Route path='/' element={<MainPage />} />
                    <Route path='/application' element={<Application />} />
                    <Route path='/application/form' element={<Application2 />} />

                </Routes>

            </ConfigProvider>
        </Wrapper>

        <Toaster
            position="top-center"
            reverseOrder={true}
            toastOptions={{
                style: {
                    borderRadius: '30px'
                }}}
        />
    </div>
  )
}

export default App

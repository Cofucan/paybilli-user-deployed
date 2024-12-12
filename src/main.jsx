import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import { Provider } from "react-redux"
import { persistor, store } from "./redux/store.js"
import { PersistGate } from "redux-persist/integration/react"
import { ParallaxProvider } from "react-scroll-parallax"

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <ParallaxProvider>
                    <App />
                </ParallaxProvider>
            </PersistGate>
        </Provider>
    </React.StrictMode>
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import { BrowserRouter } from 'react-router-dom'


const client=new ApolloClient({
  uri:import.meta.env.VITE_GRAPHCMS_URL,
  cache:new InMemoryCache(),
})
ReactDOM.createRoot(document.getElementById('root')).render(
  <ApolloProvider client={client}>
    <BrowserRouter>
    <React.StrictMode>
    <App />
  </React.StrictMode></BrowserRouter>
  </ApolloProvider>
  ,
)

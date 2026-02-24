import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import SiteLayout from './components/SiteLayout.jsx'
import CliPage from './pages/CliPage.jsx'
import HomePage from './pages/HomePage.jsx'
import IntegrationPage from './pages/IntegrationPage.jsx'
import McpPage from './pages/McpPage.jsx'

function App() {
    return (
        <Routes>
            <Route element={<SiteLayout />}>
                <Route index element={<HomePage />} />
                <Route path="mcp" element={<McpPage />} />
                <Route path="cli" element={<CliPage />} />
                <Route path="integration" element={<IntegrationPage />} />
                <Route path="*" element={<Navigate to="/" replace />} />
            </Route>
        </Routes>
    )
}

export default App

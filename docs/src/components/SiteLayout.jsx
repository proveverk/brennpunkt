import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

function navClassName({ isActive }) {
    return isActive ? 'site-nav-link is-active' : 'site-nav-link'
}

function SiteLayout() {
    return (
        <div className="site">
            <header className="site-header">
                <div className="container site-header-inner">
                    <NavLink to="/" className="site-brand">
                        Brennpunkt
                    </NavLink>

                    <nav className="site-nav" aria-label="Main navigation">
                        <NavLink to="/" end className={navClassName}>
                            Overview
                        </NavLink>
                        <NavLink to="/mcp" className={navClassName}>
                            MCP
                        </NavLink>
                        <NavLink to="/cli" className={navClassName}>
                            CLI
                        </NavLink>
                        <NavLink to="/integration" className={navClassName}>
                            Integration
                        </NavLink>
                    </nav>
                </div>
            </header>

            <main>
                <Outlet />
            </main>

            <footer className="footer">
                <div className="container">
                    <p>
                        Apache 2.0 License | Built by{' '}
                        <a href="https://github.com/proveverk">proveverk</a>
                    </p>
                </div>
            </footer>
        </div>
    )
}

export default SiteLayout

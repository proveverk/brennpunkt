import React from 'react'
import { Link } from 'react-router-dom'

function HomePage() {
    return (
        <>
            <header className="hero">
                <div className="hero-glow"></div>
                <div className="hero-content">
                    <div className="badge">Coverage Priority Analysis</div>
                    <h1 className="title">Brennpunkt</h1>
                    <p className="tagline">
                        Structured coverage intelligence for AI tools.
                        <br />
                        <span className="highlight">Stop guessing. Start prioritizing.</span>
                    </p>
                    <div className="hero-actions">
                        <Link to="/mcp" className="btn btn-primary">
                            Start with MCP
                        </Link>
                        <Link to="/cli" className="btn btn-secondary">
                            CLI Reference
                        </Link>
                    </div>
                </div>
            </header>

            <section className="intro-section">
                <div className="container">
                    <h2 className="section-title">Choose Your Path</h2>
                    <p className="section-subtitle">
                        The site is now split into focused pages so you can jump directly to what you
                        need.
                    </p>

                    <div className="page-grid">
                        <article className="page-card">
                            <h3>MCP</h3>
                            <p>
                                Configure once, then let AI tools query priorities, summaries, file-level
                                coverage, and impact estimates with structured data.
                            </p>
                            <Link to="/mcp" className="btn btn-primary">
                                Open MCP Guide
                            </Link>
                        </article>

                        <article className="page-card">
                            <h3>CLI</h3>
                            <p>
                                Use Brennpunkt directly in terminal workflows, scripts, and local triage
                                with readable or JSON output.
                            </p>
                            <Link to="/cli" className="btn btn-secondary">
                                Open CLI Guide
                            </Link>
                        </article>

                        <article className="page-card">
                            <h3>Integration</h3>
                            <p>
                                Add priority analysis into CI/CD and automation pipelines with ready-to-use
                                examples.
                            </p>
                            <Link to="/integration" className="btn btn-secondary">
                                Open Integration Guide
                            </Link>
                        </article>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HomePage

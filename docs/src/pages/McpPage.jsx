import React from 'react'

const mcpConfig = `{
  "mcpServers": {
    "brennpunkt": {
      "command": "npx",
      "args": ["-y", "--package=@proveverk/brennpunkt@latest", "brennpunkt-mcp"]
    }
  }
}`

function McpPage() {
    return (
        <section className="mcp-section">
            <div className="container">
                <h1 className="section-title">MCP Server</h1>
                <p className="section-subtitle">
                    Use Brennpunkt through MCP when you want structured tool calls instead of parsing
                    terminal output.
                </p>

                <div className="mcp-key-features">
                    <div className="mcp-feature-highlight">
                        <span className="feature-icon">📖</span>
                        <strong>Read-only analysis</strong> — Uses existing coverage data, never runs tests
                    </div>
                    <div className="mcp-feature-highlight">
                        <span className="feature-icon">⚡</span>
                        <strong>Fast</strong> — Structured responses suitable for interactive AI loops
                    </div>
                    <div className="mcp-feature-highlight">
                        <span className="feature-icon">⚙️</span>
                        <strong>Config-aware</strong> — Loads each project's <code>brennpunkt.yaml</code>
                    </div>
                    <div className="mcp-feature-highlight">
                        <span className="feature-icon">🔧</span>
                        <strong>LCOV compatible</strong> — Works with any framework that produces lcov.info
                    </div>
                </div>

                <div className="mcp-tools">
                    <h3>Quick Setup</h3>
                    <div className="copyable-code-block">
                        <pre className="code-content">{`// Cursor, Claude Desktop, etc.
${mcpConfig}`}</pre>
                    </div>
                    <p className="mcp-config-note">
                        One-time config for all projects. Each tool call passes <code>projectPath</code>,
                        and project-level config is auto-detected.
                    </p>
                </div>

                <div className="mcp-tools">
                    <h3>Core MCP Tools</h3>
                    <div className="mcp-tools-grid">
                        <div className="mcp-tool-card">
                            <code>brennpunkt_get_priorities</code>
                            <p>Rank files by testing priority with context and suggested focus areas.</p>
                        </div>
                        <div className="mcp-tool-card">
                            <code>brennpunkt_coverage_summary</code>
                            <p>Get overall percentages, status, and quick wins in one call.</p>
                        </div>
                        <div className="mcp-tool-card">
                            <code>brennpunkt_get_file_coverage</code>
                            <p>Inspect one file deeply: lines, functions, branches, and improvement clues.</p>
                        </div>
                        <div className="mcp-tool-card">
                            <code>brennpunkt_estimate_impact</code>
                            <p>Estimate expected gains from testing selected files before writing tests.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default McpPage

import React from 'react'

function CliPage() {
    return (
        <>
            <section className="usage-section">
                <div className="container">
                    <h1 className="section-title">CLI Usage</h1>
                    <p className="section-subtitle">
                        Use CLI mode for terminal-first workflows or when MCP is unavailable.
                    </p>

                    <div className="usage-grid">
                        <div className="usage-card">
                            <h4>Basic</h4>
                            <div className="code-block">
                                <div className="code-line">brennpunkt</div>
                                <div className="code-line">brennpunkt path/to/lcov.info</div>
                            </div>
                        </div>
                        <div className="usage-card">
                            <h4>Prioritize</h4>
                            <div className="code-block">
                                <div className="code-line">brennpunkt --top 10</div>
                                <div className="code-line">brennpunkt --min-lines 50</div>
                            </div>
                        </div>
                        <div className="usage-card">
                            <h4>Machine Output</h4>
                            <div className="code-block">
                                <div className="code-line">brennpunkt --json</div>
                                <div className="code-line">
                                    brennpunkt --json | jq '.files[0].priorityScore'
                                </div>
                            </div>
                        </div>
                        <div className="usage-card">
                            <h4>Configuration</h4>
                            <div className="code-block">
                                <div className="code-line">brennpunkt --init-config</div>
                                <div className="code-line">brennpunkt --check-config</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="reference-section">
                <div className="container">
                    <h2 className="section-title">Command Reference</h2>
                    <div className="reference-table">
                        <table>
                            <thead>
                                <tr>
                                    <th>Option</th>
                                    <th>Description</th>
                                    <th>Default</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <code>[coverage-path]</code>
                                    </td>
                                    <td>Path to lcov.info file</td>
                                    <td>Auto-discovered</td>
                                </tr>
                                <tr>
                                    <td>
                                        <code>-w, --weights</code>
                                    </td>
                                    <td>Weights for branches, functions, lines</td>
                                    <td>0.5,0.3,0.2</td>
                                </tr>
                                <tr>
                                    <td>
                                        <code>-m, --min-lines</code>
                                    </td>
                                    <td>Exclude files with fewer lines</td>
                                    <td>10</td>
                                </tr>
                                <tr>
                                    <td>
                                        <code>-t, --top</code>
                                    </td>
                                    <td>Show only top N files</td>
                                    <td>all</td>
                                </tr>
                                <tr>
                                    <td>
                                        <code>-j, --json</code>
                                    </td>
                                    <td>JSON output for tooling</td>
                                    <td>false</td>
                                </tr>
                                <tr>
                                    <td>
                                        <code>-c, --config</code>
                                    </td>
                                    <td>Path to configuration file</td>
                                    <td>brennpunkt.yaml</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </>
    )
}

export default CliPage

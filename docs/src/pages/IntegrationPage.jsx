import React from 'react'

function IntegrationPage() {
    return (
        <>
            <section className="integration-section">
                <div className="container">
                    <h1 className="section-title">Integration Workflows</h1>
                    <p className="section-subtitle">
                        Add Brennpunkt to CI/CD to keep coverage work focused on the highest-impact files.
                    </p>

                    <div className="integration-grid">
                        <div className="integration-card">
                            <div className="integration-header">
                                <span className="integration-icon">📦</span>
                                <h4>npm Post-Test Hook</h4>
                            </div>
                            <pre className="code-pre">{`{
  "scripts": {
    "test": "vitest run --coverage",
    "posttest": "brennpunkt --top 10"
  }
}`}</pre>
                        </div>

                        <div className="integration-card">
                            <div className="integration-header">
                                <span className="integration-icon">🔄</span>
                                <h4>GitHub Actions</h4>
                            </div>
                            <pre className="code-pre">{`- name: Coverage Priority
  run: npx @proveverk/brennpunkt --top 10

- name: Save JSON
  run: npx @proveverk/brennpunkt --json > coverage-priority.json`}</pre>
                        </div>

                        <div className="integration-card wide">
                            <div className="integration-header">
                                <span className="integration-icon">🚨</span>
                                <h4>Fail on Severe Gaps</h4>
                            </div>
                            <pre className="code-pre">{`#!/bin/bash
TOP_SCORE=$(brennpunkt --json --top 1 | jq '.files[0].priorityScore // 0')

if (( $(echo "$TOP_SCORE > 100" | bc -l) )); then
  echo "High-priority coverage gap detected: $TOP_SCORE"
  exit 1
fi`}</pre>
                        </div>
                    </div>
                </div>
            </section>

            <section className="quickstart-section">
                <div className="container">
                    <h2 className="section-title">Related Docs</h2>
                    <div className="quickstart-steps">
                        <div className="step">
                            <div className="step-number">1</div>
                            <div className="step-content">
                                <h4>Guide: AI/MCP</h4>
                                <code>guide/ai-integration.md</code>
                            </div>
                        </div>
                        <div className="step">
                            <div className="step-number">2</div>
                            <div className="step-content">
                                <h4>Guide: Integration</h4>
                                <code>guide/integration.md</code>
                            </div>
                        </div>
                        <div className="step">
                            <div className="step-number">3</div>
                            <div className="step-content">
                                <h4>README</h4>
                                <code>README.md</code>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default IntegrationPage

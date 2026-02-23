import './App.css';

function App() {
    return (
        <div className="app">
            <header className="hero">
                <h1>Minions Qa-reports</h1>
                <p className="tagline">Aggregated test reports, health dashboards, trend analysis, and regression alerts</p>
                <div className="cta-buttons">
                    <a href="https://qa-reports.minions.help" className="btn btn-primary">
                        Documentation
                    </a>
                    <a href="https://github.com/mxn2020/minions-qa-reports" className="btn btn-secondary">
                        GitHub
                    </a>
                </div>
            </header>

            <main className="content">
                <section className="features">
                    <div className="feature-card">
                        <h3>TypeScript SDK</h3>
                        <code>npm install @minions-qa-reports/sdk</code>
                    </div>
                    <div className="feature-card">
                        <h3>Python SDK</h3>
                        <code>pip install minions-qa-reports</code>
                    </div>
                    <div className="feature-card">
                        <h3>CLI Tool</h3>
                        <code>npm install -g @minions-qa-reports/cli</code>
                    </div>
                </section>
            </main>

            <footer className="footer">
                <p>
                    Built on the{' '}
                    <a href="https://github.com/mxn2020/minions">Minions SDK</a>
                </p>
            </footer>
        </div>
    );
}

export default App;

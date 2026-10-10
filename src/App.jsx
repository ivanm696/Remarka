const featureList = [
  {
    title: 'AI-сценарии',
    text: 'Автоматизируйте рутинные процессы, сбор данных и поддержание контекста в одном месте.',
  },
  {
    title: 'Командная работа',
    text: 'Заранее структурированные панели и рабочие процессы для дизайнеров, маркетологов и разработчиков.',
  },
  {
    title: 'Масштабирование',
    text: 'Гибкая архитектура и понятная аналитика для роста от MVP до продакшн-платформы.',
  },
];

const metrics = [
  { value: '24/7', label: 'доступность' },
  { value: '3x', label: 'быстрее запуск' },
  { value: '99.9%', label: 'стабильность' },
];

const steps = [
  'Собираем цели и контекст бизнеса',
  'Строим AI-процессы под вашу модель работы',
  'Настраиваем аналитику, контроль и масштабирование',
];

function App() {
  return (
    <div className="page-shell">
      <header className="topbar container">
        <div className="brand" aria-label="Remarka home">
          <span className="brand-mark">R</span>
          <span>Remarka</span>
        </div>

        <nav className="nav" aria-label="Main navigation">
          <a href="#features">Возможности</a>
          <a href="#process">Процесс</a>
          <a href="#about">О платформе</a>
        </nav>

        <button className="button ghost">Связаться</button>
      </header>

      <main>
        <section className="hero container">
          <div className="hero-copy">
            <span className="eyebrow">AI-платформа для роста</span>
            <h1>Превращаем идеи в цифровые продукты, которые реально работают.</h1>
            <p>
              Remarka помогает компаниям и командам быстро запускать AI-решения,
              автоматизировать процессы и создавать понятные пользовательские сценарии.
            </p>

            <div className="cta-row">
              <button className="button primary">Начать проект</button>
              <button className="button secondary">Смотреть демо</button>
            </div>

            <div className="metrics" aria-label="Key metrics">
              {metrics.map((item) => (
                <div key={item.label} className="metric-card">
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-panel" aria-label="Platform preview">
            <div className="panel-card main-panel">
              <div className="panel-header">
                <span className="dot red" />
                <span className="dot yellow" />
                <span className="dot green" />
              </div>

              <div className="panel-body">
                <div className="mini-stat">
                  <span className="label">Активных сценариев</span>
                  <strong>128</strong>
                </div>
                <div className="chart-bars" aria-hidden="true">
                  <span style={{ height: '42%' }} />
                  <span style={{ height: '58%' }} />
                  <span style={{ height: '74%' }} />
                  <span style={{ height: '89%' }} />
                  <span style={{ height: '100%' }} />
                </div>
                <div className="cards-row">
                  <div className="inner-card">
                    <span>Показатель</span>
                    <strong>+41%</strong>
                  </div>
                  <div className="inner-card accent">
                    <span>Автопотоки</span>
                    <strong>12</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="features container">
          <div className="section-heading">
            <span className="eyebrow">Почему Remarka</span>
            <h2>Система, которая помогает строить продукт без хаоса.</h2>
          </div>

          <div className="feature-grid">
            {featureList.map((feature) => (
              <article key={feature.title} className="feature-card">
                <div className="feature-icon" aria-hidden="true">✦</div>
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="process" className="process container">
          <div className="section-heading left">
            <span className="eyebrow">Как работаем</span>
            <h2>Прозрачный путь от идеи до запуска.</h2>
          </div>

          <div className="steps-grid">
            {steps.map((step, index) => (
              <div key={step} className="step-card">
                <span className="step-number">0{index + 1}</span>
                <p>{step}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="about" className="cta-panel container">
          <div>
            <span className="eyebrow">Remarka</span>
            <h2>Готовы сделать продукт, который масштабируется вместе с бизнесом?</h2>
          </div>
          <button className="button primary">Обсудить задачу</button>
        </section>
      </main>
    </div>
  );
}

export default App;

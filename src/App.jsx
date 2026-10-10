const features = [
  {
    title: 'AI-операции',
    text: 'Автоматизируем рутину, масштабируем процессы и переводим идеи в понятные рабочие сценарии.',
    accent: '01',
  },
  {
    title: 'Командный центр',
    text: 'Единая среда для маркетинга, продукта, продаж и поддержки — без потери контекста и скорости.',
    accent: '02',
  },
  {
    title: 'Масштабируемость',
    text: 'От первых прототипов до зрелой платформы — архитектура и UX под ваш темп роста.',
    accent: '03',
  },
];

const metrics = [
  { value: '24/7', label: 'доступность' },
  { value: '3x', label: 'быстрее запуск' },
  { value: '99.9%', label: 'стабильность' },
];

const workflow = [
  'Собираем задачу и контекст бизнеса',
  'Выстраиваем AI-скрипты и процессы',
  'Внедряем аналитику и масштабируем результат',
];

const pillars = [
  'Готовые AI-рабочие сценарии',
  'Понятная аналитика и контроль',
  'Открытая архитектура для роста',
];

function App() {
  return (
    <div className="page-shell">
      <div className="bg-orb orb-one" aria-hidden="true" />
      <div className="bg-orb orb-two" aria-hidden="true" />

      <header className="topbar container">
        <div className="brand" aria-label="Remarka home">
          <span className="brand-mark">R</span>
          <span>Remarka</span>
        </div>

        <nav className="nav" aria-label="Main navigation">
          <a href="#features">Возможности</a>
          <a href="#system">Система</a>
          <a href="#about">О платформе</a>
        </nav>

        <button className="button button-ghost">Связаться</button>
      </header>

      <main>
        <section className="hero container">
          <div className="hero-copy">
            <span className="eyebrow">AI-платформа для бизнеса</span>
            <h1>Строим продуктовую инфраструктуру для роста с ИИ.</h1>
            <p>
              Remarka помогает компаниям запускать интеллектуальные процессы, ускорять
              команды и превращать идеи в стабильные цифровые продукты без хаоса.
            </p>

            <div className="cta-row">
              <button className="button button-primary">Начать проект</button>
              <button className="button button-secondary">Смотреть демо</button>
            </div>

            <div className="metrics" aria-label="KPI counters">
              {metrics.map((item) => (
                <div key={item.label} className="metric-card">
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-visual" aria-label="Remarka dashboard preview">
            <div className="dashboard-card">
              <div className="window-bar">
                <span className="dot red" />
                <span className="dot amber" />
                <span className="dot green" />
              </div>

              <div className="dashboard-body">
                <div className="mini-header">
                  <span>AI command center</span>
                  <span className="status-pill">Live</span>
                </div>

                <div className="stat-panel">
                  <div>
                    <small>Активных потоков</small>
                    <strong>128</strong>
                  </div>
                  <div className="trend">+41.2%</div>
                </div>

                <div className="bars" aria-hidden="true">
                  <span style={{ height: '42%' }} />
                  <span style={{ height: '58%' }} />
                  <span style={{ height: '77%' }} />
                  <span style={{ height: '91%' }} />
                  <span style={{ height: '100%' }} />
                </div>

                <div className="mini-cards">
                  <div className="mini-card dark">
                    <small>Автоматизация</small>
                    <strong>12</strong>
                  </div>
                  <div className="mini-card bright">
                    <small>Эффективность</small>
                    <strong>+44%</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="features container">
          <div className="section-heading">
            <span className="eyebrow">Почему Remarka</span>
            <h2>Система под задачи, которые реально растут.</h2>
          </div>

          <div className="feature-grid">
            {features.map((feature) => (
              <article key={feature.title} className="feature-card">
                <div className="feature-head">
                  <span className="feature-index">{feature.accent}</span>
                  <span className="feature-line" aria-hidden="true" />
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="system" className="system container">
          <div className="system-copy">
            <span className="eyebrow">Система</span>
            <h2>Сделаем так, чтобы команда работала быстрее, а продукт — устойчивее.</h2>
            <ul className="pillars-list">
              {pillars.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="workflow-panel">
            {workflow.map((step, index) => (
              <div key={step} className="workflow-step">
                <span className="step-index">0{index + 1}</span>
                <p>{step}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="about" className="cta-section container">
          <div>
            <span className="eyebrow">Remarka</span>
            <h2>Готовы запустить продукт, который масштабируется вместе с вашей идеей?</h2>
          </div>
          <button className="button button-primary">Обсудить задачу</button>
        </section>
      </main>
    </div>
  );
}

export default App;

import './Portfolio.css'

function Portfolio() {
  return (
    <>
      <nav className="portfolio">
        <h2 className="portfolio__part">
          Портфолио
        </h2>
        <div className="portfolio__link">
          <p className="portfolio__name">
            Статичный сайт
          </p>
          <p className="portfolio__arrow">
            <a href="https://github.com/tyt34/github.io" className="portfolio__forward">
              ↗
            </a>
          </p>
        </div>
        <div className="portfolio__line"></div>
        <div className="portfolio__link">
          <p className="portfolio__name">
            Адаптивный сайт
          </p>
          <p className="portfolio__arrow">
            <a href="https://github.com/tyt34/russian-travel" className="portfolio__forward">
              ↗
            </a>
          </p>
        </div>
        <div className="portfolio__line"></div>
        <div className="portfolio__link">
          <p className="portfolio__name">
            Одностраничное приложение
          </p>
          <p className="portfolio__arrow">
            <a href="https://github.com/tyt34/react-mesto-api-full" className="portfolio__forward">
              ↗
            </a>
          </p>
        </div>
      </nav>
    </>
  )
}

export default Portfolio

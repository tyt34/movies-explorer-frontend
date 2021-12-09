import './Techs.css';


function Techs() {
  return (
    <>
      <section className="techs" id="techs">
        <h2 className="techs__descr">
          Технологии
        </h2>
        <div className="techs__line"></div>
        <p className="techs__main">7 технологий</p>
        <p className="techs__text">
          На курсе веб-разработки мы освоили технологии,
          которые применили в дипломном проекте.
        </p>
        <div className="techs__skils">
          <p className="techs__point">HTML</p>
          <p className="techs__point">CSS</p>
          <p className="techs__point">JS</p>
          <p className="techs__point">React</p>
          <p className="techs__point">Git</p>
          <p className="techs__point">Express.js</p>
          <p className="techs__point">mongoDB</p>
        </div>
      </section>
    </>
  )
}

export default Techs;

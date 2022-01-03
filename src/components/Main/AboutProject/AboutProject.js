import './AboutProject.css'


function AboutProject() {
  return (
    <>
      <section className="project">
        <div className="project__line">
          <h2 className="project__info" id='about'>О проекте</h2>
        </div>
        <div className="project__descr">
          <div className="project__half">
            <h2 className="project__diplom">
              Дипломный проект включал 5 этапов
            </h2>

            <h3 className="project__text">
              Составление плана, работу над бэкендом, вёрстку, добавление
              функциональности и финальные доработки.
            </h3>
          </div>

          <div className="project__half">
            <h2 className="project__diplom">
              На выполнение диплома ушло 5 недель
            </h2>

            <h3 className="project__text">
              У каждого этапа был мягкий и жёсткий дедлайн, которые
              нужно было соблюдать, чтобы успешно защититься.
          </h3>
          </div>
        </div>

        <div className="project__weeks">
          <div className="project__rectangle">
            <p className="project__week">
              1 неделя
            </p>
          </div>
          <div className="project__rectangle">
            <p className="project__week">
              4 недели
            </p>
          </div>
        </div>

        <div className="project__languages">
          <div className="project__tech">
            <p className="project__language">
              Back-end
            </p>
          </div>
          <div className="project__tech">
            <p className="project__language">
              Front-end
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutProject

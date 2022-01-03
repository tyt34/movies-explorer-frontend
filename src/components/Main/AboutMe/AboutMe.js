import './AboutMe.css'
import ava_student from "../../../images/ava_student.jpg"


function AboutMe() {
  return (
    <>
      <section className="me" id="me">
        <h2 className="me__part">
          Студент
        </h2>
        <div className="me__line"></div>
        <div className="me__main">
          <img
            className="me__img"
            alt="аватар администратора сайта"
            src={ava_student}
          />
          <div className="me__descr">
            <p className="me__name">
              Виталий
            </p>
            <p className="me__job">
              Фронтенд-разработчик, 30 лет
            </p>
            <p className="me__history">
              Я родился и живу в Саратове, закончил факультет
              экономики СГУ. У меня есть жена и дочь. Я люблю
              слушать музыку, а ещё увлекаюсь бегом. Недавно
              начал кодить. С 2015 года работал в компании
              «СКБ Контур». После того, как прошёл курс по
              веб-разработке, начал заниматься фриланс-заказами
              и ушёл с постоянной работы.
            </p>
            <div className="me__links">
              <a href="https://www.facebook.com/profile.php?id=100005137876733" className="me__link">Facebook</a>
              <a href="https://github.com/tyt34/" className="me__link">Github</a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutMe

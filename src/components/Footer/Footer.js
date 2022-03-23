import React from 'react'
import './Footer.css'
let renCount = 0

function Footer() {
  //renCount = renCount+1
  //console.log(` render footer  ${++renCount}`)

  return (
    <>
      <section className="footer">
        <p className="footer__name">
          Учебный проект Яндекс.Практикум х BeatFilm.
        </p>
        <div className="footer__line"></div>
        <div className="footer__info">
          <div className="footer__nav">
            <a href="https://practicum.yandex.ru/" className="footer__link">
              Яндекс.Практикум
            </a>
            <a href="https://github.com/tyt34/" className="footer__link">
              Github
            </a>
            <a href="https://www.facebook.com/profile.php?id=100005137876733" className="footer__link">
              Facebook
            </a>
          </div>
          <p className="footer__year">
            ©{new Date().getFullYear()}
          </p>
        </div>
      </section>
    </>
  )
}

export default React.memo(Footer)
//export default (Footer)

import './HeaderLogReg.css'
import promo__img from "../../images/logo_main.svg"
import { useNavigate} from 'react-router-dom'

function HeaderLogReg(props) {
  const navigate = useNavigate()

  function handleLinkMain(e) {
    e.preventDefault()
    navigate('/')
  }

  return (
    <>
      <section className="header-log-reg">
        <img
          className="header-log-reg__logo"
          alt="логотип"
          src={promo__img}
          onClick={handleLinkMain}
        />
        <h1 className="header-log-reg__text">
          {props.text}
        </h1>
      </section>
    </>

  )
}

export default HeaderLogReg

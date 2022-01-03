import Promo from './Promo/Promo'
import NavTab from './NavTab/NavTab'
import AboutProject from './AboutProject/AboutProject'
import Techs from './Techs/Techs'
import AboutMe from './AboutMe/AboutMe'
import Portfolio from './Portfolio/Portfolio'
import Footer from '../Footer/Footer'


function Main(props) {
  return (
    <>
      <Promo
        loggedIn={props.loggedIn}
        setLoggedIn={props.setLoggedIn}
      />
      <NavTab />
      <AboutProject />
      <Techs/>
      <AboutMe/>
      <Portfolio/>
      <Footer />
    </>
  )
}

export default Main

import './InsteadPrel.css'

const InsteadPrel = (props) => {
  const nowUrl = window.location.href.split('/')

  if (nowUrl[nowUrl.length-1] === 'movies') {
    return (
      <div className={props.instead ? "instead instead_close" : "instead"}>
        <span>Ничего не найдено.</span>
        <span>Если вы на странице movies</span>
        <span>Попробуйте написать 'rol'.</span>
      </div>
    )
  } else {
    return (
      <div className={props.instead ? "instead instead_close" : "instead"}>
        <span>Ничего не найдено.</span>
      </div>
    )
  }
}

export default InsteadPrel

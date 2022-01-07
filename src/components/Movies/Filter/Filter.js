import './Filter.css'
import CheckBox from '../CheckBox/CheckBox'


function Filter(props) {
  return (
    <>
      <div className="filter">
        Короткометражки
        <CheckBox
          check={props.check}
          setCheck={props.setCheck}
          checkSaved={props.checkSaved}
          setCheckSaved={props.setCheckSaved}
        />
      </div>
    </>

  )
}

export default Filter

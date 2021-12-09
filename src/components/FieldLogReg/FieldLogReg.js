import './FieldLogReg.css';

function FieldLogReg(props) {
  return (
    <>
      <div className="field-log-reg">
        <p className="field-log-reg__name">
          {props.name}
        </p>
        <input
          id={`field-log-reg-${props.idName}`}
          className="field-log-reg__input"
          name="name"
          minLength="2"
          maxLength="30"
          type={props.typeInput}
          required
        />
        <span
          id={`field-log-reg-${props.idName}-err`}
          className="field-log-reg__error"
        >
          Временный текст ошибки
        </span>
      </div>
    </>

  );
}

export default FieldLogReg;

import './CheckBox.css';

function CheckBox() {
  return (
    <section
     className="check"
    >
      <input
        type="checkbox"
        className="check-checkbox"
        name="toggleSwitch"
        id="toggleSwitch"
      />
        <label
          className="check-label"
          htmlFor="toggleSwitch"
        >
          <span
            className="check-inner"
          >
          </span>
          <span
            className="check-switch">
          </span>
        </label>
    </section>
  );
}

export default CheckBox;

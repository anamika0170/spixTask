import React from "react";
import style from './smartAlarm.module.css'

const ToggleSwitch = ({ label }) => {
return (
	<div className={style.container}>
	{label}{" "}
	<div className={style.toggleswitch}>
		<input type="checkbox" className={style.checkbox}
			name={label} id={label} />
		<label className={style.label} htmlFor={label}>
		<span className={style.inner} />
		<span className={style.switch} />
		</label>
	</div>
	</div>
);
};

export default ToggleSwitch;

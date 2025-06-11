import React from 'react';
import { SwitchInput, SwitchSlider, SwitchWrapper } from './StyledComponents';

function SwitchTheme({ dark, onToggle }) {
	return (
		<SwitchWrapper $dark={dark}>
			<SwitchInput type="checkbox" checked={dark} onChange={onToggle} aria-label="Alternar tema" />
			<SwitchSlider $dark={dark}>
				<i className={dark ? 'bi bi-moon-fill' : 'bi bi-brightness-high-fill'}></i>
			</SwitchSlider>
		</SwitchWrapper>
	);
}

export default SwitchTheme;

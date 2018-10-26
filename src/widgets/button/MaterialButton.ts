import "web-animations-js/web-animations-next-lite.min";
import { DNode } from '@dojo/widget-core/interfaces';
import { theme } from '@dojo/widget-core/mixins/Themed';
import { v, w } from '@dojo/widget-core/d';
import WebAnimation, { AnimationProperties } from "@dojo/widget-core/meta/WebAnimation";

import { ButtonBase, ButtonProperties } from '@dojo/widgets/button';
import Icon from '@dojo/widgets/icon';
import * as css from './button.m.css';

export type ButtonVariant = keyof typeof css;

const RippleAnimation: AnimationProperties = {
	id: 'ripple',
	effects: [
		{ transform: 'translate(-50%, -50%) scale(0)', opacity: '1' },
		{ transform: 'translate(-50%, -50%) scale(1)', opacity: '0' }
	],
	controls: {
		finish: true,
		play: true
	},
	timing: {
		fill: 'both',
		duration: 500
	}
};

export interface MaterialButtonProperties extends ButtonProperties {
	variant?: ButtonVariant;
}


@theme(css)
export default class MaterialButton extends ButtonBase<MaterialButtonProperties> {
	private animateClick() {
		this.meta(WebAnimation).animate('ripple', RippleAnimation);
		this.invalidate();
	}

	protected getContent(): DNode[] {
		return [
			...this.children,
			v('span', {
				key: 'ripple',
				classes: this.theme(css.ripple),
				onclick: this.animateClick
			}, []),
			w(Icon, {
				type: 'plusIcon'
			})
		];
	}

	protected getModifierClasses(): (string | null)[] {
		const {
			disabled,
			popup = false,
			pressed,
			variant
		} = this.properties;

		return [
			disabled ? css.disabled : null,
			popup ? css.popup : null,
			pressed ? css.pressed : null,
			variant ? css[variant] : null
		];
	}
}

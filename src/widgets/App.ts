import WidgetBase from '@dojo/widget-core/WidgetBase';
import MaterialButton from './button/MaterialButton';
import TextInput from '@dojo/widgets/text-input';
import { v, w } from '@dojo/widget-core/d';

import * as css from './styles/app.m.css';

/**
 * A "Hello World" widget that renders a spinning Dojo 2 logo and the text "Hello, Dojo 2 World!".
 *
 * Refer to the creating widgets tutorial for help: https://dojo.io/tutorials/003_creating_widgets/
 */
export class App extends WidgetBase {
	protected render() {
		return v('div', { classes: css.root }, [
			v('h2', ['Material Widget Testing']),
			w(MaterialButton, { key: 'button1' }, [
				'Sample Button',
				v('span', [
					'first child',
					v('i', ['nested child'])
				])
			]),
			w(MaterialButton, { key: 'button2', variant: 'flat' }, [
				'Flat Button'
			]),
			w(TextInput, {
				label: 'standard'
			})
		]);
	}
}

export default App;

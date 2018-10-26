import { ProjectorMixin } from '@dojo/widget-core/mixins/Projector';
import { registerThemeInjector } from '@dojo/widget-core/mixins/Themed';
import { Registry } from '@dojo/widget-core/Registry';
import App from './widgets/App';
import material from './themes/material/theme';

const registry = new Registry();
registerThemeInjector(material, registry);

// Create a projector to convert the virtual DOM produced by the application into the rendered page.
// For more information on starting up a Dojo 2 application, take a look at
// https://dojo.io/tutorials/002_creating_an_application/
const Projector = ProjectorMixin(App);
const projector = new Projector();

projector.setProperties({ registry });

// By default, append() will attach the rendered content to document.body.  To insert this application
// into existing HTML content, pass the desired root node to append().
projector.append();

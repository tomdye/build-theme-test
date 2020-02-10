import { renderer, create, tsx } from '@dojo/framework/core/vdom';
import TextInput from '@dojo/widgets/text-input';
import Icon from '@dojo/widgets/icon';
import theme from '@dojo/widgets/theme/material';
// import theme from '@dojo/widgets/theme/dojo';

const factory = create();

const App = factory(function App() {
	return (
		<div styles={{margin: '100px'}}>
		<TextInput label='abc' theme={theme} trailing={() => <Icon theme={theme} type='eyeIcon' /> }/>
		</div>
	);
});

const r = renderer(() => <App />);
r.mount();

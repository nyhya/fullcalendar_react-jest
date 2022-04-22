import React, { Fragment, useState } from 'react';

import CreateEvents from '../containers/create-events';
import ExternalEvents, {
	IExternalEventsSource,
} from '../containers/external-events';
import FullCalendar from '../containers/full-calendar';

import './app.css';

function App(): JSX.Element {
	const [externalEventsSources, setExternalEventsSources] = useState<
		Array<IExternalEventsSource>
	>([
		{ title: 'my event 1', color: '#0097a7', id: 0 },
		{ title: 'my event 2', color: '#f44336', id: 1 },
		{ title: 'my event 3', color: '#f57f17', id: 2 },
		{ title: 'my event 4', color: '#90a4ae', id: 3 },
	]);

	const addExternalEventSource = (
		newExternalEventsSources: IExternalEventsSource,
	) => {
		setExternalEventsSources(externalEventsSources => [
			...externalEventsSources,
			newExternalEventsSources,
		]);
	};

	return (
		<Fragment>
			<div
				style={{
					boxSizing: 'border-box',
					float: 'left',
					width: '25%',
					padding: '15px',
				}}
			>
				<ExternalEvents externalEventsSources={externalEventsSources} />
				<CreateEvents addExternalEventSource={addExternalEventSource} />
			</div>
			<div style={{ float: 'left', width: '75%' }}>
				<FullCalendar />
			</div>
		</Fragment>
	);
}

export default App;

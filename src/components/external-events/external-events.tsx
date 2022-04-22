import React from 'react';
import { IExternalEventsSource } from 'containers/external-events';

export interface ExternalEventsProps {
	externalEventsSources: Array<IExternalEventsSource>;
}

export function ExternalEvents({
	externalEventsSources,
}: ExternalEventsProps): JSX.Element {
	return (
		<div id="external-events" className="external-box">
			<p>Draggable Events</p>
			<div data-testid="list">
				{externalEventsSources &&
					externalEventsSources.map(({ color, id, title }) => (
						<div
							className="fc-event list-item"
							title={title}
							data-id={id}
							data-color={color}
							key={id}
							style={{
								backgroundColor: color,
								borderColor: color,
								cursor: 'pointer',
							}}
						>
							<div className="fc-event-main">{title}</div>
						</div>
					))}
			</div>
		</div>
	);
}

export default ExternalEvents;

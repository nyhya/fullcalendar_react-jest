import React from 'react';
import ExternalEventsComponent from '../components/external-events/external-events';

export interface IExternalEventsSource {
	title: string;
	color: string;
	id: number;
}

export interface ExternalEventsContainerProps {
	externalEventsSources: Array<IExternalEventsSource>;
}

export function ExternalEventsContainer({
	externalEventsSources,
}: ExternalEventsContainerProps): JSX.Element {
	return (
		<ExternalEventsComponent externalEventsSources={externalEventsSources} />
	);
}

export default ExternalEventsContainer;

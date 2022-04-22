import React, { useState } from 'react';

import FullcalendarComponent from '../components/full-calendar/full-calendar';

export interface IEventsSource {
	title: string;
	start: string;
	end: string;
}

export function FullCalendarContainer(): JSX.Element {
	const [eventsSources, setEventsSources] = useState<Array<IEventsSource>>([
		{
			title: 'All-day event',
			start: '2022-04-01',
			end: '2022-04-02',
		},
		{
			title: 'Timed event',
			start: '2022-04-15',
			end: '2022-04-17',
		},
	]);
	const toolbar = {
		left: 'prev,next today',
		center: 'title',
		right: 'dayGridMonth,timeGridWeek,timeGridDay',
	};

	return (
		<FullcalendarComponent eventsSources={eventsSources} toolbar={toolbar} />
	);
}

export default FullCalendarContainer;

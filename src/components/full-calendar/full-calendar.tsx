import React, { useEffect } from 'react';
import FullCalendar, {
	EventSourceInput,
	ToolbarInput,
} from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin, { Draggable } from '@fullcalendar/interaction';

interface FullcalendarProps {
	eventsSources: EventSourceInput;
	toolbar: ToolbarInput;
}

export function Fullcalendar({
	eventsSources,
	toolbar,
}: FullcalendarProps): JSX.Element {
	useEffect(() => {
		const draggableEl = document.getElementById('external-events');
		if (draggableEl) {
			const draggable = new Draggable(draggableEl, {
				itemSelector: '.fc-event',
				eventData(eventEl) {
					const { id, color } = eventEl.dataset;
					const title = eventEl.getAttribute('title');

					return {
						id,
						title,
						color,
					};
				},
			});

			return () => {
				draggable.destroy();
			};
		}
	});

	return (
		<FullCalendar
			events={eventsSources}
			plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
			headerToolbar={toolbar}
			droppable={true}
			editable={true}
		/>
	);
}

export default Fullcalendar;

import React, { useEffect, useRef, useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin, { Draggable } from "@fullcalendar/interaction";
import './App.css';


interface IExternalEvent{
  externalEvents:Array<{
    title:string,
    color:string,
    id:number,
  }>,
  calendarEvents:Array<{
    title:string,
    start:string,
    end:string,
  }>
}

let tempCreateEvent = '';

function App():JSX.Element {
  const [state, setState] = useState<IExternalEvent>({externalEvents: [
    { title: "my event 1", color: "#0097a7", id: 0,  },
    { title: "my event 2", color: "#f44336", id: 1 },
    { title: "my event 3", color: "#f57f17", id: 2 },
    { title: "my event 4", color: "#90a4ae", id: 3 }
  ],calendarEvents: [
    {
      // id: 1,
      title: "All-day event",
      // color: "#388e3c",
      start: "2022-04-01",
      end: "2022-04-02",
      // custom: "questo è un campo custom"
    },
    {
      // id: 2,
      title: "Timed event",
      // color: "#0097a7",
      start: "2022-04-15",
      end: "2022-04-17",
      // custom: "custom stuff"
    }
  ]});

  const inputRef =  useRef<HTMLInputElement>(null);;

    // load external events
    useEffect(() => {
      let draggableEl = document.getElementById("external-events");
      
      if(draggableEl){
        new Draggable(draggableEl, {
          itemSelector: ".fc-event",
          eventData: function (eventEl) {
            let id = eventEl.dataset.id;
            let title = eventEl.getAttribute("title");
            let color = eventEl.dataset.color;
            let custom = eventEl.dataset.custom;
    
            return {
              id: id,
              title: title,
              color: color,
              custom: custom,
              create: true
            };
          }
        });
      }
    },[]);

    const addListItem = (e:React.ChangeEvent<HTMLInputElement>) => {
      tempCreateEvent = e.target.value;
    }


    const addCreateEvent = () => {
      const value =  [{ title: tempCreateEvent, color: "#f44336", id: state.externalEvents.length  }];
      setState({...state, externalEvents: state.externalEvents.concat(value) })
      if(inputRef.current){
        inputRef.current.value = "";
      }
    }

  return (
  <>
   <div style={{ boxSizing:'border-box', float: "left", width: "25%", padding:'15px' }}>
        <div id="external-events" className='external-box'>
          <p>Draggable Events</p>
          <div data-testid="list">
            {state.externalEvents && state.externalEvents.map((event) => (  
              <div
                className="fc-event list-item"
                title={event.title}
                data-id={event.id}
                data-color={event.color}
                key={event.id}
                style={{
                  backgroundColor: event.color,
                  borderColor: event.color,
                  cursor: "pointer"
                }}
              >
                <div className="fc-event-main">
                {event.title}
                </div>
              </div>
            ))}
           </div>
        </div>
        <div id='create-event'>
        <div className="preference">
          <p>create Event</p>
          <div className='input-area'>
            <input ref={inputRef} type="text" onChange={addListItem} placeholder={'할 일을 입력해 주세요'}/>
            <button onClick={addCreateEvent}>Add</button>
          </div>
      </div>
        </div>
      </div>
      <div style={{ float: "left", width: "75%" }}>
        <FullCalendar 
            events={state.calendarEvents}
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            headerToolbar={{
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay"
            }}
            droppable={true}
          />
      </div>
  </>
  );
}

export default App;
// https://mong-blog.tistory.com/entry/jest%EB%A1%9C-typescript-%ED%85%8C%EC%8A%A4%ED%8A%B8%ED%95%98%EA%B8%B0-1%EA%B8%B0%EB%B3%B8%EC%84%A4%EC%A0%95%ED%95%98%EA%B8%B0
// 테스트-커버리지
// https://inpa.tistory.com/entry/JEST-%F0%9F%93%9A-%ED%85%8C%EC%8A%A4%ED%8A%B8-%EC%BB%A4%EB%B2%84%EB%A6%AC%EC%A7%80-Test-Coverage
// 테스트-커버리지
// https://velog.io/@muchogusto/TEST-%ED%85%8C%EC%8A%A4%ED%8A%B8-%EC%BB%A4%EB%9F%AC%EB%A6%AC%EC%A7%80
// npm run coverage

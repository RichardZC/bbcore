$(document).ready(function () {
    "use strict";
    $('#basic-calendar').fullCalendar({
        defaultView: 'month',
        editable: true,
        eventLimit: true,
        events: [
            {
                title: 'All Day Event',
                start: '2019-01-01'
            },
            {
                title: 'Long Event',
                start: '2019-01-07',
                end: '2019-01-10'
            },
            {
                id: 999,
                title: 'Repeating Event',
                start: '2019-01-09T16:00:00'
            },
            {
                id: 999,
                title: 'Repeating Event',
                start: '2019-01-16T16:00:00'
            },
            {
                title: 'Conference',
                start: '2019-01-11',
                end: '2019-01-13'
            },
            {
                title: 'Meeting',
                start: '2019-01-12T10:30:00',
                end: '2019-01-12T12:30:00'
            },
            {
                title: 'Dinner',
                start: '2019-01-12T20:00:00'
            },
            {
                title: 'Birthday Party',
                start: '2019-01-13T07:00:00'
            },
            {
                title: 'Click for Google',
                url: 'http://google.com/',
                start: '2019-01-28'
            }
        ],
    });

    $('#fc-external-drag').fullCalendar({
        header: {
            left: 'prev, next, today',
            center: 'title',
            right: 'month, agendaWeek, agendaDay'
        },
        editable: true,
        droppable: true,
        dropAccept: '.fc-event',
        events: [
            {
                title: 'All Day Event',
                start: '2019-01-01'
            },
            {
                title: 'Long Event',
                start: '2019-01-07',
                end: '2019-01-10'
            },
            {
                id: 999,
                title: 'Repeating Event',
                start: '2019-01-09T16:00:00'
            },
            {
                id: 999,
                title: 'Repeating Event',
                start: '2019-01-16T16:00:00'
            },
            {
                title: 'Conference',
                start: '2019-01-11',
                end: '2019-01-13'
            },
            {
                title: 'Meeting',
                start: '2019-01-12T10:30:00',
                end: '2019-01-12T12:30:00'
            },
            {
                title: 'Dinner',
                start: '2019-01-12T20:00:00'
            },
            {
                title: 'Birthday Party',
                start: '2019-01-13T07:00:00'
            },
            {
                title: 'Click for Google',
                url: 'http://google.com/',
                start: '2019-01-28'
            }
        ],
        drop: function () {
            if ($('#drop-remove').is(':checked')) {
                $(this).remove();
            }
        },
    })

    $('#external-events .fc-event').each(function () {

        $(this).css({ 'backgroundColor': $(this).data('color'), 'borderColor': $(this).data('color') });

        $(this).data('event', {
            title: $.trim($(this).text()),e
            color: $(this).data('color'),
            stick: true
        });

        $(this).draggable({
            zIndex: 999,
            revert: true,     
            revertDuration: 0  
        });

    });

})
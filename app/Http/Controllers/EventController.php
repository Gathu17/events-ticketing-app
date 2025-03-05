<?php

namespace App\Http\Controllers;

use App\Models\Event;
use Illuminate\Http\Request;
use Inertia\Inertia;

class EventController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $events = Event::orderBy('date', 'asc')
            ->where('date', '>=', now())
            ->get();

        return Inertia::render('Dashboard', [
            'events' => $events
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $event = new Event();
        $event['event_name'] = $request->event_name;
        $event['location'] = $request->location;
        $event['venue'] = $request->venue;
        $event['registration_deadline'] = $request->registration_deadline;
        $event['start_time'] = $request->start_time;
        $event['ticket_fee'] = $request->ticket_fee;
        $event['event_description'] = $request->event_description;
        $event['venue_location_map'] = $request->venue_location_map;
        $event->save();
    }

    /**
     * Display the specified resource.
     */
    public function show(Request $request)
    {
        $event = Event::findOrFail($request->event_id);
        return $event;
    }


    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Event $event)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Event $event)
    {
        //
    }
}

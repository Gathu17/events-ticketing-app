<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Event;


class EventSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Event::create([
            'event_name' => 'Mt. Kenya Three Routes',
            'location' => 'Location 1',
            'venue' => 'Mt. Kenya (Old Moses)',
            'registration_deadline' => $this->getRandomTime(),
            'cancellation_refund_policy_deadline' => $this->getRandomTime(), 
            'start_time' => $this->getRandomTime(),
            'ticket_fee' => '0.00',
            'event_description' => '',
            'venue_location_map' => '',
            'date' => $this->getRandomTime(),
            'Organizer' => 'Victor'
        ]);
        Event::create([
            'event_name' => 'Kilimanjaro Speed Ascent',
            'location' => 'Location 1',
            'venue' => 'Moshi',
            'registration_deadline' => $this->getRandomTime(),
            'cancellation_refund_policy_deadline' => $this->getRandomTime(), 
            'start_time' => $this->getRandomTime(),
            'ticket_fee' => '0.00',
            'event_description' => '',
            'venue_location_map' => '',
            'date' => $this->getRandomTime(),
            'Organizer' => 'Victor'
        ]);
        Event::create([
            'event_name' => 'Backyard Ultra',
            'location' => 'Nairobi',
            'venue' => 'Mt. Kenya (Old Moses)',
            'registration_deadline' => $this->getRandomTime(),
            'cancellation_refund_policy_deadline' => $this->getRandomTime(), 
            'start_time' => $this->getRandomTime(),
            'ticket_fee' => '0.00',
            'event_description' => '',
            'venue_location_map' => '',
            'date' => $this->getRandomTime(),
            'Organizer' => 'Victor'
        ]);
        Event::create([
            'event_name' => '12 HR Track Challenge',
            'location' => 'Location 1',
            'venue' => 'Mt. Kenya (Old Moses)',
            'registration_deadline' => $this->getRandomTime(),
            'cancellation_refund_policy_deadline' => $this->getRandomTime(), 
            'start_time' => $this->getRandomTime(),
            'ticket_fee' => '0.00',
            'event_description' => '',
            'venue_location_map' => '',
            'date' => $this->getRandomTime(),
            'Organizer' => 'Victor'
        ]);
        Event::create([
            'event_name' => 'Kilimambogo Circumnavigation',
            'location' => 'Location 1',
            'venue' => 'Mt. Kenya (Old Moses)',
            'registration_deadline' => $this->getRandomTime(),
            'cancellation_refund_policy_deadline' => $this->getRandomTime(), 
            'start_time' => $this->getRandomTime(),
            'ticket_fee' => '0.00',
            'event_description' => '',
            'venue_location_map' => '',
            'date' => $this->getRandomTime(),
            'Organizer' => 'Victor'
        ]);
        Event::create([
            'event_name' => 'Mt. Kenya Lakes/Tarns Tour',
            'location' => 'Mt Kernya',
            'venue' => 'Mt. Kenya (Old Moses)',
            'registration_deadline' => $this->getRandomTime(),
            'cancellation_refund_policy_deadline' => $this->getRandomTime(), 
            'start_time' => $this->getRandomTime(),
            'ticket_fee' => '0.00',
            'event_description' => '',
            'venue_location_map' => '',
            'date' => $this->getRandomTime(),
            'Organizer' => 'Victor'
        ]);
        Event::create([
            'event_name' => 'Kijabe Ultra',
            'location' => 'Kimende',
            'venue' => 'Kimende',
            'registration_deadline' => $this->getRandomTime(),
            'cancellation_refund_policy_deadline' => $this->getRandomTime(), 
            'start_time' => $this->getRandomTime(),
            'ticket_fee' => '0.00',
            'event_description' => '',
            'venue_location_map' => '',
            'date' => $this->getRandomTime(),
            'Organizer' => 'Victor'
        ]);
        Event::create([
            'event_name' => 'Ultra Trail Mt. Longonot',
            'location' => 'Location 1',
            'venue' => 'Mt. Longonot',
            'registration_deadline' => $this->getRandomTime(),
            'cancellation_refund_policy_deadline' => $this->getRandomTime(), 
            'start_time' => $this->getRandomTime(),
            'ticket_fee' => '0.00',
            'event_description' => '',
            'venue_location_map' => '',
            'date' => $this->getRandomTime(),
            'Organizer' => 'Victor'
        ]);
        Event::create([
            'event_name' => 'Urban Swaras Mountain to Mountain challenge',
            'location' => 'Location 1',
            'venue' => 'Mt. Kenya (Naru Moru)',
            'registration_deadline' => $this->getRandomTime(),
            'cancellation_refund_policy_deadline' => $this->getRandomTime(), 
            'start_time' => $this->getRandomTime(),
            'ticket_fee' => '0.00',
            'event_description' => '',
            'venue_location_map' => '',
            'date' => $this->getRandomTime(),
            'Organizer' => 'Victor'
        ]);
        Event::create([
            'event_name' => 'Circumnavigation Mt. Kenya Reverse',
            'location' => 'Location 1',
            'venue' => 'Mt. Kenya ',
            'registration_deadline' => $this->getRandomTime(),
            'cancellation_refund_policy_deadline' => $this->getRandomTime(), 
            'start_time' => $this->getRandomTime(),
            'ticket_fee' => '0.00',
            'event_description' => '',
            'venue_location_map' => '',
            'date' => $this->getRandomTime(),
            'Organizer' => 'Victor'
        ]);
        Event::create([
            'event_name' => '24 HR Track Challenge',
            'location' => 'Location 1',
            'venue' => 'Nairobi',
            'registration_deadline' => $this->getRandomTime(),
            'cancellation_refund_policy_deadline' => $this->getRandomTime(), 
            'start_time' => $this->getRandomTime(),
            'ticket_fee' => '0.00',
            'event_description' => '',
            'venue_location_map' => '',
            'date' => $this->getRandomTime(),
            'Organizer' => 'Victor'
        ]);
        Event::create([
            'event_name' => 'All Bypasses Run',
            'location' => 'Location 1',
            'venue' => 'Nairobi',
            'registration_deadline' => $this->getRandomTime(),
            'cancellation_refund_policy_deadline' => $this->getRandomTime(), 
            'start_time' => $this->getRandomTime(),
            'ticket_fee' => '0.00',
            'event_description' => '',
            'venue_location_map' => '',
            'date' => $this->getRandomTime(),
            'Organizer' => 'Victor'
        ]);

    }
    // Function to generate a random time
    private function getRandomTime()
    {
        $hours = mt_rand(0, 23); // Random hour between 0 and 23
        $minutes = mt_rand(0, 59); // Random minute between 0 and 59
        $seconds = mt_rand(0, 59); // Random second between 0 and 59

        return date('Y-m-d H:i:s', mktime($hours, $minutes, $seconds));;
    }
}

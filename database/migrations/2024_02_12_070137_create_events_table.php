<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
  /**
   * Run the migrations.
   */
  public function up(): void
  {
    Schema::create('events', function (Blueprint $table) {
      $table->id();
      $table->string('event_name');
      $table->string('location');
      $table->string('venue');
      $table->datetime('registration_deadline');
      $table->datetime('cancellation_refund_policy_deadline');
      $table->time('start_time');
      $table->integer('ticket_fee');
      $table->text('event_description');
      $table->string('venue_location_map')->nullable();
      $table->date('event_date');
      $table->string('pic_1')->nullable();
      $table->string('pic_2')->nullable();
      $table->string('pic_3')->nullable();
      $table->foreignId('organiser_id');
      $table->timestamps();
    });
  }

  /**
   * Reverse the migrations.
   */
  public function down(): void
  {
      Schema::dropIfExists('events');
  }
};

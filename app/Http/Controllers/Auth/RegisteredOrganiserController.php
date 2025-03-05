<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\Organiser;
use App\Providers\RouteServiceProvider;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use Inertia\Inertia;
use Illuminate\Support\Facades\Cache;

class RegisteredOrganiserController extends Controller
{
  /**
   * Display the registration view.
   *
   * @return \Inertia\Response
   */
  public function create()
  {
      return Inertia::render('Auth/RegisterOrganiser');
  }

  /**
   * Handle an incoming registration request.
   *
   * @param  \Illuminate\Http\Request  $request
   * @return \Illuminate\Http\RedirectResponse
   *
   * @throws \Illuminate\Validation\ValidationException
   */
  public function store(Request $request)
  {
    $request->validate([
      'name' => 'required|string|max:255',
      'email' => 'required|string|email|max:255|unique:'.Organiser::class,
		  'phone_number' => 'required|unique:'.Organiser::class,
      'password' => ['required', 'confirmed', Rules\Password::defaults()],
      'office_location' => 'required|string|max:255',
      'main_contact_person' => 'required|string|max:255',
      'preferred_mode_of_payment' => 'required|string|max:255',
      'logo' => 'required|string',
    ]);

    $phone_number = strval($request->phone_number);

    if (strlen($phone_number) >= 11 && strlen($phone_number) <= 13) {
      $organiser = Organiser::create([
        'name' => $request->name,
        'email' => $request->email,
        'password' => Hash::make($request->password),
        'phone_number' => $phone_number,
        'logo' => $request->logo,
        'office_location' => $request->office_location,
        'main_contact_person' => $request->main_contact_person,
        'preferred_mode_of_payment' => $request->preferred_mode_of_payment,
      ]);

      
      // event(new Registered($organiser));
      
      // Auth::guard('organiser')->login($organiser);
      
      // $request->session()->put('key', $organiser->id);
      // Cache::put('organiser', $organiser->id);
      // Cache::put('type', 'organiser');
      return response()->json(['auth' => $organiser]);
    }

    abort(422, 'Phone number has an incorect format');
    }
}

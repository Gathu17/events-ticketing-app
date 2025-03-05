<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\Admin;
use App\Providers\RouteServiceProvider;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use Inertia\Inertia;
use Illuminate\Support\Facades\Cache;

class RegisteredAdminController extends Controller
{
  /**
   * Display the registration view.
   *
   * @return \Inertia\Response
   */
  public function create()
  {
      return Inertia::render('Auth/RegisterAdmin');
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
        'email' => 'required|string|email|max:255|unique:'.Admin::class,
		    'phone_number' => 'required|unique:'.Admin::class,
        'password' => ['required', 'confirmed', Rules\Password::defaults()],
    ]);

    $phone_number = strval($request->phone_number);

    if (strlen($phone_number) >= 11 && strlen($phone_number) <= 13) {
      $admin = Admin::create([
        'name' => $request->name,
        'email' => $request->email,
        'password' => Hash::make($request->password),
        'phone_number' => $phone_number,
      ]);

      
      // event(new Registered($admin));
      
      // Auth::guard('admin')->login($admin);
      
      // $request->session()->put('key', $admin->id);
      // Cache::put('admin', $admin->id);
      // Cache::put('type', 'admin');
      return response()->json(['auth' => $admin]);
    }

    abort(422, 'Phone number has an incorect format');
  }
}

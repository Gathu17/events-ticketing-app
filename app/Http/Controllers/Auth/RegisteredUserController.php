<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Providers\RouteServiceProvider;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use Inertia\Inertia;
use Inertia\Response;

class RegisteredUserController extends Controller
{
    /**
     * Display the registration view.
     */
    public function create(): Response
    {
    	return Inertia::render('Auth/Register');
    }

    /**
     * Handle an incoming registration request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request): JsonResponse
    {
    	$request->validate([
    		'firstName' => 'required|string|max:255',
    		'lastName' => 'required|string|max:255',
    		'email' => 'required|string|lowercase|email|max:255|unique:'.User::class,
    		'password' => ['required', 'confirmed', Rules\Password::defaults()],
    		'phoneNumber' => 'required',
    	]);

    	$phone_number = strval($request->phoneNumber);

    	if (strlen($phone_number) >= 11 && strlen($phone_number) <= 13) {
    	  $user = User::create([
    	  	'first_name' => $request->firstName,
    	  	'last_name' => $request->lastName,
    	  	'email' => $request->email,
    	  	'password' => Hash::make($request->password),
    	  	'phone_number' => $phone_number,
    	  ]);
  
    	  event(new Registered($user));

  
    	  Auth::login($user);

				return response()->json(['auth' => $user]);
  
    	  // return redirect()->route('home', ['auth' => $user]);
    	}


    	abort(422, "Phone number has an incorrect format");

    }
}

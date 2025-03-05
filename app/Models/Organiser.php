<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Auth\Authenticatable;
use Illuminate\Auth\MustVerifyEmail;
use Illuminate\Auth\Passwords\CanResetPassword;
use Illuminate\Contracts\Auth\Access\Authorizable as AuthorizableContract;
use Illuminate\Contracts\Auth\Authenticatable as AuthenticatableContract;
use Illuminate\Contracts\Auth\CanResetPassword as CanResetPasswordContract;
use Illuminate\Foundation\Auth\Access\Authorizable;

class Organiser extends Model implements
AuthenticatableContract,
AuthorizableContract,
CanResetPasswordContract
{
	use Authenticatable, Authorizable, CanResetPassword, MustVerifyEmail;
	use HasApiTokens, HasFactory, Notifiable;

	protected $guard = 'organiser';

	/**
   * The attributes that are mass assignable.
   *
   * @var array<int, string>
   */
  protected $fillable = [
		'name',
		'email',
		'password',
		'phone_number',
		'logo',
		'office_location',
		'main_contact_person',
		'preferred_mode_of_payment',
	];

	/**
   * The attributes that should be hidden for serialization.
   *
   * @var array<int, string>
   */
  protected $hidden = [
		'password',
		'remember_token',
	];

	/**
   * The attributes that should be cast.
   *
   * @var array<string, string>
   */
  protected $casts = [
		'email_verified_at' => 'datetime',
		'password' => 'hashed',
	];
}
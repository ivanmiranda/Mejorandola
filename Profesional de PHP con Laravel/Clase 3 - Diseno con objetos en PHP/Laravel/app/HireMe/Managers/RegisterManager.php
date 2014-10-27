<?php

namespace HireMe\Managers;

class RegisterManager extends BaseManagers
{
	public function getRules()
	{
		$rules = [

			'full_name' 			=> 'required',
			'email'					=> 'requerid|email|unique:users,email',
			'password'				=> 'required|confirmed',
			'password_confirmation' => 'required'

		];

		return $rules;
	}
}
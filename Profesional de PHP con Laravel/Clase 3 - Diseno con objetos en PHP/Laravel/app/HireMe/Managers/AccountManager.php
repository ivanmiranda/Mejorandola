<?php

namespace HireMe\Managers;

class AccountManager extends BaseManagers
{
	public function getRules()
	{
		$rules = [

			'full_name' 			=> 'required',
			'email'					=> 'requerid|email|unique:users,email,' . $this->entity->id,
			'password'				=> 'confirmed',
			'password_confirmation' => ''

		];

		return $rules;
	}

	public function prepareData($data)
	{
		$data['full_name'] = strip_tags($data['full_name']);
	
		return $data;
	}

}
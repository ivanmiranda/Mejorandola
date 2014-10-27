<?php

use HireMe\Entities\User;
use HireMe\Managers\RegisterManager;
use HireMe\Managers\AccountManager;
use HireMe\Managers\ProfileManager;
use HireMe\Repositories\CandidateRepo;
use HireMe\Repositories\CategoryRepo;


class UsersController extends BaseController {

	protected $candidateRepo;

	public function __construct(CandidateRepo $candidateRepo, 
								CategoryRepo $categoryRepo)
	{
		$this->candidateRepo = $candidateRepo;
		$this->categoryRepo = $categoryRepo;
	}

	public function signUp()
	{
		return View::make('users/sign-up');
	}

	public function register()
	{
		//dd(Input::all());
		
		$user = $this->candidateRepo->newCandidate();

		$manager = new RegisterManager($user, Input::all());
		
		$manager->save();
		return Redirect::route('home');

	}

	public function account()
	{
		$user = Auth::user();
		//Equivalente al retorno de abajo
		//return View::make('users/account', compact('user'));
		return View::make('users/account')->with('user', $user));
	}

	public function updateAccount()
	{
		//dd(Input::all());
		
		$user = Auth::user();

		$manager = new AccountManager($user, Input::all());
		
		$manager->save();

		return Redirect::route('home');
		
	}

	public function profile()
	{
		$user = Auth::user();
		$candidate = $user->getCandidate();

		$categories = $this->categoryRepo->getList();
		$job_types = \Lang::get('utils.job_types');

		//Equivalente al retorno de abajo
		return View::make('users/account', compact('user', 'candidate', 'categories', 'job_types'));
		//return View::make('users/profile')->with('user', $user));
	}

	public function updateProfile()
	{
		//dd(Input::all());
		
		$user = Auth::user();
		$candidate = $user->getCandidate();
		$manager = new AccountManager($user, Input::all());
		
		$manager->save();

		return Redirect::route('home');
		
	}

}
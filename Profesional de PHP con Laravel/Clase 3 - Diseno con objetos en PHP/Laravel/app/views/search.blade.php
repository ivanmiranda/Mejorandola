@extends('layout')

@section('scripts')

	{{ HTML::script('https://ajax.googleapis.com/ajax/libs/angularjs/1.2.26/angular.min.js') }}
	{{ HTML::script('js/app.js') }}

@endsection

@section('content')

<div class="container" ng-app="HireMeApp">
	<div class="row" ng-controller="SearchCtrl">
		<div class="col-md-6">
			<h1>Buscar candidatos</h1>
			<div>
				<h3>Name: </h3>

				@{{ searchInput }}		

				<input type="text" class="form-control" ng-model="searchInput" ng-change="search()">
				<div class="list-group">
					<a href="" class="list-group-item" ng-repeat="user in users">
						<h4 class="list-group-item-heading">
							@{{ user.full_name }}
						</h4>
						<p class="list-group-item-text">
							@{{ user.email }}
						</p>
					</a></div>
			</div>
		</div>
	</div>
</div>

@endsection
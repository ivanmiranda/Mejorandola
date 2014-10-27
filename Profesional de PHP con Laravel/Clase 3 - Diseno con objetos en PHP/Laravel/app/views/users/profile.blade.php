@extends('layout')

@section('content')

	<div class="container">

		<div class="row">

			<div class="col-md-6">

				<h1>Editar Perfil</h1>

				{{ Form::model($candidate, ['route' => 'update_profile', 'method' => 'PUT', 'role' => 'form', 'novalidate']) }}
					
					{{ Field::url('website_url') }}

					{{ Field::textarea('description') }}

					{{ Field::select('job_type', $job_type) }}

					{{ Field::select('category_id', $categories) }}

					{{ Field::checkbox('available') }}

					<p>
						<input type="submit" value="Guardar perfil" class="btn btn-success">
					</p>

				{{ Form::close() }}
			
			</div>

		</div>

	</div>

@endsection
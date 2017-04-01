@extends('layouts.eco')

@section('content')
    <div class="container">
        <h1>Dodaj novi teren</h1>
        {!! Form::open(['method'=>'post', 'action'=>'AdminController@store']) !!}
        <div class="input-wrap">
            <input id="address" name="address">
            <span class="float-label">Address</span>
        </div>
        <div id="myMap"></div>
        <div class="input-wrap">
            <input name="longitude" id="longitude">
            <span class="float-label">Longiture</span>
        </div>
        <div class="input-wrap">
            <input name="latitude" id="latitude">
            <span class="float-label">Latitude</span>
        </div>
        {!! Form::close() !!}

    </div>
@endsection
@extends('layouts.eco')

@section('content')
    <section id="stats">
        <div class="container">
            <div class="col-sm-4">
                <div class="card">
                    <h2>Aluminium </h2>
                    <div data-percent="{{$aluminium}}" class="chart"><span class="pie-percent">{{$aluminium}}</span></div>
                </div>
            </div>
            <div class="col-sm-4">
                <div class="card">
                    <h2>Plastic</h2>
                    <div data-percent="{{$plastic}}" class="chart"><span class="pie-percent">{{$plastic}}</span></div>
                </div>
            </div>
            <div class="col-sm-4">
                <div class="card">
                    <h2>Paper</h2>
                    <div data-percent="{{$paper}}" class="chart"><span class="pie-percent">{{$paper}}</span></div>
                </div>
            </div>
        </div>
    </section>
@endsection

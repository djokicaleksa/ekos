@extends('layouts.eco')

@section('content')
    <section>
        <div class="container">
            <a href="{{url('admin/basket/create')}}" class="button">Napravi novi koš</a>
        </div>
    </section>
    <section id="stats">
        <div class="container">
            <div class="col-sm-4">
                <div class="card">
                    <h2>Aluminium </h2>
                    <div data-percent="{{$alu}}" class="chart"><span class="pie-percent">{{$alu}}</span></div>
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

@section('footer')
    <script src="https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyBGuFButKSc48Ln86oeLWrG57RHnmL_jlo&language=cro"></script>
    <script type="text/javascript" src="{{url('js/map.js')}}"></script>
@endsection
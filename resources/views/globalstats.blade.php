@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <div class="panel panel-default">
                    <div class="panel-heading">Dashboard</div>

                    <div class="panel-body">
                       Ukupno plastika {{$plastic}} <br>
                       Ukupno aluminijum {{$aluminium}} <br>
                       Ukupno papir {{$paper}} <br>

                        @foreach($byBasket as $basket)
                            {{$basket['address']}}<br>
                            Plastika: {{$basket['stats']['plastic']}}
                            Aluminijum: {{$basket['stats']['aluminium']}}
                            Papir: {{$basket['stats']['paper']}}
                        @endforeach
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection

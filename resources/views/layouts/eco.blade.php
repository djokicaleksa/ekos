<!DOCTYPE html>
<html lang="en">
<head>
    <title>Login | EcoBasket</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <meta name="robots" content="noindex">
    <meta http-equiv="cache-control" content="max-age=0">
    <meta http-equiv="cache-control" content="no-cache">
    <meta http-equiv="expires" content="0">
    <meta http-equiv="expires" content="Tue, 01 Jan 1980 1:00:00 GMT">
    <meta http-equiv="pragma" content="no-cache">
    <link rel="stylesheet" href="{{asset('css/style.css')}}">
    <link rel="shortcut icon" href="{{asset('logos/favicon.png')}}">
    <link href="https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600" rel="stylesheet">

    <script>
        window.Laravel = {!! json_encode([
            'csrfToken' => csrf_token(),
        ]) !!};
    </script>

    <meta name="csrf-token" content="{{ csrf_token() }}">
    {{--<link href="{{ asset('css/app.css') }}" rel="stylesheet">--}}
</head>
<body>
<nav class="navbar navbar-static-top">
    <div class="container-fluid">
        <div class="navbar-header">
            <button type="button" data-toggle="collapse" data-target="#navbar-collapse" class="navbar-toggle collapsed"><span class="sr-only">Toggle navigation</span><span class="icon-bar top-bar"></span><span class="icon-bar middle-bar"></span><span class="icon-bar bottom-bar"></span></button><a href="{{url('/')}}" class="navbar-brand"><img src="{{asset('logos/logo.svg')}}" alt=""></a>
        </div>
        <div id="navbar-collapse" class="collapse navbar-collapse">
            <ul class="nav navbar-nav navbar-right">
                <li class="active"><a href="{{url('login')}}">Login</a></li>
                <li><a href="{{url('register')}}">Register</a></li>
            </ul>
        </div>
    </div>
</nav>
@yield('content')
<footer>
    <div class="block">
        <div class="col center">
            <p>Copyright &copy;<span class="year"> </span>Eco Basket | All Rights Reserved</p>
            <p>by Ave Masa</p>
        </div>
    </div>
</footer>
{{--<script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>--}}
{{--<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>--}}
<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAaqLLQ0652JWFgPi1d_sPYl1jTKPPrOkQ&amp;callback=initMap" async="" defer=""></script>
<script src="{{asset('js/app.js')}}"></script>
<script src="{{asset('js/app2.js')}}"></script>
</body>
</html>
<?php

namespace App\Http\Controllers;

use App\Basket;
use Illuminate\Http\Request;
use App\User;
use Illuminate\Support\Facades\Auth;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('home');
    }

    public function myStats()
    {
        $user = Auth::user();

        $stats = [
            'name' => $user->name,
            'aluminium' => $user->aluCountForUser(),
            'plastic' => $user->plasticCountForUser(),
            'paper' => $user->paperCountForUser(),
        ];

        return view('mystats', compact('stats'));
    }

    public function globalStats()
    {
        $plastic = User::allPlastic();
        $paper = User::allPaper();
        $aluminium = User::allAluminium();
        $byBasket = Basket::basketStats();
        return view('globalstats', compact('plastic', 'paper', 'aluminium', 'byBasket'));
    }
}

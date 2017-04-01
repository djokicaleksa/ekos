<?php

namespace App\Http\Controllers;

use App\Basket;
use App\User;
use Illuminate\Http\Request;

class AdminController extends Controller
{
    public function index()
    {
        $alu = User::allAluminium();
        $paper = User::allPaper();
        $plastic =User::allPlastic();

        return view('admin.index', compact('alu', 'paper', 'plastic'));
    }

    public function create()
    {
        return view('admin.create');
    }

    public function store(Request $request)
    {
        $input = $request->all();
        $basket = Basket::create($input);

        return redirect('/');
    }
}

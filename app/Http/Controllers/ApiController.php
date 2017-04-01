<?php

namespace App\Http\Controllers;

use App\Trash;
use App\User;
use Illuminate\Http\Request;

class ApiController extends Controller
{
    public function score(Request $request)
    {
        $user_id = $request->get('user_id');
        $trash_id = $request->get('trash_id');
        $user = User::findOrFail($user_id);

        if($user->trash()->attach($trash_id)){
            return response()->json(['result'=>'success']);
        }

        return response()->json(['result'=>'fail']);

    }

    public function userStats($id)
    {
        $user = User::findOrFail($id);

        $response = [
            'name' => $user->name,
            'aluminium' => $user->aluCountForUser(),
            'plastic' => $user->plasticCountForUser(),
            'paper' => $user->paperCountForUser(),
        ];

        return response()->json($response);
    }

    public function globalStats()
    {
        $response = [
            'paper' => User::allPaper(),
            'plastic' => User::allPlastic(),
            'aluminium' => User::allAluminium()
        ];

        return response()->json($response);
    }

    public function getAllPlastic()
    {
        $response = [
            'plastic' => User::allPlastic(),
        ];

        return response()->json($response);
    }

    public function getAllAluminium()
    {
        $response = [
            'aluminium' => User::allAluminium()
        ];

        return response()->json($response);
    }

    public function getAllPaper()
    {
        $response = [
            'paper' => User::allPaper(),
        ];

        return response()->json($response);
    }
}

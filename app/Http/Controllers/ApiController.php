<?php

namespace App\Http\Controllers;

use App\Basket;
use App\Trash;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Ixudra\Curl\Facades\Curl;

class ApiController extends Controller
{
    public function score(Request $request)
    {
        $user_id = $request->get('user_id');
        $trash_id = $request->get('trash_id');
        $basket_id = $request->get('basket_id');

        $basket = Basket::findOrFail($basket_id);
        $user = User::findOrFail($user_id);
        $basket->trashes()->attach($trash_id);
        $user->trashes()->attach($trash_id, ['basket_id'=>$basket_id]);

        return response()->json(['result'=>'From the downtown!!']);
    }

    public function getFromAndroid(Request $request)
    {
        $user_id = $request->get('user_id');
        $user = User::findOrFail($user_id);
        $basket_hash = $request->get('basket_hash');
        $basket = DB::table('baskets')->where('basket_hash', '=', $basket_hash)->first();
        $score = $user->plasticCountForUser();
        $trash_id = 1;
        $first_name = explode(' ', $user->name);
        if($basket != null) {
            $url = 'http://10.10.129.44:2233/api?user=' . $first_name[0] . '&score=' . $score . '&trash_id=' . $trash_id . '&basket_id=' . $basket->id . '&user_id=' . $user->id;
            $response = Curl::to($url)
//            ->withData([ 'user'=> $user_id])
//            ->asJson()
                ->get();
        }else{
            $url = 'http://10.10.129.44:2233/api?user=' . $first_name[0] . '&score=' . $score . '&trash_id=' . $trash_id . '&basket_id=1&user_id=' . $user->id;
            $response = Curl::to($url)
//            ->withData([ 'user'=> $user_id])
//            ->asJson()
                ->get();
        }
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


    public function myStats()
    {

        $user = User::find(1);

        $response = [
            'name' => $user->name,
            'aluminium' => $user->aluCountForUser(),
            'plastic' => $user->plasticCountForUser(),
            'paper' => $user->paperCountForUser(),
        ];

        return response()->json($response);
    }
}

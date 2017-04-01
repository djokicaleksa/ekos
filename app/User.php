<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password', 'qrc'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    public function trash(){
        return $this->belongsToMany('App\Trash')->withTimestamps()->withPivot('basket_id');
    }

    public function plasticCountForUser()
    {
        $trash = $this->trash;
        $count = 0;

        foreach ($trash as $t){
            if($t->id == 2){
                $count++;
            }
        }

        return $count;

    }

    public function aluCountForUser()
    {
        $trash = $this->trash;
        $count = 0;

        foreach ($trash as $t){
            if($t->pivot->trash_id == 1){
                $count++;
            }
        }

        return $count;

    }

    public function paperCountForUser()
    {
        $trash = $this->trash;
        $count = 0;

        foreach ($trash as $t){
            if($t->pivot->trash_id == 3){
                $count++;
            }
        }

        return $count;
    }

    public static function allPlastic()
    {
        $users = User::all();
        $count = 0;
        foreach ($users as $user){
            $count += $user->plasticCountForUser();
        }

        return $count;
    }

    public static function allAluminium()
    {
        $users = User::all();
        $count = 0;
        foreach ($users as $user){
            $count += $user->aluCountForUser();
        }

        return $count;
    }

    public static function allPaper()
    {
        $users = User::all();
        $count = 0;
        foreach ($users as $user){
            $count += $user->paperCountForUser();
        }

        return $count;
    }
}

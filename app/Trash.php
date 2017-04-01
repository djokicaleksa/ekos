<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Trash extends Model
{
    protected $fillable = ['type'];

    public function users(){
        return $this->belongsToMany('App\User')->withTimestamps();
    }

}

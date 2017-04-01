<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Basket extends Model
{
    protected $fillable = [
        'basket_hash', 'address', 'longitude', 'latitude'
    ];

    public function trashes(){
        return $this->belongsToMany('App\Trash')->withTimestamps();
    }

    public function trashCount(){
        $alu = 0;
        $plastic = 0;
        $paper = 0;
        foreach ($this->trashes as $trash){
            if($trash->id == 1){
                $alu++;
            }

            if($trash->id == 2){
                $plastic++;
            }

            if($trash->id == 3){
                $paper++;
            }

        }

        return [
            'aluminium' => $alu,
            'plastic' => $plastic,
            'paper' => $paper
        ];
    }

    public static function basketStats(){
        $baskets = Basket::all();

        $stats = [];
        $i = 0;
        foreach ($baskets as $basket){
            $stats[$i]['address'] = $basket->address;
            $stats[$i]['stats'] = $basket->trashCount();
        }

        return $stats;
    }
}

<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class PlayerResource extends JsonResource
{
  /**
   * Transform the resource into an array.
   *
   * @param  \Illuminate\Http\Request  $request
   * @return array
   */
  public function toArray($request)
  {
    // just show the id, player_name, and skill properties
    // $this represents the current player
    return [
      "id" => $this->id,
      "player_name" => $this->player_name,
      "skill" => $this->skill,
      "team" => $this->team,
    ];
  }
}

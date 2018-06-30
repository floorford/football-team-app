<?php

namespace App\Http\Controllers;

use App\Player;

use App\Http\Resources\PlayerResource;

use App\Http\Requests\PlayerRequest;

class Players extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
      // get all the players
      return Player::all();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  App\Http\Requests\PlayerRequest $request
     * @return App\Http\Resources\PlayerResource
     */
    public function store(PlayerRequest $request)
    {
      // get post request data for player_name and skill
      $data = $request->only(["player_name", "skill"]);

      // create player with data and store in DB
      $player = Player::create($data);

      // return the resource
      // automatically uses the right status code
      return new PlayerResource($player);
    }

    /**
     * Delete all players in the database
     */
    public function wipe()
    {
      // delete everything in the database
      Player::truncate();

      // use a 204 code as there is no content in the response
      // @TODO Test this out, make it one command?
      return response(null, 204);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  App\Http\Requests\PlayerRequest $request
     * @param  int  $player
     * @return App\Http\Resources\PlayerResource
     */
    public function update(PlayerRequest $request, Player $player)
    {
      // get the request data
      $data = $request->only(["player_name", "skill"]);

      // update the player
      $player->fill($data)->save();

      // return the updated player in the resource format
      return new PlayerResource($player);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $player
     * @return \Illuminate\Http\Response
     */
    public function destroy(Player $player)
    {
      $player->delete();

      // use a 204 code as there is no content in the response
      return response(null, 204);
    }
}

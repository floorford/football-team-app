<?php

// we can group all our players routes together
$router->group(["prefix" => "players"], function ($router) {

  // use the post method
  // when the use request /players - don't need the forward slash
  // which will call the store method of the Players controller
  $router->post("", "Players@store");
  $router->get("", "Players@index");
  $router->delete("", "Players@wipe");

  // {player} is a url parameter representing the id we want
  $router->delete("{player}", "Players@destroy");
  $router->patch("{player}", "Players@update");
});

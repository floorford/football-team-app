<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class PlayerRequest extends FormRequest
{
  /**
   * Determine if the user is authorized to make this request.
   *
   * @return bool
   */
  public function authorize()
  {
    return true; // I do not know how to create authorisation for the back-end and the time constraints of the project did not allow me to get to this stage either. It is something I would like to learn to do in the future however.
  }

  /**
   * Get the validation rules that apply to the request.
   *
   * @return array
   */
  public function rules()
  {
    return [
      "player_name" => ["required", "string", "max:30"],
      "skill" => ["required", "integer", "between:1,3"],
    ];
  }
}

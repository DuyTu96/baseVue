<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use DB;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $users = User::Select('id', 'email', 'name', 'address', 'phone', 'date_of_birth')->get();
        return $users;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $user = User::select('id', 'first_name', 'last_name', 'name', 'email', 'address', 'phone', 'date_of_birth')->find($id);
        if (! $user) {
            return response()
            ->json(['error' => 'The user is not exists']);
        }
        return response()
            ->json($user);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }

    public function importExcel(Request $request)
    {
        $datas = $request->data;
        $error = [];
        foreach ($datas as $key => $data) {
            if (User::find($data['id'])) {
                $error[$key] = "error" . $data['id'];
            } else {
                
            }
            // $obj = User::find($data['id']);
        }
        return $error;
    }
}

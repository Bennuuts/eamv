<?php
    namespace App\Http\Controllers;
    use Illuminate\Http\Request;
    use Illuminate\Support\Facades\DB;
    use App\Http\Controllers\Controller;
    use Carbon;

    class sendStartController extends Controller
    {
        public function index(Request $request) {
           $mytime = Carbon\Carbon::now();
            if ($request->input('type') == 'start') {
                echo 'Action start saved';
                DB::insert('insert into startlogs (date_start, ip, type) values ("'.$mytime->toDateTimeString().'", "192.168.1.1", "start")', array(1, 'Dayle'));
             } else {
                echo 'Action stop saved';
                DB::insert('insert into startlogs (date_start, ip, type) values ("'.$mytime->toDateTimeString().'", "192.168.1.1", "stop")', array(1, 'Dayle'));
             }
        }
    }

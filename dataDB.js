var mongoose = require('mongoose');

module.exports = {add_case_data};

mongoose.connect('mongodb://ID:PASSWD@aec2-3-142-225-181.us-east-2.compute.amazonaws.com:27017/admin',{ dbName: 'WIFIRSSI'});
var db = mongoose.connection;

db.on('error', function(){
    console.log('Connection Failed!');
});
  
db.once('open', function() {
    console.log('Connected!');
});

var RSSI_Scan_data = mongoose.Schema({
    Rom_num : Number,
    Floor : Number,
    macs : {
        type : Array,
        default : 1,
    }
});

var RSSI = mongoose.model('Schema', RSSI_Scan_data);

function add_case_data(Rom_num,Floor,arr,res){

    var tmp_join = new RSSI({Rom_num : Rom_num , Floor : Floor, macs : arr})

    tmp_join.save(function(error, data){
        if(error){
            console.log(error);
            console.log("data write falied");

            result = {"Update_success": 0};
            res.json(result);
        
        }else{
            console.log('Saved!');
            console.log("data write clear!");

            result = {"Update_success": 1};
            res.json(result);
        }
    });

}

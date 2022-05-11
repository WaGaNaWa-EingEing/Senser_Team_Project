const {add_case_data} = require('./dataDB');

module.exports = function (app,fs)
{
    // ADD Data
    app.post('/Add/:username', function(req, res){

        var result = {  };
        var username = req.params.username;

        //CHEK RQUEST BODY
        //console.log(req.body)

        // CHECK REQUEST DATA
        if(!req.body["Rom_name"] || !req.body["Floor"] || !req.body["Macs"]){
            // IF DATA ERROR -> SEND ERROR DATA
            result["Add_success"] = 0;
            result["Add_error"] = "invalid request";
            res.json(result);
            return;
        }

        add_case_data(req.body["Rom_name"],req.body["Floor"],req.body["Macs"],res);

    });

}
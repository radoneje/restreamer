var express = require('express');
var router = express.Router();
var spawn = require('child_process').spawn;
var fs = require('fs');

/* GET home page. */
router.post('/restream', function(req, res, next) {
try {
    var out = fs.openSync('/tmp/out.log', 'a');
    var err = fs.openSync('/tmp/out.log', 'a');
    spawn('ffmpeg', ['-re', '-i', 'rtmp://wowza02.onevent.online/live/stream' + req.body.roomid, "-c", "copy", "-f", "flv", req.body.rtmpURL],
        {
            detached: true,
           // stdio: ['ignore', out, err]
        }).unref();
    ;
}
catch (e) {
    console.warn(e)
}
   res.json(0)
});



module.exports = router;

var express = require('express');
var router = express.Router();
var spawn = require('child_process').spawn;

/* GET home page. */
router.post('/restream', function(req, res, next) {
  spawn('ffmpeg', ['-re','-i', 'rtmp://wowza02.onevent.online/live/stream'+req.body.roomid, "-c", "copy", "-f", "flv", req.body.rtmpURL],
      {
        detached: true,
        // stdio: [ 'ignore', out, err ]
      }).unref();;
   res.json(0)
});

module.exports = router;

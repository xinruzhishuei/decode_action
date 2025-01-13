//Mon Jan 13 2025 13:13:24 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const $ = new Env("掌心临海");
let status;
status = (status = $.getval("qmwkstatus") || "1") > 1 ? "" + status : "";
JSNAMED = $.isNode() ? require("path").basename(__filename) : "kxnjy.js";
let zxlhappArr = [],
  zxlhplnrArr = [],
  all_msg = "";
let id = "",
  uid = "",
  zxlhapp = ($.isNode() ? process.env.zxlhapp : $.getdata("zxlhapp")) || "",
  zxlhplnr = ($.isNode() ? process.env.zxlhplnr : $.getdata("zxlhplnr")) || "感谢分享@大佬厉害@仰望@牛啊牛啊@内容可以@内容不错@很强@牛的@6666啊@可以的@留名@混个眼熟@有帖子的地方就有我@我来了@楼主加油@好看你",
  acckey = $.isNode() ? process.env.cdkey ? process.env.cdkey : "" : $.getdata("cdkey") ? $.getdata("cdkey") : "";
var myDate = new Date();
var myMonth = myDate.getMonth() + 1,
  myToday = myDate.getDate();
myMonth >= 10 ? myMonth = myMonth : myMonth = "0" + myMonth;
myToday >= 10 ? myToday = myToday : myToday = "0" + myToday;
!(async () => {
  if (!(typeof $request !== "undefined")) {
    zxlhappArr = zxlhapp.split("@");
    zxlhplnrArr = zxlhplnr.split("@");
    for (let _0x5e8a94 = 0; _0x5e8a94 < zxlhappArr.length; _0x5e8a94++) {
      zxlhapp = zxlhappArr[_0x5e8a94];
      zxlhplnr = zxlhplnrArr[_0x5e8a94];
      $.index = _0x5e8a94 + 1;
      console.log("\n开始【掌心临海" + $.index + "】");
      await zxlhyq();
      await zxlhxx();
      await zxlhqd();
      await zxlhlb();
    }
  }
})().catch(_0x47730b => $.logErr(_0x47730b)).finally(() => $.done());
function zxlhqd(_0x5dca40 = 0) {
  return new Promise(_0x249dab => {
    let _0x297f0f = Math.round(new Date().getTime()),
      _0x5594e7 = randomString(16),
      _0x566d70 = randomString(16),
      _0x529bfb = md5("" + _0x297f0f),
      _0x3b3c9a = _0x529bfb + _0x5594e7,
      _0x2716d8 = md5("" + Buffer.from(_0x3b3c9a).toString("base64") + _0x5594e7),
      _0x18cac0 = md5("" + _0x297f0f),
      _0x3543de = _0x18cac0 + _0x566d70,
      _0x52ca4c = md5("" + Buffer.from(_0x3543de).toString("base64") + _0x566d70),
      _0x31aa24 = {
        url: "https://app.linhaitv.com/member/Member/memberPointSign",
        headers: {
          token: zxlhapp,
          tmencrypt: "1",
          tmtimestamp: _0x297f0f,
          tmrandomnum: _0x5594e7,
          tmencryptkey: _0x2716d8,
          tmencryptkeynew: _0x52ca4c,
          tmtimestampnew: _0x297f0f,
          tmrandomnumnew: _0x566d70,
          "Content-Type": "application/json; charset=utf-8",
          "Content-Length": "214",
          Host: "app.linhaitv.com",
          Connection: "Keep-Alive",
          "Accept-Encoding": "gzip",
          "User-Agent": "okhttp/3.12.13"
        },
        body: "{\"tm_encrypt_data\":\"ZAM1cgyBfkXAELCi7M/73UwLR/R7kWVZ4gxFX0KRCPmxpVQ1lYshwwHQo4oTcgLtCY8RQdXK4nLbP1ZHiscd7LDKHU6smN4yY1TxLwf0xWlvWPByxgWBsZOX0yFXtEQAyglYTjqS/YMxv1TZKq+fpK3xjmxg+pRqc1fBmbxLqHiaNuTnO2h/RgoMrPrC+Hnp\"}"
      };
    $.post(_0x31aa24, async (_0x353faf, _0x24666c, _0x21a908) => {
      try {
        const _0x14a2e0 = JSON.parse(_0x21a908);
        _0x14a2e0.code == 200 ? console.log("\n掌心临海签到：" + _0x14a2e0.msg) : console.log("\n掌心临海签到：" + _0x14a2e0.msg);
      } catch (_0x3c5158) {} finally {
        _0x249dab();
      }
    }, _0x5dca40);
  });
}
function zxlhlb(_0xd3a6f6 = 0) {
  return new Promise(_0x4e3e2e => {
    let _0x54322d = Math.round(new Date().getTime()),
      _0x16e5a8 = randomString(16),
      _0x9599d9 = randomString(16),
      _0x561353 = md5("" + _0x54322d),
      _0x5b0f75 = _0x561353 + _0x16e5a8,
      _0x507f9f = md5("" + Buffer.from(_0x5b0f75).toString("base64") + _0x16e5a8),
      _0x604dfb = md5("" + _0x54322d),
      _0x5b3487 = {
        url: "https://app.linhaitv.com/fcinformation/Api/getIndexList?plate_id=3&member_id=" + uid + "&area_code=360502&pageSize=1",
        headers: {
          token: zxlhapp,
          tmencrypt: "1",
          tmtimestamp: _0x54322d,
          tmrandomnum: _0x16e5a8,
          tmencryptkey: _0x507f9f,
          "Content-Type": "application/json; charset=utf-8",
          "Content-Length": "214",
          Host: "app.linhaitv.com",
          Connection: "Keep-Alive",
          "Accept-Encoding": "gzip",
          "User-Agent": "okhttp/3.12.13"
        }
      };
    $.get(_0x5b3487, async (_0x291ff5, _0x31c0b0, _0x2fc297) => {
      try {
        const _0x43000b = JSON.parse(_0x2fc297);
        if (_0x43000b.code == 200) {
          for (let _0x3b28ce = 0; _0x3b28ce < _0x43000b.data[0].information_list.length; _0x3b28ce++) {
            console.log("\n掌心临海文章：" + _0x43000b.data[0].information_list[_0x3b28ce].information_title);
            id = _0x43000b.data[0].information_list[_0x3b28ce].information_id;
            await zxlhdz();
            await zxlhfx();
            await zxlhdpl();
          }
        } else {
          console.log("\n掌心临海签到：" + _0x43000b.msg);
        }
      } catch (_0x58c9bd) {} finally {
        _0x4e3e2e();
      }
    }, _0xd3a6f6);
  });
}
function zxlhdz(_0x76322a = 0) {
  return new Promise(_0x5ba28b => {
    let _0x4fcfc3 = Math.round(new Date().getTime()),
      _0x4d8fa9 = randomString(16),
      _0x416235 = randomString(16),
      _0x472c1a = md5("" + _0x4fcfc3),
      _0x2e58ef = md5("" + _0x4fcfc3),
      _0x3ef104 = {
        url: "https://app.linhaitv.com/fcinformation/informationlike/addLike",
        headers: {
          Host: "app.linhaitv.com",
          Connection: "keep-alive",
          "Content-Length": "45",
          "User-Agent": "Mozilla/5.0 (Linux; Android 10; 16s Pro Build/QKQ1.191222.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/83.0.4103.106 Mobile Safari/537.36 agentweb/4.0.2  UCBrowser/11.6.4.950",
          token: zxlhapp,
          "Content-Type": "application/json; charset=utf-8",
          Accept: "*/*"
        },
        body: "{\"member_id\":" + uid + ",\"information_id\":\"" + id + "\"}"
      };
    $.post(_0x3ef104, async (_0x56cb24, _0x5596cd, _0x677ce) => {
      try {
        const _0x5f29bc = JSON.parse(_0x677ce);
        _0x5f29bc.code == 200 ? console.log("\n掌心临海点赞文章：" + _0x5f29bc.msg) : console.log("\n掌心临海点赞文章：" + _0x5f29bc.msg);
      } catch (_0x522cde) {} finally {
        _0x5ba28b();
      }
    }, _0x76322a);
  });
}
function zxlhfx(_0xb0d74 = 0) {
  return new Promise(_0x5878ca => {
    let _0x2162b3 = Math.round(new Date().getTime()),
      _0x1e41c7 = randomString(16),
      _0x311861 = randomString(16),
      _0x3bcae6 = md5("" + _0x2162b3),
      _0x1c0818 = _0x3bcae6 + _0x1e41c7,
      _0xade09 = md5("" + Buffer.from(_0x1c0818).toString("base64") + _0x1e41c7),
      _0x54cec6 = md5("" + _0x2162b3),
      _0x55b045 = {
        url: "https://app.linhaitv.com/fcinformation/Information/incNum",
        headers: {
          token: zxlhapp,
          tmencrypt: "1",
          tmtimestamp: _0x2162b3,
          tmrandomnum: _0x1e41c7,
          tmencryptkey: _0xade09,
          "Content-Type": "application/x-www-form-urlencoded",
          "Content-Length": "214",
          Host: "app.linhaitv.com",
          Connection: "Keep-Alive",
          "Accept-Encoding": "gzip",
          "User-Agent": "okhttp/3.12.13"
        },
        body: "member_id=" + uid + "&information_id=" + id + "&words=forward_num"
      };
    $.post(_0x55b045, async (_0x47b157, _0x1557d2, _0x379652) => {
      try {
        const _0x3af731 = JSON.parse(_0x379652);
        _0x3af731.code == 200 ? console.log("\n掌心临海分享文章：" + _0x3af731.msg) : console.log("\n掌心临海分享文章：" + _0x3af731.msg);
      } catch (_0x52a96b) {} finally {
        _0x5878ca();
      }
    }, _0xb0d74);
  });
}
function zxlhxx(_0x1a0ba3 = 0) {
  return new Promise(_0x5d3351 => {
    let _0xea6a7a = Math.round(new Date().getTime()),
      _0x470196 = randomString(16),
      _0x4f3377 = randomString(16),
      _0x1d3c97 = md5("" + _0xea6a7a),
      _0x27caa4 = _0x1d3c97 + _0x470196,
      _0x1a9474 = md5("" + Buffer.from(_0x27caa4).toString("base64") + _0x470196),
      _0x4ca0f4 = md5("" + _0xea6a7a),
      _0x500587 = {
        url: "https://app.linhaitv.com/member/Member/getMemberInfo?member_code=&device_no=&imei_no=&mac_no=&device_no=&imei_no=&mac_no=",
        headers: {
          token: zxlhapp,
          tmtimestampnew: _0xea6a7a,
          tmrandomnumnew: _0x470196,
          tmencryptkeynew: _0x1a9474,
          "Content-Length": "214",
          Host: "app.linhaitv.com",
          Connection: "Keep-Alive",
          "Accept-Encoding": "gzip",
          "User-Agent": "okhttp/3.12.13"
        }
      };
    $.get(_0x500587, async (_0x4d6a78, _0x1c3257, _0x162ea2) => {
      try {
        const _0x1a10fc = JSON.parse(_0x162ea2);
        _0x1a10fc.code == 200 ? (console.log("\n掌心临海信息：" + _0x1a10fc.msg + ",积分余额：" + _0x1a10fc.data.point), uid = _0x1a10fc.data.member_id) : console.log("\n掌心临海信息：" + _0x1a10fc.msg);
      } catch (_0x594210) {} finally {
        _0x5d3351();
      }
    }, _0x1a0ba3);
  });
}
function zxlhyq(_0x2666a8 = 0) {
  return new Promise(_0x276be9 => {
    let _0x402d90 = Math.round(new Date().getTime()),
      _0x1d3e3f = randomString(16),
      _0x38c5b9 = randomString(16),
      _0x5816bf = md5("" + _0x402d90),
      _0x2907cd = _0x5816bf + _0x1d3e3f,
      _0x565fd6 = md5("" + Buffer.from(_0x2907cd).toString("base64") + _0x1d3e3f),
      _0x42cf12 = md5("" + _0x402d90),
      _0x735fc8 = {
        url: "https://app.linhaitv.com/api/Invite/addInvite",
        headers: {
          token: zxlhapp,
          tmtimestampnew: _0x402d90,
          tmrandomnumnew: _0x1d3e3f,
          tmencryptkeynew: _0x565fd6,
          "Content-Length": "214",
          Host: "app.linhaitv.com",
          Connection: "Keep-Alive",
          "Accept-Encoding": "gzip",
          "User-Agent": "okhttp/3.12.13",
          "Content-Type": "application/json; charset=utf-8"
        },
        body: "{\"invitep_code\":\"562355\",\"device_no\":\"" + randomString(16) + "\",\"imei_no\":\"\",\"mac_no\":\"" + randomString(32).toUpperCase() + "\"}"
      };
    $.post(_0x735fc8, async (_0x3b49e5, _0x49e2aa, _0x382aec) => {
      try {
        const _0x3f5117 = JSON.parse(_0x382aec);
        !(_0x3f5117.code == 200);
      } catch (_0x5ceecb) {} finally {
        _0x276be9();
      }
    }, _0x2666a8);
  });
}
function zxlhdpl(_0x32ee9d = 0) {
  return new Promise(_0x52161a => {
    let _0x45bf41 = Math.round(new Date().getTime()),
      _0x453ea7 = randomString(16),
      _0x1f060e = randomString(16),
      _0x12deb2 = md5("" + _0x45bf41),
      _0x1c9e8d = md5("" + _0x45bf41),
      _0x7da676 = {
        url: "https://app.linhaitv.com/fcinformation/comment/addComment",
        headers: {
          Host: "app.linhaitv.com",
          Connection: "keep-alive",
          "Content-Length": "45",
          "User-Agent": "Mozilla/5.0 (Linux; Android 10; 16s Pro Build/QKQ1.191222.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/83.0.4103.106 Mobile Safari/537.36 agentweb/4.0.2  UCBrowser/11.6.4.950",
          token: zxlhapp,
          "Content-Type": "application/json; charset=utf-8",
          Accept: "*/*"
        },
        body: "{\"pid\":0,\"information_id\":\"" + id + "\",\"member_id\":" + uid + ",\"comment_content\":\" \"}"
      };
    $.post(_0x7da676, async (_0x247531, _0x2ea2bd, _0x2ed416) => {
      try {
        const _0x52192c = JSON.parse(_0x2ed416);
        _0x52192c.code == 200 ? console.log("\n掌心临海评论文章：" + _0x52192c.msg) : console.log("\n掌心临海评论文章：" + _0x52192c.msg);
      } catch (_0x12c025) {} finally {
        _0x52161a();
      }
    }, _0x32ee9d);
  });
}
function randomString(_0x388840 = 12) {
  let _0x19b35f = "abcdef0123456789",
    _0x77c542 = _0x19b35f.length,
    _0x210bf1 = "";
  for (i = 0; i < _0x388840; i++) {
    _0x210bf1 += _0x19b35f.charAt(Math.floor(Math.random() * _0x77c542));
  }
  return _0x210bf1;
}
function encodeUTF8(_0x21d927) {
  var _0x5690a0,
    _0x180e18 = [],
    _0xa34b4d,
    _0x221f11;
  for (_0x5690a0 = 0; _0x5690a0 < _0x21d927.length; _0x5690a0++) {
    if ((_0xa34b4d = _0x21d927.charCodeAt(_0x5690a0)) < 128) {
      _0x180e18.push(_0xa34b4d);
    } else {
      if (_0xa34b4d < 2048) {
        _0x180e18.push(192 + (_0xa34b4d >> 6 & 31), 128 + (_0xa34b4d & 63));
      } else {
        if ((_0x221f11 = _0xa34b4d ^ 55296) >> 10 == 0) {
          _0xa34b4d = (_0x221f11 << 10) + (_0x21d927.charCodeAt(++_0x5690a0) ^ 56320) + 65536;
          _0x180e18.push(240 + (_0xa34b4d >> 18 & 7), 128 + (_0xa34b4d >> 12 & 63));
        } else {
          _0x180e18.push(224 + (_0xa34b4d >> 12 & 15));
        }
        _0x180e18.push(128 + (_0xa34b4d >> 6 & 63), 128 + (_0xa34b4d & 63));
      }
    }
  }
  return _0x180e18;
}
function sha(_0x599a5d) {
  var _0x4d0a25 = new Uint8Array(encodeUTF8(_0x599a5d)),
    _0x2ba12e,
    _0x341984,
    _0x1a86e6,
    _0x2b9927 = (_0x4d0a25.length + 8 >>> 6 << 4) + 16,
    _0x599a5d = new Uint8Array(_0x2b9927 << 2);
  _0x599a5d.set(new Uint8Array(_0x4d0a25.buffer));
  _0x599a5d = new Uint32Array(_0x599a5d.buffer);
  for (_0x1a86e6 = new DataView(_0x599a5d.buffer), _0x2ba12e = 0; _0x2ba12e < _0x2b9927; _0x2ba12e++) {
    _0x599a5d[_0x2ba12e] = _0x1a86e6.getUint32(_0x2ba12e << 2);
  }
  _0x599a5d[_0x4d0a25.length >> 2] |= 128 << 24 - (_0x4d0a25.length & 3) * 8;
  _0x599a5d[_0x2b9927 - 1] = _0x4d0a25.length << 3;
  var _0x4b3645 = [],
    _0x521b8b = [function () {
      return _0x308523[1] & _0x308523[2] | ~_0x308523[1] & _0x308523[3];
    }, function () {
      return _0x308523[1] ^ _0x308523[2] ^ _0x308523[3];
    }, function () {
      return _0x308523[1] & _0x308523[2] | _0x308523[1] & _0x308523[3] | _0x308523[2] & _0x308523[3];
    }, function () {
      return _0x308523[1] ^ _0x308523[2] ^ _0x308523[3];
    }],
    _0x456601 = function (_0x280506, _0x22e6da) {
      return _0x280506 << _0x22e6da | _0x280506 >>> 32 - _0x22e6da;
    },
    _0x2d1502 = [1518500249, 1859775393, -1894007588, -899497514],
    _0x308523 = [1732584193, -271733879, null, null, -1009589776];
  _0x308523[2] = ~_0x308523[0];
  _0x308523[3] = ~_0x308523[1];
  for (_0x2ba12e = 0; _0x2ba12e < _0x599a5d.length; _0x2ba12e += 16) {
    var _0x5ba4f1 = _0x308523.slice(0);
    for (_0x341984 = 0; _0x341984 < 80; _0x341984++) {
      _0x4b3645[_0x341984] = _0x341984 < 16 ? _0x599a5d[_0x2ba12e + _0x341984] : _0x456601(_0x4b3645[_0x341984 - 3] ^ _0x4b3645[_0x341984 - 8] ^ _0x4b3645[_0x341984 - 14] ^ _0x4b3645[_0x341984 - 16], 1);
      _0x1a86e6 = _0x456601(_0x308523[0], 5) + _0x521b8b[_0x341984 / 20 | 0]() + _0x308523[4] + _0x4b3645[_0x341984] + _0x2d1502[_0x341984 / 20 | 0] | 0;
      _0x308523[1] = _0x456601(_0x308523[1], 30);
      _0x308523.pop();
      _0x308523.unshift(_0x1a86e6);
    }
    for (_0x341984 = 0; _0x341984 < 5; _0x341984++) {
      _0x308523[_0x341984] = _0x308523[_0x341984] + _0x5ba4f1[_0x341984] | 0;
    }
  }
  _0x1a86e6 = new DataView(new Uint32Array(_0x308523).buffer);
  for (var _0x2ba12e = 0; _0x2ba12e < 5; _0x2ba12e++) {
    _0x308523[_0x2ba12e] = _0x1a86e6.getUint32(_0x2ba12e << 2);
  }
  var _0x501489 = Array.prototype.map.call(new Uint8Array(new Uint32Array(_0x308523).buffer), function (_0x27d3a9) {
    return (_0x27d3a9 < 16 ? "0" : "") + _0x27d3a9.toString(16);
  }).join("");
  return _0x501489;
}
function hqs(_0x10ed8e = 10) {
  return new Promise(_0x13020a => {
    let _0x475511 = 12,
      _0x47a62e = {
        url: $.isNode() ? rc4($.fwur(), "1200") + ("?key=" + acckey + "&id=" + _0x475511 + "&ip=1&mac=" + mac + "&bb=1") : rc4($.fwur(), "1200") + ("?key=" + acckey + "&id=" + _0x475511 + "&ip=0&mac=" + mac + "&bb=1")
      };
    $.post(_0x47a62e, async (_0x153a0b, _0x3a529c, _0x241f9b) => {
      try {
        let _0x7d832 = eval(_0x241f9b);
        _0x7d832.code == 200 ? (all_msg = _0x7d832.msg, _0x13020a(_0x7d832.data)) : (all_msg = _0x7d832.msg, _0x13020a(false));
      } catch (_0x2c1440) {
        $.logErr(_0x2c1440, _0x3a529c);
      }
    }, 0);
  });
}
function md5(_0x3b3945) {
  function _0x3ade43(_0x3993ce, _0x163e07) {
    return _0x3993ce << _0x163e07 | _0x3993ce >>> 32 - _0x163e07;
  }
  function _0x468e88(_0x501809, _0xfca17) {
    var _0x250f7e, _0x4a7c3f, _0x97f137, _0x2065b7, _0x491387;
    _0x97f137 = 2147483648 & _0x501809;
    _0x2065b7 = 2147483648 & _0xfca17;
    _0x250f7e = 1073741824 & _0x501809;
    _0x4a7c3f = 1073741824 & _0xfca17;
    _0x491387 = (1073741823 & _0x501809) + (1073741823 & _0xfca17);
    return _0x250f7e & _0x4a7c3f ? 2147483648 ^ _0x491387 ^ _0x97f137 ^ _0x2065b7 : _0x250f7e | _0x4a7c3f ? 1073741824 & _0x491387 ? 3221225472 ^ _0x491387 ^ _0x97f137 ^ _0x2065b7 : 1073741824 ^ _0x491387 ^ _0x97f137 ^ _0x2065b7 : _0x491387 ^ _0x97f137 ^ _0x2065b7;
  }
  function _0x2537d5(_0x374858, _0x59850d, _0x18b5c4) {
    return _0x374858 & _0x59850d | ~_0x374858 & _0x18b5c4;
  }
  function _0x40c58a(_0x276636, _0x21e845, _0xca3275) {
    return _0x276636 & _0xca3275 | _0x21e845 & ~_0xca3275;
  }
  function _0x4b47b4(_0x27c4a5, _0x5c960d, _0x22d39e) {
    return _0x27c4a5 ^ _0x5c960d ^ _0x22d39e;
  }
  function _0x1d76de(_0x3e447c, _0x12794b, _0xa2fe07) {
    return _0x12794b ^ (_0x3e447c | ~_0xa2fe07);
  }
  function _0x44a4bd(_0x4f1640, _0x3cf1a9, _0x21b5b4, _0x404949, _0x561cca, _0x3439eb, _0xa8cea7) {
    _0x4f1640 = _0x468e88(_0x4f1640, _0x468e88(_0x468e88(_0x2537d5(_0x3cf1a9, _0x21b5b4, _0x404949), _0x561cca), _0xa8cea7));
    return _0x468e88(_0x3ade43(_0x4f1640, _0x3439eb), _0x3cf1a9);
  }
  function _0x28f7dc(_0x5e259c, _0x1d18db, _0x4c498e, _0x20398e, _0xc900ca, _0x2a921b, _0x2a35bf) {
    _0x5e259c = _0x468e88(_0x5e259c, _0x468e88(_0x468e88(_0x40c58a(_0x1d18db, _0x4c498e, _0x20398e), _0xc900ca), _0x2a35bf));
    return _0x468e88(_0x3ade43(_0x5e259c, _0x2a921b), _0x1d18db);
  }
  function _0x5f06b1(_0x2ab389, _0x3997b4, _0xb29aae, _0x1e3135, _0x323b6f, _0x12d984, _0x12b313) {
    _0x2ab389 = _0x468e88(_0x2ab389, _0x468e88(_0x468e88(_0x4b47b4(_0x3997b4, _0xb29aae, _0x1e3135), _0x323b6f), _0x12b313));
    return _0x468e88(_0x3ade43(_0x2ab389, _0x12d984), _0x3997b4);
  }
  function _0x2b09f2(_0x306631, _0x52e199, _0x1a8c36, _0x51052d, _0x448cb1, _0x5cd242, _0x4f1d02) {
    _0x306631 = _0x468e88(_0x306631, _0x468e88(_0x468e88(_0x1d76de(_0x52e199, _0x1a8c36, _0x51052d), _0x448cb1), _0x4f1d02));
    return _0x468e88(_0x3ade43(_0x306631, _0x5cd242), _0x52e199);
  }
  function _0x3c62ea(_0x152243) {
    for (var _0x60541f, _0x1b71ef = _0x152243.length, _0x191315 = _0x1b71ef + 8, _0x43af1d = (_0x191315 - _0x191315 % 64) / 64, _0x214587 = 16 * (_0x43af1d + 1), _0x145b23 = new Array(_0x214587 - 1), _0x31f0f9 = 0, _0x1e5752 = 0; _0x1b71ef > _0x1e5752;) {
      _0x60541f = (_0x1e5752 - _0x1e5752 % 4) / 4;
      _0x31f0f9 = _0x1e5752 % 4 * 8;
      _0x145b23[_0x60541f] = _0x145b23[_0x60541f] | _0x152243.charCodeAt(_0x1e5752) << _0x31f0f9;
      _0x1e5752++;
    }
    _0x60541f = (_0x1e5752 - _0x1e5752 % 4) / 4;
    _0x31f0f9 = _0x1e5752 % 4 * 8;
    _0x145b23[_0x60541f] = _0x145b23[_0x60541f] | 128 << _0x31f0f9;
    _0x145b23[_0x214587 - 2] = _0x1b71ef << 3;
    _0x145b23[_0x214587 - 1] = _0x1b71ef >>> 29;
    return _0x145b23;
  }
  function _0x565ddd(_0xa00f3e) {
    var _0x2ce551,
      _0x28eac4,
      _0x4071bc = "",
      _0x123e44 = "";
    for (_0x28eac4 = 0; 3 >= _0x28eac4; _0x28eac4++) {
      _0x2ce551 = _0xa00f3e >>> 8 * _0x28eac4 & 255;
      _0x123e44 = "0" + _0x2ce551.toString(16);
      _0x4071bc += _0x123e44.substr(_0x123e44.length - 2, 2);
    }
    return _0x4071bc;
  }
  function _0x513750(_0x4220a9) {
    _0x4220a9 = _0x4220a9.replace(/\r\n/g, "\n");
    for (var _0x12ae57 = "", _0x4d4bb9 = 0; _0x4d4bb9 < _0x4220a9.length; _0x4d4bb9++) {
      var _0x28fc60 = _0x4220a9.charCodeAt(_0x4d4bb9);
      128 > _0x28fc60 ? _0x12ae57 += String.fromCharCode(_0x28fc60) : _0x28fc60 > 127 && 2048 > _0x28fc60 ? (_0x12ae57 += String.fromCharCode(_0x28fc60 >> 6 | 192), _0x12ae57 += String.fromCharCode(63 & _0x28fc60 | 128)) : (_0x12ae57 += String.fromCharCode(_0x28fc60 >> 12 | 224), _0x12ae57 += String.fromCharCode(_0x28fc60 >> 6 & 63 | 128), _0x12ae57 += String.fromCharCode(63 & _0x28fc60 | 128));
    }
    return _0x12ae57;
  }
  var _0x17a5c8,
    _0x24869e,
    _0x484ff6,
    _0x5aa4b2,
    _0x43e35a,
    _0x20f2ce,
    _0x2c2e23,
    _0x45b1b1,
    _0x1614d5,
    _0x3f84bb = [],
    _0x5377cd = 7,
    _0x409f15 = 12,
    _0x3ab5ba = 17,
    _0x1d2c7b = 22,
    _0x3e5cbd = 5,
    _0x3efeb8 = 9,
    _0x3ede6b = 14,
    _0x121af8 = 20,
    _0x322016 = 4,
    _0x11b43d = 11,
    _0x458079 = 16,
    _0x170bc3 = 23,
    _0x575f48 = 6,
    _0x5d43d6 = 10,
    _0x1793ce = 15,
    _0x3fa719 = 21;
  for (_0x3b3945 = _0x513750(_0x3b3945), _0x3f84bb = _0x3c62ea(_0x3b3945), _0x20f2ce = 1732584193, _0x2c2e23 = 4023233417, _0x45b1b1 = 2562383102, _0x1614d5 = 271733878, _0x17a5c8 = 0; _0x17a5c8 < _0x3f84bb.length; _0x17a5c8 += 16) {
    _0x24869e = _0x20f2ce;
    _0x484ff6 = _0x2c2e23;
    _0x5aa4b2 = _0x45b1b1;
    _0x43e35a = _0x1614d5;
    _0x20f2ce = _0x44a4bd(_0x20f2ce, _0x2c2e23, _0x45b1b1, _0x1614d5, _0x3f84bb[_0x17a5c8 + 0], _0x5377cd, 3614090360);
    _0x1614d5 = _0x44a4bd(_0x1614d5, _0x20f2ce, _0x2c2e23, _0x45b1b1, _0x3f84bb[_0x17a5c8 + 1], _0x409f15, 3905402710);
    _0x45b1b1 = _0x44a4bd(_0x45b1b1, _0x1614d5, _0x20f2ce, _0x2c2e23, _0x3f84bb[_0x17a5c8 + 2], _0x3ab5ba, 606105819);
    _0x2c2e23 = _0x44a4bd(_0x2c2e23, _0x45b1b1, _0x1614d5, _0x20f2ce, _0x3f84bb[_0x17a5c8 + 3], _0x1d2c7b, 3250441966);
    _0x20f2ce = _0x44a4bd(_0x20f2ce, _0x2c2e23, _0x45b1b1, _0x1614d5, _0x3f84bb[_0x17a5c8 + 4], _0x5377cd, 4118548399);
    _0x1614d5 = _0x44a4bd(_0x1614d5, _0x20f2ce, _0x2c2e23, _0x45b1b1, _0x3f84bb[_0x17a5c8 + 5], _0x409f15, 1200080426);
    _0x45b1b1 = _0x44a4bd(_0x45b1b1, _0x1614d5, _0x20f2ce, _0x2c2e23, _0x3f84bb[_0x17a5c8 + 6], _0x3ab5ba, 2821735955);
    _0x2c2e23 = _0x44a4bd(_0x2c2e23, _0x45b1b1, _0x1614d5, _0x20f2ce, _0x3f84bb[_0x17a5c8 + 7], _0x1d2c7b, 4249261313);
    _0x20f2ce = _0x44a4bd(_0x20f2ce, _0x2c2e23, _0x45b1b1, _0x1614d5, _0x3f84bb[_0x17a5c8 + 8], _0x5377cd, 1770035416);
    _0x1614d5 = _0x44a4bd(_0x1614d5, _0x20f2ce, _0x2c2e23, _0x45b1b1, _0x3f84bb[_0x17a5c8 + 9], _0x409f15, 2336552879);
    _0x45b1b1 = _0x44a4bd(_0x45b1b1, _0x1614d5, _0x20f2ce, _0x2c2e23, _0x3f84bb[_0x17a5c8 + 10], _0x3ab5ba, 4294925233);
    _0x2c2e23 = _0x44a4bd(_0x2c2e23, _0x45b1b1, _0x1614d5, _0x20f2ce, _0x3f84bb[_0x17a5c8 + 11], _0x1d2c7b, 2304563134);
    _0x20f2ce = _0x44a4bd(_0x20f2ce, _0x2c2e23, _0x45b1b1, _0x1614d5, _0x3f84bb[_0x17a5c8 + 12], _0x5377cd, 1804603682);
    _0x1614d5 = _0x44a4bd(_0x1614d5, _0x20f2ce, _0x2c2e23, _0x45b1b1, _0x3f84bb[_0x17a5c8 + 13], _0x409f15, 4254626195);
    _0x45b1b1 = _0x44a4bd(_0x45b1b1, _0x1614d5, _0x20f2ce, _0x2c2e23, _0x3f84bb[_0x17a5c8 + 14], _0x3ab5ba, 2792965006);
    _0x2c2e23 = _0x44a4bd(_0x2c2e23, _0x45b1b1, _0x1614d5, _0x20f2ce, _0x3f84bb[_0x17a5c8 + 15], _0x1d2c7b, 1236535329);
    _0x20f2ce = _0x28f7dc(_0x20f2ce, _0x2c2e23, _0x45b1b1, _0x1614d5, _0x3f84bb[_0x17a5c8 + 1], _0x3e5cbd, 4129170786);
    _0x1614d5 = _0x28f7dc(_0x1614d5, _0x20f2ce, _0x2c2e23, _0x45b1b1, _0x3f84bb[_0x17a5c8 + 6], _0x3efeb8, 3225465664);
    _0x45b1b1 = _0x28f7dc(_0x45b1b1, _0x1614d5, _0x20f2ce, _0x2c2e23, _0x3f84bb[_0x17a5c8 + 11], _0x3ede6b, 643717713);
    _0x2c2e23 = _0x28f7dc(_0x2c2e23, _0x45b1b1, _0x1614d5, _0x20f2ce, _0x3f84bb[_0x17a5c8 + 0], _0x121af8, 3921069994);
    _0x20f2ce = _0x28f7dc(_0x20f2ce, _0x2c2e23, _0x45b1b1, _0x1614d5, _0x3f84bb[_0x17a5c8 + 5], _0x3e5cbd, 3593408605);
    _0x1614d5 = _0x28f7dc(_0x1614d5, _0x20f2ce, _0x2c2e23, _0x45b1b1, _0x3f84bb[_0x17a5c8 + 10], _0x3efeb8, 38016083);
    _0x45b1b1 = _0x28f7dc(_0x45b1b1, _0x1614d5, _0x20f2ce, _0x2c2e23, _0x3f84bb[_0x17a5c8 + 15], _0x3ede6b, 3634488961);
    _0x2c2e23 = _0x28f7dc(_0x2c2e23, _0x45b1b1, _0x1614d5, _0x20f2ce, _0x3f84bb[_0x17a5c8 + 4], _0x121af8, 3889429448);
    _0x20f2ce = _0x28f7dc(_0x20f2ce, _0x2c2e23, _0x45b1b1, _0x1614d5, _0x3f84bb[_0x17a5c8 + 9], _0x3e5cbd, 568446438);
    _0x1614d5 = _0x28f7dc(_0x1614d5, _0x20f2ce, _0x2c2e23, _0x45b1b1, _0x3f84bb[_0x17a5c8 + 14], _0x3efeb8, 3275163606);
    _0x45b1b1 = _0x28f7dc(_0x45b1b1, _0x1614d5, _0x20f2ce, _0x2c2e23, _0x3f84bb[_0x17a5c8 + 3], _0x3ede6b, 4107603335);
    _0x2c2e23 = _0x28f7dc(_0x2c2e23, _0x45b1b1, _0x1614d5, _0x20f2ce, _0x3f84bb[_0x17a5c8 + 8], _0x121af8, 1163531501);
    _0x20f2ce = _0x28f7dc(_0x20f2ce, _0x2c2e23, _0x45b1b1, _0x1614d5, _0x3f84bb[_0x17a5c8 + 13], _0x3e5cbd, 2850285829);
    _0x1614d5 = _0x28f7dc(_0x1614d5, _0x20f2ce, _0x2c2e23, _0x45b1b1, _0x3f84bb[_0x17a5c8 + 2], _0x3efeb8, 4243563512);
    _0x45b1b1 = _0x28f7dc(_0x45b1b1, _0x1614d5, _0x20f2ce, _0x2c2e23, _0x3f84bb[_0x17a5c8 + 7], _0x3ede6b, 1735328473);
    _0x2c2e23 = _0x28f7dc(_0x2c2e23, _0x45b1b1, _0x1614d5, _0x20f2ce, _0x3f84bb[_0x17a5c8 + 12], _0x121af8, 2368359562);
    _0x20f2ce = _0x5f06b1(_0x20f2ce, _0x2c2e23, _0x45b1b1, _0x1614d5, _0x3f84bb[_0x17a5c8 + 5], _0x322016, 4294588738);
    _0x1614d5 = _0x5f06b1(_0x1614d5, _0x20f2ce, _0x2c2e23, _0x45b1b1, _0x3f84bb[_0x17a5c8 + 8], _0x11b43d, 2272392833);
    _0x45b1b1 = _0x5f06b1(_0x45b1b1, _0x1614d5, _0x20f2ce, _0x2c2e23, _0x3f84bb[_0x17a5c8 + 11], _0x458079, 1839030562);
    _0x2c2e23 = _0x5f06b1(_0x2c2e23, _0x45b1b1, _0x1614d5, _0x20f2ce, _0x3f84bb[_0x17a5c8 + 14], _0x170bc3, 4259657740);
    _0x20f2ce = _0x5f06b1(_0x20f2ce, _0x2c2e23, _0x45b1b1, _0x1614d5, _0x3f84bb[_0x17a5c8 + 1], _0x322016, 2763975236);
    _0x1614d5 = _0x5f06b1(_0x1614d5, _0x20f2ce, _0x2c2e23, _0x45b1b1, _0x3f84bb[_0x17a5c8 + 4], _0x11b43d, 1272893353);
    _0x45b1b1 = _0x5f06b1(_0x45b1b1, _0x1614d5, _0x20f2ce, _0x2c2e23, _0x3f84bb[_0x17a5c8 + 7], _0x458079, 4139469664);
    _0x2c2e23 = _0x5f06b1(_0x2c2e23, _0x45b1b1, _0x1614d5, _0x20f2ce, _0x3f84bb[_0x17a5c8 + 10], _0x170bc3, 3200236656);
    _0x20f2ce = _0x5f06b1(_0x20f2ce, _0x2c2e23, _0x45b1b1, _0x1614d5, _0x3f84bb[_0x17a5c8 + 13], _0x322016, 681279174);
    _0x1614d5 = _0x5f06b1(_0x1614d5, _0x20f2ce, _0x2c2e23, _0x45b1b1, _0x3f84bb[_0x17a5c8 + 0], _0x11b43d, 3936430074);
    _0x45b1b1 = _0x5f06b1(_0x45b1b1, _0x1614d5, _0x20f2ce, _0x2c2e23, _0x3f84bb[_0x17a5c8 + 3], _0x458079, 3572445317);
    _0x2c2e23 = _0x5f06b1(_0x2c2e23, _0x45b1b1, _0x1614d5, _0x20f2ce, _0x3f84bb[_0x17a5c8 + 6], _0x170bc3, 76029189);
    _0x20f2ce = _0x5f06b1(_0x20f2ce, _0x2c2e23, _0x45b1b1, _0x1614d5, _0x3f84bb[_0x17a5c8 + 9], _0x322016, 3654602809);
    _0x1614d5 = _0x5f06b1(_0x1614d5, _0x20f2ce, _0x2c2e23, _0x45b1b1, _0x3f84bb[_0x17a5c8 + 12], _0x11b43d, 3873151461);
    _0x45b1b1 = _0x5f06b1(_0x45b1b1, _0x1614d5, _0x20f2ce, _0x2c2e23, _0x3f84bb[_0x17a5c8 + 15], _0x458079, 530742520);
    _0x2c2e23 = _0x5f06b1(_0x2c2e23, _0x45b1b1, _0x1614d5, _0x20f2ce, _0x3f84bb[_0x17a5c8 + 2], _0x170bc3, 3299628645);
    _0x20f2ce = _0x2b09f2(_0x20f2ce, _0x2c2e23, _0x45b1b1, _0x1614d5, _0x3f84bb[_0x17a5c8 + 0], _0x575f48, 4096336452);
    _0x1614d5 = _0x2b09f2(_0x1614d5, _0x20f2ce, _0x2c2e23, _0x45b1b1, _0x3f84bb[_0x17a5c8 + 7], _0x5d43d6, 1126891415);
    _0x45b1b1 = _0x2b09f2(_0x45b1b1, _0x1614d5, _0x20f2ce, _0x2c2e23, _0x3f84bb[_0x17a5c8 + 14], _0x1793ce, 2878612391);
    _0x2c2e23 = _0x2b09f2(_0x2c2e23, _0x45b1b1, _0x1614d5, _0x20f2ce, _0x3f84bb[_0x17a5c8 + 5], _0x3fa719, 4237533241);
    _0x20f2ce = _0x2b09f2(_0x20f2ce, _0x2c2e23, _0x45b1b1, _0x1614d5, _0x3f84bb[_0x17a5c8 + 12], _0x575f48, 1700485571);
    _0x1614d5 = _0x2b09f2(_0x1614d5, _0x20f2ce, _0x2c2e23, _0x45b1b1, _0x3f84bb[_0x17a5c8 + 3], _0x5d43d6, 2399980690);
    _0x45b1b1 = _0x2b09f2(_0x45b1b1, _0x1614d5, _0x20f2ce, _0x2c2e23, _0x3f84bb[_0x17a5c8 + 10], _0x1793ce, 4293915773);
    _0x2c2e23 = _0x2b09f2(_0x2c2e23, _0x45b1b1, _0x1614d5, _0x20f2ce, _0x3f84bb[_0x17a5c8 + 1], _0x3fa719, 2240044497);
    _0x20f2ce = _0x2b09f2(_0x20f2ce, _0x2c2e23, _0x45b1b1, _0x1614d5, _0x3f84bb[_0x17a5c8 + 8], _0x575f48, 1873313359);
    _0x1614d5 = _0x2b09f2(_0x1614d5, _0x20f2ce, _0x2c2e23, _0x45b1b1, _0x3f84bb[_0x17a5c8 + 15], _0x5d43d6, 4264355552);
    _0x45b1b1 = _0x2b09f2(_0x45b1b1, _0x1614d5, _0x20f2ce, _0x2c2e23, _0x3f84bb[_0x17a5c8 + 6], _0x1793ce, 2734768916);
    _0x2c2e23 = _0x2b09f2(_0x2c2e23, _0x45b1b1, _0x1614d5, _0x20f2ce, _0x3f84bb[_0x17a5c8 + 13], _0x3fa719, 1309151649);
    _0x20f2ce = _0x2b09f2(_0x20f2ce, _0x2c2e23, _0x45b1b1, _0x1614d5, _0x3f84bb[_0x17a5c8 + 4], _0x575f48, 4149444226);
    _0x1614d5 = _0x2b09f2(_0x1614d5, _0x20f2ce, _0x2c2e23, _0x45b1b1, _0x3f84bb[_0x17a5c8 + 11], _0x5d43d6, 3174756917);
    _0x45b1b1 = _0x2b09f2(_0x45b1b1, _0x1614d5, _0x20f2ce, _0x2c2e23, _0x3f84bb[_0x17a5c8 + 2], _0x1793ce, 718787259);
    _0x2c2e23 = _0x2b09f2(_0x2c2e23, _0x45b1b1, _0x1614d5, _0x20f2ce, _0x3f84bb[_0x17a5c8 + 9], _0x3fa719, 3951481745);
    _0x20f2ce = _0x468e88(_0x20f2ce, _0x24869e);
    _0x2c2e23 = _0x468e88(_0x2c2e23, _0x484ff6);
    _0x45b1b1 = _0x468e88(_0x45b1b1, _0x5aa4b2);
    _0x1614d5 = _0x468e88(_0x1614d5, _0x43e35a);
  }
  var _0x53e628 = _0x565ddd(_0x20f2ce) + _0x565ddd(_0x2c2e23) + _0x565ddd(_0x45b1b1) + _0x565ddd(_0x1614d5);
  return _0x53e628.toLowerCase();
}
function FxPCnMKLw7() {
  _keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
  this.encode = function (_0x7d414) {
    var _0x33219d = "",
      _0x46c6e8,
      _0x36a1f4,
      _0x1ef2b8,
      _0x4d5a02,
      _0xe57b85,
      _0x11cafe,
      _0x3da481,
      _0x5e3eb4 = 0;
    _0x7d414 = _utf8_encode(_0x7d414);
    while (_0x5e3eb4 < _0x7d414.length) {
      _0x46c6e8 = _0x7d414.charCodeAt(_0x5e3eb4++);
      _0x36a1f4 = _0x7d414.charCodeAt(_0x5e3eb4++);
      _0x1ef2b8 = _0x7d414.charCodeAt(_0x5e3eb4++);
      _0x4d5a02 = _0x46c6e8 >> 2;
      _0xe57b85 = (_0x46c6e8 & 3) << 4 | _0x36a1f4 >> 4;
      _0x11cafe = (_0x36a1f4 & 15) << 2 | _0x1ef2b8 >> 6;
      _0x3da481 = _0x1ef2b8 & 63;
      if (isNaN(_0x36a1f4)) {
        _0x11cafe = _0x3da481 = 64;
      } else {
        isNaN(_0x1ef2b8) && (_0x3da481 = 64);
      }
      _0x33219d = _0x33219d + _keyStr.charAt(_0x4d5a02) + _keyStr.charAt(_0xe57b85) + _keyStr.charAt(_0x11cafe) + _keyStr.charAt(_0x3da481);
    }
    return _0x33219d;
  };
  this.decode = function (_0x310d45) {
    var _0x49dc49 = "",
      _0x4b2ca9,
      _0x588123,
      _0x162187,
      _0x496288,
      _0x4515ad,
      _0x3aa9f0,
      _0x38a637,
      _0x3b1cec = 0;
    _0x310d45 = _0x310d45.replace(/[^A-Za-z0-9\+\/\=]/g, "");
    while (_0x3b1cec < _0x310d45.length) {
      _0x496288 = _keyStr.indexOf(_0x310d45.charAt(_0x3b1cec++));
      _0x4515ad = _keyStr.indexOf(_0x310d45.charAt(_0x3b1cec++));
      _0x3aa9f0 = _keyStr.indexOf(_0x310d45.charAt(_0x3b1cec++));
      _0x38a637 = _keyStr.indexOf(_0x310d45.charAt(_0x3b1cec++));
      _0x4b2ca9 = _0x496288 << 2 | _0x4515ad >> 4;
      _0x588123 = (_0x4515ad & 15) << 4 | _0x3aa9f0 >> 2;
      _0x162187 = (_0x3aa9f0 & 3) << 6 | _0x38a637;
      _0x49dc49 = _0x49dc49 + String.fromCharCode(_0x4b2ca9);
      _0x3aa9f0 != 64 && (_0x49dc49 = _0x49dc49 + String.fromCharCode(_0x588123));
      _0x38a637 != 64 && (_0x49dc49 = _0x49dc49 + String.fromCharCode(_0x162187));
    }
    _0x49dc49 = _utf8_decode(_0x49dc49);
    return _0x49dc49;
  };
  _utf8_encode = function (_0x1a1e36) {
    _0x1a1e36 = _0x1a1e36.replace(/\r\n/g, "\n");
    var _0x102e2a = "";
    for (var _0x4355ed = 0; _0x4355ed < _0x1a1e36.length; _0x4355ed++) {
      var _0xffe412 = _0x1a1e36.charCodeAt(_0x4355ed);
      if (_0xffe412 < 128) {
        _0x102e2a += String.fromCharCode(_0xffe412);
      } else {
        _0xffe412 > 127 && _0xffe412 < 2048 ? (_0x102e2a += String.fromCharCode(_0xffe412 >> 6 | 192), _0x102e2a += String.fromCharCode(_0xffe412 & 63 | 128)) : (_0x102e2a += String.fromCharCode(_0xffe412 >> 12 | 224), _0x102e2a += String.fromCharCode(_0xffe412 >> 6 & 63 | 128), _0x102e2a += String.fromCharCode(_0xffe412 & 63 | 128));
      }
    }
    return _0x102e2a;
  };
  _utf8_decode = function (_0xc44b99) {
    c1 = c2 = 0;
    var _0x4bda04 = "",
      _0x382250 = 0,
      _0x2f59c1 = c1;
    while (_0x382250 < _0xc44b99.length) {
      _0x2f59c1 = _0xc44b99.charCodeAt(_0x382250);
      if (_0x2f59c1 < 128) {
        _0x4bda04 += String.fromCharCode(_0x2f59c1);
        _0x382250++;
      } else {
        _0x2f59c1 > 191 && _0x2f59c1 < 224 ? (c2 = _0xc44b99.charCodeAt(_0x382250 + 1), _0x4bda04 += String.fromCharCode((_0x2f59c1 & 31) << 6 | c2 & 63), _0x382250 += 2) : (c2 = _0xc44b99.charCodeAt(_0x382250 + 1), c3 = _0xc44b99.charCodeAt(_0x382250 + 2), _0x4bda04 += String.fromCharCode((_0x2f59c1 & 15) << 12 | (c2 & 63) << 6 | c3 & 63), _0x382250 += 3);
      }
    }
    return _0x4bda04;
  };
}
function rc4(_0x3238c7, _0x744b39) {
  var _0x1a7ea2 = Array(256),
    _0x151ef0 = Array(_0x3238c7.length);
  for (var _0x230388 = 0; _0x230388 < 256; _0x230388++) {
    _0x1a7ea2[_0x230388] = _0x230388;
    var _0x1d0049 = (_0x1d0049 + _0x1a7ea2[_0x230388] + _0x744b39.charCodeAt(_0x230388 % _0x744b39.length)) % 256,
      _0x2ba88e = _0x1a7ea2[_0x230388];
    _0x1a7ea2[_0x230388] = _0x1a7ea2[_0x1d0049];
    _0x1a7ea2[_0x1d0049] = _0x2ba88e;
  }
  for (var _0x230388 = 0; _0x230388 < _0x3238c7.length; _0x230388++) {
    _0x151ef0[_0x230388] = _0x3238c7.charCodeAt(_0x230388);
  }
  for (var _0x3a7d94 = 0; _0x3a7d94 < _0x151ef0.length; _0x3a7d94++) {
    var _0x230388 = (_0x230388 + 1) % 256,
      _0x1d0049 = (_0x1d0049 + _0x1a7ea2[_0x230388]) % 256,
      _0x2ba88e = _0x1a7ea2[_0x230388];
    _0x1a7ea2[_0x230388] = _0x1a7ea2[_0x1d0049];
    _0x1a7ea2[_0x1d0049] = _0x2ba88e;
    var _0x5e33f5 = (_0x1a7ea2[_0x230388] + _0x1a7ea2[_0x1d0049] % 256) % 256;
    _0x151ef0[_0x3a7d94] = String.fromCharCode(_0x151ef0[_0x3a7d94] ^ _0x1a7ea2[_0x5e33f5]);
  }
  return _0x151ef0.join("");
}
function Env(t, e) {
  class s {
    constructor(t) {
      this.env = t;
    }
    send(t, e = "GET") {
      t = "string" == typeof t ? {
        url: t
      } : t;
      let s = this.get;
      "POST" === e && (s = this.post);
      return new Promise((e, i) => {
        s.call(this, t, (t, s, r) => {
          t ? i(t) : e(s);
        });
      });
    }
    get(t) {
      return this.send.call(this.env, t);
    }
    post(t) {
      return this.send.call(this.env, t, "POST");
    }
  }
  return new class {
    constructor(t, e) {
      this.name = t;
      this.http = new s(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = !1;
      this.isNeedRewrite = !1;
      this.logSeparator = "\n";
      this.encoding = "utf-8";
      this.startTime = new Date().getTime();
      Object.assign(this, e);
      this.log("", `🔔${this.name}, 开始!`);
    }
    isNode() {
      return "undefined" != typeof module && !!module.exports;
    }
    isQuanX() {
      return "undefined" != typeof $task;
    }
    isSurge() {
      return "undefined" != typeof $httpClient && "undefined" == typeof $loon;
    }
    isLoon() {
      return "undefined" != typeof $loon;
    }
    isShadowrocket() {
      return "undefined" != typeof $rocket;
    }
    toObj(t, e = null) {
      try {
        return JSON.parse(t);
      } catch {
        return e;
      }
    }
    toStr(t, e = null) {
      try {
        return JSON.stringify(t);
      } catch {
        return e;
      }
    }
    getjson(t, e) {
      let s = e;
      const i = this.getdata(t);
      if (i) {
        try {
          s = JSON.parse(this.getdata(t));
        } catch {}
      }
      return s;
    }
    setjson(t, e) {
      try {
        return this.setdata(JSON.stringify(t), e);
      } catch {
        return !1;
      }
    }
    getScript(t) {
      return new Promise(e => {
        this.get({
          url: t
        }, (t, s, i) => e(i));
      });
    }
    runScript(t, e) {
      return new Promise(s => {
        let i = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        i = i ? i.replace(/\n/g, "").trim() : i;
        let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        r = r ? 1 * r : 20;
        r = e && e.timeout ? e.timeout : r;
        const [o, h] = i.split("@"),
          n = {
            url: `http://${h}/v1/scripting/evaluate`,
            body: {
              script_text: t,
              mock_type: "cron",
              timeout: r
            },
            headers: {
              "X-Key": o,
              Accept: "*/*"
            }
          };
        this.post(n, (t, e, i) => s(i));
      }).catch(t => this.logErr(t));
    }
    loaddata() {
      if (!this.isNode()) {
        return {};
      }
      {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          i = !s && this.fs.existsSync(e);
        if (!s && !i) {
          return {};
        }
        {
          const i = s ? t : e;
          try {
            return JSON.parse(this.fs.readFileSync(i));
          } catch (t) {
            return {};
          }
        }
      }
    }
    writedata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          i = !s && this.fs.existsSync(e),
          r = JSON.stringify(this.data);
        s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r);
      }
    }
    lodash_get(t, e, s) {
      const i = e.replace(/\[(\d+)\]/g, ".$1").split(".");
      let r = t;
      for (const t of i) if (r = Object(r)[t], void 0 === r) {
        return s;
      }
      return r;
    }
    lodash_set(t, e, s) {
      return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t);
    }
    getdata(t) {
      let e = this.getval(t);
      if (/^@/.test(t)) {
        const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t),
          r = s ? this.getval(s) : "";
        if (r) {
          try {
            const t = JSON.parse(r);
            e = t ? this.lodash_get(t, i, "") : e;
          } catch (t) {
            e = "";
          }
        }
      }
      return e;
    }
    setdata(t, e) {
      let s = !1;
      if (/^@/.test(e)) {
        const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e),
          o = this.getval(i),
          h = i ? "null" === o ? null : o || "{}" : "{}";
        try {
          const e = JSON.parse(h);
          this.lodash_set(e, r, t);
          s = this.setval(JSON.stringify(e), i);
        } catch (e) {
          const o = {};
          this.lodash_set(o, r, t);
          s = this.setval(JSON.stringify(o), i);
        }
      } else {
        s = this.setval(t, e);
      }
      return s;
    }
    getval(t) {
      return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null;
    }
    setval(t, e) {
      return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null;
    }
    initGotEnv(t) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar));
    }
    get(t, e = () => {}) {
      if (t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon()) {
        this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
          "X-Surge-Skip-Scripting": !1
        }));
        $httpClient.get(t, (t, s, i) => {
          !t && s && (s.body = i, s.statusCode = s.status);
          e(t, s, i);
        });
      } else {
        if (this.isQuanX()) {
          this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
            hints: !1
          }));
          $task.fetch(t).then(t => {
            const {
              statusCode: s,
              statusCode: i,
              headers: r,
              body: o
            } = t;
            e(null, {
              status: s,
              statusCode: i,
              headers: r,
              body: o
            }, o);
          }, t => e(t));
        } else {
          if (this.isNode()) {
            let s = require("iconv-lite");
            this.initGotEnv(t);
            this.got(t).on("redirect", (t, e) => {
              try {
                if (t.headers["set-cookie"]) {
                  const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
                  s && this.ckjar.setCookieSync(s, null);
                  e.cookieJar = this.ckjar;
                }
              } catch (t) {
                this.logErr(t);
              }
            }).then(t => {
              const {
                statusCode: i,
                statusCode: r,
                headers: o,
                rawBody: h
              } = t;
              e(null, {
                status: i,
                statusCode: r,
                headers: o,
                rawBody: h
              }, s.decode(h, this.encoding));
            }, t => {
              const {
                message: i,
                response: r
              } = t;
              e(i, r, r && s.decode(r.rawBody, this.encoding));
            });
          }
        }
      }
    }
    post(t, e = () => {}) {
      const s = t.method ? t.method.toLocaleLowerCase() : "post";
      if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) {
        this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
          "X-Surge-Skip-Scripting": !1
        }));
        $httpClient[s](t, (t, s, i) => {
          !t && s && (s.body = i, s.statusCode = s.status);
          e(t, s, i);
        });
      } else {
        if (this.isQuanX()) {
          t.method = s;
          this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
            hints: !1
          }));
          $task.fetch(t).then(t => {
            const {
              statusCode: s,
              statusCode: i,
              headers: r,
              body: o
            } = t;
            e(null, {
              status: s,
              statusCode: i,
              headers: r,
              body: o
            }, o);
          }, t => e(t));
        } else {
          if (this.isNode()) {
            let i = require("iconv-lite");
            this.initGotEnv(t);
            const {
              url: r,
              ...o
            } = t;
            this.got[s](r, o).then(t => {
              const {
                statusCode: s,
                statusCode: r,
                headers: o,
                rawBody: h
              } = t;
              e(null, {
                status: s,
                statusCode: r,
                headers: o,
                rawBody: h
              }, i.decode(h, this.encoding));
            }, t => {
              const {
                message: s,
                response: r
              } = t;
              e(s, r, r && i.decode(r.rawBody, this.encoding));
            });
          }
        }
      }
    }
    time(t, e = null) {
      const s = e ? new Date(e) : new Date();
      let i = {
        "M+": s.getMonth() + 1,
        "d+": s.getDate(),
        "H+": s.getHours(),
        "m+": s.getMinutes(),
        "s+": s.getSeconds(),
        "q+": Math.floor((s.getMonth() + 3) / 3),
        S: s.getMilliseconds()
      };
      /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length)));
      return t;
    }
    msg(e = t, s = "", i = "", r) {
      const o = t => {
        if (!t) {
          return t;
        }
        if ("string" == typeof t) {
          return this.isLoon() ? t : this.isQuanX() ? {
            "open-url": t
          } : this.isSurge() ? {
            url: t
          } : void 0;
        }
        if ("object" == typeof t) {
          if (this.isLoon()) {
            let e = t.openUrl || t.url || t["open-url"],
              s = t.mediaUrl || t["media-url"];
            return {
              openUrl: e,
              mediaUrl: s
            };
          }
          if (this.isQuanX()) {
            let e = t["open-url"] || t.url || t.openUrl,
              s = t["media-url"] || t.mediaUrl;
            return {
              "open-url": e,
              "media-url": s
            };
          }
          if (this.isSurge()) {
            let e = t.url || t.openUrl || t["open-url"];
            return {
              url: e
            };
          }
        }
      };
      if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))), !this.isMuteLog) {
        let t = ["", "==============📣系统通知📣=============="];
        t.push(e);
        s && t.push(s);
        i && t.push(i);
        console.log(t.join("\n"));
        this.logs = this.logs.concat(t);
      }
    }
    fwcaas() {
      return "fkRGREUCFRNfMCtqKj0lLiE/OXowLTRz";
    }
    log(...t) {
      t.length > 0 && (this.logs = [...this.logs, ...t]);
      console.log(t.join(this.logSeparator));
    }
    logErr(t, e) {
      const s = !this.isSurge() && !this.isQuanX() && !this.isLoon();
      s ? this.log("", `❗️${this.name}, 错误!`, t.stack) : this.log("", `❗️${this.name}, 错误!`, t);
    }
    fwur() {
      var bbas = new FxPCnMKLw7();
      return bbas.decode(this.fwcaas());
    }
    wait(t) {
      return new Promise(e => setTimeout(e, t));
    }
    done(t = {}) {
      const e = new Date().getTime(),
        s = (e - this.startTime) / 1000;
      this.log("", `🔔${this.name}, 结束! 🕛 ${s} 秒`);
      this.log();
      (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t);
    }
  }(t, e);
}
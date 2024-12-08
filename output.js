//Sun Dec 08 2024 19:34:11 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const _0x7436bc = new _0x153e21("阅龙湾");
_0x36721b();
const _0x230d1c = "ylwCookie",
  _0x3f5f76 = require("request"),
  _0x8358ce = require("fs"),
  _0x123af8 = require("form-data"),
  _0x15e580 = require("./utils");
let _0x44cf0c = "",
  _0x17ced1 = "https://app.tmuyun.com/webChannels/invite?inviteCode=WE8ZKU&tenantId=51&accountId=649cc5b1505761126884ab48",
  _0x4b5356 = "幻生提示：有错请在仓库建立issue，说明运行环境：青龙版本、机器是 本地机器、服务器 还是 手机面具模块；附上运行截图，谢谢",
  _0x85c05c = "请在 配置文件 里添加 " + _0x230d1c + " 变量，具体配置请看脚本最上方说明\n注册地址：" + _0x17ced1 + "\n投稿？请建Issue 或者 +Q：3385445213";
const _0x374fee = Number.isInteger(_0x7436bc.isNode() ? process.env[_0x230d1c + "enabledNotify"] : _0x7436bc.getdata(_0x230d1c + "EnabledNotify")) || Number.isInteger(_0x7436bc.isNode() ? process.env.enabledNotify : _0x7436bc.getdata("enabledNotify")) || 1;
let _0x15b185 = 0,
  _0x6d25ab = ["@", "\n"],
  _0x4353fb = (_0x7436bc.isNode() ? process.env[_0x230d1c] : _0x7436bc.getdata(_0x230d1c)) || "",
  _0x30ed9d = ["1", 1, "true"]?.["includes"](_0x7436bc.isNode() ? process.env[_0x230d1c + "EnabledPostComment"] : _0x7436bc.getdata(_0x230d1c + "EnabledPostComment")) || false,
  _0xa348c = ["1", 1, "true"]?.["includes"](_0x7436bc.isNode() ? process.env[_0x230d1c + "EnabledForumPost"] : _0x7436bc.getdata(_0x230d1c + "EnabledForumPost")) || false,
  _0x4726dc = ["1", 1, "true"]?.["includes"](_0x7436bc.isNode() ? process.env[_0x230d1c + "EnabledPostCommentBy1Y"] : _0x7436bc.getdata(_0x230d1c + "EnabledPostCommentBy1Y")) || false,
  _0x5b4ed0 = ["1", 1, "true"]?.["includes"](_0x7436bc.isNode() ? process.env[_0x230d1c + "ForceLikeAndShare"] : _0x7436bc.getdata(_0x230d1c + "ForceLikeAndShare")) || false,
  _0xad4fb1 = [],
  _0x4bbbf6 = 0,
  _0x5c59fc = 0,
  _0x50eab1 = "WE8ZKU",
  _0x419c0f = "10008",
  _0x5e029a = 51,
  _0xd7a9a9 = "vapp.tmuyun.com",
  _0x4011f2 = "请注意：已" + (_0x30ed9d ? "开启" : "关闭") + " 对文章的评论功能； 已" + (_0xa348c ? "开启" : "关闭") + " 论坛发帖功能； 已" + (_0x4726dc ? "开启" : "关闭") + " 一言随机评论功能； 已" + (_0x4726dc ? "开启" : "关闭") + " 强制点赞/分享功能（强行点不一定能加分）",
  _0x3807d2 = "63777162fe3fc118b09fab89",
  _0x1e586d = ["赞", "👍", "😄", "111", "支持", "点赞"],
  _0x3fc1b6 = "1.2.2;00000000-62d6-e9e6-0000-0000777fa720;Xiaomi Mi 10;Android;13;Release",
  _0x43b62a = ["62c53767373c550ecabd9d6a ", "6327c414ad61a4052a4a2a12", "62c537afde224a0ebdf0fe7c", "62c537bc373c550ecabd9d6c", "63318faafe3fc1537e56b6e2", "62c537a1fe3fc1538430e59a"],
  _0xfc2f81 = ["1", 1, "true"]?.["includes"](_0x7436bc.isNode() ? process.env[_0x230d1c + "OldConfigTranform"] : _0x7436bc.getdata(_0x230d1c + "OldConfigTranform")) || false,
  _0x3751b4 = "",
  _0x3dc985 = "";
async function _0x5c9252() {
  console.log("\n================== 用户登录 帐号数：[" + _0xad4fb1?.["length"] + "]==================\n");
  let _0x2202d2 = [];
  for (let _0x2c1b10 of _0xad4fb1) {
    if (!_0x2c1b10.sessionId) {
      _0x2c1b10.loadCache();
      !_0x2c1b10.valid ? _0x2202d2.push(await _0x2c1b10.login()) : await _0x7436bc.wait(200);
    } else _0x2202d2.push(await _0x2c1b10.user_info()), await _0x7436bc.wait(200);
  }
  await Promise.all(_0x2202d2);
  _0xad4fb1 = _0xad4fb1?.["filter"](_0xdb8df8 => _0xdb8df8?.["valid"]);
  if (!_0xad4fb1?.["length"]) {
    console.log("\n无可用账号，停止运行\n");
    return;
  }
  console.log("\n================== 用户信息 帐号数：[" + _0xad4fb1?.["length"] + "]==================\n");
  _0x2202d2 = [];
  for (let _0x4560e8 of _0xad4fb1) {
    _0x2202d2.push(await _0x4560e8.task_tasklist("用户信息"));
    await _0x1c911a(0.2 + Math.random() * 1);
    _0x2202d2.push(await _0x4560e8.get_unread_msg());
  }
  await Promise.all(_0x2202d2);
  const _0x18e7cc = _0xad4fb1?.["filter"](_0x2b5d2e => _0x2b5d2e?.["jobList"]?.["find"](_0x3a300c => _0x3a300c?.["name"]?.["includes"]("签到") && _0x3a300c?.["frequency"] && _0x3a300c?.["frequency"] > _0x3a300c?.["finish_times"]));
  if (_0x18e7cc?.["length"]) {
    console.log("\n================== 每日签到任务开始执行 待执行帐号数：[" + _0x18e7cc?.["length"] + "]==================\n");
    _0x2202d2 = [];
    for (let _0x47c487 of _0x18e7cc) {
      _0x2202d2.push(await _0x47c487.task_sign("每日签到"));
      await _0x1c911a(0.2 + Math.random() * 1);
    }
    await Promise.all(_0x2202d2);
  } else {
    console.log("\n无签到任务 或 当前帐号都已签到过了，无需执行签到任务\n");
  }
  const _0x41459c = _0xad4fb1?.["filter"](_0xa48e39 => _0xa48e39?.["jobList"]?.["find"](_0x1a16fe => {
    return _0x1a16fe?.["name"]?.["includes"]("帖子发布") && _0x1a16fe?.["frequency"] && _0x1a16fe?.["frequency"] > _0x1a16fe?.["finish_times"] && _0xa348c || _0x1a16fe?.["name"]?.["includes"]("帖子点赞") && _0x1a16fe?.["frequency"] && _0x1a16fe?.["frequency"] > _0x1a16fe?.["finish_times"];
  }));
  if (_0x41459c?.["length"]) {
    console.log("\n================== 社区帖子相关任务开始执行 待执行帐号数：[" + _0x41459c?.["length"] + "]==================\n");
    _0x2202d2 = [];
    for (let _0x3ba6a0 of _0x41459c) {
      _0x2202d2.push(await _0x3ba6a0.task_forum_info("社区帖子列表"));
      await _0x1c911a(0.2 + Math.random() * 1);
    }
    await Promise.all(_0x2202d2);
  } else console.log("\n无社区帖子相关任务 或 当前帐号都已做完了社区帖子任务，无需执行\n");
  await _0x1c911a(0.2 + Math.random() * 1);
  const _0x379aaf = _0xad4fb1?.["filter"](_0x2cda92 => _0x2cda92?.["jobList"]?.["find"](_0x437393 => {
    return _0x437393?.["name"]?.["includes"]("资讯评论") && _0x437393?.["frequency"] > _0x437393?.["finish_times"] && _0x30ed9d || _0x437393?.["name"]?.["includes"]("分享资讯") && _0x437393?.["frequency"] && _0x437393?.["frequency"] > _0x437393?.["finish_times"] || _0x437393?.["name"]?.["includes"]("资讯点赞") && _0x437393?.["frequency"] && _0x437393?.["frequency"] > _0x437393?.["finish_times"] || _0x437393?.["name"]?.["includes"]("资讯阅读") && _0x437393?.["frequency"] && _0x437393?.["frequency"] > _0x437393?.["finish_times"];
  }));
  if (_0x379aaf?.["length"]) {
    console.log("\n================== 文章列表相关任务开始执行 待执行帐号数：[" + _0x379aaf?.["length"] + "]==================\n");
    _0x2202d2 = [];
    for (let _0x40ed66 of _0x379aaf) {
      console.log("\n开始执行帐号[" + _0x40ed66.index + "] 文章任务😄\n");
      _0x2202d2.push(await _0x40ed66.task_articlelist("文章列表"));
      await _0x1c911a(0.2 + Math.random() * 1);
    }
    await Promise.all(_0x2202d2);
  } else console.log("\n无文章资讯任务 或 当前帐号都已做完了资讯任务，无需执行相关任务\n");
  await _0x1c911a(0.2 + Math.random() * 1);
  const _0x577816 = _0xad4fb1?.["filter"](_0x574c48 => _0x574c48?.["jobList"]?.["find"](_0xcd83ab => {
    return _0xcd83ab?.["name"]?.["includes"]("本地服务") && _0xcd83ab?.["frequency"] && _0xcd83ab?.["frequency"] > _0xcd83ab?.["finish_times"];
  }));
  if (_0x577816?.["length"]) {
    console.log("\n================== 本地服务任务开始执行 待执行帐号数：[" + _0x577816?.["length"] + "]==================\n");
    _0x2202d2 = [];
    for (let _0x179112 of _0x577816) {
      const _0x3af2aa = _0x179112?.["jobList"]?.["find"](_0x940748 => {
        return _0x940748?.["name"]?.["includes"]("本地服务") && _0x940748?.["frequency"] && _0x940748?.["frequency"] > _0x940748?.["finish_times"];
      });
      for (let _0x49676c = 0; _0x49676c < _0x3af2aa?.["frequency"] - _0x3af2aa?.["finish_times"]; _0x49676c++) {
        _0x2202d2.push(await _0x179112.task_share("6", undefined, "本地服务"));
        await _0x1c911a(1 + Math.random() * 1);
      }
    }
    await Promise.all(_0x2202d2);
  } else console.log("\n无本地服务任务 或 当前帐号都已做完了本地服务任务，无需执行相关任务\n");
  console.log("\n================== 删除历史评论任务开始执行 待执行帐号数：[" + _0xad4fb1?.["length"] + "]==================\n");
  for (let _0x5d5d2a of _0xad4fb1) {
    await _0x5d5d2a.get_comment_history();
    await _0x1c911a(1 + Math.random() * 1);
  }
}
class _0x4f2881 {
  ["valid"] = false;
  constructor(_0x4124b6) {
    this.index = ++_0x4bbbf6;
    this.accountId = "";
    this.host = _0xd7a9a9;
    this.hostname = "https://" + this.host;
    this.key = "FR*r!isE5W";
    const _0x3f225d = _0x43b62a,
      _0x3d172d = Math.floor(Math.random() * _0x3f225d.length);
    this.artlistdata = _0x3f225d[_0x3d172d];
    if (_0x4124b6?.["length"] === 1) {
      if (_0x4124b6[0]?.["includes"]("#")) _0x4124b6 = _0x4124b6[0]?.["split"]("#");else _0x4124b6[0]?.["includes"]("&") && (_0x4124b6 = _0x4124b6[0]?.["split"]("&"));
    }
    if (_0x4124b6[0]?.["length"] === 11) this.account = _0x4124b6[0], this.password = _0x4124b6[1];else {
      if (_0xfc2f81) this.sessionId = _0x4124b6[1], this.accountId = _0x4124b6[0];else {
        this.sessionId = _0x4124b6[0];
        this.accountId = _0x4124b6[1];
      }
    }
  }
  ["loadCache"]() {
    let _0x328216 = _0x27797e(_0x230d1c + "_config", this.account);
    if (_0x328216) {
      _0x328216 = JSON.parse(_0x328216);
      console.log("账号[" + this.index + "]从缓存读取成功 😄 ，其ID为： " + _0x328216?.["id"] + "，手机号为：" + this.account);
      this.accountId = _0x328216?.["id"];
      this.sessionId = _0x328216?.["sessionId"];
      this.valid = true;
      return;
    }
  }
  async ["txt_api"]() {
    try {
      let _0xbd7c51 = {
          "method": "GET",
          "url": "https://v1.hitokoto.cn/",
          "qs": {
            "c": "d"
          },
          "headers": {
            "content-type": "multipart/form-data; boundary=---011000010111000001101001"
          },
          "formData": {}
        },
        _0x5d2cda = await _0x209cd(_0xbd7c51, "");
      if (_0x5d2cda.id) return _0x5d2cda.hitokoto;else {}
    } catch (_0x48e688) {
      console.log(_0x48e688);
    }
  }
  async ["task_tasklist"](_0x30a63b) {
    let _0x2b1336 = "/api/user_mumber/numberCenter",
      _0x1ae484 = _0x15e580.guid(),
      _0x4df813 = _0x15e580.ts13(),
      _0x5361b9 = _0x2b1336 + "&&" + this.sessionId + "&&" + _0x1ae484 + "&&" + _0x4df813 + "&&" + this.key + "&&" + _0x5e029a,
      _0x1cb345 = _0x15e580.SHA256_Encrypt(_0x5361b9);
    try {
      let _0xee82a2 = {
          "method": "GET",
          "url": "" + this.hostname + _0x2b1336 + "?is_new=1",
          "headers": {
            "X-SESSION-ID": "" + this.sessionId,
            "X-REQUEST-ID": _0x1ae484,
            "X-TIMESTAMP": _0x4df813,
            "X-SIGNATURE": _0x1cb345,
            "X-TENANT-ID": _0x5e029a,
            "User-Agent": _0x3fc1b6,
            "Cache-Control": "no-cache",
            "Host": this.host,
            "Connection": "Keep-Alive",
            "X-ACCOUNT-ID": this.accountId
          }
        },
        _0x20dc7f = await _0x209cd(_0xee82a2, _0x30a63b);
      if (_0x20dc7f.code == 0) {
        if (!this.requestedUserInfo) {
          await this.user_info();
          await _0x1c911a(0.3);
        }
        _0xe58079("账号[" + this.index + "],欢迎用户:[" + _0x20dc7f.data.rst.nick_name + "],当前积分为[" + _0x20dc7f.data.rst.total_integral + "]");
        _0x3751b4 += "账号[" + this.index + "],欢迎用户:[" + _0x20dc7f.data.rst.nick_name + "],当前积分为[" + _0x20dc7f.data.rst.total_integral + "]\n";
        await _0x1c911a(0.3);
        this.jobList = _0x20dc7f.data.rst.user_task_list?.["map"](_0x217d29 => {
          return {
            "name": _0x217d29?.["name"],
            "finish_times": Number(_0x217d29?.["finish_times"]),
            "frequency": Number(_0x217d29?.["frequency"]),
            "integral": _0x217d29?.["integral"],
            "member_task_type": _0x217d29?.["member_task_type"]
          };
        });
        if (_0x20dc7f?.["data"]?.["daily_sign_info"]?.["name"]?.["includes"]("签到")) {
          let _0xc9666d = _0x20dc7f?.["data"]?.["daily_sign_info"]?.["daily_sign_list"]?.["find"](_0x2426a7 => _0x2426a7?.["current"])?.["signed"];
          this.jobList.push({
            "name": "每日签到",
            "finish_times": _0xc9666d ? 1 : 0,
            "frequency": 1
          });
        }
        _0xe58079("账号[" + this.index + "],获取任务列表成功 😄 :");
        await _0x1c911a(0.3);
        let _0xaed3c4 = "";
        await _0x1c911a(0.2 + Math.random() * 1);
        for (let _0xf0af2 = 0; _0xf0af2 < this.jobList.length; _0xf0af2++) {
          _0xaed3c4 += this.jobList[_0xf0af2].name + "[" + this.jobList[_0xf0af2].finish_times + "/" + this.jobList[_0xf0af2].frequency + "]\n";
        }
        await _0x1c911a(0.3);
        _0xe58079(_0xaed3c4);
      } else _0xe58079("账号[" + this.index + "],获取任务列表:失败 🙁 了呢,原因：" + _0x20dc7f?.["message"]), console.log(_0x20dc7f);
    } catch (_0x3117af) {
      console.log(_0x3117af);
    }
  }
  async ["activity_login"](_0x35d89a) {
    try {
      let _0x94f078 = {
          "method": "POST",
          "url": "http://api.576tv.com/AppActive/Public/setAppLogin",
          "headers": {
            "Accept": " */*",
            "Origin": " http://api.576tv.com",
            "X-Requested-With": " XMLHttpRequest",
            "User-Agent": " Mozilla/5.0 (Linux; Android 9; PBBM00 Build/PPR1.180610.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/70.0.3538.110 Mobile Safari/537.36;xsb_wangchao;xsb_wangchao;5.3.1;native_app",
            "Content-Type": " application/x-www-form-urlencoded; charset=UTF-8"
          },
          "body": "uuid=tzmxc&cookie=0&accountId=" + this.accountId + "&sessionId=" + this.sessionId
        },
        _0x430bf2 = await _0x209cd(_0x94f078, _0x35d89a, true),
        _0x13da06 = _0x430bf2?.["body"];
      if (_0x13da06.status == 1) this.authCookie = _0x430bf2?.["rawHeaders"]?.["filter"](_0x52e024 => _0x52e024?.["includes"]("path=/"))?.["join"](";"), _0xe58079("账号[" + this.index + "],授权活动成功 😄"), await this.activity_vote("投票");else {
        _0xe58079("账号[" + this.index + "],授权活动:失败 🙁 了呢,原因：" + JSON.stringify(_0x13da06));
      }
    } catch (_0x2d1f22) {
      console.log(_0x2d1f22);
    }
  }
  async ["activity_vote"](_0x44df0d) {
    try {
      let _0x3e9c51 = {
          "method": "POST",
          "url": "http://api.576tv.com/AppActive/Vote/postVote",
          "headers": {
            "Accept": " */*",
            "Origin": " http://api.576tv.com",
            "X-Requested-With": " XMLHttpRequest",
            "User-Agent": " Mozilla/5.0 (Linux; Android 9; PBBM00 Build/PPR1.180610.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/70.0.3538.110 Mobile Safari/537.36;xsb_wangchao;xsb_wangchao;5.3.1;native_app",
            "Content-Type": " application/x-www-form-urlencoded; charset=UTF-8",
            "Cookie": this.authCookie
          },
          "body": "uuid=tzmxc&voteids=10461%2C10455%2C10476%2C10448%2C10456"
        },
        _0x4ebc90 = await _0x209cd(_0x3e9c51, _0x44df0d);
      _0x4ebc90.status == 1 ? (_0xe58079("账号[" + this.index + "],投票成功 😄"), await this.activity_draw("抽奖")) : (_0xe58079("账号[" + this.index + "],投票:失败 🙁 了呢,原因：" + _0x4ebc90?.["info"]), await this.activity_get_prize("读取奖品"));
    } catch (_0x31ac3e) {
      console.log(_0x31ac3e);
    }
  }
  async ["activity_draw"](_0x59187f) {
    try {
      let _0x1def66 = {
          "method": "POST",
          "url": "http://api.576tv.com/AppActive/Prize/start",
          "headers": {
            "Accept": " */*",
            "Origin": " http://api.576tv.com",
            "X-Requested-With": " XMLHttpRequest",
            "User-Agent": " Mozilla/5.0 (Linux; Android 9; PBBM00 Build/PPR1.180610.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/70.0.3538.110 Mobile Safari/537.36;xsb_wangchao;xsb_wangchao;5.3.1;native_app",
            "Content-Type": " application/x-www-form-urlencoded; charset=UTF-8",
            "Cookie": this.authCookie
          },
          "body": "uuid=tzmxc"
        },
        _0xe067e = await _0x209cd(_0x1def66, _0x59187f);
      if (_0xe067e.status == 1) _0xe58079("账号[" + this.index + "],抽奖成功 😄：" + JSON.stringify(_0xe067e));else {
        _0xe58079("账号[" + this.index + "],抽奖失败 🙁 了呢,原因：" + _0xe067e?.["info"]);
      }
      await this.activity_get_prize("读取奖品");
    } catch (_0x2ed4fb) {
      console.log(_0x2ed4fb);
    }
  }
  async ["activity_get_prize"](_0x54259d) {
    try {
      let _0x290639 = {
          "method": "POST",
          "url": "http://api.576tv.com/AppActive/Prize/getPrize",
          "headers": {
            "Accept": " */*",
            "Origin": " http://api.576tv.com",
            "X-Requested-With": " XMLHttpRequest",
            "User-Agent": " Mozilla/5.0 (Linux; Android 9; PBBM00 Build/PPR1.180610.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/70.0.3538.110 Mobile Safari/537.36;xsb_wangchao;xsb_wangchao;5.3.1;native_app",
            "Content-Type": " application/x-www-form-urlencoded; charset=UTF-8",
            "Cookie": this.authCookie
          },
          "body": "uuid=tzmxc"
        },
        _0x187919 = await _0x209cd(_0x290639, _0x54259d);
      if (_0x187919.status == 1) {
        let _0x43ba6f = "";
        for (let _0x3830ab = 0; _0x3830ab < _0x187919?.["data"]?.["length"]; _0x3830ab++) {
          const _0x365f94 = _0x187919?.["data"][_0x3830ab];
          _0x43ba6f += "\n奖品名称：" + _0x365f94?.["title"] + "----" + (_0x365f94?.["url"] || _0x365f94?.["time"]) + "----" + (_0x365f94?.["valid"] === "1" ? "未领取" : "已领取") + "----全部信息：" + JSON.stringify(_0x365f94);
        }
        _0xe58079("账号[" + this.index + "],读取奖品成功 😄：" + (_0x43ba6f || JSON.stringify(_0x187919?.["data"])));
      } else _0xe58079("账号[" + this.index + "],读取中奖记录失败 🙁 了呢,原因：" + _0x187919?.["info"]);
    } catch (_0x205c33) {
      console.log(_0x205c33);
    }
  }
  async ["task_sign"](_0xe0c737) {
    let _0x5b2991 = "/api/user_mumber/sign",
      _0x11335b = _0x15e580.guid(),
      _0x37d3e6 = _0x15e580.ts13(),
      _0x13e573 = _0x5b2991 + "&&" + this.sessionId + "&&" + _0x11335b + "&&" + _0x37d3e6 + "&&" + this.key + "&&" + _0x5e029a,
      _0x592fe9 = _0x15e580.SHA256_Encrypt(_0x13e573);
    try {
      let _0xfd21e3 = {
          "method": "GET",
          "url": "" + this.hostname + _0x5b2991,
          "headers": {
            "X-SESSION-ID": "" + this.sessionId,
            "X-REQUEST-ID": _0x11335b,
            "X-TIMESTAMP": _0x37d3e6,
            "X-SIGNATURE": _0x592fe9,
            "X-TENANT-ID": _0x5e029a,
            "User-Agent": _0x3fc1b6,
            "Cache-Control": "no-cache",
            "Host": this.host,
            "Connection": "Keep-Alive",
            "X-ACCOUNT-ID": this.accountId
          }
        },
        _0x42788f = await _0x209cd(_0xfd21e3, _0xe0c737);
      if (_0x42788f.code == 0) {
        _0xe58079("账号[" + this.index + "],签到成功 😄 [" + _0x42788f.data.signCommonInfo.date + "],获得积分:[" + _0x42788f.data.signExperience + "]");
      } else _0xe58079("账号[" + this.index + "],签到:失败 🙁 了呢,原因：" + _0x42788f?.["message"]), console.log(_0x42788f);
    } catch (_0x36aa50) {
      console.log(_0x36aa50);
    }
  }
  async ["task_forum_info"](_0x3528ef) {
    let _0x13e552 = "/api/forum/forum_list",
      _0x31c284 = _0x15e580.guid(),
      _0x356afd = _0x15e580.ts13(),
      _0x456340 = _0x13e552 + "&&" + this.sessionId + "&&" + _0x31c284 + "&&" + _0x356afd + "&&" + this.key + "&&" + _0x5e029a,
      _0x3f3f6d = _0x15e580.SHA256_Encrypt(_0x456340);
    try {
      let _0x4b010c = {
          "method": "GET",
          "url": "" + this.hostname + _0x13e552 + ("?tenantId=" + _0x5e029a),
          "headers": {
            "X-SESSION-ID": "" + this.sessionId,
            "X-REQUEST-ID": _0x31c284,
            "X-TIMESTAMP": _0x356afd,
            "X-SIGNATURE": _0x3f3f6d,
            "X-TENANT-ID": _0x5e029a,
            "User-Agent": _0x3fc1b6,
            "Cache-Control": "no-cache",
            "Host": this.host,
            "Connection": "Keep-Alive",
            "X-ACCOUNT-ID": this.accountId
          }
        },
        _0x26ec62 = await _0x209cd(_0x4b010c, _0x3528ef);
      if (_0x26ec62.code == 0) {
        const _0x32fc07 = _0x26ec62?.["data"]?.["forum_list"]?.["length"] ? _0x26ec62?.["data"]?.["forum_list"][0]?.["id"] : undefined;
        _0x32fc07 ? (_0xe58079("账号[" + this.index + "],获取社区信息成功 😄 ，准备开始获取相关列表"), await this.task_forum_list(_0x32fc07)) : _0xe58079("账号[" + this.index + "],获取社区为空 🙁 ，跳过社区任务");
      } else _0xe58079("账号[" + this.index + "],获取社区信息:失败 🙁 了呢,原因：" + _0x26ec62?.["message"]), console.log(_0x26ec62);
    } catch (_0x324704) {
      console.log(_0x324704);
    }
  }
  async ["task_forum_list"](_0x4e89fa) {
    let _0x5e39f1 = "/api/forum/thread_list",
      _0x20da45 = _0x15e580.guid(),
      _0x1df200 = _0x15e580.ts13(),
      _0x2e557c = _0x5e39f1 + "&&" + this.sessionId + "&&" + _0x20da45 + "&&" + _0x1df200 + "&&" + this.key + "&&" + _0x5e029a,
      _0x41fe70 = _0x15e580.SHA256_Encrypt(_0x2e557c);
    try {
      let _0x4a5e83 = {
          "method": "GET",
          "url": "" + this.hostname + _0x5e39f1 + ("?forum_id=" + _0x4e89fa),
          "headers": {
            "X-SESSION-ID": "" + this.sessionId,
            "X-REQUEST-ID": _0x20da45,
            "X-TIMESTAMP": _0x1df200,
            "X-SIGNATURE": _0x41fe70,
            "X-TENANT-ID": _0x5e029a,
            "User-Agent": _0x3fc1b6,
            "Cache-Control": "no-cache",
            "Host": this.host,
            "Connection": "Keep-Alive",
            "X-ACCOUNT-ID": this.accountId
          }
        },
        _0x56bb30 = await _0x209cd(_0x4a5e83, "获取帖子");
      if (_0x56bb30.code == 0) {
        for (let _0x325011 = 0; _0x325011 < _0x56bb30.data.thread_list?.["length"]; _0x325011++) {
          if (!this?.["jobList"]?.["find"](_0x44429d => {
            return _0x44429d?.["name"]?.["includes"]("帖子发布") && _0x44429d?.["frequency"] > _0x44429d?.["finish_times"] && _0xa348c || _0x44429d?.["name"]?.["includes"]("帖子点赞") && _0x44429d?.["frequency"] > _0x44429d?.["finish_times"];
          })) {
            _0xe58079("账号[" + this.index + "],社区任务已完成，跳过-----");
            break;
          }
          _0xe58079("账号[" + this.index + "],对帖子[" + _0x56bb30.data.thread_list[_0x325011].id + "]操作-----");
          await _0x1c911a(0.3 + Math.random() * 1);
          if (this?.["jobList"]?.["find"](_0x3236ab => {
            return _0x3236ab?.["name"]?.["includes"]("帖子点赞") && _0x3236ab?.["frequency"] > _0x3236ab?.["finish_times"];
          })) {
            if (_0x56bb30.data.thread_list[_0x325011].already_liked) {
              _0xe58079("账号[" + this.index + "],之前已经对帖子[" + _0x56bb30.data.thread_list[_0x325011].id + "]点赞过，不能再次点赞");
            } else await this.task_forum_like(_0x56bb30.data.thread_list[_0x325011].id);
            await _0x1c911a(1 + Math.random() * 1);
          } else _0xe58079("账号[" + this.index + "],无需对帖子点赞");
          this?.["jobList"]?.["find"](_0x466245 => {
            return _0x466245?.["name"]?.["includes"]("帖子发布") && _0x466245?.["frequency"] > _0x466245?.["finish_times"] && _0xa348c;
          }) ? (await this.task_forum_post(_0x4e89fa), await _0x1c911a(1 + Math.random() * 1)) : _0xe58079("账号[" + this.index + "],无需发布帖子，可能是 已执行完毕该任务，或者 未开启该任务");
        }
      } else _0xe58079("账号[" + this.index + "],获取社区帖子:失败 🙁 了呢,原因：" + _0x56bb30?.["message"]), console.log(_0x56bb30);
    } catch (_0x3c3e50) {
      console.log(_0x3c3e50);
    }
  }
  async ["task_forum_like"](_0x27080f) {
    let _0x2e29f8 = "/api/forum/like",
      _0x1c92c7 = _0x15e580.guid(),
      _0x535de8 = _0x15e580.ts13(),
      _0x282472 = _0x2e29f8 + "&&" + this.sessionId + "&&" + _0x1c92c7 + "&&" + _0x535de8 + "&&" + this.key + "&&" + _0x5e029a,
      _0x41826f = _0x15e580.SHA256_Encrypt(_0x282472);
    try {
      let _0x214cae = _0x123af8();
      _0x214cae.append("target_type", "1");
      _0x214cae.append("target_id", _0x27080f);
      let _0xbbbcc1 = {
        "method": "POST",
        "url": "" + this.hostname + _0x2e29f8,
        "headers": {
          "X-SESSION-ID": "" + this.sessionId,
          "X-REQUEST-ID": _0x1c92c7,
          "X-TIMESTAMP": _0x535de8,
          "X-SIGNATURE": _0x41826f,
          "X-TENANT-ID": _0x5e029a,
          "User-Agent": _0x3fc1b6,
          "Cache-Control": "no-cache",
          "Content-Type": "multipart/form-data; boundary=----WebKitFormBoundaryTDSOjpwy3A5ypRAo",
          "Host": this.host,
          "Connection": "Keep-Alive",
          "Accept": "*/*",
          "X-ACCOUNT-ID": this.accountId
        },
        "body": _0x214cae
      };
      _0xbbbcc1.headers["Content-Type"] = "multipart/form-data; boundary=" + _0x214cae.getBoundary();
      let _0x5e9061 = await _0x209cd(_0xbbbcc1, "点赞帖子");
      if (_0x5e9061.code == 0) {
        const _0x32ad94 = this?.["jobList"]?.["find"](_0x35c7c7 => {
          return _0x35c7c7?.["name"]?.["includes"]("帖子点赞") && _0x35c7c7?.["frequency"] > _0x35c7c7?.["finish_times"];
        });
        _0x32ad94.finish_times++;
        _0xe58079("账号[" + this.index + "],点赞帖子成功 😄 :[" + _0x27080f + "]");
      } else _0xe58079("账号[" + this.index + "],点赞帖子:失败 🙁 了呢,原因：" + _0x5e9061?.["message"]), console.log(_0x5e9061);
    } catch (_0x589045) {
      console.log(_0x589045);
    }
  }
  async ["task_forum_post"](_0x46defe) {
    let _0x457a11 = "/api/forum/post_thread",
      _0x492adb = _0x15e580.guid(),
      _0x1e2b32 = _0x15e580.ts13(),
      _0x3c0e21 = _0x457a11 + "&&" + this.sessionId + "&&" + _0x492adb + "&&" + _0x1e2b32 + "&&" + this.key + "&&" + _0x5e029a,
      _0x2e9aba = _0x15e580.SHA256_Encrypt(_0x3c0e21);
    try {
      let _0x193eaf = _0x123af8();
      _0x193eaf.append("forum_id", _0x46defe);
      _0x193eaf.append("title", "签到");
      _0x193eaf.append("content", "今日打卡");
      _0x193eaf.append("attachments", "");
      _0x193eaf.append("location_name", "{}");
      let _0x5bc181 = {
        "method": "POST",
        "url": "" + this.hostname + _0x457a11,
        "headers": {
          "X-SESSION-ID": "" + this.sessionId,
          "X-REQUEST-ID": _0x492adb,
          "X-TIMESTAMP": _0x1e2b32,
          "X-SIGNATURE": _0x2e9aba,
          "X-TENANT-ID": _0x5e029a,
          "User-Agent": _0x3fc1b6,
          "Cache-Control": "no-cache",
          "Content-Type": "multipart/form-data; boundary=----WebKitFormBoundaryMdIuuLGEa01BfEzM",
          "Host": this.host,
          "Connection": "Keep-Alive",
          "Accept": "*/*",
          "X-ACCOUNT-ID": this.accountId
        },
        "body": _0x193eaf
      };
      _0x5bc181.headers["Content-Type"] = "multipart/form-data; boundary=" + _0x193eaf.getBoundary();
      let _0x1efa3d = await _0x209cd(_0x5bc181, "发布帖子");
      if (_0x1efa3d.code == 0) {
        const _0x4db1e8 = this?.["jobList"]?.["find"](_0x489d92 => {
          return _0x489d92?.["name"]?.["includes"]("帖子发布") && _0x489d92?.["frequency"] > _0x489d92?.["finish_times"];
        });
        _0x4db1e8.finish_times++;
        _0xe58079("账号[" + this.index + "],发布帖子成功 😄 :[" + _0x46defe + "]");
        await this.deleteForumPost(_0x1efa3d?.["data"]?.["thread_id"]);
      } else {
        _0xe58079("账号[" + this.index + "],发布帖子:失败 🙁 了呢,原因：" + _0x1efa3d?.["message"]);
        console.log(_0x1efa3d);
      }
    } catch (_0x36fa07) {
      console.log(_0x36fa07);
    }
  }
  async ["deleteForumPost"](_0x3d07bf) {
    let _0x345043 = "/api/forum/delete_thread",
      _0x2f4938 = _0x15e580.guid(),
      _0x501e69 = _0x15e580.ts13(),
      _0x5e425b = _0x345043 + "&&" + this.sessionId + "&&" + _0x2f4938 + "&&" + _0x501e69 + "&&" + this.key + "&&" + _0x5e029a,
      _0x205eb3 = _0x15e580.SHA256_Encrypt(_0x5e425b);
    try {
      let _0x7b17df = _0x123af8();
      _0x7b17df.append("thread_id", _0x3d07bf);
      let _0x432c84 = {
        "method": "POST",
        "url": "" + this.hostname + _0x345043,
        "headers": {
          "X-SESSION-ID": "" + this.sessionId,
          "X-REQUEST-ID": _0x2f4938,
          "X-TIMESTAMP": _0x501e69,
          "X-SIGNATURE": _0x205eb3,
          "X-TENANT-ID": _0x5e029a,
          "User-Agent": _0x3fc1b6,
          "Cache-Control": "no-cache",
          "Content-Type": "multipart/form-data; boundary=----WebKitFormBoundaryi1cQvxsAzoTagcpx",
          "Host": this.host,
          "Connection": "Keep-Alive",
          "Accept": "*/*",
          "X-ACCOUNT-ID": this.accountId
        },
        "body": _0x7b17df
      };
      _0x432c84.headers["Content-Type"] = "multipart/form-data; boundary=" + _0x7b17df.getBoundary();
      let _0x12383a = await _0x209cd(_0x432c84, "删除帖子");
      _0x12383a.code == 0 ? _0xe58079("账号[" + this.index + "],删除帖子成功 😄 :[" + _0x3d07bf + "]") : (_0xe58079("账号[" + this.index + "],删除帖子:失败 🙁 了呢,原因：" + _0x12383a?.["message"]), console.log(_0x12383a));
    } catch (_0x239638) {
      console.log(_0x239638);
    }
  }
  async ["task_articlelist"](_0x69942f) {
    let _0x3b3b18 = "/api/article/channel_list",
      _0xe5ac69 = _0x15e580.guid(),
      _0x4e2fe8 = _0x15e580.ts13(),
      _0x5c439f = _0x3b3b18 + "&&" + this.sessionId + "&&" + _0xe5ac69 + "&&" + _0x4e2fe8 + "&&" + this.key + "&&" + _0x5e029a,
      _0x5a1bc0 = _0x15e580.SHA256_Encrypt(_0x5c439f);
    try {
      let _0x3ddee3 = {
          "method": "GET",
          "url": "" + this.hostname + _0x3b3b18 + ("?channel_id=" + this.artlistdata + "&isDiangHao=false&is_new=" + (Math.random() >= 0.5) + "&list_count=" + Math.floor(Math.random() * 10) + "&size=10"),
          "headers": {
            "X-SESSION-ID": "" + this.sessionId,
            "X-REQUEST-ID": _0xe5ac69,
            "X-TIMESTAMP": _0x4e2fe8,
            "X-SIGNATURE": _0x5a1bc0,
            "X-TENANT-ID": _0x5e029a,
            "User-Agent": _0x3fc1b6,
            "Cache-Control": "no-cache",
            "Host": this.host,
            "Connection": "Keep-Alive",
            "X-ACCOUNT-ID": this.accountId
          }
        },
        _0x2c1409 = await _0x209cd(_0x3ddee3, _0x69942f);
      if (_0x2c1409.code == 0) {
        let _0x1dabdc = false;
        for (let _0x44a8b9 = 0; _0x44a8b9 < _0x2c1409.data.article_list?.["length"]; _0x44a8b9++) {
          if (!this?.["jobList"]?.["find"](_0x58f4cf => {
            return _0x58f4cf?.["name"]?.["includes"]("资讯评论") && _0x58f4cf?.["frequency"] > _0x58f4cf?.["finish_times"] && _0x30ed9d || _0x58f4cf?.["name"]?.["includes"]("分享资讯") && _0x58f4cf?.["frequency"] > _0x58f4cf?.["finish_times"] || _0x58f4cf?.["name"]?.["includes"]("资讯点赞") && _0x58f4cf?.["frequency"] > _0x58f4cf?.["finish_times"] || _0x58f4cf?.["name"]?.["includes"]("资讯阅读") && _0x58f4cf?.["frequency"] > _0x58f4cf?.["finish_times"];
          })) {
            _0xe58079("账号[" + this.index + "],文章任务已完成，跳过后续文章-----");
            break;
          }
          await this.task_comment_pre();
          await _0x1c911a(1 + Math.random() * 1);
          _0xe58079("账号[" + this.index + "],对 第" + (_0x44a8b9 + 1) + "篇 文章[" + _0x2c1409.data.article_list[_0x44a8b9].id + "]操作-----");
          let _0x3555f4 = _0x2c1409.data.article_list[_0x44a8b9].id;
          await this.task_read(_0x3555f4);
          await _0x1c911a(1 + Math.random() * 1);
          if (this?.["jobList"]?.["find"](_0x591836 => {
            return _0x591836?.["name"]?.["includes"]("资讯点赞") && _0x591836?.["frequency"] > _0x591836?.["finish_times"];
          })) {
            if (_0x2c1409.data.article_list[_0x44a8b9].liked) _0xe58079("账号[" + this.index + "],之前已经对资讯[" + _0x3555f4 + "]点赞过，不能再次点赞");else !_0x2c1409.data.article_list[_0x44a8b9].like_enabled && !_0x5b4ed0 ? _0xe58079("账号[" + this.index + "],资讯[" + _0x3555f4 + "]未开启点赞功能，无法进行点赞") : await this.task_like(_0x3555f4);
            await _0x1c911a(1 + Math.random() * 1);
          }
          if (!_0x1dabdc) {
            if (_0x30ed9d && !this.commentError && this?.["jobList"]?.["find"](_0x12da06 => {
              return _0x12da06?.["name"]?.["includes"]("资讯评论") && _0x12da06?.["frequency"] > _0x12da06?.["finish_times"];
            })) {
              await this.task_comment(_0x3555f4);
              await _0x1c911a(2 + Math.random() * 1);
            } else this.commentError && (_0xe58079("账号[" + this.index + "],评论文章遇见了一些问题 🙁 ，暂无解决方法，即将跳过后续评论，如果您有解决方法，欢迎提供，错误信息：该篇新闻不支持评论【评论失败，请重新进入当前页面！】"), _0x1dabdc = true);
          } else {
            if (!this?.["jobList"]?.["find"](_0x4932da => {
              return _0x4932da?.["name"]?.["includes"]("分享资讯") && _0x4932da?.["frequency"] > _0x4932da?.["finish_times"] || _0x4932da?.["name"]?.["includes"]("资讯点赞") && _0x4932da?.["frequency"] > _0x4932da?.["finish_times"] || _0x4932da?.["name"]?.["includes"]("资讯阅读") && _0x4932da?.["frequency"] > _0x4932da?.["finish_times"];
            })) {
              break;
            }
          }
          this?.["jobList"]?.["find"](_0x4caa71 => {
            return _0x4caa71?.["name"]?.["includes"]("分享资讯") && _0x4caa71?.["frequency"] > _0x4caa71?.["finish_times"];
          }) && (!_0x2c1409.data.article_list[_0x44a8b9].share_enabled && !_0x5b4ed0 ? _0xe58079("账号[" + this.index + "],文章[" + _0x3555f4 + "]未开启分享功能，无法进行分享") : await this.task_share("3", _0x3555f4, "分享"));
        }
      } else _0xe58079("账号[" + this.index + "],获取文章:失败 🙁 了呢,原因：" + _0x2c1409?.["message"]), console.log(_0x2c1409);
    } catch (_0x253954) {
      console.log(_0x253954);
    }
  }
  async ["get_comment_history"](_0x26b388) {
    let _0x290b28 = "/api/account_comment/comment_list",
      _0x44d7b1 = _0x15e580.guid(),
      _0x118867 = _0x15e580.ts13(),
      _0x1cbfac = _0x290b28 + "&&" + this.sessionId + "&&" + _0x44d7b1 + "&&" + _0x118867 + "&&" + this.key + "&&" + _0x5e029a,
      _0x4d7b8c = _0x15e580.SHA256_Encrypt(_0x1cbfac);
    try {
      let _0x3ab34d = {
          "method": "GET",
          "url": "" + this.hostname + _0x290b28 + "?size=999",
          "headers": {
            "X-SESSION-ID": "" + this.sessionId,
            "X-REQUEST-ID": _0x44d7b1,
            "X-TIMESTAMP": _0x118867,
            "X-SIGNATURE": _0x4d7b8c,
            "X-TENANT-ID": _0x5e029a,
            "User-Agent": _0x3fc1b6,
            "Cache-Control": "no-cache",
            "Host": this.host,
            "Connection": "Keep-Alive",
            "X-ACCOUNT-ID": this.accountId
          }
        },
        _0x5a5b35 = await _0x209cd(_0x3ab34d, _0x26b388);
      if (_0x5a5b35.code == 0) {
        let _0x3fd34e = _0x5a5b35.data.comment_list?.["length"];
        for (let _0x2ce792 = 0; _0x2ce792 < _0x5a5b35.data.comment_list?.["length"]; _0x2ce792++) {
          _0xe58079("账号[" + this.index + "],对 第" + (_0x2ce792 + 1) + "个 评论[" + _0x5a5b35.data.comment_list[_0x2ce792].id + "]删除，删除总数量：" + _0x5a5b35.data.comment_list?.["length"] + "，待删除：" + _0x3fd34e + " 条-----");
          let _0x210166 = _0x5a5b35.data.comment_list[_0x2ce792].id;
          await this.deleteComment(_0x210166);
          _0x3fd34e--;
          await _0x1c911a(1 + Math.random() * 1);
        }
      } else _0xe58079("账号[" + this.index + "],删除评论:失败 🙁 了呢,原因：" + _0x5a5b35?.["message"]), console.log(_0x5a5b35);
    } catch (_0x3c74b4) {
      console.log(_0x3c74b4);
    }
  }
  async ["task_read"](_0x2f0662) {
    let _0x1a6ddd = "/api/article/detail",
      _0x580c5c = _0x15e580.guid(),
      _0x44cbed = _0x15e580.ts13(),
      _0x4c5d19 = _0x1a6ddd + "&&" + this.sessionId + "&&" + _0x580c5c + "&&" + _0x44cbed + "&&" + this.key + "&&" + _0x5e029a,
      _0x22df69 = _0x15e580.SHA256_Encrypt(_0x4c5d19);
    try {
      let _0x55eff0 = {
          "method": "GET",
          "url": "" + this.hostname + _0x1a6ddd + "?id=" + _0x2f0662,
          "headers": {
            "X-SESSION-ID": "" + this.sessionId,
            "X-REQUEST-ID": _0x580c5c,
            "X-TIMESTAMP": _0x44cbed,
            "X-SIGNATURE": _0x22df69,
            "X-TENANT-ID": _0x5e029a,
            "User-Agent": _0x3fc1b6,
            "Cache-Control": "no-cache",
            "Host": this.host,
            "Connection": "Keep-Alive",
            "X-ACCOUNT-ID": this.accountId
          }
        },
        _0xc6e1ca = await _0x209cd(_0x55eff0, "阅读文章");
      if (_0xc6e1ca.code == 0) {
        const _0x3516f5 = this?.["jobList"]?.["find"](_0x412a35 => {
          return _0x412a35?.["name"]?.["includes"]("资讯阅读") && _0x412a35?.["frequency"] > _0x412a35?.["finish_times"];
        });
        _0x3516f5 && _0x3516f5.finish_times++;
        _0xe58079("账号[" + this.index + "],阅读文章成功 😄 :[" + _0xc6e1ca.data.article.id + "]");
      } else _0xe58079("账号[" + this.index + "],阅读文章:失败 🙁 了呢,原因：" + _0xc6e1ca?.["message"]);
    } catch (_0x5543b2) {
      console.log(_0x5543b2);
    }
  }
  async ["task_like"](_0x440320) {
    let _0x50cb93 = "/api/favorite/like",
      _0x3a25cf = _0x15e580.guid(),
      _0x436c96 = _0x15e580.ts13(),
      _0x1a9338 = _0x50cb93 + "&&" + this.sessionId + "&&" + _0x3a25cf + "&&" + _0x436c96 + "&&" + this.key + "&&" + _0x5e029a,
      _0x63339 = _0x15e580.SHA256_Encrypt(_0x1a9338);
    try {
      let _0x36ef83 = {
          "method": "POST",
          "url": "" + this.hostname + _0x50cb93,
          "headers": {
            "X-SESSION-ID": "" + this.sessionId,
            "X-REQUEST-ID": _0x3a25cf,
            "X-TIMESTAMP": _0x436c96,
            "X-SIGNATURE": _0x63339,
            "X-TENANT-ID": _0x5e029a,
            "User-Agent": _0x3fc1b6,
            "Cache-Control": "no-cache",
            "Content-Type": "application/x-www-form-urlencoded",
            "Host": this.host,
            "Connection": "Keep-Alive",
            "X-ACCOUNT-ID": this.accountId
          },
          "form": {
            "action": "true",
            "id": _0x440320
          }
        },
        _0x4b9f63 = await _0x209cd(_0x36ef83, "点赞文章");
      if (_0x4b9f63.code == 0) {
        const _0x1744ff = this?.["jobList"]?.["find"](_0x1ebfc2 => {
          return _0x1ebfc2?.["name"]?.["includes"]("资讯点赞") && _0x1ebfc2?.["frequency"] > _0x1ebfc2?.["finish_times"];
        });
        _0x1744ff.finish_times++;
        _0xe58079("账号[" + this.index + "],点赞文章成功 😄 :[" + _0x440320 + "]");
      } else _0xe58079("账号[" + this.index + "],用户查询:失败 🙁 了呢,原因：" + _0x4b9f63?.["message"]), console.log(_0x4b9f63);
    } catch (_0x9ffa7) {
      console.log(_0x9ffa7);
    }
  }
  async ["RSA_Encrypt"](_0x2ab5fc) {
    const _0x2047c0 = "-----BEGIN PUBLIC KEY-----\nMIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQD6XO7e9YeAOs+cFqwa7ETJ+WXizPqQeXv68i5vqw9pFREsrqiBTRcg7wB0RIp3rJkDpaeVJLsZqYm5TW7FWx/iOiXFc+zCPvaKZric2dXCw27EvlH5rq+zwIPDAJHGAfnn1nmQH7wR3PCatEIb8pz5GFlTHMlluw4ZYmnOwg+thwIDAQAB\n-----END PUBLIC KEY-----",
      _0xd1b233 = _0x15e580.RSA_Encrypt(_0x2ab5fc, _0x2047c0);
    return _0xd1b233;
  }
  async ["loginByCode"](_0x26e3af, _0x2aaabb) {
    try {
      let _0x84233d = "/api/zbtxz/login",
        _0x267bce = _0x15e580.guid(),
        _0x29f5b0 = _0x15e580.ts13(),
        _0xdacf56 = _0x84233d + "&&" + (this.sessionId || _0x26e3af) + "&&" + _0x267bce + "&&" + _0x29f5b0 + "&&" + this.key + "&&" + _0x5e029a,
        _0x28829e = _0x15e580.SHA256_Encrypt(_0xdacf56),
        _0x21e477 = {
          "method": "POST",
          "url": "" + this.hostname + _0x84233d,
          "headers": {
            "X-SESSION-ID": "" + (this.sessionId || _0x26e3af),
            "X-REQUEST-ID": _0x267bce,
            "X-TIMESTAMP": _0x29f5b0,
            "X-SIGNATURE": _0x28829e,
            "X-TENANT-ID": _0x5e029a,
            "User-Agent": _0x3fc1b6,
            "Cache-Control": "no-cache",
            "Content-Type": "application/x-www-form-urlencoded",
            "Host": this.host,
            "Connection": "Keep-Alive"
          },
          "form": "code=" + _0x2aaabb
        },
        _0x41df07 = await _0x209cd(_0x21e477, "取Token");
      if (_0x41df07.code == 0) {
        this.valid = true;
        this.sessionId = _0x41df07.data.session.id;
        this.accountId = _0x41df07.data.session.account || _0x41df07.data.session.account_id;
        _0x94e03c(_0x230d1c + "_config", this.account, JSON.stringify({
          "id": this.accountId,
          "sessionId": this.sessionId
        }));
        _0xe58079("账号[" + this.index + "],取Token成功 😄 ");
      } else this.valid = false, _0xe58079("账号[" + this.index + "],取Token:失败 🙁 了呢,原因：" + _0x41df07?.["message"]), console.log(_0x41df07);
    } catch (_0xd55ff) {
      console.log(_0xd55ff);
    }
  }
  async ["loginInit"](_0x4b043e) {
    try {
      const _0x51483b = "";
      let _0x8b4811 = "/api/account/init",
        _0x55374a = _0x15e580.guid(),
        _0x1a1f37 = _0x15e580.ts13(),
        _0x4c6867 = _0x8b4811 + "&&" + _0x55374a + "&&" + _0x1a1f37 + "&&" + this.key + "&&" + _0x5e029a,
        _0x5d1564 = _0x15e580.SHA256_Encrypt(_0x4c6867),
        _0xf41313 = {
          "method": "POST",
          "url": "" + this.hostname + _0x8b4811,
          "headers": {
            "User-Agent": _0x3fc1b6,
            "Cache-Control": "no-cache",
            "Content-Type": "application/x-www-form-urlencoded",
            "Host": this.host,
            "Connection": "Keep-Alive",
            "X-SIGNATURE": _0x5d1564,
            "X-REQUEST-ID": _0x55374a,
            "Content-Length": _0x51483b?.["length"],
            "X-SESSION-ID": "",
            "X-TENANT-ID": _0x5e029a,
            "X-TIMESTAMP": _0x1a1f37
          },
          "form": _0x51483b
        };
      this.authCookie && (_0xf41313.headers.Cookie = this.authCookie);
      let _0x198d36 = await _0x209cd(_0xf41313, "登录初始化");
      _0x198d36.code == 0 ? (_0xe58079("账号[" + this.index + "],登录初始化成功 😄 "), _0x3dc985 = _0x198d36.data.session.id, await this.loginByCode(_0x198d36.data.session.id, _0x4b043e)) : (this.valid = false, _0xe58079("账号[" + this.index + "],登录初始化:失败 🙁 了呢,原因：" + _0x198d36?.["message"]));
    } catch (_0xbc278) {
      console.log(_0xbc278);
    }
  }
  async ["login"]() {
    let _0xcf6d9e = "/web/oauth/credential_auth",
      _0x2d8ece = _0x15e580.guid(),
      _0x2377c0 = _0x15e580.ts13(),
      _0x5297a6 = _0xcf6d9e + "&&" + _0x2d8ece + "&&" + _0x2377c0 + "&&" + this.key + "&&" + _0x5e029a,
      _0x555546 = _0x15e580.SHA256_Encrypt(_0x5297a6);
    try {
      let _0x3c2007 = {
        "method": "POST",
        "url": "https://passport.tmuyun.com/web/oauth/credential_auth",
        "headers": {
          "X-TIMESTAMP": _0x2377c0,
          "User-Agent": _0x3fc1b6,
          "Cache-Control": "no-cache",
          "Content-Type": "application/x-www-form-urlencoded",
          "Host": "passport.tmuyun.com",
          "Connection": "Keep-Alive",
          "X-SIGNATURE": _0x555546,
          "X-REQUEST-ID": _0x2d8ece
        },
        "form": "client_id=" + (_0x419c0f || "10001") + "&password=" + encodeURIComponent(await this.RSA_Encrypt(this.password)) + "&phone_number=" + this.account
      };
      this.authCookie && (_0x3c2007.headers.Cookie = this.authCookie);
      let _0x42413a = await _0x209cd(_0x3c2007, "登录");
      _0x42413a.code == 0 ? (_0xe58079("账号[" + this.index + "],登录成功 😄 "), !_0x3dc985 ? await this.loginInit(_0x42413a.data.authorization_code.code) : await this.loginByCode(_0x3dc985, _0x42413a.data.authorization_code.code)) : (this.valid = false, _0xe58079("账号[" + this.index + "],登录:失败 🙁 了呢,原因：" + _0x42413a?.["message"]), console.log(_0x42413a));
    } catch (_0x5c0891) {
      console.log(_0x5c0891);
    }
  }
  async ["app_start"]() {
    let _0x140c7b = "/api/app_start_page/list/new",
      _0x2e86e0 = _0x15e580.guid(),
      _0x311a55 = _0x15e580.ts13(),
      _0x20502c = _0x140c7b + "&&" + _0x3807d2 + "&&" + _0x2e86e0 + "&&" + _0x311a55 + "&&" + this.key + "&&" + _0x5e029a,
      _0x26ff43 = _0x15e580.SHA256_Encrypt(_0x20502c);
    try {
      let _0x329b54 = {
          "method": "GET",
          "url": "" + this.hostname + _0x140c7b + "?height=2206&width=1080",
          "headers": {
            "X-SESSION-ID": "" + _0x3807d2,
            "X-REQUEST-ID": _0x2e86e0,
            "X-TIMESTAMP": _0x311a55,
            "X-SIGNATURE": _0x26ff43,
            "X-TENANT-ID": _0x5e029a,
            "User-Agent": _0x3fc1b6,
            "Cache-Control": "no-cache",
            "Content-Type": "application/x-www-form-urlencoded",
            "Host": this.host,
            "Connection": "Keep-Alive",
            "X-ACCOUNT-ID": this.accountId
          }
        },
        _0x4dd126 = await _0x209cd(_0x329b54, "App启动中");
      _0x4dd126.code == 0 ? _0xe58079("账号[" + this.index + "],App启动成功 😄 ") : _0xe58079("账号[" + this.index + "],App启动:失败 🙁 了呢,原因：" + _0x4dd126?.["message"]);
    } catch (_0x45c2dc) {
      console.log(_0x45c2dc);
    }
  }
  async ["web_start"]() {
    let _0x125612 = "/web/init",
      _0x1a7f68 = _0x15e580.guid(),
      _0x503bbd = _0x15e580.ts13(),
      _0x2cbd69 = _0x125612 + "&&" + _0x3807d2 + "&&" + _0x1a7f68 + "&&" + _0x503bbd + "&&" + this.key + "&&" + _0x5e029a,
      _0x5c4d42 = _0x15e580.SHA256_Encrypt(_0x2cbd69);
    try {
      let _0x2eed27 = {
          "method": "GET",
          "url": "https://passport.tmuyun.com/web/init?client_id=" + _0x419c0f,
          "headers": {
            "X-SESSION-ID": "" + _0x3807d2,
            "X-REQUEST-ID": _0x1a7f68,
            "X-TIMESTAMP": _0x503bbd,
            "X-SIGNATURE": _0x5c4d42,
            "X-TENANT-ID": _0x5e029a,
            "User-Agent": _0x3fc1b6,
            "Cache-Control": "no-cache",
            "Content-Type": "application/x-www-form-urlencoded",
            "Host": "passport.tmuyun.com",
            "Connection": "Keep-Alive",
            "X-ACCOUNT-ID": this.accountId
          }
        },
        _0x3dbba3 = await _0x209cd(_0x2eed27, "Web初始化中", true),
        _0x715af7 = _0x3dbba3?.["body"];
      if (_0x715af7.code == 0) {
        let _0x29056f = _0x3dbba3?.["rawHeaders"]?.["find"](_0x407469 => _0x407469?.["includes"]("SESSION"));
        _0x29056f && (this.authCookie = _0x29056f);
        _0xe58079("账号[" + this.index + "],Web初始化成功 😄 ");
      } else {
        _0xe58079("账号[" + this.index + "],Web初始化:失败 🙁 了呢,原因：" + _0x715af7?.["message"]);
      }
    } catch (_0x21358a) {
      console.log(_0x21358a);
    }
  }
  async ["iframe_start"]() {
    let _0x159533 = "/api/bullet_frame/detail",
      _0x33b93e = _0x15e580.guid(),
      _0x2b5a01 = _0x15e580.ts13(),
      _0x27c68d = _0x159533 + "&&" + _0x3807d2 + "&&" + _0x33b93e + "&&" + _0x2b5a01 + "&&" + this.key + "&&" + _0x5e029a,
      _0x3d3093 = _0x15e580.SHA256_Encrypt(_0x27c68d);
    try {
      let _0x37d487 = {
          "method": "GET",
          "url": "" + this.hostname + _0x159533,
          "headers": {
            "X-SESSION-ID": "" + _0x3807d2,
            "X-REQUEST-ID": _0x33b93e,
            "X-TIMESTAMP": _0x2b5a01,
            "X-SIGNATURE": _0x3d3093,
            "X-TENANT-ID": _0x5e029a,
            "User-Agent": _0x3fc1b6,
            "Cache-Control": "no-cache",
            "Content-Type": "application/x-www-form-urlencoded",
            "Host": this.host,
            "Connection": "Keep-Alive",
            "X-ACCOUNT-ID": this.accountId
          }
        },
        _0x54c2c0 = await _0x209cd(_0x37d487, "启动WebView中");
      _0x54c2c0.code == 0 ? _0xe58079("账号[" + this.index + "],启动WebView成功 😄 ") : _0xe58079("账号[" + this.index + "],启动WebView:失败 🙁 了呢,原因：" + _0x54c2c0?.["message"]);
    } catch (_0x491f12) {
      console.log(_0x491f12);
    }
  }
  async ["get_app_version"]() {
    let _0x3e03a1 = "/api/app_version/detail",
      _0x3d7e28 = _0x15e580.guid(),
      _0x16dd07 = _0x15e580.ts13(),
      _0x3c6795 = _0x3e03a1 + "&&" + _0x3807d2 + "&&" + _0x3d7e28 + "&&" + _0x16dd07 + "&&" + this.key + "&&" + _0x5e029a,
      _0x7b5e13 = _0x15e580.SHA256_Encrypt(_0x3c6795);
    try {
      let _0x1d3d4c = {
          "method": "GET",
          "url": "" + this.hostname + _0x3e03a1,
          "headers": {
            "X-SESSION-ID": "" + _0x3807d2,
            "X-REQUEST-ID": _0x3d7e28,
            "X-TIMESTAMP": _0x16dd07,
            "X-SIGNATURE": _0x7b5e13,
            "X-TENANT-ID": _0x5e029a,
            "User-Agent": _0x3fc1b6,
            "Cache-Control": "no-cache",
            "Host": this.host,
            "Connection": "Keep-Alive"
          }
        },
        _0x4f7654 = await _0x209cd(_0x1d3d4c, "获取版本信息中");
      _0x4f7654.code == 0 ? _0xe58079("账号[" + this.index + "],获取版本信息成功 😄 ") : _0xe58079("账号[" + this.index + "],获取版本信息:失败 🙁 了呢,原因：" + _0x4f7654?.["message"]);
    } catch (_0x5b4dd4) {
      console.log(_0x5b4dd4);
    }
  }
  async ["config_get"]() {
    let _0x1bb2f3 = "/api/app_version_customize_config/mine",
      _0x16ae2f = _0x15e580.guid(),
      _0x112670 = _0x15e580.ts13(),
      _0x194804 = _0x1bb2f3 + "&&" + _0x3807d2 + "&&" + _0x16ae2f + "&&" + _0x112670 + "&&" + this.key + "&&" + _0x5e029a,
      _0x148b44 = _0x15e580.SHA256_Encrypt(_0x194804);
    try {
      let _0x1095b3 = {
          "method": "GET",
          "url": "" + this.hostname + _0x1bb2f3,
          "headers": {
            "X-SESSION-ID": "" + _0x3807d2,
            "X-REQUEST-ID": _0x16ae2f,
            "X-TIMESTAMP": _0x112670,
            "X-SIGNATURE": _0x148b44,
            "X-TENANT-ID": _0x5e029a,
            "User-Agent": _0x3fc1b6,
            "Cache-Control": "no-cache",
            "Host": this.host,
            "Connection": "Keep-Alive"
          }
        },
        _0x4f6746 = await _0x209cd(_0x1095b3, "获取App配置中");
      if (_0x4f6746.code == 0) _0xe58079("账号[" + this.index + "],获取App配置成功 😄 ");else {
        _0xe58079("账号[" + this.index + "],获取App配置:失败 🙁 了呢, 原因：" + _0x4f6746?.["message"]);
      }
    } catch (_0x4c1f4a) {
      console.log(_0x4c1f4a);
    }
  }
  async ["get_unread_msg"]() {
    let _0xcf557a = "/api/chuanbo/unread",
      _0x1830c9 = _0x15e580.guid(),
      _0x287d26 = _0x15e580.ts13(),
      _0x4e30ec = _0xcf557a + "&&" + this.sessionId + "&&" + _0x1830c9 + "&&" + _0x287d26 + "&&" + this.key + "&&" + _0x5e029a,
      _0x433fec = _0x15e580.SHA256_Encrypt(_0x4e30ec);
    try {
      let _0x3b9a6e = {
          "method": "GET",
          "url": "" + this.hostname + _0xcf557a,
          "headers": {
            "X-SESSION-ID": "" + this.sessionId,
            "X-REQUEST-ID": _0x1830c9,
            "X-TIMESTAMP": _0x287d26,
            "X-SIGNATURE": _0x433fec,
            "X-TENANT-ID": _0x5e029a,
            "User-Agent": _0x3fc1b6,
            "Cache-Control": "no-cache",
            "Content-Type": "application/x-www-form-urlencoded",
            "Host": this.host,
            "Connection": "Keep-Alive",
            "X-ACCOUNT-ID": this.accountId
          }
        },
        _0x23186b = await _0x209cd(_0x3b9a6e, "获取未读信息");
      _0x23186b.code == 0 ? _0xe58079("账号[" + this.index + "],获取未读信息成功 😄 ") : _0xe58079("账号[" + this.index + "],获取未读信息:失败 🙁 了呢,原因：" + _0x23186b?.["message"]);
    } catch (_0x574f1f) {
      console.log(_0x574f1f);
    }
  }
  async ["task_comment_pre"]() {
    let _0x1ae011 = "/api/app_feature_switch/list",
      _0x42bab1 = _0x15e580.guid(),
      _0x12c438 = _0x15e580.ts13(),
      _0x58e1b9 = _0x1ae011 + "&&" + this.sessionId + "&&" + _0x42bab1 + "&&" + _0x12c438 + "&&" + this.key + "&&" + _0x5e029a,
      _0x3f3d69 = _0x15e580.SHA256_Encrypt(_0x58e1b9);
    try {
      let _0x223f30 = {
          "method": "GET",
          "url": "" + this.hostname + _0x1ae011,
          "headers": {
            "X-SESSION-ID": "" + this.sessionId,
            "X-REQUEST-ID": _0x42bab1,
            "X-TIMESTAMP": _0x12c438,
            "X-SIGNATURE": _0x3f3d69,
            "X-TENANT-ID": _0x5e029a,
            "User-Agent": _0x3fc1b6,
            "Cache-Control": "no-cache",
            "Content-Type": "application/x-www-form-urlencoded",
            "Host": this.host,
            "Connection": "Keep-Alive",
            "X-ACCOUNT-ID": this.accountId
          }
        },
        _0x35b9a9 = await _0x209cd(_0x223f30, "文章准备工作");
      if (_0x35b9a9.code == 0) {
        _0xe58079("账号[" + this.index + "],文章准备工作成功 😄 ");
      } else _0xe58079("账号[" + this.index + "],文章准备工作:失败 🙁 了呢,原因：" + _0x35b9a9?.["message"]);
    } catch (_0x3c984a) {
      console.log(_0x3c984a);
    }
  }
  async ["task_comment"](_0x3e4176) {
    let _0x1dd42b = _0x4726dc ? await this.txt_api() : _0x1e586d[Math.floor(Math.random() * _0x1e586d?.["length"])],
      _0x56f9d5 = "/api/comment/create",
      _0x4f2afd = _0x15e580.guid(),
      _0x417da9 = _0x15e580.ts13(),
      _0x176bb2 = _0x56f9d5 + "&&" + this.sessionId + "&&" + _0x4f2afd + "&&" + _0x417da9 + "&&" + this.key + "&&" + _0x5e029a,
      _0x1c479f = _0x15e580.SHA256_Encrypt(_0x176bb2);
    try {
      let _0x4d1d2d = {
          "method": "POST",
          "url": "" + this.hostname + _0x56f9d5,
          "headers": {
            "X-SESSION-ID": "" + this.sessionId,
            "X-REQUEST-ID": _0x4f2afd,
            "X-TIMESTAMP": _0x417da9,
            "X-SIGNATURE": _0x1c479f,
            "X-TENANT-ID": _0x5e029a,
            "User-Agent": _0x3fc1b6,
            "Cache-Control": "no-cache",
            "Content-Type": "application/x-www-form-urlencoded",
            "Host": this.host,
            "Connection": "Keep-Alive",
            "X-ACCOUNT-ID": this.accountId
          },
          "form": {
            "channel_article_id": _0x3e4176,
            "content": _0x1dd42b
          }
        },
        _0x3ede0f = await _0x209cd(_0x4d1d2d, "评论");
      if (_0x3ede0f.code == 0) {
        const _0x592b30 = this?.["jobList"]?.["find"](_0xb5fcb => {
          return _0xb5fcb?.["name"]?.["includes"]("资讯评论") && _0xb5fcb?.["frequency"] > _0xb5fcb?.["finish_times"];
        });
        _0x592b30.finish_times++;
        _0xe58079("账号[" + this.index + "],评论成功 😄 [" + _0x1dd42b + "]");
        const _0x304946 = _0x3ede0f?.["data"]?.["comment"]?.["id"];
        await _0x1c911a(1 + Math.random() * 1);
        await this.deleteComment(_0x304946);
      } else {
        _0xe58079("账号[" + this.index + "],评论:失败 🙁 了呢,原因：" + _0x3ede0f?.["message"]);
        this.commentError = _0x3ede0f?.["message"]?.["includes"]("请重新进入当前页面");
      }
    } catch (_0x41698c) {
      console.log(_0x41698c);
    }
  }
  async ["deleteComment"](_0x8dfe7) {
    let _0x166d09 = "/api/comment/delete",
      _0xabedfa = _0x15e580.guid(),
      _0x393cf4 = _0x15e580.ts13(),
      _0x1e649d = _0x166d09 + "&&" + this.sessionId + "&&" + _0xabedfa + "&&" + _0x393cf4 + "&&" + this.key + "&&" + _0x5e029a,
      _0x22ee6d = _0x15e580.SHA256_Encrypt(_0x1e649d);
    try {
      let _0x49e895 = {
          "method": "POST",
          "url": "" + this.hostname + _0x166d09,
          "headers": {
            "X-SESSION-ID": "" + this.sessionId,
            "X-REQUEST-ID": _0xabedfa,
            "X-TIMESTAMP": _0x393cf4,
            "X-SIGNATURE": _0x22ee6d,
            "X-TENANT-ID": _0x5e029a,
            "User-Agent": _0x3fc1b6,
            "Cache-Control": "no-cache",
            "Content-Type": "application/x-www-form-urlencoded",
            "Host": this.host,
            "Connection": "Keep-Alive",
            "X-ACCOUNT-ID": this.accountId
          },
          "form": {
            "comment_id": _0x8dfe7
          }
        },
        _0x458308 = await _0x209cd(_0x49e895, "删除评论");
      _0x458308.code == 0 ? _0xe58079("账号[" + this.index + "], 删除评论成功 😄 ") : _0xe58079("账号[" + this.index + "],删除评论失败 🙁 了呢,原因：" + _0x458308?.["message"]);
    } catch (_0x35f13a) {
      console.log(_0x35f13a);
    }
  }
  async ["task_share"](_0x469f29, _0x2daea3, _0x1f71f5) {
    let _0x12edc9 = "/api/user_mumber/doTask",
      _0x3d3f1d = _0x15e580.guid(),
      _0x4a44cf = _0x15e580.ts13(),
      _0x461efb = _0x12edc9 + "&&" + this.sessionId + "&&" + _0x3d3f1d + "&&" + _0x4a44cf + "&&" + this.key + "&&" + _0x5e029a,
      _0x4fc35e = _0x15e580.SHA256_Encrypt(_0x461efb);
    try {
      let _0x4819e8 = {
          "method": "POST",
          "url": "" + this.hostname + _0x12edc9,
          "headers": {
            "X-SESSION-ID": "" + this.sessionId,
            "X-REQUEST-ID": _0x3d3f1d,
            "X-TIMESTAMP": _0x4a44cf,
            "X-SIGNATURE": _0x4fc35e,
            "X-TENANT-ID": _0x5e029a,
            "User-Agent": _0x3fc1b6,
            "Cache-Control": "no-cache",
            "Content-Type": "application/x-www-form-urlencoded",
            "Host": this.host,
            "Connection": "Keep-Alive",
            "X-ACCOUNT-ID": this.accountId
          },
          "form": {
            "memberType": _0x469f29,
            "member_type": _0x469f29,
            "target_id": _0x2daea3
          }
        },
        _0x5381d2 = await _0x209cd(_0x4819e8, _0x1f71f5);
      if (_0x5381d2.code == 0) {
        const _0x5ede49 = this?.["jobList"]?.["find"](_0x1b63d8 => {
          return _0x1b63d8?.["name"]?.["includes"](_0x469f29 === "3" ? "分享资讯" : "使用本地服务") && _0x1b63d8?.["frequency"] > _0x1b63d8?.["finish_times"];
        });
        _0x5ede49 && _0x5ede49.finish_times++;
        _0xe58079("账号[" + this.index + "]," + _0x1f71f5 + "成功 😄 ");
        _0x5381d2.data && "账号[" + this.index + "]," + _0x1f71f5 + ("执行完毕共获得:[" + _0x5381d2.data.score_notify.integral + "]");
      } else _0xe58079("账号[" + this.index + "], " + _0x1f71f5 + " :失败 🙁 了呢,原因：" + _0x5381d2?.["message"]), console.log(_0x5381d2);
    } catch (_0x5940ba) {
      console.log(_0x5940ba);
    }
  }
  async ["user_info"]() {
    let _0x1f9077 = "/api/user_mumber/account_detail",
      _0x33cc3f = _0x15e580.guid(),
      _0x3317ab = _0x15e580.ts13(),
      _0x22e170 = _0x1f9077 + "&&" + this.sessionId + "&&" + _0x33cc3f + "&&" + _0x3317ab + "&&" + this.key + "&&" + _0x5e029a,
      _0x1059bd = _0x15e580.SHA256_Encrypt(_0x22e170);
    try {
      let _0x39061a = {
          "method": "GET",
          "url": "" + this.hostname + _0x1f9077,
          "headers": {
            "X-SESSION-ID": "" + this.sessionId,
            "X-REQUEST-ID": _0x33cc3f,
            "X-TIMESTAMP": _0x3317ab,
            "X-SIGNATURE": _0x1059bd,
            "X-TENANT-ID": _0x5e029a,
            "User-Agent": _0x3fc1b6,
            "Cache-Control": "no-cache",
            "Host": this.host,
            "Connection": "Keep-Alive",
            "X-ACCOUNT-ID": this.accountId
          }
        },
        _0x4328e5 = await _0x209cd(_0x39061a, "用户信息");
      if (_0x4328e5.code == 0) this.valid = true, this.requestedUserInfo = true, _0xe58079("账号[" + this.index + "],验证成功 😄 ，账号可正常使用，[" + _0x4328e5.data.rst.nick_name + "]"), _0x4328e5.data.rst.ref_user_uid == "" && (await this.share_code("推荐"));else {
        this.valid = false;
        _0x4328e5?.["message"]?.["includes"]("Session无效或者过期") ? _0xe58079("账号[" + this.index + "],验证失败 🙁 了呢,请检查配置是否正确 或者 账户凭证是否过期；请看脚本头部说明，如果是老脚本配置，需在配置文件配置：export ylwCookieOldConfigTranform='true'") : _0xe58079("账号[" + this.index + "],验证失败 🙁 了呢,原因：" + _0x4328e5?.["message"]);
      }
    } catch (_0x44c09e) {
      console.log(_0x44c09e);
    }
  }
  async ["share_code"](_0x2697e0) {
    let _0x24f47b = "/api/account/update_ref_code",
      _0x4062ad = _0x15e580.guid(),
      _0xa31f41 = _0x15e580.ts13(),
      _0x5aee00 = _0x24f47b + "&&" + this.sessionId + "&&" + _0x4062ad + "&&" + _0xa31f41 + "&&" + this.key + "&&" + _0x5e029a,
      _0xb5d3c1 = _0x15e580.SHA256_Encrypt(_0x5aee00);
    try {
      let _0x1872a0 = {
          "method": "POST",
          "url": "" + this.hostname + _0x24f47b,
          "headers": {
            "X-SESSION-ID": "" + this.sessionId,
            "X-REQUEST-ID": _0x4062ad,
            "X-TIMESTAMP": _0xa31f41,
            "X-SIGNATURE": _0xb5d3c1,
            "X-TENANT-ID": _0x5e029a,
            "User-Agent": _0x3fc1b6,
            "Cache-Control": "no-cache",
            "Content-Type": "application/x-www-form-urlencoded",
            "Host": this.host,
            "Connection": "Keep-Alive",
            "X-ACCOUNT-ID": this.accountId
          },
          "form": {
            "ref_code": _0x50eab1 || "WET28W"
          }
        },
        _0x302691 = await _0x209cd(_0x1872a0, _0x2697e0);
      if (_0x302691.code == 0) {} else {}
    } catch (_0x2d1f6d) {
      console.log(_0x2d1f6d);
    }
  }
}
!(async () => {
  _0xe58079("开始读取配置的数据……");
  if (!(await _0x4b40ec())) return;
  _0xad4fb1.length > 0 ? (_0xe58079(_0x4011f2), await _0x1c911a(0.1), await _0x5c9252()) : (console.log("无可用账号，停止执行\n" + _0x85c05c), exit());
  await _0x34722a(_0x7436bc?.["name"] + "：" + _0x4b5356 + "\n" + _0x3751b4);
})().catch(_0x3b838d => console.log(_0x3b838d)).finally(() => _0x7436bc.done());
function _0x94e03c(_0x30962e, _0x3050fb, _0xf60d3f) {
  let _0x3f7974 = {},
    _0x1d9d65 = {};
  try {
    _0x3f7974 = _0x8358ce.readFileSync(_0x30962e + ".json", "utf8");
    _0x1d9d65 = JSON.parse(_0x3f7974);
  } catch (_0x1486a8) {}
  _0x1d9d65[_0x3050fb] = _0xf60d3f;
  const _0x5ca0d8 = JSON.stringify(_0x1d9d65);
  try {
    _0x8358ce.writeFileSync(_0x30962e + ".json", _0x5ca0d8);
  } catch (_0x128f1f) {
    _0x128f1f.code === "ENOENT" ? _0x8358ce.writeFileSync(_0x30962e + ".json", _0x5ca0d8) : console.error("保存文件时发生错误：", _0x128f1f);
  }
}
function _0x27797e(_0x5b882b, _0x3d24d6) {
  try {
    const _0x3db1e0 = _0x8358ce.readFileSync(_0x5b882b + ".json", "utf8"),
      _0x4b7c9a = JSON.parse(_0x3db1e0);
    return _0x4b7c9a[_0x3d24d6];
  } catch (_0x4176c6) {
    if (_0x4176c6.code === "ENOENT") return undefined;else console.error("读取文件时发生错误：", _0x4176c6);
  }
}
async function _0x4b40ec() {
  if (_0x4353fb) {
    let _0x1c976d = _0x6d25ab[0];
    for (let _0x101637 of _0x6d25ab) if (_0x4353fb.indexOf(_0x101637) > -1) {
      _0x1c976d = _0x101637;
      break;
    }
    for (let _0x352766 of _0x4353fb.split(_0x1c976d)) _0x352766 && _0xad4fb1.push(new _0x4f2881(_0xfc2f81 && _0x352766?.["includes"]("&") ? _0x352766?.["split"]("&") : _0x352766?.["split"]("#")));
    _0x5c59fc = _0xad4fb1.length;
  } else {
    console.log("未找到CK");
    return;
  }
  return console.log("共找到" + _0x5c59fc + "个账号"), true;
}
async function _0x209cd(_0x556d2b, _0x375f3f, _0x4635d1) {
  return new Promise(_0x2aea6a => {
    if (!_0x375f3f) {
      let _0x5e6c3b = arguments.callee.toString(),
        _0x5950c6 = /function\s*(\w*)/i,
        _0xdc96a8 = _0x5950c6.exec(_0x5e6c3b);
      _0x375f3f = _0xdc96a8[1];
    }
    if (_0x15b185) {
      console.log("\n【debug】===============这是" + _0x375f3f + "请求信息===============");
      console.log(_0x556d2b);
    }
    _0x15b185 && (_0x556d2b.rejectUnauthorized = false);
    _0x3f5f76(_0x556d2b, function (_0x95484a, _0x4b6358) {
      if (_0x95484a) throw new Error(_0x95484a);
      let _0x19e206 = _0x4b6358.body;
      try {
        _0x15b185 && (console.log("\n\n【debug】===============这是" + _0x375f3f + "返回数据=============="), console.log(_0x19e206));
        if (typeof _0x19e206 == "string") {
          if (_0x52b1d5(_0x19e206)) {
            let _0x19dbd4 = JSON.parse(_0x19e206);
            _0x15b185 && (console.log("\n【debug】=============这是" + _0x375f3f + "json解析后数据============"), console.log(_0x19dbd4));
            !_0x4635d1 ? _0x2aea6a(_0x19dbd4) : _0x2aea6a({
              ..._0x4b6358,
              "body": _0x19dbd4
            });
          } else {
            let _0x539d59 = _0x19e206;
            if (!_0x4635d1) _0x2aea6a(_0x539d59);else {
              _0x2aea6a({
                ..._0x4b6358,
                "body": _0x539d59
              });
            }
          }
          function _0x52b1d5(_0x13577c) {
            if (typeof _0x13577c == "string") {
              try {
                if (typeof JSON.parse(_0x13577c) == "object") return true;
              } catch (_0x5ea376) {
                return false;
              }
            }
            return false;
          }
        } else {
          let _0x1e6b1d = _0x19e206;
          if (!_0x4635d1) _0x2aea6a(_0x1e6b1d);else {
            _0x2aea6a({
              ..._0x4b6358,
              "body": _0x1e6b1d
            });
          }
        }
      } catch (_0x5d8526) {
        console.log(_0x95484a, _0x4b6358);
        console.log("\n " + _0x375f3f + "失败了!请稍后尝试!!");
      } finally {
        _0x2aea6a();
      }
    });
  });
}
function _0x1c911a(_0x382bae) {
  return new Promise(function (_0xc5845) {
    setTimeout(_0xc5845, _0x382bae * 1000);
  });
}
function _0xe58079(_0x33c913) {
  _0x7436bc.isNode() ? _0x33c913 && (console.log("" + _0x33c913), _0x44cf0c += "" + _0x33c913) : (console.log("" + _0x33c913), msg += "" + _0x33c913);
}
async function _0x34722a(_0x938b1d) {
  if (!_0x938b1d) return;
  if (_0x374fee > 0) {
    if (_0x7436bc.isNode()) {
      var _0x17ddf2 = require("./sendNotify");
      await _0x17ddf2.sendNotify(_0x7436bc.name, _0x938b1d);
    } else _0x7436bc.msg(_0x7436bc.name, "", _0x938b1d);
  } else console.log("通知服务未开启，不予推送：", _0x938b1d);
}
function _0x36721b() {
  _0x7436bc.isNode() && (process.on("uncaughtException", function (_0x3cb39f) {
    if (_0x3cb39f.code === "MODULE_NOT_FOUND") {
      const _0x5f24dd = _0x3cb39f.message.split("'")[1];
      _0x5f24dd.startsWith("./") ? console.log("缺少依赖文件，请前往代码库寻找 " + _0x5f24dd?.["replace"]("./", "")?.["replace"]("../", "") + " 代码文件，放在本脚本同一目录下 \n 什么？不会？v我50我教你！") : console.log("缺少依赖，请安装 " + _0x5f24dd + " 库： " + _0x5f24dd + " \n 什么？不会？v我50我教你！");
    } else console.log("发生错误：" + _0x3cb39f.message);
  }), process.on("unhandledRejection", function (_0x202afd) {
    const _0x39654d = _0x202afd.stack.split("\n");
    if (_0x39654d.length > 1) {
      const _0x28d83f = _0x39654d[1],
        _0x3d4e00 = _0x28d83f.match(/\((.*):(\d+):(\d+)\)/);
      if (_0x3d4e00) {
        const _0xab8582 = _0x3d4e00[1],
          _0x2d4db0 = _0x3d4e00[2];
        console.log("程序执行出现异常，错误信息：" + _0x202afd.message + ("，错误发生在 " + _0xab8582 + " 的第 " + _0x2d4db0 + " 行 \n 请在本仓库建立 issue 并附上日志或者截图即可？什么，很着急？v我50疯狂星期四！"));
      }
    } else console.log("发生错误：" + _0x202afd.message);
  }));
}
function _0x153e21(_0x3cc5cc, _0x1b9dc6) {
  "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0);
  class _0x29c6f3 {
    constructor(_0x117217) {
      this.env = _0x117217;
    }
    ["send"](_0x151844, _0x47a1bb = "GET") {
      _0x151844 = "string" == typeof _0x151844 ? {
        "url": _0x151844
      } : _0x151844;
      let _0x11f69e = this.get;
      return "POST" === _0x47a1bb && (_0x11f69e = this.post), new Promise((_0x2b0cd6, _0x2a0446) => {
        _0x11f69e.call(this, _0x151844, (_0x448819, _0x3fa2b9, _0x4295ee) => {
          _0x448819 ? _0x2a0446(_0x448819) : _0x2b0cd6(_0x3fa2b9);
        });
      });
    }
    ["get"](_0x331885) {
      return this.send.call(this.env, _0x331885);
    }
    ["post"](_0x6550a6) {
      return this.send.call(this.env, _0x6550a6, "POST");
    }
  }
  return new class {
    constructor(_0x544091, _0x44405a) {
      this.name = _0x544091;
      this.http = new _0x29c6f3(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = !1;
      this.isNeedRewrite = !1;
      this.logSeparator = "\n";
      this.startTime = new Date().getTime();
      Object.assign(this, _0x44405a);
      this.log("", "🔔" + this.name + ", 开始!");
    }
    ["isNode"]() {
      return "undefined" != typeof module && !!module.exports;
    }
    ["isQuanX"]() {
      return "undefined" != typeof $task;
    }
    ["isSurge"]() {
      return "undefined" != typeof $httpClient && "undefined" == typeof $loon;
    }
    ["isLoon"]() {
      return "undefined" != typeof $loon;
    }
    ["toObj"](_0x28330b, _0x933f88 = null) {
      try {
        return JSON.parse(_0x28330b);
      } catch {
        return _0x933f88;
      }
    }
    ["toStr"](_0x1d3083, _0x2b0e3e = null) {
      try {
        return JSON.stringify(_0x1d3083);
      } catch {
        return _0x2b0e3e;
      }
    }
    ["getjson"](_0x38d145, _0x1729f1) {
      let _0x296a7c = _0x1729f1;
      const _0x4d58e8 = this.getdata(_0x38d145);
      if (_0x4d58e8) try {
        _0x296a7c = JSON.parse(this.getdata(_0x38d145));
      } catch {}
      return _0x296a7c;
    }
    ["setjson"](_0x49a983, _0x3ab6f1) {
      try {
        return this.setdata(JSON.stringify(_0x49a983), _0x3ab6f1);
      } catch {
        return !1;
      }
    }
    ["getScript"](_0x3e79ac) {
      return new Promise(_0x56dbaf => {
        this.get({
          "url": _0x3e79ac
        }, (_0xb9ab6, _0x2a37da, _0x49e145) => _0x56dbaf(_0x49e145));
      });
    }
    ["runScript"](_0xac389b, _0xf59bd2) {
      return new Promise(_0x34e2d5 => {
        let _0x111bce = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        _0x111bce = _0x111bce ? _0x111bce.replace(/\n/g, "").trim() : _0x111bce;
        let _0x28334e = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        _0x28334e = _0x28334e ? 1 * _0x28334e : 20;
        _0x28334e = _0xf59bd2 && _0xf59bd2.timeout ? _0xf59bd2.timeout : _0x28334e;
        const [_0x153b7f, _0x18d5df] = _0x111bce.split("@"),
          _0x2df3ed = {
            "url": "http://" + _0x18d5df + "/v1/scripting/evaluate",
            "body": {
              "script_text": _0xac389b,
              "mock_type": "cron",
              "timeout": _0x28334e
            },
            "headers": {
              "X-Key": _0x153b7f,
              "Accept": "*/*"
            }
          };
        this.post(_0x2df3ed, (_0x1bef5b, _0x29a0c8, _0x465b04) => _0x34e2d5(_0x465b04));
      }).catch(_0x33c157 => this.logErr(_0x33c157));
    }
    ["loaddata"]() {
      if (!this.isNode()) return {};
      {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const _0x2ad725 = this.path.resolve(this.dataFile),
          _0x349350 = this.path.resolve(process.cwd(), this.dataFile),
          _0x4a6c39 = this.fs.existsSync(_0x2ad725),
          _0x560dd1 = !_0x4a6c39 && this.fs.existsSync(_0x349350);
        if (!_0x4a6c39 && !_0x560dd1) return {};
        {
          const _0x4fffcd = _0x4a6c39 ? _0x2ad725 : _0x349350;
          try {
            return JSON.parse(this.fs.readFileSync(_0x4fffcd));
          } catch (_0x197751) {
            return {};
          }
        }
      }
    }
    ["writedata"]() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const _0xdba413 = this.path.resolve(this.dataFile),
          _0x570a1b = this.path.resolve(process.cwd(), this.dataFile),
          _0x1f0684 = this.fs.existsSync(_0xdba413),
          _0x472b31 = !_0x1f0684 && this.fs.existsSync(_0x570a1b),
          _0x3ac7b1 = JSON.stringify(this.data);
        _0x1f0684 ? this.fs.writeFileSync(_0xdba413, _0x3ac7b1) : _0x472b31 ? this.fs.writeFileSync(_0x570a1b, _0x3ac7b1) : this.fs.writeFileSync(_0xdba413, _0x3ac7b1);
      }
    }
    ["lodash_get"](_0x1370d0, _0x2a2410, _0x1fb918) {
      const _0x128170 = _0x2a2410.replace(/\[(\d+)\]/g, ".$1").split(".");
      let _0x121675 = _0x1370d0;
      for (const _0x6a9534 of _0x128170) if (_0x121675 = Object(_0x121675)[_0x6a9534], void 0 === _0x121675) return _0x1fb918;
      return _0x121675;
    }
    ["lodash_set"](_0x49c0b6, _0x115f33, _0xd1be4b) {
      return Object(_0x49c0b6) !== _0x49c0b6 ? _0x49c0b6 : (Array.isArray(_0x115f33) || (_0x115f33 = _0x115f33.toString().match(/[^.[\]]+/g) || []), _0x115f33.slice(0, -1).reduce((_0x32dfa0, _0x1bd326, _0x10f07f) => Object(_0x32dfa0[_0x1bd326]) === _0x32dfa0[_0x1bd326] ? _0x32dfa0[_0x1bd326] : _0x32dfa0[_0x1bd326] = Math.abs(_0x115f33[_0x10f07f + 1]) >> 0 == +_0x115f33[_0x10f07f + 1] ? [] : {}, _0x49c0b6)[_0x115f33[_0x115f33.length - 1]] = _0xd1be4b, _0x49c0b6);
    }
    ["getdata"](_0x43c842) {
      let _0x982ca9 = this.getval(_0x43c842);
      if (/^@/.test(_0x43c842)) {
        const [, _0x152bfe, _0x4b0729] = /^@(.*?)\.(.*?)$/.exec(_0x43c842),
          _0x259dd7 = _0x152bfe ? this.getval(_0x152bfe) : "";
        if (_0x259dd7) try {
          const _0x4e1002 = JSON.parse(_0x259dd7);
          _0x982ca9 = _0x4e1002 ? this.lodash_get(_0x4e1002, _0x4b0729, "") : _0x982ca9;
        } catch (_0x5e723b) {
          _0x982ca9 = "";
        }
      }
      return _0x982ca9;
    }
    ["setdata"](_0x25522c, _0x127f89) {
      let _0x34cb3a = false;
      if (/^@/.test(_0x127f89)) {
        const [, _0x1d41f5, _0x2c858a] = /^@(.*?)\.(.*?)$/.exec(_0x127f89),
          _0x5e1f26 = this.getval(_0x1d41f5),
          _0x4a4d14 = _0x1d41f5 ? "null" === _0x5e1f26 ? null : _0x5e1f26 || "{}" : "{}";
        try {
          const _0x2b9bb5 = JSON.parse(_0x4a4d14);
          this.lodash_set(_0x2b9bb5, _0x2c858a, _0x25522c);
          _0x34cb3a = this.setval(JSON.stringify(_0x2b9bb5), _0x1d41f5);
        } catch (_0x9fbad) {
          const _0x12842f = {};
          this.lodash_set(_0x12842f, _0x2c858a, _0x25522c);
          _0x34cb3a = this.setval(JSON.stringify(_0x12842f), _0x1d41f5);
        }
      } else _0x34cb3a = this.setval(_0x25522c, _0x127f89);
      return _0x34cb3a;
    }
    ["getval"](_0x3addd8) {
      return this.isSurge() || this.isLoon() ? $persistentStore.read(_0x3addd8) : this.isQuanX() ? $prefs.valueForKey(_0x3addd8) : this.isNode() ? (this.data = this.loaddata(), this.data[_0x3addd8]) : this.data && this.data[_0x3addd8] || null;
    }
    ["setval"](_0x2dc834, _0x5533fa) {
      return this.isSurge() || this.isLoon() ? $persistentStore.write(_0x2dc834, _0x5533fa) : this.isQuanX() ? $prefs.setValueForKey(_0x2dc834, _0x5533fa) : this.isNode() ? (this.data = this.loaddata(), this.data[_0x5533fa] = _0x2dc834, this.writedata(), !0) : this.data && this.data[_0x5533fa] || null;
    }
    ["initGotEnv"](_0x3885a3) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      _0x3885a3 && (_0x3885a3.headers = _0x3885a3.headers ? _0x3885a3.headers : {}, void 0 === _0x3885a3.headers.Cookie && void 0 === _0x3885a3.cookieJar && (_0x3885a3.cookieJar = this.ckjar));
    }
    ["get"](_0x557a18, _0x243d31 = () => {}) {
      _0x557a18.headers && (delete _0x557a18.headers["Content-Type"], delete _0x557a18.headers["Content-Length"]);
      this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (_0x557a18.headers = _0x557a18.headers || {}, Object.assign(_0x557a18.headers, {
        "X-Surge-Skip-Scripting": !1
      })), $httpClient.get(_0x557a18, (_0x53c59c, _0x3f4b53, _0x366230) => {
        !_0x53c59c && _0x3f4b53 && (_0x3f4b53.body = _0x366230, _0x3f4b53.statusCode = _0x3f4b53.status);
        _0x243d31(_0x53c59c, _0x3f4b53, _0x366230);
      })) : this.isQuanX() ? (this.isNeedRewrite && (_0x557a18.opts = _0x557a18.opts || {}, Object.assign(_0x557a18.opts, {
        "hints": !1
      })), $task.fetch(_0x557a18).then(_0x4f804c => {
        const {
          statusCode: _0x2e17d7,
          statusCode: _0x481f46,
          headers: _0xe6dfe4,
          body: _0x8ea1a2
        } = _0x4f804c;
        _0x243d31(null, {
          "status": _0x2e17d7,
          "statusCode": _0x481f46,
          "headers": _0xe6dfe4,
          "body": _0x8ea1a2
        }, _0x8ea1a2);
      }, _0x58480b => _0x243d31(_0x58480b))) : this.isNode() && (this.initGotEnv(_0x557a18), this.got(_0x557a18).on("redirect", (_0x368cb0, _0x1d08ed) => {
        try {
          if (_0x368cb0.headers["set-cookie"]) {
            const _0xb9858a = _0x368cb0.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
            _0xb9858a && this.ckjar.setCookieSync(_0xb9858a, null);
            _0x1d08ed.cookieJar = this.ckjar;
          }
        } catch (_0x3c102b) {
          this.logErr(_0x3c102b);
        }
      }).then(_0x373e92 => {
        const {
          statusCode: _0x2643b8,
          statusCode: _0x1cf173,
          headers: _0x37184d,
          body: _0x5c2125
        } = _0x373e92;
        _0x243d31(null, {
          "status": _0x2643b8,
          "statusCode": _0x1cf173,
          "headers": _0x37184d,
          "body": _0x5c2125
        }, _0x5c2125);
      }, _0x182e41 => {
        const {
          message: _0x2a0514,
          response: _0x3b478e
        } = _0x182e41;
        _0x243d31(_0x2a0514, _0x3b478e, _0x3b478e && _0x3b478e.body);
      }));
    }
    ["post"](_0xc3ddc6, _0x37d5dd = () => {}) {
      if (_0xc3ddc6.body && _0xc3ddc6.headers && !_0xc3ddc6.headers["Content-Type"] && (_0xc3ddc6.headers["Content-Type"] = "application/x-www-form-urlencoded"), _0xc3ddc6.headers && delete _0xc3ddc6.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (_0xc3ddc6.headers = _0xc3ddc6.headers || {}, Object.assign(_0xc3ddc6.headers, {
        "X-Surge-Skip-Scripting": !1
      })), $httpClient.post(_0xc3ddc6, (_0x453a3a, _0x272106, _0x148058) => {
        !_0x453a3a && _0x272106 && (_0x272106.body = _0x148058, _0x272106.statusCode = _0x272106.status);
        _0x37d5dd(_0x453a3a, _0x272106, _0x148058);
      });else {
        if (this.isQuanX()) _0xc3ddc6.method = "POST", this.isNeedRewrite && (_0xc3ddc6.opts = _0xc3ddc6.opts || {}, Object.assign(_0xc3ddc6.opts, {
          "hints": !1
        })), $task.fetch(_0xc3ddc6).then(_0xace6f0 => {
          const {
            statusCode: _0x2b7fc7,
            statusCode: _0x5385e8,
            headers: _0x58b598,
            body: _0x24dc54
          } = _0xace6f0;
          _0x37d5dd(null, {
            "status": _0x2b7fc7,
            "statusCode": _0x5385e8,
            "headers": _0x58b598,
            "body": _0x24dc54
          }, _0x24dc54);
        }, _0x401511 => _0x37d5dd(_0x401511));else {
          if (this.isNode()) {
            this.initGotEnv(_0xc3ddc6);
            const {
              url: _0x2cda8e,
              ..._0x4bdf86
            } = _0xc3ddc6;
            this.got.post(_0x2cda8e, _0x4bdf86).then(_0x19289a => {
              const {
                statusCode: _0x542538,
                statusCode: _0x584580,
                headers: _0xc8488d,
                body: _0x1e42dc
              } = _0x19289a;
              _0x37d5dd(null, {
                "status": _0x542538,
                "statusCode": _0x584580,
                "headers": _0xc8488d,
                "body": _0x1e42dc
              }, _0x1e42dc);
            }, _0x39dfde => {
              const {
                message: _0x553bab,
                response: _0x5c7f3f
              } = _0x39dfde;
              _0x37d5dd(_0x553bab, _0x5c7f3f, _0x5c7f3f && _0x5c7f3f.body);
            });
          }
        }
      }
    }
    ["time"](_0x4a567e, _0x35be6f = null) {
      const _0x229485 = _0x35be6f ? new Date(_0x35be6f) : new Date();
      let _0x5909bf = {
        "M+": _0x229485.getMonth() + 1,
        "d+": _0x229485.getDate(),
        "H+": _0x229485.getHours(),
        "m+": _0x229485.getMinutes(),
        "s+": _0x229485.getSeconds(),
        "q+": Math.floor((_0x229485.getMonth() + 3) / 3),
        "S": _0x229485.getMilliseconds()
      };
      /(y+)/.test(_0x4a567e) && (_0x4a567e = _0x4a567e.replace(RegExp.$1, (_0x229485.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let _0x5a2b09 in _0x5909bf) new RegExp("(" + _0x5a2b09 + ")").test(_0x4a567e) && (_0x4a567e = _0x4a567e.replace(RegExp.$1, 1 == RegExp.$1.length ? _0x5909bf[_0x5a2b09] : ("00" + _0x5909bf[_0x5a2b09]).substr(("" + _0x5909bf[_0x5a2b09]).length)));
      return _0x4a567e;
    }
    ["msg"](_0x2b679c = _0x3cc5cc, _0x2e97ef = "", _0x5d1842 = "", _0x125340) {
      const _0x32c353 = _0x2b482b => {
        if (!_0x2b482b) return _0x2b482b;
        if ("string" == typeof _0x2b482b) return this.isLoon() ? _0x2b482b : this.isQuanX() ? {
          "open-url": _0x2b482b
        } : this.isSurge() ? {
          "url": _0x2b482b
        } : void 0;
        if ("object" == typeof _0x2b482b) {
          if (this.isLoon()) {
            let _0x2ea49a = _0x2b482b.openUrl || _0x2b482b.url || _0x2b482b["open-url"],
              _0x49ba72 = _0x2b482b.mediaUrl || _0x2b482b["media-url"];
            return {
              "openUrl": _0x2ea49a,
              "mediaUrl": _0x49ba72
            };
          }
          if (this.isQuanX()) {
            let _0x1259a6 = _0x2b482b["open-url"] || _0x2b482b.url || _0x2b482b.openUrl,
              _0x1ae356 = _0x2b482b["media-url"] || _0x2b482b.mediaUrl;
            return {
              "open-url": _0x1259a6,
              "media-url": _0x1ae356
            };
          }
          if (this.isSurge()) {
            let _0x2c0bf7 = _0x2b482b.url || _0x2b482b.openUrl || _0x2b482b["open-url"];
            return {
              "url": _0x2c0bf7
            };
          }
        }
      };
      if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(_0x2b679c, _0x2e97ef, _0x5d1842, _0x32c353(_0x125340)) : this.isQuanX() && $notify(_0x2b679c, _0x2e97ef, _0x5d1842, _0x32c353(_0x125340))), !this.isMuteLog) {
        let _0x186bcb = ["", "==============📣系统通知📣=============="];
        _0x186bcb.push(_0x2b679c);
        _0x2e97ef && _0x186bcb.push(_0x2e97ef);
        _0x5d1842 && _0x186bcb.push(_0x5d1842);
        console.log(_0x186bcb.join("\n"));
        this.logs = this.logs.concat(_0x186bcb);
      }
    }
    ["log"](..._0x508be6) {
      _0x508be6.length > 0 && (this.logs = [...this.logs, ..._0x508be6]);
      console.log(_0x508be6.join(this.logSeparator));
    }
    ["logErr"](_0x4b334b, _0x13a7f7) {
      const _0x21a4ad = !this.isSurge() && !this.isQuanX() && !this.isLoon();
      _0x21a4ad ? this.log("", "❗️" + this.name + ", 错误!", _0x4b334b.stack) : this.log("", "❗️" + this.name + ", 错误!", _0x4b334b);
    }
    ["wait"](_0x494bac) {
      return new Promise(_0x522eef => setTimeout(_0x522eef, _0x494bac));
    }
    ["done"](_0xd7eabf = {}) {
      const _0x63642a = new Date().getTime(),
        _0x19ed2c = (_0x63642a - this.startTime) / 1000;
      this.log("", "🔔" + this.name + ", 结束! 🕛 " + _0x19ed2c + " 秒");
      this.log();
      (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(_0xd7eabf);
    }
  }(_0x3cc5cc, _0x1b9dc6);
}
class LineBot {
  constructor(accessToken){
    this.accessToken = accessToken;
  }

  sendReplyMessage(reply_token, message) {
    const url = 'https://api.line.me/v2/bot/message/reply';

    const payload = {
      'replyToken': reply_token,
      'messages': message,
    };

    const param = {
      'headers': {
        'Content-Type': 'application/json; charset=UTF-8',
        'Authorization': 'Bearer ' + this.accessToken,
      },
      'method': 'post',
      "muteHttpExceptions" : true,
      'payload': JSON.stringify(payload),
    };
    console.info(url, param);

    const json = UrlFetchApp.fetch(url, param);
    const result = JSON.parse(json.getContentText());
    const code = JSON.parse(json.getResponseCode());
    console.info(code, result);
    return result;
  }

  sendPushMessage(userId, message) {
    var url = "https://api.line.me/v2/bot/message/push";
    var payload = {
      "to": userId,
      "messages": message
    };
    const param = {
      'headers': {
        'Content-Type': 'application/json; charset=UTF-8',
        'Authorization': 'Bearer ' + this.accessToken,
      },
      'method': 'post',
      "muteHttpExceptions" : true,
      'payload': JSON.stringify(payload),
    };
    console.info(url, param);

    const json = UrlFetchApp.fetch(url, param);
    const result = JSON.parse(json.getContentText());
    const code = JSON.parse(json.getResponseCode());
    console.info(code, result);
    return result;
  }
}
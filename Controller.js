/**
 * LineBotクラスのインスタンスを生成して返すファクトリ関数
 *
 * @param {string} access_token - アクセストークン
 * @return {LineBot} 生成したLineBotオブジェクト
 */
function _new(access_token){
  return new LineBot(access_token);
}
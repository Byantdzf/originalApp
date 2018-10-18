
/* ========================================================
                        小程序配置文件
======================================================== */
// 域名
var host = 'https://mcircle.ufutx.com/api'
export const service = {
    // 登录接口
    login: `${host}/login/wechat`,
    // 微信注册接口
    register: `${host}/register/wechat`,
    // 注册发短信接口
    send_register: `${host}/sms/register`,
    // 首页
    home: `${host}/home`,
    // 商品

    goods: `${host}/goods`,
    //用户
    user: `${host}/user`,
    // 圈子
   enterpirses: `${host}/enterpirses`,
    // 圈子
    circle: `${host}/circles`,
   // 我的
    users:`${host}/users`,
    //  商家审核
    check: `${host}/check/circles/enterprises`,
    // 商品支付
    payOrder: `${host}/pay/order`,
    //未支付订单
    unpaidOrder: `${host}/pay/unpaid/order`,
    // 行业列表
    industries: `${host}/industries`,
    //关注某人
    follow: `${host}/follow/users`,
    //好友信息
    //加好友问题
    questions:`${host}/friend/questions`,
    //添加好友
    addFriend:`${host}/friend/users`,
    //好友
    friend:`${host}/friend`,
    // 好友信息
    friendNear: `${host}/near/singles`,
    //申请微信
    wechat:`${host}/show/wechat`,
    //微信好友
    wechat_user:`${host}/wechat/users`,
    //举报好友
    complaint:`${host}/complaint/users`,
    //礼物
    gifts: `${host}/gifts`,
    //我的关注
    followings:`${host}/followings`,
    //充值积分
    rechargescore:`${host}/recharge/score`,
    //我的粉丝
    followers:`${host}/followers`,
    //支付回调
    orderpay:`${host}/mark/order/pay`,
    //我的好友
    friends: `${host}/friends`,
    //解密手机号
    infor: `${host}/wechat/mobile`,
    // 图书上传
    image_upload: `${host}/uploads`,
    //skip
    skip: `${host}/skip/user`,
    //register_infor
    register_infor: `${host}/register/infor`,
    //动态登录
    account: `${host}/account/uid`,

}

export default {
    service
}

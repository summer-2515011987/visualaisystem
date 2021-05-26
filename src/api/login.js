import request from "@/utils/request";
let BASEPATH = "/smartedge";
//登录
var loginPath = "/login";

function login(data) {
    return request({
        url: BASEPATH + loginPath,
        method: "post",
        data: data
    });
}
let service = {
    login
};
export default service;
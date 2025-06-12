import request from '@/utils/request-util.js'
import serverApi from '@/server-api.js'

/**
 * 根据条件全量查询校友信息管理数据!
 * @param {Object} param
 */
function usersLogin(param) {
	let url = serverApi.APIURL.usersLogin
	return request.myPostRequestWithJSON(url, param);
}

function usersSave(param) {
	let url = serverApi.APIURL.saveUser
	return request.myPostRequestWithJSON(url, param);
}
function usersFindList(param) {
	let url = serverApi.APIURL.usersFindList
	return request.myPostRequestWithJSON(url, param);
}

module.exports = {
	usersLogin: usersLogin,
	usersSave: usersSave,
	usersFindList:usersFindList
}

import request from '@/utils/request-util.js'
import serverApi from '@/server-api.js'

function getTestPaper(param) {
	let url = serverApi.APIURL.getTestPaper
	return request.myPostRequestWithJSON(url, param);
}

function getIndexData(num) {
	let url = serverApi.APIURL.getIndexData + num
	return request.myGetRequest(url);
}

function getNoticeList(param) {
	let url = serverApi.APIURL.getNotice
	return request.myPostRequestWithJSON(url, param);
}

function getQuestion(param) {
	let url = serverApi.APIURL.getQuestion
	return request.myPostRequestWithJSON(url, param);
}

function addGrade(param) {
	let url = serverApi.APIURL.addGrade
	return request.myPostRequestWithJSON(url, param);
}

function records(param) {
	let url = serverApi.APIURL.records
	return request.myPostRequestWithJSON(url, param);
}

function getTeacherList(param) {
	let url = serverApi.APIURL.getTeacherList
	return request.myPostRequestWithJSON(url, param);
}
function knowledgeFindList(param) {
	let url = serverApi.APIURL.knowledgeFindList
	return request.myPostRequestWithJSON(url, param);
}

function knowledgeTypeFindList(param) {
	let url = serverApi.APIURL.knowledgeTypeFindList
	return request.myPostRequestWithJSON(url, param);
}


function getEcharts(num) {
	let url = serverApi.APIURL.getEcharts + num
	return request.myGetRequest(url);
}


module.exports = {
	getTestPaper: getTestPaper,
	getQuestion: getQuestion,
	addGrade: addGrade,
	records: records,
	getTeacherList: getTeacherList,
	getNoticeList: getNoticeList,
	getIndexData: getIndexData,
	knowledgeTypeFindList:knowledgeTypeFindList,
	knowledgeFindList:knowledgeFindList,
	getEcharts:getEcharts
}

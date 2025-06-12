const SERVER_HOST = "http://127.0.0.1:8888"

const APIURL = {
	getNotice: SERVER_HOST.concat('/notice/findList'), // 获取公告
	getIndexData: SERVER_HOST.concat('/knowledge/getIndex/'), // 首页最新资讯
	knowledgeFindList: SERVER_HOST.concat('/knowledge/findList'),
	knowledgeTypeFindList: SERVER_HOST.concat('/types/findList'),
	getTestPaper: SERVER_HOST.concat('/testPaper/findList'),
	usersLogin: SERVER_HOST.concat('/student/login'),
	saveUser: SERVER_HOST.concat('/student/save/update'),
	usersFindList: SERVER_HOST.concat('/student/findList'),
	getQuestion: SERVER_HOST.concat('/testQuestions/allQuestion'),
	addGrade: SERVER_HOST.concat('/records/saveGrade'),
	records: SERVER_HOST.concat('/records/findList'),
	getTeacherList: SERVER_HOST.concat('/teachers/findList'),
	getEcharts: SERVER_HOST.concat('/healthy/echarts1/'),

}
module.exports.APIURL = APIURL;

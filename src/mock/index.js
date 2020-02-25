import Mock from 'mockjs'

Mock.mock('/login', 'post', function (config) {
	var data = JSON.parse(config.body), role = ''
	switch (data.username) {
		case 'admin':
			role = 'admin'
			break;
		case 'manager':
			role = 'manager'
			break;
		case 'regular':
			role = 'regular'
			break;
		default:
			break;
	}
	return {
		code: role ? 200 : 500,
		role,
		token: '123456',
		message: role ? '登录成功' : '请重新登录'
	}
})

export default Mock
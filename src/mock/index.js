import Mock from 'mockjs'

var swipes = [
  'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1582471686657&di=733d5273a58556145a36e316e1ccc52c&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fblog%2F201512%2F06%2F20151206112827_W4EnA.jpeg',
  'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1582471686657&di=5069c23adeb7eaf7f3270d87b8eefe4a&imgtype=0&src=http%3A%2F%2Ffinance.gmw.cn%2Fattachement%2Fjpg%2Fsite2%2F20131231%2Feca86bd9e2ca142c8a6a44.jpg',
  'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1582471686648&di=653599daf91e3ae7db3e46b8c2c7e27b&imgtype=0&src=http%3A%2F%2Fb.zol-img.com.cn%2Fdesk%2Fbizhi%2Fimage%2F2%2F960x600%2F1365588318413.jpg',
  'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1582471828921&di=a6e0ca053d6227d3683e6a92b2536442&imgtype=jpg&src=http%3A%2F%2Fimg4.imgtn.bdimg.com%2Fit%2Fu%3D3342141999%2C3627642631%26fm%3D214%26gp%3D0.jpg',
  'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3064433835,951239292&fm=26&gp=0.jpg',
  'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1582471846748&di=d32c57389bcc23543e9221c78af9b43b&imgtype=jpg&src=http%3A%2F%2Fimg4.imgtn.bdimg.com%2Fit%2Fu%3D1859787099%2C3788492541%26fm%3D214%26gp%3D0.jpg'
]


Mock.mock('/api/home/swipes', 'get', {
    "result|3": [
      {"img|1": swipes}
    ]
})


export default Mock
import Mock from 'mockjs';
const arr = [];
const Random = Mock.Random;
for(let i=0;i<100;i++){
    arr.push(Mock.mock({
        id:i,
        name:Random.cname(),
        type:'本地密码认证',
        state:'正常',
        creater:Random.name()
    }))
}
export default arr;

// import { MockMethod } from 'vite-plugin-mock';
import { sign, verify } from 'jsonwebtoken';

const secret = 'secret';

export default [
  {
    url: '/api/login',
    method: 'post',
    timeout: 2000,
    response: (req, res) => {
      const body = req.body;
      if (body.name !== 'lxinz' || body.password !== '123456') {
        return { code: 60204, msg: '输入信息有误, 请重新输入' };
      }
      const token = sign({ user: body.name }, secret, {
        expiresIn: 60
      });

      return {
        code: 20000,
        data: token
      };
    }
  }
];

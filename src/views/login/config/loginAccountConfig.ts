//编写表单校验规则
export const rulesAccount = {
  name: [
    {
      required: true,
      message: "请输入账号",
      trigger: "blur"
    },
    {
      pattern: /^[a-z0-9]{5,10}$/,
      message: "账号必须为5~10位数字或者字母",
      trigger: "blur"
    }
  ],
  password: [
    {
      required: true,
      message: "请输入密码",
      trigger: "blur"
    },
    {
      pattern: /^[a-z0-9]{8,16}$/,
      message: "密码必须为8~16位数字或者字母",
      trigger: "blur"
    }
  ]
};
export const rulesPhone = {
  num: [
    {
      required: true,
      message: "请输入手机号",
      trigger: "blur"
    },
    {
      pattern:
        /^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-7|9])|(?:5[0-3|5-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[1|8|9]))\d{8}$/,
      message: "手机号格式不正确",
      trigger: "blur"
    }
  ],
  code: [
    {
      required: true,
      message: "请输入验证码",
      trigger: "blur"
    },
    {
      pattern: /^\d{6}$/,
      message: "验证码格式错误",
      trigger: "blur"
    }
  ]
};

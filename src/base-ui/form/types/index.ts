type IFromType = "input" | "password" | "select" | "datepicker";

export interface IFromItem {
  type: IFromType;
  label: string;
  rules?: any[];
  placeholder?: any;
  // 针对select属性
  options?: any[];
  // 针对特殊属性
  otherOptions?: any;
}

export interface IForm {
  formItems: IFromItem[];
  labelWidth: string;
  itemStyle: any;
  colLayout: any;
}

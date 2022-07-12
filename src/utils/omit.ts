/**
 * omit()函数
 *
 * 调用格式：_.omit(obj, *fields)
 * 该函数的功能是：返回一个没有列入排除key属性的对象
 * @param obj JSON格式的对象
 * @param fields 多个需要排除掉的key属性
 * @returns
 */
export const omit = <T extends object, K extends keyof T>(
  obj: T,
  fields: K[]
): Omit<T, K> => {
  const shallowCopy = Object.assign({}, obj);
  fields.forEach((item) => delete shallowCopy[item]);
  return shallowCopy;
};

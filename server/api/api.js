class API{
  // 创建数据
  createData(modeName, o){
    // modeName: 模型名称，字符串类型
    // o: 创建的数据，object
    return Model[modeName].create(o);
  }

  // 查询数据
  findData(modeName, condition, attributes){
    // attributes:查询字段，数组
    // condition：查询条件，对象类型
    return Model[modeName].findAll({
      attributes,
      where: condition
    })
  }
}


module.exports = new API();
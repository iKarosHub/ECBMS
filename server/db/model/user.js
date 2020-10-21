// user模型

// 导入sequelize
const Sequelize = require('sequelize');

// 获取模型类
const Model = Sequelize.Model;

// 创建user模型，同时继承Model
class User extends Model{}

// 定义模型结构，映射为数据表结构
User.init({
  // 定义数据表字段，表结构
  // 表id字段
  id: {
    // 数据类型，INTEGER:整型，UNSIGNED：无符号
    type: Sequelize.INTEGER.UNSIGNED,

    // 是否允许为null
    allowNull: false,

    // 主键
    primaryKey: true,

    // 自动递增
    autoIncrement: true,

    // 备注
    comment: '表id'
  },

  // 用户id字段
  userId: {
    type: Sequelize.STRING(30),
    allowNull: false,
    defaultValue: '',
    comment: '用户id'
  }
  
}, {
  // 配置
  // 默认为类的名称， 即在这种情况下为'User'。
  // 这将控制自动生成的'foreignKey'(外键)的名称和关联命名
  modelName: 'user',

  // 是否添加时间戳属性（updateAt, createAt）
  timestamps: true,

  // 是否开启假删除(逻辑删除)，真删除(物理删除)
  // 不实际删除数据库记录，而是设置一个新deleteAt属性，
  // 其值为当前日期
  paranoid: true,

  // 自动设置字段为蛇型，（以_方式命名）命名规则
  underscored: true,

  // 是否禁止修改表名
  // 默认情况下，sequelize会自动将所有传递的模型名称转换为复数形式
  freezeTableName: true,

  // 定义表名
  // tableName: 'user',

  // 连接实例
  sequelize
})

// force: true, 如果存在该表，则先删除该表，再创建新表，否则直接创建新表
// force：false，如果存在该表，则不创建新表，否则创建新表
User.sync({force: false});

// 导出模型
module.exports = User;
# 数据库迁移

使用`knex` 实现`postgres`数据库的迁移

首先安装knex
```batch
pnpm install knex
```

初始化配置文件
```batch
npx knex init
```

创建migrations目录，并在目录里面添加迁移脚本
```js
module.exports.up = function (knex) {
  return knex.schema.createTable('users', (table) => {
    table.increments('id')
    table.string('first_name', 255).notNullable()
    table.string('last_name', 255).notNullable()
    table.string('email', 255).notNullable().unique()
  })
}

module.exports.down = function (knex) {
  return knex.schema.dropTable('users')
}

module.exports.config = { transaction: false }

```
运行迁移命令

```batch
npx knex migrate:up
# 回退
# npx knex migrate:down
```


---
title: MySQL-DML
category: 数据库
tags:
 - mysql
---

> ![](https://img.shields.io/badge/DML-Data_Manipulation_Language-blue.svg) 

<!-- more -->



<h2 style="color:#ab4642" align="center">DML语言</h2>

数据操作语言
- 插入：insert
- 修改：update
- 删除：delete



## 一、插入语句

### （一）方式一

==经典的插入(多行插入)==

- 语法：insert into 表名(字段名,…) values(值,…);
- 特点
  - 1、要求值的类型和字段的类型要一致或兼容；
  - 2、字段的个数和顺序不一定与原始表中的字段个数和顺序一致但必须保证值和字段一一对应；
  - 3、假如表中有可以为null的字段，注意可以通过以下两种方式插入null值
    - ①字段和值都省略
    - ②字段写上，值使用null
- 4、字段和值的个数必须一致
- 5、字段名可以省略，默认所有列
- 具体案例：

```sql
SELECT * FROM beauty;
#1.插入的值的类型要与列的类型一致或兼容
INSERT INTO beauty(id,NAME,sex,borndate,phone,photo,boyfriend_id)
VALUES(13,'唐艺昕','女','1990-4-23','1898888888',NULL,2);

#2.不可以为null的列必须插入值。可以为null的列如何插入值？
    #方法一：字段写上，值使用null
    INSERT INTO beauty(id,NAME,sex,borndate,phone,photo,boyfriend_id)
    VALUES(13,'唐艺昕','女','1990-4-23','1898888888',NULL,2);

    #方法二：字段和值都省略
    INSERT INTO beauty(id,NAME,sex,phone)
    VALUES(15,'娜扎','女','1388888888');

#3.列的顺序是否可以调换（可以）
INSERT INTO beauty(NAME,sex,id,phone)
VALUES('蒋欣','女',16,'110');

#4.列数和值的个数必须一致
INSERT INTO beauty(NAME,sex,id,phone)
VALUES('关晓彤','女',17,'110');

#5.可以省略列名，默认所有列，而且列的顺序和表中列的顺序一致
INSERT INTO beauty
VALUES(18,'张飞','男',NULL,'119',NULL,NULL);

```



### （二）方式二 

 ==结合SET插入单条记录==

- 语法：insert into 表名 set 列名=值,列名=值,…

```sql
INSERT INTO beauty SET id=19,NAME=‘刘涛’,phone=‘999’;
```



### （三）两种方式的区别

```sql
1.方式一支持一次插入单行或多行，语法如下：
insert into 表名【(字段名,..)】 values(值，..),(值，...),...;
2.方式一支持子查询，语法如下：
    insert into 表名 查询语句;
    
#1、方式一支持插入多行,方式二不支持
INSERT INTO beauty
VALUES(23,'唐艺昕1','女','1990-4-23','1898888888',NULL,2)
,(24,'唐艺昕2','女','1990-4-23','1898888888',NULL,2)
,(25,'唐艺昕3','女','1990-4-23','1898888888',NULL,2);

#2、方式一支持子查询，方式二不支持
INSERT INTO beauty(id,NAME,phone) SELECT 26,'宋茜','11809866';

INSERT INTO beauty(id,NAME,phone) 
SELECT id,boyname,'1234567' FROM boys WHERE id<3;       
 
```



## 二、修改语句

- 修改单表的记录★

- 语法：update 表名 set 列=新值,列=新值,… where 筛选条件;

- 案例

  ```sql
  #1.修改单表的记录
  #案例1：修改beauty表中姓唐的女神的电话为13899888899
  UPDATE beauty SET phone = '13899888899'
  WHERE NAME LIKE '唐%';
  
  #案例2：修改boys表中id好为2的名称为张飞，魅力值 10
  UPDATE boys SET boyname='张飞',usercp=10
  WHERE id=2;
  
  ```

- 修改多表的记录【补充】

- sql92语法：update 表1 别名,表2 别名 set 列=值,… where 连接条件 and 筛选条件;

- sql99语法：update 表1 别名 inner|left|right join 表2 别名 on 连接条件 set 列=值,… where 筛选条件;

- 案例

  ```sql
  #2.修改多表的记录
  #案例 1：修改张无忌的女朋友的手机号为114
  UPDATE boys bo
  INNER JOIN beauty b ON bo.`id`=b.`boyfriend_id`
  SET b.`phone`='119',bo.`userCP`=1000
  WHERE bo.`boyName`='张无忌';
  
  #案例2：修改没有男朋友的女神的男朋友编号都为2号
  UPDATE boys bo
  RIGHT JOIN beauty b ON bo.`id`=b.`boyfriend_id`
  SET b.`boyfriend_id`=2 WHERE bo.`id` IS NULL;
  
  ```

  

## 三、删除语句

### （一）方式一（delete）

- 语法

```sql
1、单表的删除【★】
delete from 表名 where 筛选条件

2、多表的删除【补充】
sql92语法：
delete 表1的别名,表2的别名
from 表1 别名,表2 别名
where 连接条件
and 筛选条件;

sql99语法：
delete 表1的别名,表2的别名
from 表1 别名
inner|left|right join 表2 别名 on 连接条件
where 筛选条件;

```

- 案例

```sql
#1.单表的删除
#案例：删除手机号以9结尾的女神信息
DELETE FROM beauty WHERE phone LIKE '%9';
SELECT * FROM beauty;

#2.多表的删除
#案例：删除张无忌的女朋友的信息
DELETE b
FROM beauty b
INNER JOIN boys bo ON b.`boyfriend_id` = bo.`id`
WHERE bo.`boyName`='张无忌';

#案例：删除黄晓明的信息以及他女朋友的信息
DELETE b,bo
FROM beauty b
INNER JOIN boys bo ON b.`boyfriend_id`=bo.`id`
WHERE bo.`boyName`='黄晓明';

```

### （二）方式二（truncate）

```sql
语法：truncate table 表名;
TRUNCATE TABLE boys ;

```



### （三）两种方式的区别【面试题】★

```sql
1.delete 可以加where 条件，truncate不能加
2.truncate删除，效率高一点
3.假如要删除的表中有自增长列，
  如果用delete删除后，再插入数据，自增长列的值从断点开始，而truncate删除后，再插入数据，自增长列的值从1开始。
4.truncate删除没有返回值，delete删除有返回值
5.truncate删除不能回滚，delete删除可以回滚.

```

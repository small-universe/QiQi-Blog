---
title: Redis 基础
category: 数据库
tags:
 - redis
---

## 一、Redis 简介

### （一）Redis 简介

Redis 是完全开源免费的，遵守BSD协议，是一个高性能的key-value数据库。

Redis 与其他 key - value 缓存产品有以下三个特点：

- Redis支持数据的持久化，可以将内存中的数据保持在磁盘中，重启的时候可以再次加载进行使用。
- Redis不仅仅支持简单的key-value类型的数据，同时还提供list，set，zset，hash等数据结构的存储。
- Redis支持数据的备份，即master-slave（主从）模式的数据备份。

------

### （二）Redis 优势

- 性能极高 – Redis能读的速度是110000次/s,写的速度是81000次/s 。

- 丰富的数据类型 – Redis支持二进制案例的 Strings, Lists, Hashes, Sets 及 Ordered Sets 数据类型操作。

- 原子 – Redis的所有操作都是原子性的，同时Redis还支持对几个操作合并后的原子性执行。

  意思就是要么成功执行要么失败完全不执行。

  单个操作是原子性的。多个操作也支持事务，即原子性，通过MULTI和EXEC指令包起来。

- 丰富的特性 – Redis还支持 publish/subscribe, 通知, key 过期等等特性。

------

### （三）Redis与其他key-value存储有什么不同？

- Redis有着更为复杂的数据结构并且提供对他们的原子性操作，这是一个不同于其他数据库的进化路径。Redis的数据类型都是基于基本数据结构的同时对程序员透明，无需进行额外的抽象。
- Redis运行在内存中但是可以持久化到磁盘，所以在对不同数据集进行高速读写时需要权衡内存，应为数据量不能大于硬件内存。在内存数据库方面的另一个优点是， 相比在磁盘上相同的复杂的数据结构，在内存中操作起来非常简单，这样Redis可以做很多内部复杂性很强的事情。 同时，在磁盘格式方面他们是紧凑的以追加的方式产生的，因为他们并不需要进行随机访问。

## 二、Redis的安装

参照：https://www.w3cschool.cn/redis/redis-install.html

启动命令

```sh
# 服务端
redis-server.exe redis.conf
# 客户端
redis-cli.exe -h 127.0.0.1 -p 6379 
```



## 三、Redis 配置

Redis 的配置文件位于 Redis 安装目录下，文件名为 redis.conf。

### （一）查看配置

你可以通过 **CONFIG** 命令查看或设置配置项。

**语法**

Redis CONFIG 命令格式如下：

```sh
# redis命令可以忽略大小写
127.0.0.1:6379> CONFIG GET CONFIG_SETTING_NAME 
或
127.0.0.1:6379> config get CONFIG_SETTING_NAME 
```

**实例**

```sh
127.0.0.1:6379> CONFIG GET loglevel
1) "loglevel"
2) "notice"
```

使用 ***** 号获取所有配置项：

**实例**

```sh
127.0.0.1:6379>CONFIG GET *
  1) "dbfilename"
  2) "dump.rdb"
  3) "requirepass"
  4) ""
  5) "masterauth"
  6) ""
  7) "unixsocket"
  8) ""
  9) "logfile"
 10) ""
 11) "pidfile"
 12) "/var/run/redis.pid"
 13) "maxmemory"
 14) "0"
 15) "maxmemory-samples"
 16) "3"
 17) "timeout"
 18) "0"
 19) "tcp-keepalive"
 20) "0"
 21) "auto-aof-rewrite-percentage"
 22) "100"
 23) "auto-aof-rewrite-min-size"
 24) "67108864"
 25) "hash-max-ziplist-entries"
 26) "512"
 27) "hash-max-ziplist-value"
 28) "64"
 29) "list-max-ziplist-entries"
 30) "512"
 31) "list-max-ziplist-value"
 32) "64"
 33) "set-max-intset-entries"
 34) "512"
 35) "zset-max-ziplist-entries"
 36) "128"
 37) "zset-max-ziplist-value"
 38) "64"
 39) "hll-sparse-max-bytes"
 40) "3000"
 41) "lua-time-limit"
 42) "5000"
 43) "slowlog-log-slower-than"
 44) "10000"
 45) "latency-monitor-threshold"
 46) "0"
 47) "slowlog-max-len"
 48) "128"
 49) "port"
 50) "6379"
 51) "tcp-backlog"
 52) "511"
 53) "databases"
 54) "16"
 55) "repl-ping-slave-period"
 56) "10"
 57) "repl-timeout"
 58) "60"
 59) "repl-backlog-size"
 60) "1048576"
 61) "repl-backlog-ttl"
 62) "3600"
 63) "maxclients"
 64) "4064"
 65) "watchdog-period"
 66) "0"
 67) "slave-priority"
 68) "100"
 69) "min-slaves-to-write"
 70) "0"
 71) "min-slaves-max-lag"
 72) "10"
 73) "hz"
 74) "10"
 75) "no-appendfsync-on-rewrite"
 76) "no"
 77) "slave-serve-stale-data"
 78) "yes"
 79) "slave-read-only"
 80) "yes"
 81) "stop-writes-on-bgsave-error"
 82) "yes"
 83) "daemonize"
 84) "no"
 85) "rdbcompression"
 86) "yes"
 87) "rdbchecksum"
 88) "yes"
 89) "activerehashing"
 90) "yes"
 91) "repl-disable-tcp-nodelay"
 92) "no"
 93) "aof-rewrite-incremental-fsync"
 94) "yes"
 95) "appendonly"
 96) "no"
 97) "dir"
 98) "/home/deepak/Downloads/redis-2.8.13/src"
 99) "maxmemory-policy"
100) "volatile-lru"
101) "appendfsync"
102) "everysec"
103) "save"
104) "3600 1 300 100 60 10000"
105) "loglevel"
106) "notice"
107) "client-output-buffer-limit"
108) "normal 0 0 0 slave 268435456 67108864 60 pubsub 33554432 8388608 60"
109) "unixsocketperm"
110) "0"
111) "slaveof"
112) ""
113) "notify-keyspace-events"
114) ""
115) "bind"
116) ""
```

### （二）编辑配置

你可以通过修改 redis.conf 文件或使用 **CONFIG set** 命令来修改配置。

**语法**

**CONFIG SET** 命令基本语法：

```sh
127.0.0.1:6379> CONFIG SET CONFIG_SETTING_NAME NEW_CONFIG_VALUE
```

**实例**

```sh
127.0.0.1:6379> CONFIG SET loglevel "verbose"
OK
127.0.0.1:6379> CONFIG GET loglevel

1) "loglevel"
2) "verbose"
```



### （三）参数说明

redis.conf 配置项说明如下：

1. Redis默认不是以守护进程的方式运行，可以通过该配置项修改，使用yes启用守护进程

    **daemonize no**

2. 当Redis以守护进程方式运行时，Redis默认会把pid写入/var/run/redis.pid文件，可以通过pidfile指定

   **pidfile /var/run/redis.pid**

3. 指定Redis监听端口，默认端口为6379，作者在自己的一篇博文中解释了为什么选用6379作为默认端口，因为6379在手机按键上MERZ对应的号码，而MERZ取自意大利歌女Alessia Merz的名字

   **port 6379**

4. 绑定的主机地址

   **bind 127.0.0.1**

5. 当 客户端闲置多长时间后关闭连接，如果指定为0，表示关闭该功能

   **timeout 300**

6. 指定日志记录级别，Redis总共支持四个级别：debug、verbose、notice、warning，默认为verbose

   **loglevel verbose**

7. 日志记录方式，默认为标准输出，如果配置Redis为守护进程方式运行，而这里又配置为日志记录方式为标准输出，则日志将会发送给/dev/null

   **logfile stdout**

8. 设置数据库的数量，默认数据库为0，可以使用SELECT `<dbid>`命令在连接上指定数据库id

   **databases 16**

9. 指定在多长时间内，有多少次更新操作，就将数据同步到数据文件，可以多个条件配合

   **save `<seconds>` `<changes>`**

   Redis默认配置文件中提供了三个条件：

   **save 900 1**

   **save 300 10**

   **save 60 10000**

   分别表示900秒（15分钟）内有1个更改，300秒（5分钟）内有10个更改以及60秒内有10000个更改。

10. 指定存储至本地数据库时是否压缩数据，默认为yes，Redis采用LZF压缩，如果为了节省CPU时间，可以关闭该选项，但会导致数据库文件变的巨大

     **rdbcompression yes**

11. 指定本地数据库文件名，默认值为dump.rdb

    **dbfilename dump.rdb**

12. 指定本地数据库存放目录

    **dir ./**

13. 设置当本机为slav服务时，设置master服务的IP地址及端口，在Redis启动时，它会自动从master进行数据同步

    **slaveof `<masterip>` `<masterport>`**

14. 当master服务设置了密码保护时，slav服务连接master的密码

    **masterauth `<master-password>`**

15. 设置Redis连接密码，如果配置了连接密码，客户端在连接Redis时需要通过AUTH `<password>`命令提供密码，默认关闭**requirepass foobared**

16. 设置同一时间最大客户端连接数，默认无限制，Redis可以同时打开的客户端连接数为Redis进程可以打开的最大文件描述符数，如果设置 maxclients 0，表示不作限制。当客户端连接数到达限制时，Redis会关闭新的连接并向客户端返回max number of clients reached错误信息

    **maxclients 128**

17. 指定Redis最大内存限制，Redis在启动时会把数据加载到内存中，达到最大内存后，Redis会先尝试清除已到期或即将到期的Key，当此方法处理 后，仍然到达最大内存设置，将无法再进行写入操作，但仍然可以进行读取操作。Redis新的vm机制，会把Key存放内存，Value会存放在swap区

     **maxmemory `<bytes>`**

18. 指定是否在每次更新操作后进行日志记录，Redis在默认情况下是异步的把数据写入磁盘，如果不开启，可能会在断电时导致一段时间内的数据丢失。因为 redis本身同步数据文件是按上面save条件来同步的，所以有的数据会在一段时间内只存在于内存中。默认为no

     **appendonly no**

19. 指定更新日志文件名，默认为appendonly.aof

     **appendfilename appendonly.aof**

20. 指定更新日志条件，共有3个可选值：
       **no**：表示等操作系统进行数据缓存同步到磁盘（快）
       **always**：表示每次更新操作后手动调用fsync()将数据写到磁盘（慢，安全）
       **everysec**：表示每秒同步一次（折衷，默认值）

     **appendfsync everysec**

21. 指定是否启用虚拟内存机制，默认值为no，简单的介绍一下，VM机制将数据分页存放，由Redis将访问量较少的页即冷数据swap到磁盘上，访问多的页面由磁盘自动换出到内存中（在后面的文章我会仔细分析Redis的VM机制）

     **vm-enabled no**

22. 虚拟内存文件路径，默认值为/tmp/redis.swap，不可多个Redis实例共享

     **vm-swap-file /tmp/redis.swap**

23. 将所有大于vm-max-memory的数据存入虚拟内存,无论vm-max-memory设置多小,所有索引数据都是内存存储的(Redis的索引数据 就是keys),也就是说,当vm-max-memory设置为0的时候,其实是所有value都存在于磁盘。默认值为0

     **vm-max-memory 0**

24. Redis swap文件分成了很多的page，一个对象可以保存在多个page上面，但一个page上不能被多个对象共享，vm-page-size是要根据存储的 数据大小来设定的，作者建议如果存储很多小对象，page大小最好设置为32或者64bytes；如果存储很大大对象，则可以使用更大的page，如果不 确定，就使用默认值

     **vm-page-size 32**

25. 设置swap文件中的page数量，由于页表（一种表示页面空闲或使用的bitmap）是在放在内存中的，，在磁盘上每8个pages将消耗1byte的内存。

     **vm-pages 134217728**

26. 设置访问swap文件的线程数,最好不要超过机器的核数,如果设置为0,那么所有对swap文件的操作都是串行的，可能会造成比较长时间的延迟。默认值为4

     **vm-max-threads 4**

27. 设置在向客户端应答时，是否把较小的包合并为一个包发送，默认为开启

     **glueoutputbuf yes**

28. 指定在超过一定的数量或者最大的元素超过某一临界值时，采用一种特殊的哈希算法

     **hash-max-zipmap-entries 64**

     **hash-max-zipmap-value 512**

29. 指定是否激活重置哈希，默认为开启（后面在介绍Redis的哈希算法时具体介绍）

     **activerehashing yes**

30. 指定包含其它的配置文件，可以在同一主机上多个Redis实例之间使用同一份配置文件，而同时各个实例又拥有自己的特定配置文件

     **include /path/to/local.conf**



## 四、Redis数据类型

Redis支持五种数据类型：`string（字符串）`，`hash（哈希）`，`list（列表）`，`set（集合）`及`zset(sorted set：有序集合)`。

### （一）String（字符串）

string是redis最基本的类型，你可以理解成与Memcached一模一样的类型，一个`key`对应一个`value`。

string类型是二进制安全的。意思是redis的string可以包含任何数据。比如`jpg`图片或者序列化的对象 。

string类型是Redis最基本的数据类型，一个键最大能存储512MB。

**实例**

```sh
127.0.0.1:6379> SET name "redis-base"
OK
127.0.0.1:6379> GET name
"redis-base"
```

在以上实例中我们使用了 Redis的 **SET** 和 **GET** 命令。键为 `name`，对应的值为`redis-base`。

**注意：**一个键最大能存储512MB。



### （二）Hash（哈希）

Redis hash是一个键值 `(key=>value)` 对集合。

Redis hash是一个 string类型的` field` 和 `value` 的映射表，`hash` 特别适合用于存储对象。

**实例**

```sh
127.0.0.1:6379> HMSET user:1 username password points 200
OK
127.0.0.1:6379> HGETALL user:1
1) "username"
2) "password"
3) "points"
4) "200"

```

以上实例中 `hash` 数据类型存储了包含用户脚本信息的用户对象。实例中我们使用了 Redis的 **`HMSET, HGETALL`** 命令，**`user:1`** 为键值。每个 `hash` 可以存储 2^32^ - 1个键值对（40多亿）。



### （三）List（列表）

Redis列表是简单的字符串列表，按照插入顺序排序。你可以添加一个元素到列表的头部（左边）或者尾部（右边）。

**实例**

```sh
127.0.0.1:6379> LPUSH list_1 redis
(integer) 1
127.0.0.1:6379> LPUSH list_1 mongodb
(integer) 2
127.0.0.1:6379> LPUSH list_1 rabitmq
(integer) 3
127.0.0.1:6379> LRANGE list_1 0 10
1) "rabitmq"
2) "mongodb"
3) "redis"

```

列表最多可存储 2^32^ - 1 元素 (4294967295, 每个列表可存储40多亿)。



### （四）Set（集合）

Redis的 `Set`是 `string` 类型的无序集合。

**sadd 命令**

添加一个 `string` 元素到`key` 对应的 `set` 集合中，成功返回1,如果元素已经在集合中返回0,`key` 对应的 `set` 不存在返回错误。

```cmd
sadd key member
```

**实例**

```sh
127.0.0.1:6379> sadd set_1 redis
(integer) 1
127.0.0.1:6379> sadd set_1 mongodb
(integer) 1
127.0.0.1:6379> sadd set_1 rabitmq
(integer) 1
127.0.0.1:6379> sadd set_1 rabitmq
(integer) 0
127.0.0.1:6379> smembers set_1
1) "rabitmq"
2) "mongodb"
3) "redis"

```

**注意：**以上实例中 `rabitmq` 添加了两次，但根据集合内元素的唯一性，第二次插入的元素将被忽略。

集合中最大的成员数为 2^32^- 1 (4294967295, 每个集合可存储40多亿个成员)。



### （五）zset(sorted set：有序集合)

`Redis zset` 和` set` 一样也是 `string` 类型元素的集合,且不允许重复的成员。

不同的是每个元素都会关联一个 `double` 类型的分数。redis`正是通过分数来为集合中的成员进行从小到大的排序。

`zset` 的成员是唯一的,但分数`(score)`却可以重复。

**zadd命令**

添加元素到集合，元素在集合中存在则更新对应 `score`

```sh
zadd key score member 
```

**实例**

```sh
127.0.0.1:6379> zadd zset_1 0 redis
(integer) 1
127.0.0.1:6379> zadd zset_1 0 rabbitmq
(integer) 1
127.0.0.1:6379> zadd zset_1 0 mysql
(integer) 1
127.0.0.1:6379> zrangebyscore zset_1 0 100
1) "mysql"
2) "rabbitmq"
3) "redis"

```






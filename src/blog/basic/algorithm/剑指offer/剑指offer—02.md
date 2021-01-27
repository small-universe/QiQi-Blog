# 替换空格
====

* * *

**题目链接：** [替换空格](https://www.nowcoder.com/practice/4060ac7e3e404ad1a894ef3e17650423?tpId=13&&tqId=11155&rp=1&ru=/ta/coding-interviews&qru=/ta/coding-interviews/question-ranking)

**题目描述：** 将一个字符串中的空格替换成“%20”。 例如： 当字符串为 We Are Happy.则经过替换之后的字符串为 We%20Are%20Happy。

**题目要求：** 时间限制：C/C++ 1秒，其他语言2秒 空间限制：C/C++ 32M，其他语言64M

**难度系数：** 较难

**考察知识点：** 字符串

**解题思路：** 使用 StringBuilder、 StringBuffer 类动态添加字符串

**代码实现：**

```java
public class No02 {
     public static void main(String[] args){
         //测试代码
         Solution solution = new No02().new Solution();
         String str = "We Are Happy";
         StringBuffer sb = new StringBuffer(str);
         System.out.println(solution.replaceSpace(sb));
 ​
     }
     //牛客网代码
     public class Solution {
         //熟知Java中常用字符串相关API解题就很快
         //tips：String、StringBuffer和StringBuilder的区别？
         public String replaceSpace(StringBuffer str) {
             if (str == null) {
                 return null;
             }
             StringBuffer sb = new StringBuffer();
             for (int i = 0; i < str.length(); i++) {
                 if (str.charAt(i) == ' ') {
                     sb.append("%20");
                 }else {
                     sb.append(str.charAt(i));
                 }
             }
             return String.valueOf(sb);
         }
     }
 }
 ​
```

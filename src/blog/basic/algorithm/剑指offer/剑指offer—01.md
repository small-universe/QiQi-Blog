---
# 这是页面的图标
icon: page
# 这是文章的标题
title: 剑指offer-01
# 设置作者
author: 南辞
# 设置写作时间
time: 2021-01-01
# 一个页面只能有一个分类
category: 算法题解
# 一个页面可以有多个标签
tag:
    - 算法
    - 数组
---

`二维数组中的查找`
<!-- more -->


**题目链接：** [二维数组中的查找](https://www.nowcoder.com/practice/abc3fe2ce8e146608e868a70efebf62e?tpId=13&tqId=11154&tPage=1&rp=1&ru=/ta/coding-interviews&qru=/ta/coding-interviews/question-ranking)

**题目描述：** 在一个二维数组中， 每一行都按照从左到右递增的顺序排序， 每一列都按照从上到下递增的顺序排序。 请完成一个函 数， 输入这样的一个二维数组和一个整数， 判断数组中是否含有该整数。

**题目要求：** 时间限制：C/C++ 1秒，其他语言2秒 空间限制：C/C++ 32M

**难度系数：** 较难

**考察知识点：** 查找、数组

**解题思路：** 从右上角或左下角开始找， 逐行排除， 或者用二分法查找

**代码实现：**

```java
 public class No01 {
     public static void main(String[] args){
         //测试代码
         Solution solution = new No01().new Solution();
         int[][] arr = {{1, 2, 8, 9},
                 {2, 4, 9, 12},
                 {4, 7, 10, 13},
                 {6, 8, 11, 15}};
         System.out.println(solution.find1(arr, 7));
 ​
     }
 ​
     //牛客网代码
     public class Solution {
         //解法一：逐行排除，双指针
         //从二维数组的右上角开始逐行查找
         //时间复杂度： O(mn)， 空间复杂度： O(1)
         public boolean find1(int[][] array, int target) {
             if (array == null || array.length == 0) {
                 return false;
             }
             int row = 0;
             int column = array[0].length - 1;
             while (row < array.length && column >= 0) {
                 if (array[row][column] == target) {
                     return true;
                 }
                 if (array[row][column] > target) {
                     column--;
                 } else {
                     row++;
                 }
             }
             return false;
         }
         //解法二： 二分法
         //时间复杂度： O(log mn)， 空间复杂度： O(1)
 ​
         //以下是经典的错误解法，除非要求数组的每一行的元素值比上一行的所有元素都大，
         //所以这只能针对一些特例
         public boolean find2(int[][] array, int target) {
             if (array == null || array.length == 0) {
                 return false;
             }
             int left = 0;
             int right = array.length * array[0].length - 1;
             int col = array[0].length;
             int mid,value;
             while (left <= right) {
                 mid = (left + right) / 2;
                 value = array[mid / col][mid % col];
                 if (value == target) {
                     return true;
                 } else if (value < target) {
                     left = mid + 1;
                 } else {
                     right = mid - 1;
                 }
             }
             return false;
         }
         //正确解法,依次对每一行（或列）使用二分查找
         public boolean find3(int[][] array, int target) {
             if (array == null || array.length == 0) {
                 return false;
             }
             int left = 0;
             int right = array[0].length - 1;
             int mid,value;
             for (int row=0; row<= array.length-1;row++) {
                 left = 0;
                 right = array[0].length - 1;
                 while(left<=right){
                     mid = (left + right) / 2;
                     value = array[row][mid];
                     if (value == target) {
                         return true;
                     } else if (value < target) {
                         left = mid + 1;
                     } else {
                         right = mid - 1;
                     }
                 }
             }
             return false;
         }
     }
 }
```

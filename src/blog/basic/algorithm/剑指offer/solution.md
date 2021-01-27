---
# 这是页面的图标
icon: page
# 这是文章的标题
title: 剑指offer题解
# 设置作者
author: 南辞
# 设置写作时间
time: 2020-05-28
# 一个页面只能有一个分类
category: 算法题解
# 一个页面可以有多个标签
tags:
  - 算法
  - 剑指offer
  - 牛客网
---

## 剑指offer-01

**题目链接：** [二维数组中的查找](https://www.nowcoder.com/practice/abc3fe2ce8e146608e868a70efebf62e?tpId=13&tqId=11154&tPage=1&rp=1&ru=/ta/coding-interviews&qru=/ta/coding-interviews/question-ranking)

**题目描述：** 在一个二维数组中， 每一行都按照从左到右递增的顺序排序， 每一列都按照从上到下递增的顺序排序。 请完成一个函 数， 输入这样的一个二维数组和一个整数， 判断数组中是否含有该整数。

**题目要求：** 时间限制：C/C++ 1秒，其他语言2秒 空间限制：C/C++ 32M

**难度系数：** 较难

**考察知识点：** 查找、数组

**解题思路：** 从右上角或左下角开始找， 逐行排除， 或者用二分法查找

**代码实现：**
::: tip 提示
思考后查看参考代码，若参考代码有误或有可改进的地方，评论区留言
:::
::: details 参考代码
```java {12-87}
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
:::



------



## 剑指offer-02

**题目链接：** [替换空格](https://www.nowcoder.com/practice/4060ac7e3e404ad1a894ef3e17650423?tpId=13&&tqId=11155&rp=1&ru=/ta/coding-interviews&qru=/ta/coding-interviews/question-ranking)

**题目描述：** 将一个字符串中的空格替换成“%20”。 例如： 当字符串为 We Are Happy.则经过替换之后的字符串为 We%20Are%20Happy。

**题目要求：** 时间限制：C/C++ 1秒，其他语言2秒 空间限制：C/C++ 32M，其他语言64M

**难度系数：** 较难

**考察知识点：** 字符串

**解题思路：** 使用 StringBuilder、 StringBuffer 类动态添加字符串

**代码实现：**
::: tip 提示
思考后查看参考代码，若参考代码有误或有可改进的地方，评论区留言
:::
::: details 参考代码
```java {10-28}
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
:::


------



## 剑指offer-03

**题目链接：** [从尾到头打印链表](https://www.nowcoder.com/practice/d0267f7f55b3412ba93bd35cfa8e8035?tpId=13&&tqId=11156&rp=1&ru=/ta/coding-interviews&qru=/ta/coding-interviews/question-ranking)

**题目描述：** 输入一个链表，按链表从尾到头的顺序返回一个ArrayList。

**题目要求：** 时间限制：C/C++ 1秒，其他语言2秒 空间限制：C/C++ 32M，其他语言64M

**难度系数：** 较难

**考察知识点：** 链表

**解题思路：** 第一种方法是利用栈来实现；第二种方法是利用递归；还有另外一种方法是利用三个指针先把链表反转。

**代码实现：**
::: tip 提示
思考后查看参考代码，若参考代码有误或有可改进的地方，评论区留言
:::
::: details 参考代码
```java {32-91}
 import java.util.ArrayList;
 import java.util.Iterator;
 import java.util.Stack;
 public class No03 {
     public static void main(String[] args){
         //测试代码
         Solution solution = new No03().new Solution();
         ListNode ListNode1 = new ListNode(1);
         ListNode ListNode2 = new ListNode(2);
         ListNode ListNode3 = new ListNode(3);
         ListNode ListNode4 = new ListNode(4);
         ListNode ListNode5 = new ListNode(5);
         ListNode1.next = ListNode2;
         ListNode2.next = ListNode3;
         ListNode3.next = ListNode4;
         ListNode4.next = ListNode5;
         ArrayList<Integer> list = solution.printListFromTailToHead(ListNode1);
         Iterator<Integer> it = list.iterator();
         while (it.hasNext()){
             System.out.print(it.next()+" ");
         }
         System.out.println();
         ArrayList<Integer> list2 = solution.printListFromTailToHead2(ListNode1);
         list2.forEach(item->{
             System.out.print(item+" ");
         });
         System.out.println();
         ArrayList<Integer> list3 = solution.printListFromTailToHead3(ListNode1);
         list3.forEach(System.out::print);
 ​
     }
     //牛客网代码
     public class Solution {
         //解法一：借用栈，时间复杂度O(n)，空间复杂度O(n)
         public ArrayList<Integer> printListFromTailToHead(ListNode ListNode) {
             ArrayList<Integer> list = new ArrayList<Integer>();
             Stack<ListNode> stack = new Stack<ListNode>();
             while (ListNode != null) {
                 stack.push(ListNode);
                 ListNode = ListNode.next;
             }
             while (!stack.isEmpty()) {
                 list.add(stack.pop().val);
             }
             return list;
         }
         //解法二：递归，时间复杂度O(n)，空间复杂度O(n)
         public ArrayList<Integer> printListFromTailToHead2(ListNode ListNode) {
             ArrayList<Integer> list = new ArrayList<>();
             if(ListNode != null){
                 if(ListNode.next != null){
                     list = printListFromTailToHead2(ListNode.next);
                 }
                 list.add(ListNode.val);
             }
             return list;
         }
         //解法三：单链表反转，时间复杂度O(n)，空间复杂度O(1)
         public ArrayList<Integer> printListFromTailToHead3(ListNode ListNode) {
             ArrayList<Integer> list = new ArrayList<>();
             if(ListNode == null){
                 return list;
             }
             //第一个结点
             ListNode head = ListNode;
             //游标
             ListNode cur = ListNode.next;
             //让第一个结点的next域指向空
             head.next = null;
             ListNode temp;
             while(cur != null){
                 temp = cur.next;
                 cur.next = head;
                 head = cur;
                 cur =temp;
             }
 ​
             while(head != null){
                 list.add(head.val);
                 head = head.next;
             }
             return list;
         }
     }
     static class ListNode {
         int val;
         ListNode next = null;
         ListNode(int val) {
             this.val = val;
         }
     }
 }
```
:::


------



## 剑指offer-04

**题目链接：** [重建二叉树](https://www.nowcoder.com/practice/8a19cbe657394eeaac2f6ea9b0f6fcf6?tpId=13&&tqId=11157&rp=1&ru=/ta/coding-interviews&qru=/ta/coding-interviews/question-ranking)

**题目描述：** 输入某二叉树的前序遍历和中序遍历的结果，请重建出该二叉树。假设输入的前序遍历和中序遍历的结果中都不含重复的 数字。 例如输入前序遍历序列{1,2,4,7,3,5,6,8}和中序遍历序列{4,7,2,1,5,3,8,6}，则重建二叉树并返回。

**题目要求：** 时间限制：C/C++ 1秒，其他语言2秒 空间限制：C/C++ 32M，其他语言64M

**难度系数：** 较难

**考察知识点：** 树、DFS、数组

**解题思路：** 前序遍历的第一个节点就是树的根节点，所以我们先根据前序遍历序列的第一个数字创建根结点，接下来在中序 遍历序列中找到根结点的位置，根节点的左边就是左子树，右边就是右子树，这样就能确定左、右子树结点的数量。 在前序遍历和中序遍历的序列中划分了左、右子树结点的值之后，就可以递归地去分别构建它的左右子树。

**代码实现：**
::: tip 提示
思考后查看参考代码，若参考代码有误或有可改进的地方，评论区留言
:::
::: details 参考代码
```java {19-107}
 import java.util.Arrays;
 import java.util.LinkedList;
 import java.util.Queue;
 import java.util.Arrays;
 public class No04 {
     public static void main(String[] args){
         //测试代码
         Solution solution = new No04().new Solution();
         int[] preOrder = {1,2,4,7,3,5,6,8};
         int[] inOrder = {4,7,2,1,5,3,8,6};
         TreeNode tree1 = solution.reConstructBinaryTree(preOrder, inOrder);
         //层次遍历输出验证
         solution.LevelOrder(tree1);
         TreeNode tree2 = solution.reConstructBinaryTree2(preOrder, inOrder);
         solution.LevelOrder(tree2);
 ​
 ​
     }
     //牛客网代码
     public class Solution {
         //解法一： 递归（传入数组的拷贝） ，时间复杂度O(logn)，空间复杂度O(nlogn)
         public TreeNode reConstructBinaryTree(int[] pre, int[] in) {
             if (pre == null || in == null || pre.length == 0 || in.length == 0||pre.length != in.length)
             {
                 return null;
             }
             TreeNode root = new TreeNode(pre[0]);
             for (int i = 0; i < pre.length; i++) {
                 if (pre[0] == in[i]) {
                     root.left = reConstructBinaryTree(Arrays.copyOfRange(pre, 1,
                             i +1), Arrays.copyOfRange(in, 0, i));
                     root.right = reConstructBinaryTree(Arrays.copyOfRange(pre,
                             i + 1, pre.length), Arrays.copyOfRange(in, i + 1, in.length));
                 }
             }
             return root;
         }
         //解法二： 递归（传入子数组的边界索引） ，时间复杂度O(logn)，空间复杂度O(n)
         public TreeNode reConstructBinaryTree2(int[] pre, int[] in) {
             if (pre == null || in == null || pre.length == 0 || in.length == 0 || pre.length != in.length) {
                 return null;
             }
             int n = pre.length;
             return constructBinaryTree(pre, 0, n - 1, in, 0, n - 1);
         }
         private TreeNode constructBinaryTree(int[] pre, int startPre, int endPre, int[] in, int startIn, int endIn) {
             TreeNode root = new TreeNode(pre[startPre]);
             if (startPre == endPre) {
                 if (startIn == endIn && pre[startPre]==in[startIn]) {
                     return root;
                 }
                 throw new IllegalArgumentException("Invalid input!");
             }
 ​
             //找到根结点
             int inOrder = startIn;
             while (in[inOrder] != pre[startPre]) {
                 inOrder++;
                 if (inOrder > endIn) {
                     new IllegalArgumentException("Invalid input!");
                 }
             }
             int len = inOrder - startIn;
             if (len > 0) {
                 // 递归构建左子树
                 root.left = constructBinaryTree(pre, startPre + 1, startPre + len, in, startIn, inOrder - 1);
             }
 ​
             if (inOrder < endIn) {
                 // 递归构建右子树
                 root.right = constructBinaryTree(pre, startPre + len + 1, endPre, in, inOrder + 1, endIn);
             }
             return root;
         }
 ​
 ​
          //树的层次遍历
         void LevelOrder(TreeNode T) {
             //创建辅助队列
             Queue<TreeNode> Q = new LinkedList<TreeNode>();
             //将根结点入队
             Q.add(T);
             //循环输出对头元素
             while (!Q.isEmpty()){
                 TreeNode node = Q.poll();
                 System.out.print(node.val);
                 //分别将二叉树的左右结点入队
                 if (node.left!=null){
                     Q.add(node.left);
                 }
                 if (node.right!=null){
                     Q.add(node.right);
                 }
             }
             System.out.println();
         }
 ​
     }
 ​
      public class TreeNode {
           int val;
           TreeNode left;
           TreeNode right;
           TreeNode(int x) {
               val = x;
           }
     }
 }
```
:::


------



## 剑指offer-05

**题目链接：** [用两个栈实现队列](https://www.nowcoder.com/practice/54275ddae22f475981afa2244dd448c6?tpId=13&&tqId=11158&rp=1&ru=/ta/coding-interviews&qru=/ta/coding-interviews/question-ranking)

**题目描述：** 用两个栈来实现一个队列，完成队列的Push和Pop操作。 队列中的元素为int类型。

**题目要求：** 时间限制：C/C++ 1秒，其他语言2秒 空间限制：C/C++ 64M，其他语言128M 热度指数：773101

**难度系数：** 简单

**考察知识点：** 栈

**解题思路：** push 动作都在 stack1 中进行，需要进行判满：stack2为空时队列不满，stack2不为空且stack1不满时队列不满，只有在 stack2不为空且stack1满的时候将队列视为已满

 pop 动作在stack2中进行。当 stack2 不为空时，直接 pop，当 stack2 为空时，先把 stack1 中的元素 pop 出来并push 到 stack2 中，再从 stack2 中 pop 元素。当两个stack都为空时队列为空

**代码实现：**
::: tip 提示
思考后查看参考代码，若参考代码有误或有可改进的地方，评论区留言<br/>
Java中Stack可以自动扩容，不需要判满，如果自定义栈结构的话需要上述完整步骤
:::
::: details 参考代码
```java {13-41}
import java.util.Stack;
public class No05 {
    public static void main(String[] args){
        //测试代码
        Solution solution = new No05().new Solution();
        //System.out.println(solution.pop());
        solution.push(2);
        solution.push(3);
        solution.push(4);
        System.out.println(solution.pop());

    }
    //牛客网代码
    public class Solution {
        Stack<Integer> stack1 = new Stack<Integer>();
        Stack<Integer> stack2 = new Stack<Integer>();

        // 入栈，时间复杂度：O(1)，空间复杂度：O(n)
        public void push(int node) {
            stack1.push(node);
        }

        // 出栈，时间复杂度：O(1)，空间复杂度：O(1)
        public int pop() {
            if (this.isEmpty()){
                throw new RuntimeException("Queue is empty!");
            }
            if (stack2.isEmpty()){
                while (!stack1.isEmpty()){
                    stack2.push(stack1.pop());
                }
            }
            return stack2.pop();
        }
        public boolean isEmpty(){
            if (stack2.isEmpty() && stack1.isEmpty()){
                return true;
            }
            return false;
        }
    }
}
```
:::

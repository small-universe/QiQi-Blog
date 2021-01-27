# 从尾到头打印链表
========

* * *

**题目链接：** [从尾到头打印链表](https://www.nowcoder.com/practice/d0267f7f55b3412ba93bd35cfa8e8035?tpId=13&&tqId=11156&rp=1&ru=/ta/coding-interviews&qru=/ta/coding-interviews/question-ranking)

**题目描述：** 输入一个链表，按链表从尾到头的顺序返回一个ArrayList。

**题目要求：** 时间限制：C/C++ 1秒，其他语言2秒 空间限制：C/C++ 32M，其他语言64M

**难度系数：** 较难

**考察知识点：** 链表

**解题思路：** 第一种方法是利用栈来实现；第二种方法是利用递归；还有另外一种方法是利用三个指针先把链表反转。

**代码实现：**

```java
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

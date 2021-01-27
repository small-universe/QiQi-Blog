---
title: LeetCode题解
date: 2020-05-28
category: 算法题解
tags:
  - 算法
  - LeetCode
---


<h1 align="center">LeetCode</h1>

## P0014

::: tip  题目

编写一个函数来查找字符串数组中的最长公共前缀。如果不存在公共前缀，返回空字符串 ""。
     

 **示例 1：**

输入：strs = ["flower","flow","flight"]

输出："fl"



**示例 2：**

输入：strs = ["dog","racecar","car"]

输出：""

解释：输入不存在公共前缀。
      

**提示：**

0 <= strs.length <= 200

0 <= strs[i].length <= 200

strs[i] 仅由小写英文字母组成

Related Topics 字符串

👍 1415 👎 0

:::

::: details 参考代码
```java
package leetcode.editor.cn;
public class P14_LongestCommonPrefix {
	public static void main(String[] args) {
	//测试代码
    	Solution solution = new P14_LongestCommonPrefix().new Solution();
    	String[] strs = {"flower","flow","flight"};
		System.out.println(solution.longestCommonPrefix(strs));
	}
	//力扣代码
//leetcode submit region begin(Prohibit modification and deletion)
class Solution {
	/**
	 * 我们要想寻找最长公共前缀，那么首先这个前缀是公共的，我们可以从任意一个元素中找到它。
	 * 假定我们现在就从一个数组中寻找最长公共前缀，
	 * (1)那么首先，我们可以将第一个元素设置为基准元素x0。假如数组为["flow","flower","flight"]，
	 *    flow就是我们的基准元素x0
	 * (2)然后我们只需要依次将基准元素和后面的元素进行比较（假定后面的元素依次为x1,x2,x3....），不断更
	 *    新基准元素，直到基准元素和所有元素都满足最长公共前缀的条件，就可以得到最长公共前缀。
	 *
	 *  具体比对过程如下：
	 *  (1)如果strings.Index(x1,x) == 0，则直接跳过（因为此时x就是x1的最长公共前缀），对比下一个元素。
	 *    （如flower和flow进行比较）
	 *  (2)如果strings.Index(x1,x) != 0, 则去掉基准元素x的最后一个元素，再次和x1进行比较，直至满足
	 *     string.Index(x1,x) == 0，此时截取后的x为x和x1的最长公共前缀。（如flight和flow进行比较，依
	 *     次截取出flow-flo-fl，直到fl被截取出，此时fl为flight和flow的最长公共前缀）
	 *  我们需要注意的是，在处理基准元素的过程中，如果基准元素和任一一个元素无法匹配，则说明不存在最长公共元素。
	 *  最后，我们记得处理一下临界条件。如果给定数组是空，也说明没有最长公共元素。
	 */
    public String longestCommonPrefix(String[] strs) {
    	if (strs.length==0){
    		return "";
		}
    	String prefix = strs[0];
		for (int i = 1; i < strs.length; i++) {
			if (prefix.length()==0){
				return "";
			}
			while (strs[i].indexOf(prefix)!=0){
				prefix = prefix.substring(0,prefix.length()-2);
			}
		}
    	return prefix;
    }
}
//leetcode submit region end(Prohibit modification and deletion)

}
```
::: 

---



## P0027

::: tip 题目

给你一个数组 nums 和一个值 val，你需要 原地 移除所有数值等于 val 的元素，并返回移除后数组的新长度。
不要使用额外的数组空间，你必须仅使用 O(1) 额外空间并 原地 修改输入数组。
元素的顺序可以改变。你不需要考虑数组中超出新长度后面的元素。 



 **示例 1:**

给定 nums = [3,2,2,3], val = 3,

函数应该返回新的长度 2, 并且 nums 中的前两个元素均为 2。

你不需要考虑数组中超出新长度后面的元素。



**示例 2:**

给定 nums = [0,1,2,2,3,0,4,2], val = 2,

函数应该返回新的长度 5, 并且 nums 中的前五个元素为 0, 1, 3, 0, 4。

注意这五个元素可为任意顺序。

你不需要考虑数组中超出新长度后面的元素。
     

**说明:**

为什么返回数值是整数，但输出的答案是数组呢?

请注意，输入数组是以「引用」方式传递的，这意味着在函数里修改输入数组对于调用者是可见的。

你可以想象内部操作如下:

```
// nums 是以“引用”方式传递的。也就是说，不对实参作任何拷贝
int len = removeElement(nums, val);
// 在函数里修改输入数组对于调用者是可见的。
// 根据你的函数返回的长度, 它会打印出数组中 该长度范围内 的所有元素。
for (int i = 0; i < len; i++) {
 print(nums[i]);
}
```

Related Topics 数组 双指针 

👍 747 👎 0

:::

::: details 参考代码
```java
package leetcode.editor.cn;

import java.util.Arrays;

public class P27_RemoveElement {
	public static void main(String[] args) {
	//测试代码
    	Solution solution = new P27_RemoveElement().new Solution();
		//int[] arr = {0,1,2,2,3,0,4,2};
		int[] arr = null;
		System.out.println(solution.removeElement(arr, 2));
	}
	//力扣代码
//leetcode submit region begin(Prohibit modification and deletion)
class Solution {
		/**
		 *只需要记录数组中值为val的个数并移动元素即可
		 */
    public int removeElement(int[] nums, int val) {
    	if (nums==null || nums.length==0){
    		return 0;
		}
		int count = 0;
		for (int i = 0; i < nums.length; i++) {
			if (nums[i]==val){
				count++;
			}
			nums[i-count] = nums[i];
		}
		nums = Arrays.copyOf(nums,nums.length-count);
		return nums.length;
    }
}
//leetcode submit region end(Prohibit modification and deletion)

}


```
:::


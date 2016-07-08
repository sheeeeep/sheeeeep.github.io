---
layout: post
title:  "基本排序算法"
categories: 算法
---

## 选择排序

>选择：总是从未排序的序列中选出最小/大的元素

### 过程

1. 从左至右遍历，找出最小/大的元素，和第一个元素交换。
2. 从剩余未排序元素中继续寻找最小（大）元素，然后与第二个元素进行交换。
3. 以此类推，直到所有元素均排序完毕。

### 代码

```javascript
for(let i=0; i<arr.length; i++) {
	let minIndex = i;
	for(let j=i+1; j<arr.lenght; j++) {
		minIndex = arr[j] < arr[minIndex] ? j : minIndex;
	}
	swap(arr, i, minIndex);
}
```

### 数据
空间复杂度：O(1)
时间复杂度：O(n2)
稳定性：不稳定

### 分析
比较次数：无论初始数据如何，都需要n2/2次
移动次数：{0，N-1}（正序，倒序）

## 插入排序

>在未排序序列中遍历，依次插入排序序列中

### 过程

1. 第一个元素视为已排序
2. 取出第二个元素，从后向前扫描排序序列，直到找到小/大于该元素的
3. 以此类推，直到所有元素均排序完毕。

### 代码

```
for(let i=1; i<arr.length; i++) {
	for(let j=i; j<=0; j--) {
		if (arr[j] < arr[j-1]){
			swap(arr, j, j-1);
		} else {
			break;
		}
	}
}
```

### 数据
空间复杂度：O(1)
时间复杂度：O(n2)
稳定性：稳定

### 分析
比较次数：{n-1, n2/2}
移动次数：{0，n2/2}（正序，倒序）

## 希尔排序

>步长减量，插入排序

### 步骤

1. 确定初始步长，将序列分为若干个子序列，对每个子序列进行擦汗如排序
2. 减少步长，重复
3. 直到步长为1

###代码
```
for(let i=1; i<arr.length; i++){
	for(let j=i; j>=h; j-=h) {
		if (arr[j] < arr[j-h]) {
			swap(arr, j, j-h);
		} else {
			break;
		}
	}
}
```

### 数据
空间复杂度：O(1)
时间复杂度：O(n2)
稳定性：稳定

### 分析
比较次数：{n-1, n2/2}
移动次数：{0，n2/2}（正序，倒序）

## 快速排序

> 选择一个基准点，比基准点大的都放在右边，比基准点都放在左边

### 步骤

1. 选择第一个元素作为基准点
2. 从后往前，找到一个小于基准点的数
3. 从前往后，找到一个大于基准点的数
4. 两个数交换位置
5. 从当前位置，重复2-4步，直到两个位置相遇

### 代码

```
function quickSort(arr, left, right){
	let i = left;
	let j = right;
	let temp = arr[0];
	while(i !== j){
		while (arr[j]>temp && j > i) { j--; }
		while (arr[i]<temp && i < j) { i++; }
		swap(arr, i, j);
	}
	arr[left] = a[i];
	a[i] = temp;
	quickSort(arr, left, i-1);
	quickSort(arr, i-1, right);
}
```

## 冒泡排序

> 从后往前，每次比较两个相邻的元素，如果他们的顺序错误就把他们交换过来。

### 代码

```
for(let i=0; i<arr.length; i++) {
	for(let j=arr.length-1; j>i; j--) {
		if (arr[j]<arr[j-1]) {
			swap(arr, j, j-1);
		}
	}
}
```

## 桶排序

> 准备大小为n的数组

```
for(let i=0; i<arr.length; i++) {
	count[arr[i]]++;
}
for(let i=0; i<count.length; i++) {
	for(let j=0; j<count[i]; j++) {
		console.log(i);
	}
}
```

时间复杂度O(n)
空间复杂度O(n)

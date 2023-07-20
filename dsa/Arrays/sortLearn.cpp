#include<iostream>
#include<bits/stdc++.h>
using namespace std;


void printArray(int arr[], int size){
	if (size==0) return;
	printArray(arr, --size);
	cout << arr[size] << " ";
}


void selectionSort(int arr[], int size){
	int ptr = 0, tmp, minIndex = 0, min = arr[0];
	while (ptr<size){
		min = arr[ptr];
		for (int i=ptr; i<size; i++){
			if (arr[i]<min){
				min = arr[i];
				minIndex = i;
			}
		}
		tmp = arr[ptr];
		arr[ptr] = arr[minIndex];
		arr[minIndex] = tmp;
		++ptr;
	}
}

void bubbleSort(int arr[], int size){	
	int ptr = size - 1, tmp, didSwap = 0;
	for (int i=0; i<size-1; i++){
		for (int j=0; j<ptr; j++){
			if (arr[j]>arr[j+1]){
				tmp = arr[j];
				arr[j] = arr[j+1];
				arr[j+1] = tmp;
				didSwap = 1;
			}
		}
		if (didSwap==0) break;
		--ptr;
	}
}

void insertionSort(int arr[], int size){
	int tmp1, tmp2, tmp;
	for (int i=0; i<size; i++){
		for (int j=i; j>0; --j){
			tmp1 = arr[j];
			tmp2 = arr[j-1];
			if (tmp2>tmp1){
				tmp = arr[j-1];
				arr[j-1] = arr[j];
				arr[j] = tmp;
			}
		}
		// cout << "\n";
	}
}


void merge(int arr[], int low, int mid, int high){
	int left = low;
	int right = mid+1;
	vector<int> tmp;
	while (left<=mid && right<=high){
		if (arr[left]<arr[right]){
			tmp.push_back(arr[left]);
			++left;
		}
		else{
			tmp.push_back(arr[right]);
			++right;
		}
	}
	while (left<=mid){
		tmp.push_back(arr[left]);
		++left;
	}
	while (right<=high){
		tmp.push_back(arr[right]);
		++right;
	}
	for (int i=low; i<=high; i++){
		arr[i] = tmp[i - low];
	}
}

void mergeSort(int arr[], int low, int high){
	if (low == high) return;
	int mid = (low + high) / 2;
	mergeSort(arr, low, mid);
	mergeSort(arr, mid+1, high);
	merge(arr, low, mid, high);
}

int main()
{
	int arr[] = {60,50,40,30,20,10}, size = 6;
	printArray(arr, size);
	cout << "\n";
	// selectionSort(arr, size);
	// bubbleSort(arr, size);
	// insertionSort(arr, size);
	// mergeSort(arr, 0, size-1);
	printArray(arr, size);
	cout << "\n";
	return 0;
}
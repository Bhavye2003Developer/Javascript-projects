// #include<iostream>
// #include<string.h>
#include<bits/stdc++.h>
using namespace std;

// int sum = 0;
int f(int n){
	// if (n==0) return;
	// // cout << "Hello ";
	// cout << n << " ";
	// // ++i;
	// f(--n);
	
	
	// if (n==0) return;
	// f(n-1);
	// cout << n << " ";
	
	
	// if (i>n) return;
	// f(n, i+1);
	// cout << i << " ";
	
	
	// if (n==0) {
	// 	cout << sum << "\n";
	// 	return;
	// }
	// f(n-1, sum+n);
	
	if (n==1) return 1;
	return n * f(n-1);
	
}


void reverseArray(int arr[], int size, int ptr){
	if (ptr==size/2) return;
	int tmp = arr[ptr];
	arr[ptr] = arr[size-ptr-1];
	arr[size-ptr-1] = tmp;
	reverseArray(arr, size, ++ptr);
}

void printArray(int arr[], int size){
	if (size<0) return;
	printArray(arr, size-1);
	cout << arr[size] << " ";
}

void isPalindrome(string s, int size, int ptr){
	if (ptr>=size/2){
		cout << "Palindrome\n";
		return;
	}
	if (s[ptr]!=s[size-ptr-1]){
		cout << "Not Palindrome\n";
		return;
	}
	isPalindrome(s, size, ptr+1);
}

int power(int x, int n){
	// x**n
	
	if (n==0) return 1;
	return x * power(x, n-1);
}

int sumDigits(int n, int sum){
	if (n<=0) return sum;
	sum+=n%10;
	n/=10;
	return sumDigits(n, sum);
}

int countOccurances(int arr[], int size, int target, int count){
	if (size<0) return count;
	if (arr[size]==target) ++count;
	return countOccurances(arr, size-1, target, count);
}

bool isPrime(int n, int start){
	if (n%start==0) return false;
	if (start * start > n) return true;
	++start;
	return isPrime(n, start);
}

int fibonacci(int n){
	if (n==0) return 0;
	if (n==1) return 1;
	int last = fibonacci(n-1);
	int slast = fibonacci(n-2);
	return last + slast;
}

void subsequence(int arr[], int size, int ind,vector<int> &ds){
	if (ind == size){
		for (auto it : ds){
			cout << it << " ";
		}
		cout << "\n";
		return;
	}
	// take or not take
	ds.push_back(arr[ind]);  // take element
	subsequence(arr, size, ind+1, ds);
	ds.pop_back(); // not take that element
	subsequence(arr, size, ind+1, ds);
}

void sumSubsequence(int arr[], int size, int ind,vector<int> &ds, int target, int sum){
	if (ind==size){
		if (sum==target){
			for (auto it : ds){
				cout << it << " ";
			}
			cout << "\n";
		}
		sum = 0;
		return;
	}
	// take or not take
	ds.push_back(arr[ind]);  // take element
	sum+=arr[ind];
	sumSubsequence(arr, size, ind+1, ds, target, sum);
	ds.pop_back(); // not take that element
	sum-=arr[ind];
	sumSubsequence(arr, size, ind+1, ds, target, sum);
}

bool OnesumSubsequence(int arr[], int size, int ind,vector<int> &ds, int target, int sum){
	if (ind==size){
		if (sum==target){
			for (auto it : ds){
				cout << it << " ";
			}
			cout << "\n";
			return true;
		}
		sum = 0;
		return false;
	}
	// take or not take
	ds.push_back(arr[ind]);  // take element
	sum+=arr[ind];
	if (OnesumSubsequence(arr, size, ind+1, ds, target, sum)==true){
		return true;
	}
	ds.pop_back(); // not take that element
	sum-=arr[ind];
	if (OnesumSubsequence(arr, size, ind+1, ds, target, sum)==true){
		return true;
	}
	return false;
}


int main()
{
	
	// int arr[7] = {10,20,30,40,50,60,70}, size = 7;
	// printArray(arr, size-1);
	// cout << "\n";
	// reverseArray(arr, size, 0);
	// printArray(arr, size-1);
	
	// cout << f(5) << "\n";
	
	// string s = "Hello";
	// int size = 5;
	// isPalindrome(s, size, 0);
	
	// cout << power(5,3);
	
	// cout << sumDigits(1023, 0);
	
	// int arr[6] = {2,3,2,4,3,2}, size = 6, target = 2;
	// cout << countOccurances(arr, size-1, target, 0);
	
	// int n; cin >> n;
	// cout << isPrime(n, 2) << "\n";
	
	
	// cout << fibonacci(6);
	
	int arr[] = {3,2,1,4,5,3}, n = 6;
	vector<int> ds;
	// subsequence(arr, n, 0, ds);
	// sumSubsequence(arr, n, 0, ds, 6, 0);
	OnesumSubsequence(arr, n, 0, ds, 6, 0);
	return 0;
}
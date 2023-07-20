#include<iostream>
using namespace std;

void printArr(int arr[], int size){
    for (int i=0; i<size; i++){
        cout << arr[i] << " ";
    }
    cout << "\n";
}

int main()
{
    int arr[6] = {1,2,3,4,5,6}, size = 6;
    printArr(arr, size);

    int i = 0, j = 1, tmp;
    while (i<size && j<size){
        tmp = arr[i];
        arr[i] = arr[j];
        arr[j] = tmp;
        i+=2, j+=2;
    }
    printArr(arr, size);

    return 0;
}

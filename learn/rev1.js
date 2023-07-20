function getIntitals(fullname) {
    let final = ""
    for (let firstLetter of fullname.split(" ")) {
        final += firstLetter[0].toUpperCase()
    }
    return final
}
// console.log(getIntitals("Bhavye Jain"))

const removeDuplicates = function (arr) {
    const set = new Set(arr)
    return Array.from(set)
}
// console.log(removeDuplicates([1,2,3,2,4,1]))

const getGrade = (score) => {
    if (score >= 90) return 'A';
    if (score >= 80) return 'B'
    if (score >= 70) return 'C'
    if (score >= 60) return 'D'
    return 'F'
}

function getSubstring(string, first, last) {
    if (first >= 0 && last <= string.length) return string.slice(first, last + 1)
    return -1
}
// console.log(getSubstring("Hello World",3,8))

const countOccurances = function (arr, target) {
    let count = 0
    for (let element of arr) {
        if (element == target) ++count
    }
    return count
}
// console.log(countOccurances([1,2,3,4,1,2,2],2))

const getTotalSalary = (data) => {
    let totalSalary = 0;
    for (let employee in data) {
        totalSalary += data[employee]
    }
    return totalSalary
}
// const data = {"Bhavye": 150000, "Sam": 120000}
// console.log(getTotalSalary(data))

function capitalizeFirstLitter(string) {
    return `${string[0].toUpperCase()}${string.slice(1)}`
}
// const string = "hello world"
// console.log(capitalizeFirstLitter(string))

const reverseArray = function (arr) {
    let temp
    for (let i = 0; i < arr.length / 2; i++) {
        temp = arr[i]
        arr[i] = arr[arr.length -i - 1]
        arr[arr.length - i - 1] = temp
        // console.log(arr[i], arr[arr.length - i - 1])
    }
    return arr;
}
// console.log(reverseArray([1,2,3,4]))

const findLargestNumber = (arr) => {
    let max = arr[0];
    for (let element of arr){
        if (element > max) max = element
    }
    return max;
}
// const arr = [10,5,8,12,3]
// console.log(findLargestNumber(arr))

function getEmployeeCount(emplyeeInfo){
    let count = 0;
    for (let index in emplyeeInfo){
        ++count;
    }
    return count;
}
// console.log(getEmployeeCount({"Bhavye": 20, "Sam": 19, "Panda": 12}))
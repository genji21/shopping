function getRequestBodyFromValues(formValues) {
    var obj={};
    formValues.forEach(function(items)  {
    obj [items.field] = items.value
    })
    console.log(obj);
    obj
    return obj;
    }
formValues = [
    { field: 'name', value: 'Sơn Đặng' },
    { field: 'age', value: 18 },
    { field: 'address', value: 'Hà Nội' },
    // ...
]
getRequestBodyFromValues(formValues
)
doituong = {
    name : 'phi',
    tuoi : ' 18'
}
console.log(doituong[0]);
/*
Bài tập
Cho trước hàm checkPositiveNumbers 
có tham số numbers sẽ nhận một mảng gồm các phần tử là những
số bất kì. Hàm này được tạo ra với mục đích kiểm tra toàn bộ 
các chữ số trong mảng numbers có phải là số dương hay không
Yêu cầu
Nếu toàn bộ phần tử trong mảng numbers là số dương hàm sẽ 
trả về true
Nếu một trong các phần tử của mảng numbers không phải số 
dương hàm sẽ trả về false
*/

function findStringsInArrayByKeyword(keyword, strings) {
    var newArray = [];
var newArray = strings.filter(function(string,index){
    if(string.indexOf(keyword) != -1 )
    {
        return string;
    }
    
})
    console.log(newArray)
    return newArray

}
keyword='aldsso'
strings = [ 
    'alo',
    'alo 123 ',
    'helloooo'
]
findStringsInArrayByKeyword(keyword,strings)
/*
Bài tập
Tại bài tập này chúng ta sẽ cùng nhau tạo hàm findEqualValues để tìm ra 
các giá trị bằng nhau giữa hai array.

Yêu cầu
Tạo hàm findEqualValues có hai tham số là array1 và array2 
(Hai tham số này sẽ được test case tại F8 truyền đối số là 
    các array chứa nhiều các giá trị số hoặc chuỗi bất kì).
Trường hợp array1 và array2 có các giá trị bằng nhau thì hàm 
findEqualValues sẽ trả về mảng mới chứa các giá trị đó (mỗi 
    giá trị là một phần tử trong array mới)
Trường hợp không có giá trị bằng nhau giữa hai tham số thì 
hàm trả về array rỗng []
Ví dụ:

Input: [1, 2, 6, 8], [2, 9, 6] - Output: [2, 6]
Input: [1, 2, 3], [2, 9, 6] - Output: [2]
Input: [1, 2, 3], [4, 5, 6, 7, 8] - Output: []
Input: ['Gấu'], ['Lan', 'Hằng', 'Linh', 'Trang', 'Con gái'] 
- Output: []
*/
    // function findEqualValues(array1,array2) {
    //     var newArray=[]
    //     for ( var i=0; i<array1.length;i++) {
    //         for(var j= 0 ; j<array2.length;j++) {
    //             if(array1[i] === array2[j]) {
                    
    //             var a = newArray.push(array1[i])
    //             // console.log(a)

    //             }
    //         }
    //         // console.log(array1[i])
    //     }
    //     console.log(newArray)
    //     return newArray
    // }

    function findEqualValues (array1,array2) {
        var result = array1.filter(function (item,index)
        {
        return array2.find(function (item2,index)
        {
        return item==item2
        })
        })  
        console.log(result)
        return result
        }
array1 = [2,3,4,6,8];
array2 = [2,3,4,2,1,9,7];
findEqualValues(array1,array2)
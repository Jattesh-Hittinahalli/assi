const Assi = require("../models/assi");

exports.insertData = (res) => {

    var data = [
        [{
            'Name': 'Ajinkya',
            'Age': 25,
            'Marks': 80
        },
        {
            'Name': 'Krishna',
            'Age': 23,
            'Marks': 90
        }],
        [{
            'Name': 'Ananta',
            'Age': 28,
            'Marks': 100
        },
        {
            'Name': 'Pruthvi',
            'Age': 24,
            'Marks': 120
        }],


    ]
    const categoryList = [];
    var len = (data.length) - 1;
    var i;
    for (i = 0; i <= len; i++) {
        for (let cate of data[i]) {
            let data =
            {
                name: cate.Name,
                age: cate.Age,
                marks: cate.Marks

            };
            categoryList.push(data);
        }
    }
    Assi.insertMany(categoryList).then((blogs) => {
        res.status(200).send(blogs);
    }).catch((error) => {
        res.status(200).send(error);
    })
}


exports.sumData = (res) => {

    var data = [
        [{
            'Name': 'Ajinkya',
            'Age': 25,
            'Marks': 80
        },
        {
            'Name': 'Krishna',
            'Age': 23,
            'Marks': 90
        }],
        [{
            'Name': 'Ananta',
            'Age': 28,
            'Marks': 100
        },
        {
            'Name': 'Pruthvi',
            'Age': 24,
            'Marks': 120
        }]
    ]
    var len = (data.length) - 1;
    var i;
    let sum = 0;
    try {
        for (i = 0; i <= len; i++) {
            for (let cate of data[i]) {
                result = cate.Marks,
                    sum = sum + result;
            }
        }
        return res.status(200).json({
            'total_sum': sum
        })
    } catch (error) {
        return res.status(400).json({
            error
        })

    }
}

exports.sortData = (res) => {

    var data = [
        [{
            'Name': 'Ajinkya',
            'Age': 25,
            'Marks': 80
        },
        {
            'Name': 'Krishna',
            'Age': 23,
            'Marks': 90
        }],
        [{
            'Name': 'Ananta',
            'Age': 28,
            'Marks': 100
        },
        {
            'Name': 'Pruthvi',
            'Age': 24,
            'Marks': 120
        }]
    ]


    var len = (data.length) - 1;
    var i;
    arrya = [];

    for (i = 0; i <= len; i++) {
        for (let cate of data[i]) {
            result = cate.Age;
            arrya.push(result);
        }
    }
    try {
        let sorted_arrya = bubbleSort(arrya);
        res.status(200).json({
            sorted_arrya
        })

    } catch (error) {
        res.status(400).json({
            error
        })

    }

}

function bubbleSort(array) {
    var done = false;
    while (!done) {
        done = true;
        for (var i = 1; i < array.length; i += 1) {
            if (array[i - 1] > array[i]) {
                done = false;
                var tmp = array[i - 1];
                array[i - 1] = array[i];
                array[i] = tmp;
            }
        }
    }

    return array;
}
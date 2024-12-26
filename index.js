var express = require("express");
var fs = require("fs");
var app = express();
var bodyparser = require("body-parser");

app.use(bodyparser.urlencoded({ extended: true }));

app.get('/', function (_req, res) {
    res.send("hello it is my first express application");
});

app.listen(5000, function () {
    console.log("server is running on port 5000");
});

app.get('/about', function (_req, res) {
    res.send("this is a basic express application");
});

app.get('/user/:userid/books/:bookid', function (req, res) {
    res.send(req.params);
});

app.get('/getStudents', function (req, res) {
    fs.readFile(__dirname + "/student.json", 'utf8', function (err, data) {
        if (err) {
            return res.status(500).json({ status: false, message: "Error reading file" });
        }
        res.json({
            status: true,
            status_code: 200,
            'requested at': req.localtime,
            requrl: req.url,
            'request method': req.method,
            studentdata: JSON.parse(data)
        });
    });
});

app.get('/GETstudentid/:id', (req, res) => {
    fs.readFile(__dirname + "/student.json", 'utf8', function (err, data) {
        if (err) {
            return res.status(500).json({ status: false, message: "Error reading file" });
        }
        var students = JSON.parse(data);
        var student = students["student" + req.params.id];
        if (student) {
            res.json(student);
        } else {
            res.json({
                status: true,
                status_code: 200,
                'requested at': req.localtime,
                requrl: req.url,
                'request method': req.method,
                studentdata: students
            });
        }
    });
});

app.get('/studentinfo', function (req, res) {
    res.sendFile('studentInfo.html', { root: __dirname });
});

app.post('/submit-data', function (req, res) {
    var name = req.body.firstName + ' ' + req.body.lastName;
    var Age = req.body.myAge + ' Gender: ' + req.body.gender;
    var Qual = ' Qualification: ' + req.body.Qual;
    res.send({
        status: true,
        message: 'form Details',
        data: {
            name: name,
            age: Age,
            Qualification: Qual
        }
    });
});


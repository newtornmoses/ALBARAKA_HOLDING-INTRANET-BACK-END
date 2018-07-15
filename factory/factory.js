const mongoose = require('mongoose');
const mongoXlSX = require('mongo-xlsx');
const path = require('path');
const User = require('../model/users');
const model = null;


// connect mongoose
//mongoose.connect('mongodb://localhost:27017/intranet');
// check for connection
// mongoose.connection.on('open', () => {
//     console.log('connected to mongoose database');
// });


mongoXlSX.xlsx2MongoData(path.join(__dirname, 'data.xlsx'), model, (err, data) => {
    if (err) { // check for errors
        console.log(err);
    }

    if (data) { // check if theres data

        console.log(data.length);


        data.forEach(elem => {
            //console.log(elem);

            const user = new User();
            user.UserName = elem.UserName;
            user.LoginName = elem.LoginName;
            user.Password = elem.Password;
            user.Email = elem.Email;
            user.DepartmentCode = elem.DepartmentCode;
            user.EmployeeID = elem.EmployeeID;
            user.PCName = elem.PCName;
            user.UserLevel = elem.UserLevel;
            user.IsValid = elem.IsValid;
            user.PCLogin = elem.PCLogin;
            user.InsertDate = elem.InsertDate;
            user.AppovedBy = elem.AppovedBy;
            user.AppPCName = elem.AppPCName;
            user.AppPCLogin = elem.AppPCLogin;
            user.AppInsertDate = elem.AppInsertDate;
            user.IsSafety = elem.IsSafety;


            // save user
            user.save((err, newSite) => {
                if (err) {
                    console.log(err);
                }

                if (user) {
                    console.log(newSite);
                }
            })
        });
    }
});
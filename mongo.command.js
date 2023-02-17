db.zen.insertMany([
    {
        user : "ruby",
        topic:"mongodb",
        task : "find fibnocis series",
        month : "october",
        date : "18-oct-2020",
        company_arrived : "hcl",
        codekata_solved:40,
        attendance:"present",
        task_submition:"no",
        placement_go:"yes",
        mentor:["rupan","ragav","anand","ravi","ram","ravi","venu","selva","mani","renga"],
        mentees:["divya","uma"]

    },
    { user : "john",
    topic:"sql",
    task : "find LCM of given array",
    month : "march",
    date : "1-mar-2020",
    company_arrived : "zoho",
    codekata_solved:30,
    attendance:"absent",
    task_submition:"no",
    placement_go:"no",
    mentor:["rupan","ragav","anand","ravi","ram","ravi","venu","selva","mani","renga"],
    mentees:["divya","uma"]
},

    { user : "mohan",
    topic:"js",
    task : "find even numbers",
    month : "october",
    date : "21-oct-2020",
    company_arrived : "zetwork",
    codekata_solved:10,
    attendance:"present",
    task_submition:"no",
    placement_go:"no",
    mentor:["rupan","ragav","anand","ravi","ram","ravi","venu","selva","mani","renga"],
    mentees:["divya","uma"]
},

    { user : "maha",
    topic:"html",
    task : "find prime numbers in an array",
    month : "october",
    date : "16-oct-2020",
    company_arrived : "google",
    codekata_solved:50,
    attendance:"absent",
    task_submition:"no",
    placement_go:"yes",
    mentor:["rupan","ragav","anand","ravi","ram","ravi","venu","selva","mani","renga"],
    mentees:["divya","uma"]
},

    { user : "sana",
    topic:"css",
    task : "design imdb database",
    month : "march",
    date : "12-mar-2020",
    company_arrived : "apple",
    codekata_solved:90,
    attendance:"present",
    task_submition:"no",
    placement_go:"yes",
    mentor:["rupan","ragav","anand","ravi","ram","ravi","venu","selva","mani","renga"],
    mentees:["divya","uma"]
}

])




// Find all the topics and tasks which are thought in the month of October
db.zen.find( { month: { $in: [ "october" ] } }, { _id: 0,task:1,topic:1 } )
// Find all the company drives which appeared between 15 oct-2020 and 31-oct-2020
db.zen.find({date:{$gt :"15-oct-2020",$lt :"30-oct-2020"}},{_id:0,company_arrived:1})
// Find all the company drives and students who are appeared for the placement.   ?
db.zen.find({ placement_go :{$in:["yes"]}},{company_arrived:1,user:1})
// Find the number of problems solved by the user in codekata
db.zen.aggregate(
    [
      {
        $group:
          {
            _id: {user: 'users' },
            totalcodekata: { $sum: "$codekata_solved" },
           
          }
      }
    ]
 )
// Find all the mentors with who has the mentee's count more than 15
db.zen.find({},{mentor:1})
// Find the number of users who are absent and task is not submitted  between 15 oct-2020 and 31-oct-2020
db.zen.find({date:{$gt :"15-oct-2020",$lt :"30-oct-2020"}},{user:1,task_submition:"no"})
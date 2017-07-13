var students;
var lastId;

module.exports = {
    reset: function(){
        students = [{ id: 1, name: "test1", course: "js1"}];
        lastId = 1;
    },
    find: function(){
        return students;
    },
    findOne: function(id){
        return students[id-1];
    },
    save: function(student){
        lastId += 1;
        students.push({
            id: lastId,
            name: student.name,
            course: student.course
        });
        return students[lastId-1];
    }
}
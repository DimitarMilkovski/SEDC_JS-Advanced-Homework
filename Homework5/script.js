console.log('connected');

function Academy (name, students, subjects, start, end,numberOfClases=10) {
    this.name = name;
    this.students = students;
    this.subjects = subjects
    this.startDate = start;
    this.endDate = end;
    this.numberOfClases = numberOfClases;
    this.printStudents = function() {
        console.log('All Students: ');
        this.students.forEach(student => console.log(student));
    }
    this.printSubjects = function() {
        console.log('All Subjects: ');
        this.subjects.forEach(subject => console.log(subject));
    } 
}


function Subject (title, isEffective, academy, students){
    this.title = title;
    this.numberOfClasses = 10;
    this.isEffective = isEffective;
    this.academy = academy;
    this.students = students;
    this.overrideClasses = function(numOfClasses) {
        if (numOfClasses < 3){
            return console.log("number of classes can't be smaller than 3!")
        }
            return this.numberOfClasses = numOfClasses;
    }
}


function Student (firstName, lastName, age){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.completedSubjects = [];
    this.academy = null;
    this.currentSubject = null;
    this.startAcademy = function(academyObject) {
        this.academy = academyObject;
        academyObject.students.push (`${this.firstName} ${this.lastName}`)
    }
    this.startSubject = function(subjectObject) {
        if (this.academy !==null){

            let hasSubject = false
            this.academy.subjects.forEach(subject => {
                if (subject ===subjectObject.title){
                    hasSubject = true;
                }
            })
            if (hasSubject === true){
                if (this.currentSubject !==null){
                    this.completedSubjects = this.currentSubject
                }
                this.currentSubject = subjectObject;
                subjectObject.students.push (`${this.firstName} ${this.lastName}`)
            }
            else {
                console.log('Error: property is not set, subject does not exist in this academy!')
            }
        }

        else {
            console.log('Error: property is not set, the student does not attend any academy!')
        }
    } 
}


let sedc = new Academy ('sedc', ['Dimitar Milkovski', 'Bob Bobski'], ['HTML5', 'CSS', 'JavaScript','JavaScript Advanced','C#'],'17.10.2022','17.10.2023')
let cSharp = new Subject ('C#', true, sedc, ['Dimitar Milkovski', 'Stevie Ray Vaughan'])
let frankZappa = new Student ('Frank', 'Zappa',33)

frankZappa.startAcademy(sedc)
console.log('Academy that Frank Zappa attends: ',frankZappa.academy)
console.log ('SEDC Academy: ', sedc)

frankZappa.completedSubjects = 'javaScript Advanced'
frankZappa.startSubject(cSharp)
console.log ('C#: ', cSharp)
console.log ('About Frank Zappa:', frankZappa)



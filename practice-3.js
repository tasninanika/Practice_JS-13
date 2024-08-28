// task-3
const instructor = [
    {name: 'Nodi', agw: 28, position: 'Senior'},
    {name: 'Akil', agw: 26, position: 'Junior'},
    {name: 'Shobuj', agw: 30, position: 'Senior'}
    
];

const instructorName = instructor.filter(inst => inst.position === 'Senior');
for(const names of instructorName){
    const name = names.name;
    console.log(name);
}


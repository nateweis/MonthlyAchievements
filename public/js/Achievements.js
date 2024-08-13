export const achiev = ['$http', function($http){
    const ctrl = this;
    this.includePath = 'partials/MainDisplay.html';
    this.total = 0;
    this.taskList = [
        {title: '6 Steps Exercise', pg : 2, 
        priority: 2, count: 0, current_progress: 0, max_progress: 2,
        measurement: 'excersizes', id: 1, type: 'general', status: 'ongoing',
       date_created: Date.now(), date_updated: Date.now()},

       {title: '1hr torah study', pg : 1, 
       priority: 4, count: 0, current_progress: 0, max_progress: 60,
       measurement: 'min', id: 2, type: 'general', status: 'ongoing',
       date_created: Date.now(), date_updated: Date.now()}
    ];

    // ================================== //
    //            Contole Nav             //
    // ================================== // 

    this.navItems = [
        {item: 'Main Display', path: 'MainDisplay', display: false},
        {item: 'Add Task', path: 'AddTask', display: true}
    ]

    this.updateNav = i => {
        ctrl.includePath = `partials/${ctrl.navItems[i].path}.html`;
        for (let j = 0; j < ctrl.navItems.length; j++) {
            j == i ? ctrl.navItems[j].display = false : ctrl.navItems[j].display = true;
        }
        console.log()
    }

    // ================================== //
    //         Update Total Btns          //
    // ================================== // 

    this.addToTotal = (i) => {
        const currentTask = ctrl.taskList[i]
        ctrl.total = ctrl.total + currentTask.pg
        ctrl.taskList[i].count++
    }

    this.removeFromTotal = (i) => { 
        const currentTask = ctrl.taskList[i]
        ctrl.total = ctrl.total - currentTask.pg
        ctrl.taskList[i].count--
     }




}]
export const achiev = ['$http', '$window', function($http, $window){
    const ctrl = this;
    let latestId = 2;
    let user_id = 1

    this.includePath = 'partials/MainDisplay.html';
    this.total = 0;
    this.newItem = {pg: 0, priority: 0, max_progress: 0};
    

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
    //          Get Inital Tasks          //
    // ================================== //

    $window.onload = () => { 
        $http({
            method: 'GET',
            url: '/tasks/' + user_id
        })
        .then(res => console.log(res.data))
        .catch(err => console.log(err))
     }

    // ================================== //
    //            Contole Nav             //
    // ================================== // 

    this.navItems = [
        {item: 'Main Display', path: 'MainDisplay', display: false},
        {item: 'Add Task', path: 'AddTask', display: true},
        {item: 'EditTask', path: 'EditTask', display: true}
    ]

    this.updateNav = i => {
        ctrl.includePath = `partials/${ctrl.navItems[i].path}.html`;
        for (let j = 0; j < ctrl.navItems.length; j++) {
            j == i ? ctrl.navItems[j].display = false : ctrl.navItems[j].display = true;
        }
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

    // ================================== //
    //          Add to Task List          //
    // ================================== // 

    this.addToTaskList = () => { 
        latestId++
        const nTask = ctrl.newItem

        nTask.count = 0;
        nTask.current_progress = 0;
        nTask.id = latestId;
        nTask.type = 'general';
        nTask.status = 'ongoing';
        nTask.date_created = Date.now();
        nTask.date_updated = Date.now();
        nTask.user_id = user_id;

        ctrl.taskList.push(nTask);
        sendTaskToBackend(nTask)

        ctrl.newItem = {pg: 0, priority: 0, max_progress: 0};
     }

    // ================================== //
    //      Remove from Task List         //
    // ================================== // 

     this.removeTask = (i) => { 
        ctrl.taskList.splice(1, i);
      }

    // ================================== //
    //        Send Task to Backend        //
    // ================================== //
    const sendTaskToBackend = function(task){
        $http({method: 'POST', url: '/tasks', data: task})
        .then(data => {
             console.log(data.data)
        })
        .catch(err => console.log(err))
    }


}]
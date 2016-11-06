  $(document).ready(function(){

    console.log("app.js loaded");
   
	$('#add-task-form').on('submit',function(e){
    		addTask(e);
   	});

   	function addTask(e)
   	{     
          e.preventDefault();

       		var newDate   = new Date();
        	var id        = newDate.getTime();

        	var task	    = $('#task').val();
        	var priority	= $('#priority option:selected').val();
        	var mydate 	  = $('#date').val();
        	var time	    = $('#time').val();

		      console.log("Task : " +task + "\n" + 
            "priority = " + priority + "\n" + "date = " + mydate + "\nTime = " + time);
		

        //set validations

        if(task=='')
        {
            alert("task is required");
            e.preventDefault();
        }
        else if(mydate== '')
        {
            alert("date is not mentioned");
            e.preventDefault();
        }
        else if(priority=='')
        {
            priority='normal';
        }
        else if(time =='')
        {
            alert("time is required");
            e.preventDefault();
        }

        else
        {
            tasks= JSON.parse(localStorage.getItem('tasks'));
            console.log("tasks");

          //check tasks

          if(tasks==null)
          {
            tasks=[];
          }

          //var tasklist=JSON.parse(localStorage.getItem('tasks'));

          var new_task={
            'id':id,
            'task':task,
            'date':date,
            'priority':priority,
            'time':time

          }

          tasks.push(new_task);
          localStorage.setItem('tasks', JSON.stringify(tasks));

          alert("yes submitted");

          
          console.log(tasks);

          console.log("text added");

        }
   }

});

  
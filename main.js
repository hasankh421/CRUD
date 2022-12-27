//get inputs values


var courseName = document.getElementById('courseName');
var courseCategory = document.getElementById('courseCategory');
var coursePrice = document.getElementById('coursePrice');
var courseDescription = document.getElementById('courseDescription');
var courseCapacity = document.getElementById('courseCapacity');
var data = document.getElementById('data')
var addbtn = document.getElementById('click');
var deleteBtn = document.getElementById('deleteBtn')
var search = document.getElementById('search')
var courses = []
//create course

addbtn.onclick = function(event) {
    event.preventDefault();
    var course = {
        courseName: courseName.value,
        courseCategory: courseCategory.value,
        coursePrice: coursePrice.value,
        courseDescription: courseDescription.value,
        courseCapacity: courseCapacity.value
    }
    courses.push(course)
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Course added successfully',
        showConfirmButton: false,
        timer: 1500
      })
    clearInputs()
    displayData()
  
    
}

//clear inputs

function clearInputs(){
    courseName.value = ''
    courseCategory.value = ''
    coursePrice.value = ''
    courseDescription.value= ''
     courseCapacity.value= ''

}


//Read ==> display data in table
function displayData(){
    var result='';
   for(var i=0; i<courses.length;i++){
    result+= `
    
    
                <tr>
                    <td>${i+1}</td>
                    <td>${courses[i].courseName}</td>
                    <td>${courses[i].courseCategory}</td>
                    <td>${courses[i].coursePrice}</td>
                    <td>${courses[i].courseDescription}</td>
                    <td>${courses[i].courseCapacity}</td>
                    <td><button class="btn btn-danger" onclick="deleteCourse(${i})">delete</button></td>
                    <td><button class="btn btn-info">update</button></td>
                </tr>
    
    
    `
   }

   data.innerHTML = result;
}


//delete course

function deleteCourse(index){
  

    
Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        courses.splice(index, 1)
         displayData()

      Swal.fire(
        'Deleted!',
        'Course has been deleted.',
        'success'
      )
    }
  })
}



//delete all


deleteBtn.onclick= function(){
    

    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
          if (result.isConfirmed) {
            courses = [];
            data.innerHTML= '';
    
          Swal.fire(
            'Deleted!',
            'All data has been deleted.',
            'success'
          )
        }
      })
}

/****onkey up
 * onkeypress
 * onkey down
 */

search.onkeyup = function(){

    console.log(search.value)
    var result='';
   for(var i=0; i<courses.length;i++){
    if(courses[i].courseName.toLowerCase().includes(search.value.toLowerCase()))
    result+= `
    
    
                <tr>
                    <td>${i+1}</td>
                    <td>${courses[i].courseName}</td>
                    <td>${courses[i].courseCategory}</td>
                    <td>${courses[i].coursePrice}</td>
                    <td>${courses[i].courseDescription}</td>
                    <td>${courses[i].courseCapacity}</td>
                    <td><button class="btn btn-danger" onclick="deleteCourse(${i})">delete</button></td>
                    <td><button class="btn btn-info">update</button></td>
                </tr>
    
    
    `
   }

   data.innerHTML = result;
}

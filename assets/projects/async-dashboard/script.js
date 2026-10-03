const msg = document.getElementById("message")

const button1 = document.getElementById("loading")
const Profile = document.getElementById("profile")
const Grades = document.getElementById("grades")
const Sched = document.getElementById("sched")

button1.addEventListener("click",function(){
    msg.innerHTML = "Loading Dashboard"
    Profile.innerHTML = "Profile:Waiting"
    Grades.innerHTML = "Grades:Waiting"
    Sched.innerHTML = "Schedule:Waiting"

    const ProfilePromise = new Promise(function(resolve){
        setTimeout(function() {
            Profile.innerHTML = "Profile:Loaded"
            resolve()
            
        },3000)
    }) 

     const GradesPromise = new Promise(function(resolve){
        setTimeout(function() {
            Grades.innerHTML = "Grades:Loaded"
            resolve()
            
        },3000)
    }) 

     const SchedPromise = new Promise(function(resolve){
        setTimeout(function() {
            Sched.innerHTML = "Schedule:Loaded"
            resolve()
            
        },3000)
    }) 

    
    Promise.all([ProfilePromise,GradesPromise,SchedPromise])
    .then(function() {
        msg.innerHTML = "Dashboard Ready"
        
    })
})




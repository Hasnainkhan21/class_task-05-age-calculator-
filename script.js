
function ChangeDate() {
    const inputDate = document.getElementById('Age').value;
    let newDate = new Date(inputDate);
    
    let newDate2 = new Date();

    var dateObject = newDate2.getDate() - newDate.getDate();
    document.getElementById("days").innerText = dateObject;

    var monthObject = newDate2.getMonth() - newDate.getMonth();
    document.getElementById("months").innerText = monthObject;

    var yearObject = newDate2.getFullYear() - newDate.getFullYear();
    document.getElementById("year").innerText = yearObject;
}


function ChangeDate() {
    const inputDate = document.getElementById('Age').value;
    let birthDate = new Date(inputDate);
    let today = new Date();

    if(!inputDate) {
        alert("enter ur DOB")
    } else {


    let yearObject = today.getFullYear() - birthDate.getFullYear();
    let monthObject = today.getMonth() - birthDate.getMonth();
    let dayObject = today.getDate() - birthDate.getDate();

    if (dayObject < 0) {
        monthObject--;
        dayObject += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }
    if (monthObject < 0) {
        yearObject--;
        monthObject += 12;
    }

    document.getElementById("year").innerText = yearObject;
    document.getElementById("months").innerText = monthObject;
    document.getElementById("days").innerText = dayObject;

    }
}
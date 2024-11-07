window.addEventListener("load", () => {
    clock();
    function clock() {
        const today = new Date();

        //time
        const hours = today.getHours();
        const minutes = today.getMinutes();
        const seconds = today.getSeconds();

        const hour = hours < 10 ? "0" + hours : hours;
        const minute = minutes < 10 ? "0" + minutes : minutes;
        const second = seconds < 10 ? "0" + seconds : seconds;  

        //date

        const month = today.getMonth();
        const year = today.getFullYear();
        const day = today.getDate();

        months = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December"
        ]

        const date = months[month] + " " + day + ", " + year;
        const time = hour + ":" + minute + ":" + second;

        const dateTime = date + " -- " + time;

        //print
        document.getElementById("date-time").innerHTML = dateTime;
        setTimeout(clock, 1);
    }
})
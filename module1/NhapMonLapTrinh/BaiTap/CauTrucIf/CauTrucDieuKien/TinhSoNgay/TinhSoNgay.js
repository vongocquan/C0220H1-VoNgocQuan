function show() {
    let month = document.getElementById("month");
    let result = document.getElementById("result");
    let day

    switch (month.value *1) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            day = 31;
            break;
        case 2:
            day = '29 hoặc 28';
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            day = 30;
            break;
    }alert(day + " ngày")
}
//these code is for phone increase button
document.getElementById("plusBtnPhone").addEventListener("click", function () {


    // additional (skip) function (advanced) --by this (skip) function we minimize the multiline comment codes below(from line no-9 to line no-19 ).
    skip(true, "PhoneCount", "phonePrice", "BackcoverPrice", "subTotal")

    /* // this ButtonClick function is from utilitis.js line number 2.
    const inputFormValue = ButtonClick(true, "PhoneCount");

    //this setPrice function is from utilitis.js line number 19.
    setPrice(inputFormValue, "phonePrice");

    //this function is from utilitis.js line number 38.
    const phoneTotal = getTotalValue("phonePrice");
    const caseTotal = getTotalValue("BackcoverPrice");

    ///this function is from utilitis.js line number 46.
    updatePrice(phoneTotal, caseTotal, "subTotal")
    */

});



//these code is for phne decrease button.
document.getElementById("minusBtnPhone").addEventListener("click", function () {


    // we can also use  a function like skip function as like we use in  plus button area. (if we want to use);


    // this ButtonClick function is from utilitis.js line number 2.
    const inputFormValue = ButtonClick(false, "PhoneCount");

    //this setPrice function is from utilitis.js line number 19.
    setPrice(inputFormValue, "phonePrice");

    //this function is from utilitis.js line number 38.
    const phoneTotal = getTotalValue("phonePrice");
    const caseTotal = getTotalValue("BackcoverPrice");

    ///this function is from utilitis.js line number 46.
    updatePrice(phoneTotal, caseTotal, "subTotal");

});
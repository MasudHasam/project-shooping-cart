//this function is for input value ans also for inrease and decrease button.
function ButtonClick(tureOrfalse, inputFormId) {
    const getValueFromInputString = document.getElementById(inputFormId);
    const getValueFromInput = parseFloat(getValueFromInputString.value);

    //condition for increase and decrease value in input form/phone count plus and minus.
    if (tureOrfalse == true) {
        const updateInputFormValue = getValueFromInput + 1;
        getValueFromInputString.value = updateInputFormValue;
        return updateInputFormValue;
    } else {
        const updateInputFormValue = getValueFromInput - 1;
        getValueFromInputString.value = updateInputFormValue;
        return updateInputFormValue;
    }
};


//this function is for set the update price in phone area and back cover area according to phone or back cover price.
function setPrice(inputFormValue, priceId) {

    /*by this condition we check that if the priceId perameter value(hear the peremeter value is an id) is phonePrice then set
     the price in phone price area. otherwise it will go to the else section and set the value in back cover area accordig to priceId value.*/
    if (priceId == "phonePrice") {
        const PriceString = document.getElementById(priceId);
        const updatePrice = inputFormValue * 1219;
        PriceString.innerText = updatePrice;
    } else {
        const PriceString = document.getElementById(priceId);
        const updatePrice = inputFormValue * 59;
        PriceString.innerText = updatePrice;
    }
};



//by this function we catch the total phone price and total back cover price and return it.
function getTotalValue(id) {
    const totalPriceString = document.getElementById(id);
    const totalPrice = parseFloat(totalPriceString.innerText);
    return totalPrice;
}


//by this function we sum the value from phone total and case total and set it in subtotal.
function updatePrice(phoneTotal, caseTotal, subTotalid) {
    const totalPrice = phoneTotal + caseTotal;
    const subtotal = document.getElementById(subTotalid);
    subtotal.innerText = totalPrice;

    //calculate the tax according to total price and set it in  total tax amount.
    const totalTax = document.getElementById("totalTax");
    const calculateTax = totalPrice * 0.1;
    totalTax.innerText = calculateTax.toFixed(2);

    //calculate the total price by adding total price and total tax.
    const finalPrice = document.getElementById("finalPrice");
    const totalFinalPrice = totalPrice + calculateTax;
    finalPrice.innerText = totalFinalPrice;
};



/*advance skip function(additional)not recomended. we use 5 function inside the skip function. the easy way to do the same 
thing is in phone.js and backCover.js we do it in phus button area. ,,, we just make the code comment.*/
function skip(TruePeremeter, CountPeremeter, phonePricePeremeter, BackcoverPricePeremeter, subtotalPeremeter) {
    // this ButtonClick function is from utilitis.js line number 2.
    const inputFormValue = ButtonClick(TruePeremeter, CountPeremeter);

    //this setPrice function is from utilitis.js line number 19.
    setPrice(inputFormValue, phonePricePeremeter);

    //this function is from utilitis.js line number 38.
    const phoneTotal = getTotalValue(phonePricePeremeter);
    const caseTotal = getTotalValue(BackcoverPricePeremeter);

    ///this function is from utilitis.js line number 46.
    updatePrice(phoneTotal, caseTotal, subtotalPeremeter);
};
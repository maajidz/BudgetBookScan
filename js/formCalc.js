//Amount of  books input field

function getQuantity()
{
    var theForm = document.forms["cd-form"];
    var quantity = theForm.elements["quantity"];
    var howmany =0;
    if(quantity.value!=="")
    {
        howmany = parseInt(quantity.value) * 5;
    }
return howmany;
}


function colorCoversPrice()
{
    var ccPrice=0;
    var theForm = document.forms["cd-form"];
    var includecolorcovers = theForm.elements["includecolorcovers"];

    if(includecolorcovers.checked===true)
    {
        ccPrice= parseInt(quantity.value) * 1;
    }
    return ccPrice;
}

function colorInteriorsPrice()
{

    var ciPrice=0;
    var theForm = document.forms["cd-form"];
    var includecolorinteriors = theForm.elements["includecolorinteriors"];
    if(includecolorinteriors.checked===true){
        ciPrice=0;
    }
    return ciPrice;
}


function getQuantityColorInteriors()
{
    var theForm = document.forms["cd-form"];
    var quantitycolorinteriors = theForm.elements["quantity_colorinteriors"];
    var howmany =0;
    if(quantitycolorinteriors.value!=="")
    {
        howmany = parseInt(quantitycolorinteriors.value) * 2;
    }
return howmany;
}


function titleFilePrice()
{
    var title_filePrice=0;
    var theForm = document.forms["cd-form"];
    var includetitle_file = theForm.elements["includetitle_file"];
    if(includetitle_file.checked===true){
        title_filePrice= parseInt(quantity.value) * 0.75 ;
    }
    return title_filePrice;
}


function mobiPrice()
{

    var mobiPrice=0;
    var theForm = document.forms["cd-form"];
    var includeMobi = theForm.elements["includemobi"];
    if(includeMobi.checked===true){
        mobiPrice=1 * parseInt(quantity.value);
    }
    return mobiPrice;
}


function wordPrice()
{
    var wordPrice=0;
    var theForm = document.forms["cd-form"];
    var includeWord = theForm.elements["includeword"];
    if(includeWord.checked===true){
        wordPrice=0.75 * parseInt(quantity.value);
    }
    return wordPrice;
}


function epubPrice()
{

    var epubPrice=0;
    var theForm = document.forms["cd-form"];
    var includeEpub = theForm.elements["includeepub"];
    if(includeEpub.checked===true){
        epubPrice=0.75 * parseInt(quantity.value);
    }
    return epubPrice;
}        
function calculateTotal() {
	var totalPrice = getQuantity() + colorCoversPrice() + titleFilePrice() + getQuantityColorInteriors() + wordPrice() + mobiPrice() + epubPrice();
	var hiddenField = document.querySelector('.hidden_field');
	hiddenField.setAttribute('value', totalPrice);


	var divobj = document.querySelector('#totalPrice');
	divobj.style.display='block';
	divobj.innerHTML = "Total Price $"+totalPrice;

}

function hideTotal()
{
    var divobj = document.getElementsById('totalPrice');
    divobj.style.display='none';
}

function calculatePaypal() {
  

}


function booksQuantityPaypal() {

//For book quantity paypal
    quantityBooks = parseInt(quantity.value);
    var var1 = document.querySelector('.quantity_1');
    var1_1 = var1.setAttribute('value', quantityBooks); 
    return var1_1;

}

// function colorCoverQPPaypal() {

// //For Color Covers Paypal
//    ccQuantity=0;
//    var theForm = document.forms["cd-form"];
//    var includecolorcovers = theForm.elements["includecolorcovers"];

//    if(includecolorcovers.checked===true)
//    {
//         ccQuantity= parseInt(quantity.value);
//         var var2 = document.querySelector('.quantity_2');
//         var2.setAttribute('value', ccQuantity);
//         var var2_1 = document.querySelector('.amount_2');
//         var2_1.setAttribute('value', '1');
//     }
//     else
//     {
//         var var2 = document.querySelector('.quantity_2');
//         var2.setAttribute('value', '');
//         var var2_1 = document.querySelector('.amount_2');
//         var2_1.setAttribute('value', '');

//     }
// }
// function colorInteriorsQPPaypal() {

// //For Color Covers Paypal
//    ciQuantity=0;
//    var theForm = document.forms["cd-form"];
//    var includecolorinteriors = theForm.elements["includecolorinteriors"];

//    if(includecolorinteriors.checked===true)
//    {
//         ciQuantity= parseInt(quantity_colorinteriors.value);
//         var var3 = document.querySelector('.quantity_3');
//         var3.setAttribute('value', ciQuantity);
//         var var3_1 = document.querySelector('.amount_3');
//         var3_1.setAttribute('value', '2');
//     }
//     else
//     {
//         var var3 = document.querySelector('.quantity_3');
//         var3.setAttribute('value', '');
//         var var3_1 = document.querySelector('.amount_3');
//         var3_1.setAttribute('value', '');

//     }
// }
// function titleFileQPPaypal() {

// //For Color Covers Paypal
//    ftQuantity=0;
//    var theForm = document.forms["cd-form"];
//    var includetitle_file = theForm.elements["includetitle_file"];

//    if(includetitle_file.checked===true)
//    {
//         ftQuantity= parseInt(quantity.value);
//         var var4 = document.querySelector('.quantity_4');
//         var4.setAttribute('value', ftQuantity);
//         var var4_1 = document.querySelector('.amount_4');
//         var4_1.setAttribute('value', '0.75');
//     }
//     else
//     {
//         var var4 = document.querySelector('.quantity_4');
//         var4.setAttribute('value', '');
//         var var4_1 = document.querySelector('.amount_4');
//         var4_1.setAttribute('value', '');

//     }
// }

// function wordQPPaypal() {

// //For Color Covers Paypal
//    wordQuantity=0;
//    var theForm = document.forms["cd-form"];
//    var includeword = theForm.elements["includeword"];

//    if(includeword.checked===true)
//    {
//         wordQuantity= parseInt(quantity.value);
//         var var5 = document.querySelector('.quantity_5');
//         var5.setAttribute('value', wordQuantity);
//         var var5_1 = document.querySelector('.amount_5');
//         var5_1.setAttribute('value', '0.75');
//     }
//     else
//     {
//         var var5 = document.querySelector('.quantity_5');
//         var5.setAttribute('value', '');
//         var var5_1 = document.querySelector('.amount_5');
//         var5_1.setAttribute('value', '');

//     }
// }
// function epubQPPaypal() {

// //For Color Covers Paypal
//    epubQuantity=0;
//    var theForm = document.forms["cd-form"];
//    var includeepub = theForm.elements["includeepub"];

//    if(includeepub.checked===true)
//    {
//         epubQuantity= parseInt(quantity.value);
//         var var6 = document.querySelector('.quantity_6');
//         var6.setAttribute('value', epubQuantity);
//         var var6_1 = document.querySelector('.amount_6');
//         var6_1.setAttribute('value', '0.75');
//     }
//     else
//     {
//         var var6 = document.querySelector('.quantity_6');
//         var6.setAttribute('value', '');
//         var var6_1 = document.querySelector('.amount_6');
//         var6_1.setAttribute('value', '');

//     }
// }
// function mobiQPPaypal() {

// //For Color Covers Paypal
//    mobiQuantity=0;
//    var theForm = document.forms["cd-form"];
//    var includemobi = theForm.elements["includemobi"];

//    if(includemobi.checked===true)
//    {
//         mobiQuantity= parseInt(quantity.value);
//         var var7 = document.querySelector('.quantity_7');
//         var7.setAttribute('value', mobiQuantity);
//         var var7_1 = document.querySelector('.amount_7');
//         var7_1.setAttribute('value', '1');
//     }
//     else
//     {
//         var var7 = document.querySelector('.quantity_7');
//         var7.setAttribute('value', '');
//         var var7_1 = document.querySelector('.amount_7');
//         var7_1.setAttribute('value', '');

//     }
// }
function SubmitForm()
{
     document.forms['cd-form'].action='https://www.paypal.com/cgi-bin/webscr';
     document.forms['cd-form'].target='_top';
     document.forms['cd-form'].submit();


     return true;
}
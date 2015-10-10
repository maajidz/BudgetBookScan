var count = 1;

function codename() {
  count = 1;

  document.querySelector('.item_name_2').setAttribute('value', '');
  document.querySelector('.item_name_3').setAttribute('value', '');
  document.querySelector('.item_name_4').setAttribute('value', '');
  document.querySelector('.item_name_5').setAttribute('value', '');
  document.querySelector('.item_name_6').setAttribute('value', '');
  document.querySelector('.item_name_7').setAttribute('value', '');

  document.querySelector('.amount_2').setAttribute('value', '');
  document.querySelector('.amount_3').setAttribute('value', '');
  document.querySelector('.amount_4').setAttribute('value', '');
  document.querySelector('.amount_5').setAttribute('value', '');
  document.querySelector('.amount_6').setAttribute('value', '');
  document.querySelector('.amount_7').setAttribute('value', '');

  document.querySelector('.quantity_2').setAttribute('value', '');
  document.querySelector('.quantity_3').setAttribute('value', '');
  document.querySelector('.quantity_4').setAttribute('value', '');
  document.querySelector('.quantity_5').setAttribute('value', '');
  document.querySelector('.quantity_6').setAttribute('value', '');
  document.querySelector('.quantity_7').setAttribute('value', '');
  ccQuantity = 0;
  ciQuantity =  0;
  ftQuantity = 0;
  wordQuantity = 0;
  epubQuantity = 0;
  mobiQuantity = 0;


    if(includecolorcovers.checked===true) {
    // document.cdform.item_name_2.value = "Include Color Covers";
    // document.cdform.amount_2.value = "2.00";
    // document.cdform.quantity_2.value = "2.00";
    ccQuantity = parseInt(quantity.value);
    var var2 = document.querySelector('.quantity_2');
    var2.setAttribute('value', ccQuantity);
    var var2_1 = document.querySelector('.amount_2');
    var2_1.setAttribute('value', '1');
    var var2_2 = document.querySelector('.item_name_2');
    var2_2.setAttribute('value', 'Include Color Covers');


    count = count + 1;
  }

    if(includecolorinteriors.checked===true) {
      if (count === 2) {
        ciQuantity= parseInt(quantity_colorinteriors.value);
        var var3 = document.querySelector('.quantity_3');
        var3.setAttribute('value', ciQuantity);
        var var3_1 = document.querySelector('.amount_3');
        var3_1.setAttribute('value', '2');
        var var3_2 = document.querySelector('.item_name_3');
        var3_2.setAttribute('value', 'Include Color Interiors');
      count = count + 1;
    }
    if (count === 1) {
        ciQuantity= parseInt(quantity_colorinteriors.value);
        var var3 = document.querySelector('.quantity_2');
        var3.setAttribute('value', ciQuantity);
        var var3_1 = document.querySelector('.amount_2');
        var3_1.setAttribute('value', '2');
        var var3_2 = document.querySelector('.item_name_2');
        var3_2.setAttribute('value', 'Include Color Interiors');
      count = count + 1;
    }
  }
   if(includetitle_file.checked===true)
   {

    if (count === 3) {
        ftQuantity= parseInt(quantity.value);
        var var4 = document.querySelector('.quantity_4');
        var4.setAttribute('value', ftQuantity);
        var var4_1 = document.querySelector('.amount_4');
        var4_1.setAttribute('value', '0.75');
        var var4_2 = document.querySelector('.item_name_4');
        var4_2.setAttribute('value', 'Include Title Files');
      count = count + 1;
    }
    if (count === 2) {
        ftQuantity= parseInt(quantity.value);
        var var4 = document.querySelector('.quantity_3');
        var4.setAttribute('value', ftQuantity);
        var var4_1 = document.querySelector('.amount_3');
        var4_1.setAttribute('value', '0.75');
        var var4_2 = document.querySelector('.item_name_3');
        var4_2.setAttribute('value', 'Include Title Files');
      count = count + 1;
    }
    if (count === 1) {
        ftQuantity= parseInt(quantity.value);
        var var4 = document.querySelector('.quantity_2');
        var4.setAttribute('value', ftQuantity);
        var var4_1 = document.querySelector('.amount_2');
        var4_1.setAttribute('value', '0.75');
        var var4_2 = document.querySelector('.item_name_2');
        var4_2.setAttribute('value', 'Include Title Files');
      count = count + 1;
    }
  }




    if(includeword.checked===true) {
    if (count === 4) {
        wordQuantity= parseInt(quantity.value);
        var var5 = document.querySelector('.quantity_5');
        var5.setAttribute('value', wordQuantity);
        var var5_1 = document.querySelector('.amount_5');
        var5_1.setAttribute('value', '0.75');
        var var5_2 = document.querySelector('.item_name_5');
        var5_2.setAttribute('value', 'Include Word Format');
      count = count + 1;
    }
    if (count === 3) {
        wordQuantity= parseInt(quantity.value);
        var var5 = document.querySelector('.quantity_4');
        var5.setAttribute('value', wordQuantity);
        var var5_1 = document.querySelector('.amount_4');
        var5_1.setAttribute('value', '0.75');
        var var5_2 = document.querySelector('.item_name_4');
        var5_2.setAttribute('value', 'Include Word Format');
      count = count + 1;
    }
    if (count === 2) {
        wordQuantity= parseInt(quantity.value);
        var var5 = document.querySelector('.quantity_3');
        var5.setAttribute('value', wordQuantity);
        var var5_1 = document.querySelector('.amount_3');
        var5_1.setAttribute('value', '0.75');
        var var5_2 = document.querySelector('.item_name_3');
        var5_2.setAttribute('value', 'Include Word Format');
      count = count + 1;
    }
    if (count === 1) {
        wordQuantity= parseInt(quantity.value);
        var var5 = document.querySelector('.quantity_2');
        var5.setAttribute('value', wordQuantity);
        var var5_1 = document.querySelector('.amount_2');
        var5_1.setAttribute('value', '0.75');
        var var5_2 = document.querySelector('.item_name_2');
        var5_2.setAttribute('value', 'Include Word Format');
      count = count + 1;
    }
  }

    if(includeepub.checked===true) {
    if (count === 5) {
        epubQuantity= parseInt(quantity.value);
        var var6 = document.querySelector('.quantity_6');
        var6.setAttribute('value', epubQuantity);
        var var6_1 = document.querySelector('.amount_6');
        var6_1.setAttribute('value', '0.75');
        var var6_2 = document.querySelector('.item_name_6');
        var6_2.setAttribute('value', 'Include Epub Format');
      count = count + 1;
    }
    if (count === 4) {
        epubQuantity= parseInt(quantity.value);
        var var6 = document.querySelector('.quantity_5');
        var6.setAttribute('value', epubQuantity);
        var var6_1 = document.querySelector('.amount_5');
        var6_1.setAttribute('value', '0.75');
        var var6_2 = document.querySelector('.item_name_5');
        var6_2.setAttribute('value', 'Include Epub Format');
      count = count + 1;
    }
    if (count === 3) {
        epubQuantity= parseInt(quantity.value);
        var var6 = document.querySelector('.quantity_4');
        var6.setAttribute('value', epubQuantity);
        var var6_1 = document.querySelector('.amount_4');
        var6_1.setAttribute('value', '0.75');
        var var6_2 = document.querySelector('.item_name_4');
        var6_2.setAttribute('value', 'Include Epub Format');
      count = count + 1;
    }
    if (count === 2) {
        epubQuantity= parseInt(quantity.value);
        var var6 = document.querySelector('.quantity_3');
        var6.setAttribute('value', epubQuantity);
        var var6_1 = document.querySelector('.amount_3');
        var6_1.setAttribute('value', '0.75');
        var var6_2 = document.querySelector('.item_name_3');
        var6_2.setAttribute('value', 'Include Epub Format');
      count = count + 1;
    }
    if (count === 1) {
        epubQuantity= parseInt(quantity.value);
        var var6 = document.querySelector('.quantity_2');
        var6.setAttribute('value', epubQuantity);
        var var6_1 = document.querySelector('.amount_2');
        var6_1.setAttribute('value', '0.75');
        var var6_2 = document.querySelector('.item_name_2');
        var6_2.setAttribute('value', 'Include Epub Format');
      count = count + 1;
    }
  }




    if(includemobi.checked===true) {
    if (count === 6) {
        mobiQuantity= parseInt(quantity.value);
        var var7 = document.querySelector('.quantity_7');
        var7.setAttribute('value', mobiQuantity);
        var var7_1 = document.querySelector('.amount_7');
        var7_1.setAttribute('value', '1');
        var var7_2 = document.querySelector('.item_name_7');
        var7_2.setAttribute('value', 'Include Mobi Format');
      count = count + 1;
    }
    if (count === 5) {
        mobiQuantity= parseInt(quantity.value);
        var var7 = document.querySelector('.quantity_6');
        var7.setAttribute('value', mobiQuantity);
        var var7_1 = document.querySelector('.amount_6');
        var7_1.setAttribute('value', '1');
        var var7_2 = document.querySelector('.item_name_6');
        var7_2.setAttribute('value', 'Include Mobi Format');
      count = count + 1;
    }
    if (count === 4) {
        mobiQuantity= parseInt(quantity.value);
        var var7 = document.querySelector('.quantity_5');
        var7.setAttribute('value', mobiQuantity);
        var var7_1 = document.querySelector('.amount_5');
        var7_1.setAttribute('value', '1');
        var var7_2 = document.querySelector('.item_name_5');
        var7_2.setAttribute('value', 'Include Mobi Format');
      count = count + 1;
    }
    if (count === 3) {
        mobiQuantity= parseInt(quantity.value);
        var var7 = document.querySelector('.quantity_4');
        var7.setAttribute('value', mobiQuantity);
        var var7_1 = document.querySelector('.amount_4');
        var7_1.setAttribute('value', '1');
        var var7_2 = document.querySelector('.item_name_4');
        var7_2.setAttribute('value', 'Include Mobi Format');
      count = count + 1;
    }
    if (count === 2) {
        mobiQuantity= parseInt(quantity.value);
        var var7 = document.querySelector('.quantity_3');
        var7.setAttribute('value', mobiQuantity);
        var var7_1 = document.querySelector('.amount_3');
        var7_1.setAttribute('value', '1');
        var var7_2 = document.querySelector('.item_name_3');
        var7_2.setAttribute('value', 'Include Mobi Format');
      count = count + 1;
    }
    if (count === 1) {
        mobiQuantity= parseInt(quantity.value);
        var var7 = document.querySelector('.quantity_2');
        var7.setAttribute('value', mobiQuantity);
        var var7_1 = document.querySelector('.amount_2');
        var7_1.setAttribute('value', '1');
        var var7_2 = document.querySelector('.item_name_2');
        var7_2.setAttribute('value', 'Include Mobi Format');
      count = count + 1;
    }
  }

}
$('#cdform input').on("click keyup", function (e) {
  codename();
});
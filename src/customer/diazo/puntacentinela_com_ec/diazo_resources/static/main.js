jQuery(function(jq) {

  // Add your theme JS code here.
  myform = jq('.listing-search-tile form');
  myform.removeClass();
  ov = myform.find('input[type=checkbox][value=ocean_view]');
  parents = ov.parents('span.option').addClass("show_me");

  search_tile=jq('.listing-search-tile');
  if(search_tile.length>0){
    console.log('tile found ...');
    //set placeholder for price
    p_min=search_tile.find('#formfield-form-widgets-price_min label');
    search_tile.find('#form-widgets-price_min').attr("placeholder", p_min.text().trim());
    p_min.hide();
    p_max=search_tile.find('#formfield-form-widgets-price_max label');
    search_tile.find('#form-widgets-price_max').attr("placeholder", p_max.text().trim());
    p_max.hide();
    // now the bedrooms
    b_label=search_tile.find('#formfield-form-widgets-beds label');
    b_text_min =b_label.text().trim()+' (Min)';
    b_text_max =b_label.text().trim()+' (Max)';
    b_label.hide();
    search_tile.find('#form-widgets-beds-min option[value=--MINVALUE--]').text(b_text_min);
    search_tile.find('#form-widgets-beds-max option[value=--MAXVALUE--]').text(b_text_max);

    //move row with search form
    search_tile.closest('.row').addClass('move_me');
    search_tile.closest('.cell').removeClass().addClass('center_me');

  }

});

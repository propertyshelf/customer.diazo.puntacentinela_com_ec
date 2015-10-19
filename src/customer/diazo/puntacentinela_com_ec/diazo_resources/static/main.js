jQuery(function(jq) {

  // Add your theme JS code here.
  myform = jq('.listing-search-tile form');
  myform.removeClass();
  ov = myform.find('input[type=checkbox][value=ocean_view]');
  parents = ov.parents('span.option').addClass("show_me");

  search_tile=jq('.listing-search-tile');
  if(search_tile.length>0){
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
    //remove un-needed versions

    rm_options = '#form-widgets-beds-max option[value=5], #form-widgets-beds-max option[value=6],#form-widgets-beds-max option[value=7],#form-widgets-beds-max option[value=8],#form-widgets-beds-max option[value=9],#form-widgets-beds-min option[value=5], #form-widgets-beds-min option[value=6], #form-widgets-beds-min option[value=7], #form-widgets-beds-min option[value=8], #form-widgets-beds-min option[value=9]';
    search_tile.find(rm_options).remove();
    //move row with search form
    search_tile.closest('.row').addClass('move_me');
    search_tile.closest('.cell').removeClass().addClass('center_me');

  }

});

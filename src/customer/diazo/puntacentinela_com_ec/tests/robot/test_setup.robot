*** Settings ***

Resource  keywords.robot

Suite Setup  Setup
Suite Teardown  Teardown


*** Test cases ***

Show how to activate the add-on
    Enable autologin as  Manager
    Go to  ${PLONE_URL}/prefs_install_products_form
    Page should contain element  id=customer.diazo.puntacentinela_com_ec
    Assign id to element
    ...  xpath=//*[@id='customer.diazo.puntacentinela_com_ec']/parent::*
    ...  addons-customerdiazopuntacentinelacomec
    Assign id to element
    ...  xpath=//*[@id='customer.diazo.puntacentinela_com_ec']/ancestor::form
    ...  addons-enabled

    Highlight  addons-customerdiazopuntacentinelacomec
    Capture and crop page screenshot
    ...  setup_select_add_on.png
    ...  id=addons-enabled

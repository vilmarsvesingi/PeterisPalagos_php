<?php

include_once 'components\header.php' ;

$page = isset($_GET['page']) ? $_GET['page'] : 0;



switch ($page) {

    case 'firstPage':
    include_once 'components/firstPage.php';
    break;


    case 'contact':
        include_once 'components/contact.php';
        break;

    case 'beers':
        include_once 'components/beers.php';
        break;  


        
    case 'food':
        include_once 'components/food.php';
        break;

    case 'rent':
        include_once 'components/rent.php';
        break;
    
    default:
        include_once 'components/firstPage.php';
        break;
}





include_once 'components\footer.php' ;
import domReady from '@wordpress/dom-ready';
import './main.css';

domReady(()=>{
    const main = document.getElementById('test');
    main.innerHTML = "wows";
})
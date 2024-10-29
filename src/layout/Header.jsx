import React from "react";

function Header() {
    return (
        <nav>
            <div className="nav-wrapper #424242 grey darken-3">
                <a style={{color:'rgb(206, 208, 208)'}} href="" className="brand-logo center">Photo Landing</a>
                <ul className="right hide-on-med-and-down">
                    <li><a style={{color:'rgb(206, 208, 208)'}} href="https://vk.com/pahez_pahezzz">Follow</a></li>
                    <li><a style={{color:'rgb(206, 208, 208)'}} href="https://newschoolvl.ru/?ysclid=m2r9m76k64230900574">Studio</a></li>
                </ul>
            </div>
        </nav>
    )
}

export { Header }
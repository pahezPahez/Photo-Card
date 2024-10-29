import React from "react";

function Footer() {
    return (
        <footer className="page-footer #424242 grey darken-3">
            <div className="container">
                <div className="row">
                    <div className="col l6 s12">
                        <h5 style={{color:'rgb(206, 208, 208)'}} className="white-text">Photo Landing</h5>
                        <p style={{color:'rgb(206, 208, 208)'}} className="grey-text text-lighten-4">Ул.Русская 35А</p>
                    </div>
                    <div className="col l4 offset-l2 s12">
                        <h5 style={{color:'rgb(206, 208, 208)'}} className="white-text">Ссылки:</h5>
                        <ul>
                            <li><a style={{color:'rgb(206, 208, 208)'}} className="grey-text text-lighten-3" href="https://newschoolvl.ru/?ysclid=m2r9m76k64230900574">Studio</a></li>
                            <li><a style={{color:'rgb(206, 208, 208)'}} className="grey-text text-lighten-3" href="https://vk.com/pahez_pahezzz">Author</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer-copyright">
                <div className="container">
                    © 2024 PhotoLanding
                </div>
            </div>
        </footer>
    )
}

export { Footer }
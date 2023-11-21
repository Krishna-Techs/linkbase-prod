const d = new Date();
let currentYear = d.getFullYear();

const FooterOneCopyrights = () => {
    return (
        <div className='footer-bottom'>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-12 col-12 text-center">
                        <div className="copyright-info">
                            <p>COPYRIGHT &copy; {currentYear} - Linkbase Technologies Inc.</p>                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}   

export default FooterOneCopyrights;
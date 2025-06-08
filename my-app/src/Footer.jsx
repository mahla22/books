import './Footer.css'
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import  { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faTelegram } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
function Footer() {
    return(
        <footer>
            <div className='contact'> 
                <h5>اطلاعات تماس</h5>
                <p><FontAwesomeIcon icon={faInstagram} /></p>
                <p><FontAwesomeIcon icon={faTelegram} /></p>
                <p><FontAwesomeIcon icon={faTwitter} /></p>
                <p>شماره تماس:021...</p>
            </div>
            <div className='about'>
                <h5>درباره ما</h5>
                <p>به وب‌سایت معرفی کتاب خوش آمدید! 
هدف ما این است که با ارائه‌ی نقد و بررسی‌های دقیق، خلاصه کتاب‌ها، و دسته‌بندی بر اساس ژانرها و علاقه‌مندی‌ها، به شما در انتخاب کتاب‌های ارزشمند کمک کنیم.
</p>
            </div>
            <div className='pages'>
                <h5>صفحات مهم</h5>
                <Link to={`/Home`}>
                   <p>صفحه اصلی</p> 
                </Link>
                <Link to={ `/books`}>
                   <p>جدیدترین کتاب ها</p>
                </Link>
            </div>
        </footer>
    );
}
export default Footer
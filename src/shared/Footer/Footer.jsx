import "./Footer.css";
import { AiOutlineInstagram } from 'react-icons/ai'
import { SiBluesky } from 'react-icons/si'
import { SiTiktok } from 'react-icons/si'
function Footer () {
  return (
    <>
      <div className='footer'>
        <p>Made with ❤️ and 🥗</p>
        <div className='right'>
          <AiOutlineInstagram />
          <SiBluesky />
          <SiTiktok />
        </div>
      </div>
    </>
  )
}
export default Footer
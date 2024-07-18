import first from '../photos/first.jpg'
import second from '../photos/second.jpg'
import third from '../photos/third.jpg'
import { useNavigate } from 'react-router-dom'
export default function Home() {
    const nav=useNavigate();
    function handleScanClick(){
        nav("/scanaction")
    }
  return (
    <>
    <img src={first} alt="" className='first' onClick={handleScanClick}/>
    <img src={second} alt="" className='second' />
    <img src={third} alt="" className='third' />
    </>
  )
}

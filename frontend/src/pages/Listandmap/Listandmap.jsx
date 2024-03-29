import './Listandmap.css'
import Quickaccesscard from '../../components/Quickaccesscardlist/Quickaccesscardlist'
import Parkcardlist from '../../components/Parkcardlist/Parkcardlist'
import Sidebar from '../../components/Sidebar/Sidebar';
import { useNavigate } from 'react-router-dom';


const cards = [
    { title: 'Pet Fountain', image: 'https://plus.unsplash.com/premium_photo-1664301020005-943d943524cc?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { title: 'Garden', image: 'https://images.unsplash.com/photo-1572085313466-6710de8d7ba3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { title: 'Park', image: 'https://images.unsplash.com/photo-1573155993874-d5d48af862ba?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { title: 'Trail', image: 'https://plus.unsplash.com/premium_photo-1681883037285-be6f958d7b0d?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { title: 'Water', image: 'https://images.unsplash.com/photo-1505475082603-e217c4a87795?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  ];
  const Listandmap = () =>{
    const navigate = useNavigate();

    return(
    <>
    <div className='list-and-map'>
      <Sidebar className='list-and-map-left'/>
      <div className='list-and-map-right'>
        <Quickaccesscard cards={cards}/>
        <span className="go-to-map-span" onClick={() => navigate("/dog-parks")}>
            Go to Map
        </span>
        <Parkcardlist/>
      </div>
    </div>
    </>
    )
  }
export default Listandmap
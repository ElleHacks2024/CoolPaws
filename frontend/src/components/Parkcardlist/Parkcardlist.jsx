import "./Parkcardlist.css";
import Parkcard from "../Parkcard/Parkcard";


function Parkcardlist() {
    const parks = [
        {
        id: "1",
        name: "Chicago Dog Park",
        rating: "5",
        openTime: "8:00 PM",
        image: "https://plus.unsplash.com/premium_photo-1680283988075-bb0ff2955b71?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
        id: "2",
        name: "Toronto Dog Park",
        rating: "4.5",
        openTime: "8:30 PM",
        image: "https://images.unsplash.com/photo-1602684379319-1de467ca74e5?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
        id: "3",
        name: "North York Dog Park",
        rating: "4",
        openTime: "9:00 PM",
        image: "https://images.unsplash.com/photo-1619333774340-3a878585c2e4?q=80&w=2572&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
        id: "4",
        name: "Sunnybrook Dog Park",
        rating: "3.5",
        openTime: "8:30 PM",
        image: "https://images.unsplash.com/photo-1569992274375-e56b14e234f1?q=80&w=2075&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
        id: "5",
        name: "Tower Hill Dog Park",
        rating: "4.5",
        openTime: "8:00 PM",
        image: "https://plus.unsplash.com/premium_photo-1681881196671-774cc5ca626f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
        id: "6",
        name: "Humber Bay Dog Park",
        rating: "4",
        openTime: "8:30 PM",
        image: "https://images.unsplash.com/photo-1523141112301-95743dba9348?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
    ];
  return (
    <div className="park-card-list">
      <h2 className="park-list-title">Places near you</h2>
      <div className="park-cards-container">
      {parks.map((park) => {
        return (
          
            <Parkcard
              key={park.id}
              id={park.id}
              name={park.name}
              rating={park.rating}
              openTime={park.openTime}
              image={park.image}
            />
        
        );
      })}
      </div>
    </div>
  );
}

export default Parkcardlist;
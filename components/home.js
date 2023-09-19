'use client'
import { Seats } from './seats'
import '../app/globals.css'
const Home = () => {
// Создаем массив мест
// const [seats, setSeats] = useState([
//     { id: 1, isBooked: false },
//     { id: 2, isBooked: false },
//     { id: 3, isBooked: false },
//    // далее идут остальные места
//   ]);
 
//   const handleSeatClick = (id) => {
//     // Создаем новый массив мест, меняем состояние выбранного места
//     const newSeats = seats.map((seat) => {
//       if (seat.id === id) {
//         return { ...seat, isBooked: !seat.isBooked };
//       }
//       return seat;
//     });
//     // Обновляем состояние массива мест
//     setSeats(newSeats);
//   };
  
  return (
    
      <div className='section'>
        {[...Array(100)].map((i) => (
          <Seats
            key={i} props={i}
          />
        ))}
      </div>
   
  );
}
export { Home } 
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { format } from 'date-fns';
import './Calendario.css'

const Calendario = () => {
  const [date, setDate] = useState(new Date());

  const onChange = newDate => {
    setDate(newDate);
  };

  const formattedDate = format(date, 'EEEE dd');
  return (
    <div class="contenedor">
        <div class="bloque1">
            <p>{formattedDate}</p>
            <p>Pagar su letra del Banco</p>
            <button>Ver más</button>
        </div>
        <div class="bloque2">
            <Calendar
                onChange={onChange}
                value={date}
            />
        </div>
        
    </div>

  );
}

export default Calendario;

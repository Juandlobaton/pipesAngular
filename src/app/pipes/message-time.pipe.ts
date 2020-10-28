import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'messageTime',
  pure: true
})
export class MessageTimePipe implements PipeTransform {

  transform(value: string, arg: Date): String {
    if (value) {
        const MM = new Date().getMonth();
        const YY = new Date().getFullYear();
        const seconds = Math.floor((+new Date() - +new Date(value)) / 1000);

        let month = new Date(value).getMonth();
        let year = new Date(value).getFullYear();
       
        console.log(seconds)


        if (seconds < 29) 
            return 'Justo ahora';
            const intervals = {
              'anio': 31536000,
              'mes': 2592000,
              'semana': 604800,
              'dia': 86400,              
              'hora': 3600,
              'minuto': 60,
              'segundo': 1
          };
        if(seconds > intervals.segundo && seconds <= intervals.hora){
          return 'Conectado hace pocos minutos';
              } else if(seconds >  intervals.hora && seconds <= (intervals.hora*6)){
              return 'Conectado hace pocas horas';
              }else if(seconds > (intervals.hora*6) && seconds <= (intervals.hora*12) ){
              return 'Conectado hace menos de 12 horas';                  
              }else if(seconds > (intervals.hora*12) && seconds <= intervals.dia){
            return 'Conectado hace menos de 24 horas';        
              }else if(seconds > intervals.dia && seconds <= intervals.mes){
                    if (month === MM ){
                      return 'Conectado este mes';
                    } else {
                      return 'Conectado el mes pasado';
                    }
               }else if(seconds > intervals.mes && seconds <= intervals.anio){
                    if (year === YY ){
                      return 'Conectado este año';
                    } else {
                      return 'Conectado el año pasado';
                }
               }
                
    }

    return value;
}

}

import { Injectable } from '@angular/core';
import { afsprakenInterface } from '../interfaces/afspraken';

@Injectable({
  providedIn: 'root'
})
export class afsprakenService {

  afsprakenlijst: afsprakenInterface[] = [];

  constructor() { 
    this.init();
  }

  init(): void{
    this.insertAfspraak(
    {
      naam: 'Jan',
      email: 'jan@example.com',
      achternaam: 'Jansen',
      geboortedatum: '1990-05-15',
      adres: 'Straatnaam 1',
      afspraakDatum: new Date('2024-03-14'),
      gemaaktDoorMedewerker: 'Medewerker A',
      telefoonnummer: 123456789,
      status: 'In behandeling',
      tijd: '10:00',
      locatie: 'Kliniek XYZ',
      behandelaar: 'Behandelaar B',
      dienstverleningType: 'Type X',
      notitie: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    });
    this.insertAfspraak(
      {
        naam: 'Jan',
        email: 'jan@example.com',
        achternaam: 'Jansen',
        geboortedatum: '1990-05-15',
        adres: 'Straatnaam 1',
        afspraakDatum: new Date('2024-03-14'),
        gemaaktDoorMedewerker: 'Medewerker A',
        telefoonnummer: 123456789,
        status: 'In behandeling',
        tijd: '10:00',
        locatie: 'Kliniek XYZ',
        behandelaar: 'Behandelaar B',
        dienstverleningType: 'Type X',
        notitie: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
      });
      this.insertAfspraak(
        {
          naam: 'Jan',
          email: 'jan@example.com',
          achternaam: 'Jansen',
          geboortedatum: '1990-05-15',
          adres: 'Straatnaam 1',
          afspraakDatum: new Date('2024-03-14'),
          gemaaktDoorMedewerker: 'Medewerker A',
          telefoonnummer: 123456789,
          status: 'In behandeling',
          tijd: '10:00',
          locatie: 'Kliniek XYZ',
          behandelaar: 'Behandelaar B',
          dienstverleningType: 'Type X',
          notitie: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        });
        this.insertAfspraak(
          {
            naam: 'Jan',
            email: 'jan@example.com',
            achternaam: 'Jansen',
            geboortedatum: '1990-05-15',
            adres: 'Straatnaam 1',
            afspraakDatum: new Date('2024-03-14'),
            gemaaktDoorMedewerker: 'Medewerker A',
            telefoonnummer: 123456789,
            status: 'In behandeling',
            tijd: '10:00',
            locatie: 'Kliniek XYZ',
            behandelaar: 'Behandelaar B',
            dienstverleningType: 'Type X',
            notitie: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
          });
          this.insertAfspraak(
            {
              naam: 'Jan',
              email: 'jan@example.com',
              achternaam: 'Jansen',
              geboortedatum: '1990-05-15',
              adres: 'Straatnaam 1',
              afspraakDatum: new Date('2024-03-14'),
              gemaaktDoorMedewerker: 'Medewerker A',
              telefoonnummer: 123456789,
              status: 'In behandeling',
              tijd: '10:00',
              locatie: 'Kliniek XYZ',
              behandelaar: 'Behandelaar B',
              dienstverleningType: 'Type X',
              notitie: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
            });
  }

  insertAfspraak(newAfspraak: afsprakenInterface): void{
    this.afsprakenlijst.push(newAfspraak);
  } 

  getAllAfspraken(): afsprakenInterface[]{
    return this.afsprakenlijst;
  }

}

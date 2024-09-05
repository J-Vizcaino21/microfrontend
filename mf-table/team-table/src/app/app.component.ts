import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'team-table';

  data = [
    {
      id: 1,
      nombre: 'Juan Pérez',
      email: 'juan.perez@example.com',
      telefono: '555-1234',
    },
    {
      id: 2,
      nombre: 'Ana García',
      email: 'ana.garcia@example.com',
      telefono: '555-5678',
    },
    {
      id: 3,
      nombre: 'Luis Rodríguez',
      email: 'luis.rodriguez@example.com',
      telefono: '555-8765',
    },
    {
      id: 4,
      nombre: 'Marta Sánchez',
      email: 'marta.sanchez@example.com',
      telefono: '555-4321',
    },
    {
      id: 5,
      nombre: 'Carlos Fernández',
      email: 'carlos.fernandez@example.com',
      telefono: '555-2345',
    },
    {
      id: 6,
      nombre: 'Elena Gómez',
      email: 'elena.gomez@example.com',
      telefono: '555-6789',
    },
    {
      id: 7,
      nombre: 'Pedro López',
      email: 'pedro.lopez@example.com',
      telefono: '555-9876',
    },
    {
      id: 8,
      nombre: 'Sara Martínez',
      email: 'sara.martinez@example.com',
      telefono: '555-5432',
    },
    {
      id: 9,
      nombre: 'Javier Díaz',
      email: 'javier.diaz@example.com',
      telefono: '555-6543',
    },
    {
      id: 10,
      nombre: 'Sofía Romero',
      email: 'sofia.romero@example.com',
      telefono: '555-7654',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}

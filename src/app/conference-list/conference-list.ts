import { Component, computed, signal } from '@angular/core';
import { DatePipe, NgClass, UpperCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Conference } from '../Model/conference';
import { ConferenceDetails } from './conference-details/conference-details';

@Component({
  selector: 'app-conference-list',
  imports: [FormsModule, DatePipe, UpperCasePipe, NgClass, ConferenceDetails],
  templateUrl: './conference-list.html',
  styleUrl: './conference-list.css',
})
export class ConferenceList {
  search = signal('');
  today = new Date();
  selected = signal<Conference | null>(null);

  conferences = signal<Conference[]>([
    {
      id: 1,
      title: 'Angular 21 Conference',
      description: 'Les nouveautés d’Angular 21.',
      date: new Date('2021-11-15'),
      place: 'Tunis',
      maxParticipants: 100,
      nbParticipants: 75,
    },
    {
      id: 2,
      title: 'Signals Workshop',
      description: 'Atelier pratique sur les signals.',
      date: new Date('2027-11-30'),
      place: 'Ariana',
      maxParticipants: 50,
      nbParticipants: 44,
    },
    {
      id: 3,
      title: 'Web Conference',
      description: 'Les tendances du développement web.',
      date: new Date('2027-11-20'),
      place: 'Sousse',
      maxParticipants: 80,
      nbParticipants: 80,
    },
  ]);

  filteredConferences = computed(() => {
    const term = this.search().trim().toLowerCase();
    return this.conferences().filter(c => c.title.toLowerCase().includes(term));
  });

  select(c: Conference): void {
    this.selected.set(c);
  }

  register(id: number): void {
    this.conferences.update(list =>
      list.map(c =>
        c.id === id && c.nbParticipants < c.maxParticipants
          ? { ...c, nbParticipants: c.nbParticipants + 1 }
          : c
      )
    );
  }
}
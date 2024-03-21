import { Component, OnInit } from '@angular/core';
import { Hero } from '../_entities/hero';
import { HEROES } from '../_entities/mock-heroes';
import { HeroService } from '../_services/hero.service';
import { MessageService } from '../_services/message.service';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];
  selectedHero?: Hero;
  hero: Hero = {
    id: 1,
    name: 'Windstrom',
  };
  constructor(
    private heroService: HeroService,
    private messageService: MessageService
  ) {}
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }
  getHeroes(): void {
    this.heroService.getHeroes().subscribe((heroes) => {
      this.heroes = heroes;
    });
  }

  ngOnInit(): void {
    this.getHeroes();
  }
}

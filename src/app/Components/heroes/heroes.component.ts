import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/Models/Hero';
import { HEROES } from './mock-heroes';
import { HeroService } from 'src/app/Services/hero.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  hero1 = 'Windstorm';
  hero: Hero;
  //heroes = HEROES;
  selectedHero: Hero;
  heroes: Hero[];

  constructor(private heroService: HeroService) {

   }

  ngOnInit() {
    this.hero = {'id': 1, 'name': 'wolverine'};
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
  this.selectedHero = hero;
  }

  /*
  getHeroes(): void {
    this.heroes = this.heroService.getHeroes();
  }
  */

 getHeroes(): void {
  this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
 }

}

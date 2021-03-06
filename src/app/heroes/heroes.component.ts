import { Component, OnInit } from '@angular/core';
// import { Hero } from '../hero';
import { HeroService } from '../hero.service';
// import {HttpClient} from '@angular/common/http';
// import { DemoComponent } from './demo/demo.component';
import { Bank } from '../bank';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  // heroes: Hero[];
  banks: Bank[];
  title = 'Angular2';
  clickMessage = '';
  constructor(private heroService: HeroService) { }

  ngOnInit() {
    // this.getHeroes();
    this.getBanks();

  }
  getBanks(): void {
    this.heroService.getBank()
      .subscribe(banks => this.banks = banks);
  }
  onClickMe() {
    this.clickMessage = '你点击了我!';
  }
  // getHeroes(): void {
  //   this.heroService.getHeroes()
  //   .subscribe(heroes => this.heroes = heroes);
  // }
  //
  // add(name: string): void {
  //   name = name.trim();
  //   if (!name) { return; }
  //   this.heroService.addHero({ name } as Hero)
  //     .subscribe(hero => {
  //       this.heroes.push(hero);
  //     });
  // }
  //
  // delete(hero: Hero): void {
  //   this.heroes = this.heroes.filter(h => h !== hero);
  //   this.heroService.deleteHero(hero).subscribe();
  // }

}

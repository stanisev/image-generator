import { Component, OnInit } from '@angular/core';
import { Group } from './models/group.interface.ts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  groups = new Map();
  selectedGroup: Group;
  imageParts = new Map();
  defaultPath = '..\\assets\\alpaca\\';
  selectedImage = '..\\assets\\alpaca\\accessories\\headphone.png';
  joined = this.defaultPath;
  default: string = "accessories";

  accessories: Group = { categories:[
    'earings.png', 'flower.png', 'glasses.png', 'headphone.png']
  };

  backgrounds: Group = { categories: [
    'blue50.png', 'blue60.png', 'blue70.png', 'darkblue50.png', 'darkblue30.png', 'darkblue70.png',
    'green50.png', 'green60.png', 'green70.png', 'grey40.png', 'grey70.png', 'grey80.png',
    'red50.png', 'red60.png', 'red70.png', 'yellow50.png', 'yellow60.png', 'yellow70.png'
  ]};

  ears: Group = { categories:[
    'default.png', 'tilt-backward.png', 'tilt-forward.png']
  };

  eyes: Group = { categories:[
    'default.png', 'angry.png', 'naughty.png', 'panda.png', 'smart.png', 'star.png']
  };

  hair: Group = { categories:[
    'default.png', 'bang.png', 'curls.png', 'elegant.png', 'fancy.png', 'quiff.png', 'short.png']
  };

  leg: Group = { categories:[
    'default.png', 'bubble-tea.png', 'cookie.png', 'game-console.png', 'tilt-backward.png', 'tilt-forward.png']
  };

  mouth: Group = { categories:[
    'default.png', 'astonished.png', 'eating.png', 'laugh.png', 'tongue.png']
  };

  neck: Group = { categories:[
    'default.png', 'thick.png', 'bend-forward.png', 'bend-backward.png']
  };

  ngOnInit(): void {
    this.generateCategories();
    this.selectedGroup = this.groups.get("accessories");
    this.initImageParts();
    this.imageParts.set("accessories", this.selectedImage);
   }

  chooseGroup(group?: string) : void {
    this.selectedGroup = this.groups.get(group);
    this.default = group;
    this.joined = this.defaultPath + group;
  }

  changeCategoryImage(categoryImage: string) {
    this.selectedImage = this.joined + '\\' + categoryImage;
    this.imageParts.set(this.default, this.selectedImage);
  }

  generateCategories(): void {
    this.groups.set('accessories', this.accessories);
    this.groups.set('backgrounds', this.backgrounds);
    this.groups.set('ears', this.ears);
    this.groups.set('eyes', this.eyes);
    this.groups.set('hair', this.hair);
    this.groups.set('leg', this.leg);
    this.groups.set('mouth', this.mouth);
    this.groups.set('neck', this.neck);
  }

  formatInputCategory(category: string): string {
    category = category.slice(0, -4);
    return category.charAt(0).toUpperCase() + category.slice(1);
  }

  initImageParts(): void {
    this.imageParts.set("accessories", "..\\assets\\alpaca\\accessories\\headphone.png");
    this.imageParts.set("backgrounds", "..\\assets\\alpaca\\backgrounds\\blue50.png");
    this.imageParts.set("eyes", "..\\assets\\alpaca\\eyes\\default.png");
    this.imageParts.set("ears", "..\\assets\\alpaca\\ears\\default.png");
    this.imageParts.set("hair", "..\\assets\\alpaca\\hair\\default.png");
    this.imageParts.set("leg", "..\\assets\\alpaca\\leg\\default.png");
    this.imageParts.set("mouth", "..\\assets\\alpaca\\mouth\\default.png");
    this.imageParts.set("neck", "..\\assets\\alpaca\\neck\\default.png");
  }


  randomize(): void {
    this.imageParts.set("accessories", "..\\assets\\alpaca\\accessories\\" + this.accessories.categories[Math.floor(Math.random() * this.accessories.categories.length)]);
    this.imageParts.set("backgrounds", "..\\assets\\alpaca\\backgrounds\\" + this.backgrounds.categories[Math.floor(Math.random() * this.backgrounds.categories.length)]);
    this.imageParts.set("eyes", "..\\assets\\alpaca\\eyes\\" + this.eyes.categories[Math.floor(Math.random() * this.eyes.categories.length)]);
    this.imageParts.set("ears", "..\\assets\\alpaca\\ears\\" + this.ears.categories[Math.floor(Math.random() * this.ears.categories.length)]);
    this.imageParts.set("hair", "..\\assets\\alpaca\\hair\\" + this.hair.categories[Math.floor(Math.random() * this.hair.categories.length)]);
    this.imageParts.set("leg", "..\\assets\\alpaca\\leg\\" + this.leg.categories[Math.floor(Math.random() * this.leg.categories.length)]);
    this.imageParts.set("mouth", "..\\assets\\alpaca\\mouth\\" + this.mouth.categories[Math.floor(Math.random() * this.mouth.categories.length)]);
    this.imageParts.set("neck", "..\\assets\\alpaca\\neck\\" + this.neck.categories[Math.floor(Math.random() * this.neck.categories.length)]);
  }
}

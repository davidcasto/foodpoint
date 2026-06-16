import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

interface MenuItem {
  id: string;
  title: string;
  category: string;
  price: number;
  description: string;
  calories: string;
  ingredients: string[];
  image: string;
  badge: string;
}

@Component({
  selector: 'app-menu-detail',
  templateUrl: './menu-detail.component.html',
  styleUrls: ['./menu-detail.component.css']
})
export class MenuDetailComponent implements OnInit {
  menuItem?: MenuItem;
  menuItems: MenuItem[] = [
    { id: 'burger', title: 'Classic Burger', category: 'Lunch', price: 18, description: 'Juicy grilled beef with cheddar, lettuce, tomato, and special sauce.', calories: '820 kcal', ingredients: ['Beef patty', 'Cheddar cheese', 'Tomato', 'Lettuce', 'Brioche bun'], image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80', badge: 'Popular' },
    { id: 'salmon', title: 'Over Baked Salmon', category: 'Dinner', price: 25, description: 'Tender salmon fillet finished with citrus butter and seasonal greens.', calories: '520 kcal', ingredients: ['Salmon fillet', 'Asparagus', 'Lemon', 'Herb butter'], image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80', badge: 'Chef Choice' },
    { id: 'salad', title: 'Tuna Fish Salad', category: 'Lunch', price: 16, description: 'Fresh tuna tossed with greens, avocado, cucumber, and lemon vinaigrette.', calories: '420 kcal', ingredients: ['Tuna', 'Avocado', 'Mixed greens', 'Cucumber', 'Lemon dressing'], image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=600&q=80', badge: 'Healthy' },
    { id: 'pancakes', title: 'Banana Pancakes', category: 'Breakfast', price: 12, description: 'Fluffy pancakes topped with fresh bananas, maple syrup, and walnuts.', calories: '610 kcal', ingredients: ['Pancakes', 'Banana', 'Maple syrup', 'Walnuts', 'Whipped cream'], image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=600&q=80', badge: 'Breakfast' },
    { id: 'omelette', title: 'Garden Omelette', category: 'Breakfast', price: 14, description: 'Three-egg omelette loaded with mushrooms, spinach, and feta cheese.', calories: '480 kcal', ingredients: ['Eggs', 'Mushrooms', 'Spinach', 'Feta cheese', 'Herbs'], image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=600&q=80', badge: 'Savory' },
    { id: 'steak', title: 'Ribeye Steak', category: 'Dinner', price: 32, description: 'Grilled ribeye with garlic butter, roasted vegetables, and mashed potatoes.', calories: '980 kcal', ingredients: ['Ribeye steak', 'Garlic butter', 'Roasted vegetables', 'Mashed potatoes'], image: 'https://images.unsplash.com/photo-1432139555190-58524dae6a55?auto=format&fit=crop&w=600&q=80', badge: 'Premium' }
  ];

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.menuItem = this.menuItems.find(item => item.id === id);
    if (!this.menuItem) {
      this.router.navigate(['/menu']);
    }
  }
}

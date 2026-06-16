import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface MenuItem {
  id: string;
  title: string;
  category: string;
  price: number;
  description: string;
  image: string;
  badge: string;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  menuItems: MenuItem[] = [
    { id: 'burger', title: 'Classic Burger', category: 'Lunch', price: 18, description: 'Juicy grilled beef with cheddar, lettuce, tomato, and special sauce.', image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80', badge: 'Popular' },
    { id: 'salmon', title: 'Over Baked Salmon', category: 'Dinner', price: 25, description: 'Tender salmon with citrus butter and seasonal greens.', image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80', badge: 'Chef Choice' },
    { id: 'salad', title: 'Tuna Fish Salad', category: 'Lunch', price: 16, description: 'Fresh tuna, mixed greens, avocado, and lemon vinaigrette.', image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=600&q=80', badge: 'Healthy' },
    { id: 'pancakes', title: 'Banana Pancakes', category: 'Breakfast', price: 12, description: 'Fluffy pancakes topped with bananas, maple syrup, and walnuts.', image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=600&q=80', badge: 'Breakfast' },
    { id: 'omelette', title: 'Garden Omelette', category: 'Breakfast', price: 14, description: 'Three-egg omelette with mushrooms, spinach, and feta cheese.', image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=600&q=80', badge: 'Savory' },
    { id: 'steak', title: 'Ribeye Steak', category: 'Dinner', price: 32, description: 'Grilled ribeye with garlic butter and roasted vegetables.', image: 'https://images.unsplash.com/photo-1432139555190-58524dae6a55?auto=format&fit=crop&w=600&q=80', badge: 'Premium' }
  ];

  categories = ['Breakfast', 'Lunch', 'Dinner'];
  selectedCategory = 'Breakfast';

  get filteredItems(): MenuItem[] {
    return this.menuItems.filter(item => item.category === this.selectedCategory);
  }

  constructor(private router: Router) {}

  selectCategory(category: string) {
    this.selectedCategory = category;
  }

  viewDetails(item: MenuItem) {
    this.router.navigate(['/menu', item.id]);
  }
}

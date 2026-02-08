import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-template',
  standalone: true,
  imports: [RouterModule],
  template: `
  <div class="min-h-screen bg-gray-50 flex flex-col">

  <!-- Navbar -->
  <nav class="bg-white border-b shadow-sm">
    <div class="max-w-7xl mx-auto px-6">
      <div class="flex justify-between h-16 items-center">

        <!-- Logo -->
        <div class="flex items-center space-x-2">
          <span class="text-xl font-bold text-indigo-600">CritiRead</span>
        </div>

        <!-- Links -->
        <div class="hidden md:flex space-x-8">
          <a routerLink="/home" routerLinkActive="text-indigo-600"
             class="text-gray-700 hover:text-indigo-600 font-medium">
            Home
          </a>
          <a routerLink="/book" routerLinkActive="text-indigo-600"
             class="text-gray-700 hover:text-indigo-600 font-medium">
            Books
          </a>
          <a routerLink="/author" routerLinkActive="text-indigo-600"
             class="text-gray-700 hover:text-indigo-600 font-medium">
            Authors
          </a>
        </div>

        <!-- Auth buttons -->
        <div class="flex items-center space-x-4">
          <a routerLink="/login"
             class="text-gray-700 hover:text-indigo-600 font-medium">
            Login
          </a>
          <a routerLink="/signup"
             class="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition">
            Sign up
          </a>
        </div>

      </div>
    </div>
  </nav>

  <!-- Page content -->
  <main class="flex-1 max-w-7xl mx-auto w-full px-6 py-8">
    <router-outlet></router-outlet>
  </main>

  <!-- Footer -->
  <footer class="bg-white border-t">
    <div class="max-w-7xl mx-auto px-6 py-4 text-sm text-gray-500 flex justify-between">
      <span>© 2026 CritiRead</span>
      <span>Built with Angular & Tailwind</span>
    </div>
  </footer>

</div>
`
})
export class TemplateComponent {}
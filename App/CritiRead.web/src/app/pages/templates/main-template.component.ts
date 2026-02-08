import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-template',
  standalone: true,
  imports: [RouterModule],
  template: `
  <body class="bg-slate-950 text-white font-sans">
  <div class="w-[70%] mx-auto bg-slate-950 flex flex-col">

  <!-- Navbar -->
  <nav>
    <div class="max-w-7xl mx-auto px-6">
      <!-- Links -->
      <div class="flex justify-between h-16 items-center">
            <a routerLink="/home" routerLinkActive="text-indigo-600"
             class="text-3xl font-bold text-indigo-600">
            CritiRead
          </a>

        <div class="hidden md:flex space-x-8">

          <a routerLink="/books" routerLinkActive="text-indigo-600"
             class="text-gray-700 hover:text-indigo-600 font-medium">
            Books
          </a>
          <a routerLink="/authors" routerLinkActive="text-indigo-600"
             class="text-gray-700 hover:text-indigo-600 font-medium">
            Authors
          </a>
          <a routerLink="/readers" routerLinkActive="text-indigo-600"
             class="text-gray-700 hover:text-indigo-600 font-medium">
            Readers
          </a>
        </div>

        <!-- Auth buttons *** Make it s.t if they are logged these are changed to their profile details-->
        <div class="flex items-center space-x-4">
          <a routerLink="/auth/login"
             class="text-gray-700 hover:text-indigo-600 font-medium">
            Login
          </a>
          <a routerLink="/auth/signup"
             class="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition">
            Sign up
          </a>
        </div>

      </div>
    </div>
  </nav>
</div>


  <!-- Page content -->
  <main class="min-h-screen flex-1 w-[70%] mx-auto px-6 py-8">
    <router-outlet></router-outlet>
  </main>

  <!-- Footer -->
  <footer class="border-t">
    <div class="max-w-7xl mx-auto px-6 py-4 text-sm text-gray-500 flex justify-between">
      <span>© 2026 CritiRead</span>
      <span>Built with Angular, Tailwind & ASP.NET</span>
    </div>
  </footer>

</body>
`
})
export class MainTemplateComponent {}
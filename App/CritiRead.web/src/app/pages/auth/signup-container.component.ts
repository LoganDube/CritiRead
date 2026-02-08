import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  standalone: true,
  template: `
  
  <div class="max-w-md mx-auto bg-slate-900 rounded-xl shadow-lg p-8 mt-12">

  <!-- Header -->
  <div class="text-center mb-6">
    <h2 class="text-2xl font-bold text-white">Create an account</h2>
    <p class="text-slate-400 text-sm mt-1">
      Join CritiRead and start exploring
    </p>
  </div>

  <!-- Signup Form -->
  <form class="space-y-4">  <!--(ngSubmit)="onSubmit()"-->

    <!-- Username -->
    <div>
      <label class="block text-sm text-slate-300 mb-1">Username</label>
      <input
        type="text"
        placeholder="Your username"
        class="w-full px-4 py-2 rounded bg-slate-800 text-white
               focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
    </div>

    <!-- Email -->
    <div>
      <label class="block text-sm text-slate-300 mb-1">Email</label>
      <input
        type="email"
        placeholder="you@example.com"
        class="w-full px-4 py-2 rounded bg-slate-800 text-white
               focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
    </div>

    <!-- Password -->
    <div>
      <label class="block text-sm text-slate-300 mb-1">Password</label>
      <input
        type="password"
        placeholder="••••••••"
        class="w-full px-4 py-2 rounded bg-slate-800 text-white
               focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
    </div>

    <!-- Confirm Password -->
    <div>
      <label class="block text-sm text-slate-300 mb-1">Confirm Password</label>
      <input
        type="password"
        placeholder="••••••••"
        class="w-full px-4 py-2 rounded bg-slate-800 text-white
               focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
    </div>

    <!-- Submit -->
    <button
      type="submit"
      class="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded
             font-semibold transition">
      Sign Up
    </button>
    <!-- Already have an account -->
    <p class="text-center text-sm text-slate-400 mt-4">
      Already have an account?
      <a routerLink="/auth/login" class="text-indigo-500 hover:underline">Log in</a>
  </form>
</div>
  `
})
export class SignupContainerComponent {}
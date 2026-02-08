import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  template: `
  
  <div class="max-w-md mx-auto bg-slate-900 rounded-xl shadow-lg p-8 mt-12">

  <!-- Header -->
  <div class="text-center mb-6">
    <h2 class="text-2xl font-bold text-white">Log in</h2>
    <p class="text-slate-400 text-sm mt-1">
      Welcome back to CritiRead!
    </p>
  </div>

  <!-- Forgot Password Form -->
  <form class="space-y-4">  <!--(ngSubmit)="onSubmit()"-->

    <!-- Username -->
    <div>
      <label class="block text-sm text-slate-300 mb-1">Username</label>
      <input
        type="text"
        placeholder="Your username or email address"
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
    <!-- Forgot Password -->
    <div class="text-right">
      <a routerLink="/auth/forgot-password" class="text-sm text-indigo-500 hover:underline">
        Forgot password?
      </a>
    </div>

    <!-- Submit -->
    <button
      type="submit"
      class="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded
             font-semibold transition">
      Log in
    </button>
    <!-- Already have an account -->
    <p class="text-center text-sm text-slate-400 mt-4">
      Don't have an account?
      <a routerLink="/auth/signup" class="text-indigo-500 hover:underline">Sign up</a>
  </form>
</div>
  `
})
export class LoginContainerComponent {}
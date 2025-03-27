<template>
  <!-- DRAWER START -->
  <div class="drawer">
    <input id="my-drawer" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content">
      <!-- Page content here -->

      <!-- NAVBAR START -->
      <div className="navbar bg-base-100 shadow-sm">
        <div className="flex-none">
          <button className="btn btn-square btn-ghost">
            <div className="flex-none">
              <label
                for="my-drawer"
                className=" drawer-button btn btn-square btn-ghost"
              >
                <svg
                  class="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 18L20 18"
                    stroke="#000000"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                  <path
                    d="M4 12L20 12"
                    stroke="#000000"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                  <path
                    d="M4 6L20 6"
                    stroke="#000000"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                </svg>
              </label>
            </div>
          </button>
        </div>
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">PLaMoSys</a>
        </div>
        <div class="navbar-end">
          <button class="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
          <button class="btn btn-ghost btn-circle">
            <div class="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
              <span class="badge badge-xs badge-primary indicator-item"></span>
            </div>
          </button>
        </div>
      </div>
      <!-- NAVBAR END -->
      <!-- MAIN CONTENT START -->
      <main class="flex-1 p-6 mx-20">
        <slot />
      </main>
      <!-- MAIN CONTENT END -->
    </div>
    <div class="drawer-side">
      <label
        for="my-drawer"
        aria-label="close sidebar"
        class="drawer-overlay"
      ></label>
      <ul class="menu bg-base-200 text-base-content min-h-full w-80 p-4">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/task">Task</router-link></li>
        <li><router-link to="/data">Data</router-link></li>
        <li><router-link to="/about">About</router-link></li>
      </ul>
    </div>
  </div>
  <!-- DRAWER END -->
</template>
<script setup></script>

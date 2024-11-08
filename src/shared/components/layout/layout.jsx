//*********************Inicio HTML*********************************/
<div class="min-h-screen bg-gray-50/50">
   <app-sidebar/>
    <div class="p-4 xl:ml-80">
      <nav class="block w-full max-w-full bg-transparent text-white shadow-none rounded-xl transition-all px-0 py-1">
    <app-head/>
      </nav>
      <div class="mt-12">
        <router-outlet/>
      </div>
      <div class="text-blue-gray-600">
        <app-footer/>
      </div>
    </div>
  </div>

  //*********************Fin HTML*********************************/
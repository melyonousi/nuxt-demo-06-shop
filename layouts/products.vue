<template>
  <div>
    <header class="shadow-sm bg-white">
      <nav class="container mx-auto p-4 font-bold">
        <NuxtLink to="/products" class="font-bold">Shop</NuxtLink>
      </nav>
    </header>

    <div class="container mx-auto p-4">
      <slot></slot>
    </div>

    <footer class="container mx-auto p-4 flex justify-between border-t-2">
      <ul class="flex gap-4">
        <li class=""><NuxtLink to="/">Home</NuxtLink></li>
        <li class=""><NuxtLink to="/about">About</NuxtLink></li>
        <li class=""><NuxtLink to="/products">Products</NuxtLink></li>
      </ul>
      <ul class="flex">
        <li>
          <a
            href="http://github.com/el-yonousi"
            target="_blank"
            rel="noopener noreferrer"
            class="group"
          >
            <i class="hidden group-hover:inline-flex">
              <Icon name="uil:github" class="w-10 h-10" />
            </i>

            <i class="inline-flex group-hover:hidden">
              <Icon name="ion:social-github-outline" class="w-10 h-10" />
            </i>
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/elyonousi/"
            target="_blank"
            rel="noopener noreferrer"
            class="group"
          >
            <i class="hidden group-hover:inline-flex">
              <Icon name="ri:linkedin-box-fill" class="w-10 h-10 text-blue-600" />
            </i>
            <i class="inline-flex group-hover:hidden">
              <Icon name="ri:linkedin-box-line" class="w-10 h-10 text-blue-600" />
            </i>
          </a>
        </li>
      </ul>
    </footer>
  </div>
</template>

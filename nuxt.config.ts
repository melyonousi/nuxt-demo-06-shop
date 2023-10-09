// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
	app: {
		head: {
			title: 'Shop',
			meta: [
				// <meta name="description" content="My amazing site">
				{ name: 'description', content: 'Test application Shop.' }
			],
			htmlAttrs: {
				class: 'dark',
				lang: 'en',
				dir: 'ltr'
			}
		}
	},

	css: ['assets/css/tailwind.css'],

	modules: ['@nuxtjs/tailwindcss', 'nuxt-icon'],

	runtimeConfig: {
		// The private keys which are only available within server-side
		currencyKey: process.env.CURRENCY_API_KEY,
		currencyUrl: process.env.CURRENCY_API_URL,
		fakeStoreApi: process.env.FAKE_STORE_API,
		// Keys within public, will be also exposed to the client-side
		public: {

		}
	}
})

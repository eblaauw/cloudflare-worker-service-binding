/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

export default {
	async fetch(request, env, ctx) {
		// Use the binding to make a direct call to API Worker
		const apiResponse = await env.API_SERVICE.fetch(request.clone())

		// Process the API response
		const apiData = await apiResponse.text()
		
		return new Response(JSON.stringify({ message: apiData }), {
		  headers: { 'Content-Type': 'application/json' },
		})

	},
};

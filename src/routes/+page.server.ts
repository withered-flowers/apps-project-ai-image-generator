import type { Actions } from '@sveltejs/kit';
import { OPENAI_API_KEYS } from '$env/static/private';

export const actions: Actions = {
	default: async ({ fetch, request }) => {
		const data = await request.formData();

		const imageDesc = data.get('image-desc');

		const response = await fetch('https://api.openai.com/v1/images/generations', {
			method: 'POST',
			headers: {
				Authorization: `Bearer ${OPENAI_API_KEYS}`,
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				prompt: imageDesc,
				n: 1,
				size: '512x512',
				response_format: 'url'
			})
		});
		const responseData = await response.json();

		return {
			success: true,
			data: {
				images: responseData
			}
		};
	}
};

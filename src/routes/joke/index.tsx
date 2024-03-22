import { component$, useSignal } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";

interface DadJoke {
	id: string;
	joke: string;
	status: number;
}

export const useDadJoke = routeLoader$(async () => {
	const response = await fetch("https://icanhazdadjoke.com/", {
		headers: { Accept: "application/json" },
	});

	const data = await response.json();
	return data as DadJoke;
});

export default component$(() => {
	const dadJoke = useDadJoke();
	return (
		<>
			<h1>Dad Joke</h1>
			<p>{dadJoke.value.joke}</p>
		</>
	);
});

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

	return (await response.json()) as DadJoke;
});

export default component$(() => {
	const dadJoke = useDadJoke();
	return (
		<>
			<h1>Dad Joke</h1>
			<p style={"text-align: center"}>{dadJoke.value.joke}</p>
		</>
	);
});

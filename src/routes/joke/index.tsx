import { component$, useSignal } from "@builder.io/qwik";

export default component$(() => {
	const countJoke = useSignal(0);
	return (
		<section class="section bright">
			A joke!
			<p>Number of joke {countJoke.value}</p>
			<button onClick$={() => countJoke.value++}>Increment joke</button>
		</section>
	);
});

import { component$ } from "@builder.io/qwik";

interface ItemProps {
	name?: string;
	quantity?: number;
	description?: string;
	price?: number;
}

export const Item = component$<ItemProps>((props) => {
	return (
		<ul>
			{props.name && <li>name: {props.name}</li>}
			{props.quantity && <li>quantity: {props.quantity}</li>}
			{props.description && <li>description: {props.description}</li>}
			{props.price && <li>price: {props.price}</li>}
		</ul>
	);
});

export default component$(() => {
	return (
		<>
			<h1>Props</h1>
			<Item name="Macbook" price={2999} />
		</>
	);
});

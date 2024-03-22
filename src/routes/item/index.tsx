import { component$ } from "@builder.io/qwik";

interface ItemProps {
	name?: string;
	quantity?: number;
	description?: string;
	price?: number;
}

export const Item = component$<ItemProps>(
	({ name, quantity, description = "No description", price }) => {
		return (
			<ul>
				{name && <li>name: {name}</li>}
				{quantity && <li>quantity: {quantity}</li>}
				{description && <li>description: {description}</li>}
				{price && <li>price: {price}</li>}
			</ul>
		);
	},
);

export default component$(() => {
	return (
		<>
			<h1>Props</h1>
			<Item name="Macbook" price={2999} />
		</>
	);
});

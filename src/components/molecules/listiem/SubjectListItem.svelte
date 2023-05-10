<script lang="ts">
	import Button from "../../atoms/button/Button.svelte";

	export let item: import("../../../libs/CusomTypes").Subject = {
		id: -1,
		title: "강의명",
		day: -1,
		startTime: 0,
		endTime: 0,
		professor: -1,
		place: "강의실",
	};
	export let onClick: (id: number) => void = (id: number) => {
		console.log(id);
	};
</script>

<li>
	<Button
		type={3}
		onClick={() => {
			onClick(item.id);
		}}
		width="100%"
		classNames={["padding-horizontal-10", "space-around"]}
		borderRadius={false}
	>
		{item.title}</Button
	>
</li>

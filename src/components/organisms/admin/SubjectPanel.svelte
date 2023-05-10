<script lang="ts">
	import SubjectListItem from "../../molecules/listiem/SubjectListItem.svelte";

	let isModalOpened: boolean = false;
	let selected: number = -1;
	const openModal = (id: number) => {
		selected = id;
		isModalOpened = true;
	};
</script>

<section>
	<SubjectListItem onClick={openModal} />
</section>

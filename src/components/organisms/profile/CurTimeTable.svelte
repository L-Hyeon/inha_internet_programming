<script lang="ts">
	import { onMount } from "svelte";
	import type { Subject } from "../../../libs/CusomTypes";
	import Text from "../../atoms/text/Text.svelte";
	import TimeTableColorList from "../../molecules/list/TimeTableColorList.svelte";
	import TimeTable from "../../molecules/table/TimeTable.svelte";

	const range = (n: number) => {
		let ret = [];
		for (let i = 1; i <= n; i++) {
			ret.push(i);
		}
		ret.sort(() => Math.random() - 0.5);
		return ret;
	};
	let table: Subject[] = [];
	let colorList: number[];
	onMount(() => {
		colorList = range(table.length);
	});
</script>

<!-- 대표 타임 테이블 가져오기 + 자세히 보기 -->
<section>
	<Text type={1}>시간표</Text>
	<div class="row">
		<TimeTableColorList {colorList} {table} />
		<TimeTable {colorList} {table} />
	</div>
</section>

<style>
	section {
		width: 100%;
		height: 30vh;
	}
	.row {
		display: flex;
		gap: 10px;
	}
</style>

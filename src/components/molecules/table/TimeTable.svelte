<script lang="ts">
	import { onMount } from "svelte";
	import type { Subject } from "../../../libs/CusomTypes";
	import Text from "../../atoms/text/Text.svelte";

	export let colorList: number[] = [];
	export let table: Subject[] = [];
	let timeTable: number[][] = [];
	let lastTime = 10;

	onMount(() => {
		table.forEach((e) => {
			if (lastTime < e.endTime) lastTime = e.endTime;
		});
		timeTable = Array(lastTime).fill(Array(5).fill(-1));
		table.forEach((e, idx) => {
			for (let i = e.startTime; i <= e.endTime; i++) {
				timeTable[i][e.day] = colorList[idx];
			}
		});
	});
</script>

<table>
	<thead>
		<th>
			<Text type={2} fontSize="small">시간표</Text>
		</th>
		<th>
			<Text type={2} fontSize="small">월</Text>
		</th>
		<th>
			<Text type={2} fontSize="small">화</Text>
		</th>
		<th>
			<Text type={2} fontSize="small">수</Text>
		</th>
		<th>
			<Text type={2} fontSize="small">목</Text>
		</th>
		<th>
			<Text type={2} fontSize="small">금</Text>
		</th>
	</thead>
	<tbody>
		{#each timeTable as row, idx}
			<tr>
				<td>
					{idx % 2 == 0 ? (idx % 2) + 9 : ""}
				</td>
				{#each row as e}
					<td style={e != -1 ? `background-color=var(time${e})` : ""} />
				{/each}
			</tr>
		{/each}
	</tbody>
</table>

<style>
	th,
	td {
		width: 30px;
		height: 30px;
	}
</style>

"use client";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export default function Parent() {
	const [variable, changeVariable] = useState(0);
	return (
		<div className="flex flex-col justify-center items-center h-screen border border-red-500">
			<h1>Example</h1>
			<h2>{variable}</h2>
			<ChildComponent inputNumber={20} inputFunction={changeVariable}>
				<div className="flex flex-col items-center">
					hello
					<div className="bg-red-800/20 p-2 border border-red-500 border-2 rounded-full px-10 hover:bg-red-800/50 hover:hidden">
						asdasdasdasdsd
					</div>
				</div>
			</ChildComponent>
		</div>
	);
}

interface ChildComponentProps {
	inputNumber: number;
	inputFunction: (value: number) => void;
	children: any;
}

function ChildComponent(props: ChildComponentProps) {
	const [count, setCount] = useState(props.inputNumber);

	const [searchTerm, setSearchTerm] = useState("Braeden");

	useEffect(() => {
		props.inputFunction(count * 2);
	}, [count, props.inputFunction]);

	return (
		<div className="flex flex-col justify-center items-center h-[50vh] w-[50vw] border border-purple-500 border-4 p-10 pb-20">
			<div>{searchTerm}</div>

			<input
				value={searchTerm}
				onChange={(e) => {
					setSearchTerm(e.target.value);
				}}
				className="bg-blue-500/10 border border-black border-2"
			/>
			{props.children}

			<h1>{`Child: ${count}`}</h1>

			<Button className="bg-green-900" onClick={() => setCount(count + 1)}>
				Press
			</Button>
		</div>
	);
}

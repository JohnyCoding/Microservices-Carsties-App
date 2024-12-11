"use client";
import React, { useState } from "react";
import { updateAuctionTest } from "../actions/auctionActions";
import { Button } from "flowbite-react";
/* eslint-disable  @typescript-eslint/no-explicit-any */

export default function AuthTest() {
	const [loading, setLoading] = useState(false);
	const [result, setResult] = useState<any>();

	function doUpdate() {
		setResult(undefined);
		setLoading(true);
		updateAuctionTest()
			.then((res) => setResult(res))
			.catch((err) => setResult(err))
			.finally(() => setLoading(false));
	}

	return (
		<div className="flex items-center gap-4">
			<Button outline isProcessing={loading} onClick={doUpdate}>
				Test auth
			</Button>
			<pre>{JSON.stringify(result, null, 2)}</pre>
		</div>
	);
}

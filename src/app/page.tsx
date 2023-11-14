"use client";

import { useRef, useState } from "react";
import { Drawer } from "vaul";

export default function Home() {
	const innerSummaryRef = useRef<HTMLDivElement>(null);
	const outerSummaryRef = useRef<HTMLDivElement>(null);
	
	let snapPoint1 = innerSummaryRef.current && innerSummaryRef.current.clientHeight + 20 * 2 + 72 + "px";
	let snapPoint2 = outerSummaryRef.current && outerSummaryRef.current.clientHeight + 20 * 2 + 72 + "px";
	
	const [open, setOpen] = useState<boolean>(true);
	const [snap, setSnap] = useState<number | string | null>(snapPoint1 || "290px");
	
	return (
		<Drawer.Root
			shouldScaleBackground
			open={open}
			snapPoints={[snapPoint1 || "290px", snapPoint2 || "650px"]}
			activeSnapPoint={snap}
			setActiveSnapPoint={setSnap}
			dismissible={false}
			modal={false}>
			<Drawer.Portal>
				<Drawer.Content className={"fixed sm:hidden -overflow-y-auto !border-4 border-red-500 flex flex-col bg-white p-5 shadow-sticky-bottom border-b-none rounded-t-[10px] bottom-0 left-0 right-0 h-full max-h-[90%] mx-[-1px] focus:outline-none focus:border-0"}>
					<div ref={outerSummaryRef} className={"space-y-6"}>
						<div ref={innerSummaryRef} className={"space-y-4"}>
							<div className={"mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-zinc-300"}/>
							<div className={"space-y-3"}>
								<h1 className={"!text-sm"}>Payment Summary</h1>
							</div>
						</div>
					</div>
				</Drawer.Content>
			</Drawer.Portal>
		</Drawer.Root>
	);
}

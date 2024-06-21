"use client";
import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import {motion} from "framer-motion";

export default function Calcom(){
	useEffect(()=>{
	  (async function () {
		const cal = await getCalApi({});
		cal("floatingButton", {"calLink":"pranav007/30min","buttonText":"Book my Cal","hideButtonIcon":false,"buttonColor":"#ffffff","buttonTextColor":"#000000" });
		cal("ui", {"theme":"auto","styles":{"branding":{"brandColor":"#E32A0C"}},"hideEventTypeDetails":false,"layout":"month_view"});
	  })();
	}, [])
	return(
		<div/>
	)
  };
  
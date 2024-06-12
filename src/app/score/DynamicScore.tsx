import dynamic from "next/dynamic";

const DynamicScore = dynamic(() => import("./Score"), { ssr: false });

export default DynamicScore;

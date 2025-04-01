import {
	useBlockProps,
	useInnerBlocksProps,
	BlockControls,
	JustifyContentControl,
} from "@wordpress/block-editor";
import { parseValue } from "../../utils/parseValue";

import "./editor.scss";

export default function Edit({ attributes, setAttributes }) {
	const blockGap = parseValue(attributes.style?.spacing?.blockGap || "");
	const blockProps = useBlockProps({
		style: { gap: blockGap, justifyContent: attributes.justifyContent },
	});
	const innerBlocksProps = useInnerBlocksProps(blockProps, {
		template: [["eds-blox/clix", {}]],
		allowedBlocks: ["eds-blox/clix"],
	});

	return (
		<>
			<BlockControls>
				<JustifyContentControl
					value={attributes.justifyContent}
					allowedControls={["left", "center", "right"]}
					onChange={(newVal) => setAttributes({ justifyContent: newVal })}
				/>
			</BlockControls>
			<div {...innerBlocksProps}></div>
		</>
	);
}

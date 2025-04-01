import { registerBlockType, createBlock } from "@wordpress/blocks";
import "./style.scss";
import Edit from "./edit";
import save from "./save";
import metadata from "./block.json";
import icons from "../../icons";

registerBlockType(metadata.name, {
	icon: icons.primary,
	edit: Edit,
	save,
	transforms: {
		from: [
			{
				type: "block",
				blocks: ["core/paragraph"],
				transform: (attributes) => {
					return createBlock("eds-blox/wave-header", {}, [
						createBlock("core/paragraph", attributes),
					]);
				},
			},
			{
				type: "block",
				blocks: ["core/heading"],
				transform: (attributes) => {
					return createBlock("eds-blox/wave-header", {}, [
						createBlock("core/heading", attributes),
					]);
				},
			},
		],
	},
});

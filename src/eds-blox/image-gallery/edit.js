import {
	useBlockProps,
	BlockControls,
	useInnerBlocksProps,
} from "@wordpress/block-editor";
import { ToolbarGroup, ToolbarButton, Icon } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import metadata from "./block.json";
import { useState } from "@wordpress/element";
import { useSelect } from "@wordpress/data";
import { ImageThumbnail } from "../../components/imageThumbnail";
import "./editor.scss";

export default function Edit(props) {
	const blockProps = useBlockProps();
	const innerBlocksProps = useInnerBlocksProps(
		{
			className: "image-gallery-inner-blocks",
		},
		{
			allowedBlocks: ["eds-blox/image-gallery-image"],
		},
	);
	const [editMode, setEditMode] = useState(true);

	const innerBlocks = useSelect(
		(select) => {
			const { getBlocksByClientId } = select("core/block-editor");
			const block = getBlocksByClientId(props.clientId)?.[0];
			return block?.innerBlocks;
		},
		[props.clientId],
	);

	const [previewModeImage, setPreviewModeImage] = useState({
		imageId: innerBlocks?.[0]?.attributes?.imageId,
		blockId: innerBlocks?.[0]?.clientId,
	});

	console.log({ innerBlocks });

	return (
		<>
			<div {...blockProps}>
				{editMode ? (
					<div className="edit-mode">
						<span className="ig-label">
							{__("Image Gallery", metadata.textdomain)}
						</span>
						<div {...innerBlocksProps} />
					</div>
				) : (
					<>
						<div className="preview-mode">
							{(innerBlocks || []).map((innerBlock) => {
								return (
									<ImageThumbnail
										key={innerBlock.clientId}
										imageId={innerBlock.attributes.imageId}
										height={75}
										onClick={() => {
											setPreviewModeImage({
												imageId: innerBlock.attributes.imageId,
												blockId: innerBlock.clientId,
											});
										}}
										className={`thumb ${
											innerBlock.clientId === previewModeImage.blockId
												? "selected"
												: ""
										}`}
									/>
								);
							})}
						</div>
						<div>
							<ImageThumbnail
								height="initial"
								imageId={previewModeImage?.imageId}
							/>
						</div>
					</>
				)}
			</div>
			<BlockControls>
				<ToolbarGroup>
					<ToolbarButton
						label={
							editMode
								? __("Preview Gallery", metadata.textdomain)
								: __("Edit Gallery", metadata.textdomain)
						}
						icon={
							editMode ? (
								<Icon icon="welcome-view-site" />
							) : (
								<Icon icon="edit" />
							)
						}
						onClick={() => {
							setEditMode((prevState) => !prevState);
						}}
					/>
				</ToolbarGroup>
			</BlockControls>
		</>
	);
}

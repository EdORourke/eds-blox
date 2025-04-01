import {
	useBlockProps,
	RichText,
	InspectorControls,
} from "@wordpress/block-editor";
import { PanelBody, SelectControl, RangeControl } from "@wordpress/components";
import { useSelect } from "@wordpress/data";

import "./editor.scss";

export default function Edit({ attributes, setAttributes }) {
	const postTypes = useSelect((select) => {
		const data = select("core").getEntityRecords("root", "postType", {
			per_page: -1,
		});
		return data?.filter(
			(item) => item.visibility.show_in_nav_menus && item.visibility.show_ui,
		);
	});
	//console.log({ postTypes });

	const posts = useSelect(
		(select) => {
			const data = select("core").getEntityRecords(
				"postType",
				attributes.postType,
				{
					per_page: -1,
				},
			);
			return data;
		},
		[attributes.postType],
	);

	console.log({ posts });

	const blockProps = useBlockProps();

	return (
		<>
			<InspectorControls>
				<PanelBody title="Destination">
					<SelectControl
						label="Type"
						value={attributes.postType}
						onChange={(newVal) => setAttributes({ postType: newVal })}
						options={[
							{
								label: "Select a post type...",
								value: "",
							},
							...(postTypes || []).map((postType) => ({
								label: postType.labels.singular_name,
								value: postType.slug,
							})),
						]}
					/>

					{attributes.postType && (
						<SelectControl
							label={`Linked ${attributes.postType}`}
							value={attributes.linkedPost}
							onChange={(newVal) =>
								setAttributes({ linkedPost: newVal ? parseInt(newVal) : null })
							}
							options={[
								{
									label: `Select a ${attributes.postType} to link to.`,
									value: "",
								},
								...(posts || []).map((post) => ({
									label: post.title.rendered,
									value: post.id,
								})),
							]}
						/>
					)}
				</PanelBody>
				<RangeControl label="Border Radius" />
			</InspectorControls>
			<div {...blockProps}>
				<RichText
					placeholder="enter text"
					value={attributes.labelText}
					allowedFormats={[]}
					multiline={false}
					onSplit={() => {}}
					onReplace={() => {}}
					onChange={(newVal) => setAttributes({ labelText: newVal })}
				/>
			</div>
		</>
	);
}

import { __ } from "@wordpress/i18n";
import {
	useBlockProps,
	MediaUploadCheck,
	MediaUpload,
} from "@wordpress/block-editor";
import { useSelect } from "@wordpress/data";
import metadata from "./block.json";
import icons from "../../icons";
import { ImageThumbnail } from "../../components/imageThumbnail";
import "./editor.scss";
import { useImage } from "../../hooks/useImage";

export default function Edit({ attributes, setAttributes }) {
	const image = useImage(attributes.imageId);

	const imageLoaded = !!attributes.imageId && !!image?.source_url;

	return (
		<div {...useBlockProps()}>
			{!!imageLoaded && <ImageThumbnail imageId={attributes.imageId} />}
			{!imageLoaded && (
				<div className="image-placeholder">
					<span>{icons.imageplace}</span>
				</div>
			)}
			<MediaUploadCheck>
				<MediaUpload
					allowedTypes={["images"]}
					render={({ open }) => {
						return (
							<button className="media-select" onClick={open}>
								{imageLoaded
									? __("Replace image", metadata.textdomain)
									: __("Select an image", metadata.textdomain)}
							</button>
						);
					}}
					value={attributes.imageId}
					onSelect={(item) => {
						setAttributes({ imageId: item.id });
					}}
				/>
			</MediaUploadCheck>
		</div>
	);
}

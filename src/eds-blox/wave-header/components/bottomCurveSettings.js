import {
	HorizontalRule,
	RangeControl,
	ToggleControl,
} from "@wordpress/components";
import { ColorPalette } from "@wordpress/block-editor";
import { __ } from "@wordpress/i18n";

export const BottomCurveSettings = ({ attributes, setAttributes }) => {
	const { bottomWidth, bottomHeight, bottomFlipX, bottomFlipY, bottomColor } =
		attributes;

	return (
		<>
			<HorizontalRule />
			<RangeControl
				min={100}
				max={300}
				label={__("Width", "eds-blox")}
				value={bottomWidth || 100}
				onChange={(newVal) => setAttributes({ bottomWidth: parseInt(newVal) })}
			/>
			<RangeControl
				min={0}
				max={200}
				label={__("Height", "eds-blox")}
				value={bottomHeight || 100}
				onChange={(newVal) => setAttributes({ bottomHeight: parseInt(newVal) })}
			/>
			<HorizontalRule />
			<div style={{ display: "flex" }}>
				<ToggleControl
					onChange={(isChecked) => setAttributes({ bottomFlipX: isChecked })}
					checked={bottomFlipX}
					__nextHasNoMarginBottom
				/>
				<span>{__("Flip horizontally", "eds-blox")}</span>
			</div>
			<div style={{ display: "flex" }}>
				<ToggleControl
					onChange={(isChecked) => setAttributes({ bottomFlipY: isChecked })}
					checked={bottomFlipY}
					__nextHasNoMarginBottom
				/>
				<span>{__("Flip vertically", "eds-blox")}</span>
			</div>
			<HorizontalRule />
			<div>
				<label>{__("Curve color", "eds-blox")}</label>
				<ColorPalette
					value={bottomColor}
					onChange={(newVal) => setAttributes({ bottomColor: newVal })}
				/>
			</div>
		</>
	);
};

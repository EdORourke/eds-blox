import {
	HorizontalRule,
	RangeControl,
	ToggleControl,
} from "@wordpress/components";
import { ColorPalette } from "@wordpress/block-editor";
import { __ } from "@wordpress/i18n";

export const TopCurveSettings = ({ attributes, setAttributes }) => {
	const { topWidth, topHeight, topFlipX, topFlipY, topColor } = attributes;

	return (
		<>
			<HorizontalRule />
			<RangeControl
				min={100}
				max={300}
				label={__("Width", "eds-blox")}
				value={topWidth || 100}
				onChange={(newVal) => setAttributes({ topWidth: parseInt(newVal) })}
			/>
			<RangeControl
				min={0}
				max={200}
				label={__("Height", "eds-blox")}
				value={topHeight || 100}
				onChange={(newVal) => setAttributes({ topHeight: parseInt(newVal) })}
			/>
			<HorizontalRule />
			<div style={{ display: "flex" }}>
				<ToggleControl
					onChange={(isChecked) => setAttributes({ topFlipX: isChecked })}
					checked={topFlipX}
					__nextHasNoMarginBottom
				/>
				<span>{__("Flip horizontally", "eds-blox")}</span>
			</div>
			<div style={{ display: "flex" }}>
				<ToggleControl
					onChange={(isChecked) => setAttributes({ topFlipY: isChecked })}
					checked={topFlipY}
					__nextHasNoMarginBottom
				/>
				<span>{__("Flip vertically", "eds-blox")}</span>
			</div>
			<HorizontalRule />
			<div>
				<label>{__("Curve color", "eds-blox")}</label>
				<ColorPalette
					value={topColor}
					onChange={(newVal) => setAttributes({ topColor: newVal })}
				/>
			</div>
		</>
	);
};

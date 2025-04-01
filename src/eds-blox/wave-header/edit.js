import { Curve } from "./components/curve";
import { __ } from "@wordpress/i18n";
import {
	InnerBlocks,
	InspectorControls,
	useBlockProps,
} from "@wordpress/block-editor";
import { PanelBody, ToggleControl } from "@wordpress/components";

import "./editor.scss";
import { TopCurveSettings } from "./components/topCurveSettings";
import { BottomCurveSettings } from "./components/bottomCurveSettings";

export default function Edit({ attributes, setAttributes }) {
	const {
		enableTopCurve,
		enableBottomCurve,
		topWidth,
		topHeight,
		topFlipX,
		topFlipY,
		topColor,
		bottomWidth,
		bottomHeight,
		bottomFlipX,
		bottomFlipY,
		bottomColor,
	} = attributes;

	const { className, ...blockProps } = useBlockProps();

	return (
		<>
			<section className={`${className} alignfull`} {...blockProps}>
				{enableTopCurve && (
					<Curve
						color={topColor}
						height={topHeight}
						width={topWidth}
						flipX={topFlipX}
						flipY={topFlipY}
					/>
				)}
				<InnerBlocks />
				{enableBottomCurve && (
					<Curve
						isBottom
						color={bottomColor}
						height={bottomHeight}
						width={bottomWidth}
						flipX={bottomFlipX}
						flipY={bottomFlipY}
					/>
				)}
			</section>

			<InspectorControls style={{ border: "4px solid red" }}>
				<PanelBody title={__("Top Curve", "eds-blox")}>
					<div style={{ display: "flex" }}>
						<ToggleControl
							checked={enableTopCurve}
							onChange={() =>
								setAttributes({ enableTopCurve: !enableTopCurve })
							}
							__nextHasNoMarginBottom
						/>
						<span>{__("Enable top curve", "eds-blox")}</span>
					</div>
					{enableTopCurve && (
						<TopCurveSettings
							attributes={attributes}
							setAttributes={setAttributes}
						/>
					)}
				</PanelBody>

				<PanelBody title={__("Bottom Curve", "eds-blox")}>
					<div style={{ display: "flex" }}>
						<ToggleControl
							checked={enableBottomCurve}
							onChange={() =>
								setAttributes({ enableBottomCurve: !enableBottomCurve })
							}
							__nextHasNoMarginBottom
						/>
						<span>{__("Enable bottom curve", "eds-blox")}</span>
					</div>
					{enableBottomCurve && (
						<BottomCurveSettings
							attributes={attributes}
							setAttributes={setAttributes}
						/>
					)}
				</PanelBody>
			</InspectorControls>
		</>
	);
}

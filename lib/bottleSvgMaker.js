// 内置默认皮肤
const defaultXml = `
<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Created with Vectornator (http://vectornator.io/) -->
<svg height="100%" stroke-miterlimit="10" style="fill-rule:nonzero;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;" version="1.1" viewBox="0 0 512 512" width="100%" xml:space="preserve"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:vectornator="http://vectornator.io"
    xmlns:xlink="http://www.w3.org/1999/xlink">
    <metadata>
        <vectornator:setting key="IsTimeLapseWatermarkDisabled" value="false"/>
        <vectornator:setting key="UndoHistoryDisabled" value="true"/>
        <vectornator:setting key="VNDimensionsVisible" value="true"/>
        <vectornator:setting key="VNSnapToGuides" value="true"/>
        <vectornator:setting key="WDCMYKEnabledKey" value="false"/>
        <vectornator:setting key="WDDisplayWhiteBackground" value="false"/>
        <vectornator:setting key="WDDynamicGuides" value="false"/>
        <vectornator:setting key="WDGuidesVisible" value="true"/>
        <vectornator:setting key="WDIsolateActiveLayer" value="false"/>
        <vectornator:setting key="WDOutlineMode" value="false"/>
        <vectornator:setting key="WDRulersVisible" value="true"/>
        <vectornator:setting key="WDSnapToEdges" value="false"/>
        <vectornator:setting key="WDSnapToGrid" value="false"/>
        <vectornator:setting key="WDSnapToPoints" value="false"/>
        <vectornator:setting key="WDUnits" value="Pixels"/>
    </metadata>
    <defs>
        <path d="M80.9596 59.0335L167.463 457.128L317.234 458.929L401.62 60.4234L80.9596 59.0335Z" fill-rule="evenodd" id="Fill"/>
    </defs>

    <!-- 水杯边缘 -->
    <g id="bottle" vectornator:layerName="bottle">
        <path d="M163.058 462.643C163.058 462.643 325.791 466.935 322.712 462.176" fill="none" fill-rule="evenodd" opacity="1" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="10"/>
        <path d="M408.65 55.4978L404.797 73.5131L322.223 463.413" fill="none" fill-rule="evenodd" opacity="1" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="10"/>
        <path d="M74.5585 55.4978L161.65 462.749" fill="none" fill-rule="evenodd" opacity="1" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="10"/>
    </g>

    <!-- Vectornator生成, 目前没用 -->
    <g id="mask" vectornator:layerName="mask"/>

    <!-- 显示水量 -->
    <g id="display" vectornator:layerName="display">
        <g opacity="1" vectornator:mask="#Fill">
            <!-- 遮罩 -->
            <use fill="#000000" fill-opacity="0.507336" stroke="none" xlink:href="#Fill"/>
            <clipPath id="ClipPath">
                <use overflow="#visible" xlink:href="#Fill"/>
            </clipPath>

            <!-- 水 -->
            <g clip-path="url(#ClipPath)">
                <!-- 此处经过了修改 -->
                <!-- M0 $Y L0 512 L512 512 L512 $Y Z -->
                <!-- 58 <= $Y <= 458 -->
                <path d="M0 $Y L0 512 L512 512 L512 $Y Z" fill="#06e7ff" fill-rule="evenodd" opacity="1" stroke="none"/>
            </g>
        </g>
    </g>
</svg>
`;

function getHeight(water, goal) {
  // 防止goal为0出现NaN
  goal = goal || 1;
  return Math.round(water > goal ? 400 : (water / goal) * 400);
}

export default function (water, goal, skinUrl = '') {
  const height = getHeight(water, goal);
  const y = 458 - height;
  return defaultXml.replace(/\$Y/g, y);
}

/**
 * WordPress dependencies.
 */
import { __ } from '@wordpress/i18n';
import { Button, Flex, FlexItem, Icon } from "@wordpress/components";

/**
 * Internal Dependencies
 */
import { icons } from '.';
import { useSettings } from '../data';

/**
 * Render Preview Button Component
 */
function PreviewButton() {

    const {
        generalSetting,
        dimensionSetting,
        colorSetting,
        borderSetting,
    } = useSettings();

    const { iconSize, margin, padding } = dimensionSetting;
    const { selectedIcon, buttonPosition } = generalSetting;
    const { buttonColor, iconColor } = colorSetting;

    const width = borderSetting?.border?.width || '1px';
    const style = borderSetting?.border?.style || 'solid';
    const color = borderSetting?.border?.color || 'black';
    const border = borderSetting.border ? `border: ${width} ${style} ${color}` : '';
    const radius = borderSetting.radius ? `border-radius: ${borderSetting.radius}` : '';

    const bgdefaultcolor = buttonColor?.default ? `background-color: ${buttonColor.default}` : '';
    const bghovercolor = buttonColor?.hover ? `background-color: ${buttonColor.hover}` : '';
    const icondefaultcolor = iconColor?.default ? `fill: ${iconColor.default}` : '';
    const iconhovercolor = iconColor?.hover ? `fill: ${iconColor.hover}` : '';

    const padtop = padding?.top || '0px';
    const padleft = padding?.left || '0px';
    const padbottom = padding?.bottom || '0px';
    const padright = padding?.right || '0px';
    const buttonpadding = padding ? `padding: ${padtop} ${padleft} ${padbottom} ${padright}` : '';
    
    const margintop = margin?.top || '0px';
    const marginleft = margin?.left || '0px';
    const marginbottom = margin?.bottom || '0px';
    const marginright = margin?.right || '0px';
    const buttonmargin = margin ? `margin: ${margintop} ${marginleft} ${marginbottom} ${marginright}` : '';

    return (
        <Flex justify={buttonPosition}>
            <FlexItem>
                <Button className="ls_g2t_preview_button" label={__('Go To Top')} style={{ height: 'auto' }}>
                    <Icon
                        className="ls_g2t_preview_icon"
                        icon={icons[selectedIcon]}
                        size={iconSize}
                    />
                </Button>
                <style>
                    {`
                        .components-button.ls_g2t_preview_button{
                            ${bgdefaultcolor};
                            ${buttonmargin};
                            ${buttonpadding};
                            ${border};
                            ${radius};
                        }
                        .components-button.ls_g2t_preview_button:hover{
                            ${bghovercolor};
                        }
                        .components-button .ls_g2t_preview_icon{
                            ${icondefaultcolor}
                        }
                        .components-button.ls_g2t_preview_button:hover .ls_g2t_preview_icon{
                            ${iconhovercolor}
                        }
                    `}
                </style>
            </FlexItem>
        </Flex>
    );
};

export default PreviewButton;

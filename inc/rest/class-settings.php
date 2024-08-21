<?php

namespace Lubus\GoToTop\Rest;

/**
 * Manages global settings for the Go To Top plugin.
 */
class Settings
{
    const SETTINGS_KEY = 'go2top';

    /**
     * Constructor that initializes the WordPress hook.
     */
    public function __construct()
    {
        add_action('rest_api_init', [$this, 'gtt_register_settings']);
    }

    /**
     * Registers the settings in the WordPress options table.
     */
    public function gtt_register_settings()
    {
        $generalSettingSchema = [
            'type' => 'object',
            'properties' => [
                'selectedIcon' => ['type' => 'string'],
                'buttonPosition' => ['type' => 'string'],
            ],
        ];

        $borderSettingSchema = [
            'type' => 'object',
            'properties' => [
                'border' => [
                    'type' => 'object',
                    'properties' => [
                        'color' => ['type' => 'string'],
                        'style' => ['type' => 'string'],
                        'width' => ['type' => 'string'],
                    ],
                ],
                'radius' => ['type' => 'string'],
            ],
        ];

        $dimensionSettingSchema = [
            'type' => 'object',
            'properties' => [
                'padding' => [
                    'type' => 'object',
                    'properties' => [
                        'top' => ['type' => 'string'],
                        'left' => ['type' => 'string'],
                        'bottom' => ['type' => 'string'],
                        'right' => ['type' => 'string'],
                    ],
                ],
                'margin' => [
                    'type' => 'object',
                    'properties' => [
                        'top' => ['type' => 'string'],
                        'left' => ['type' => 'string'],
                        'bottom' => ['type' => 'string'],
                        'right' => ['type' => 'string'],
                    ],
                ],
                'iconSize' => ['type' => 'string'],
            ],
        ];

        $colorSettingSchema = [
            'type' => 'object',
            'properties' => [
                'buttonColor' => [
                    'type' => 'object',
                    'properties' => [
                        'default' => ['type' => 'string'],
                        'hover' => ['type' => 'string'],
                    ],
                ],
                'iconColor' => [
                    'type' => 'object',
                    'properties' => [
                        'default' => ['type' => 'string'],
                        'hover' => ['type' => 'string'],
                    ],
                ],
            ],
        ];

        $advancedSettingSchema = [
            'type' => 'object',
            'properties' => [
                'scrollOffset' => ['type' => 'string'],
                'animationSpeed' => ['type' => 'string'],
            ],
        ];

        $responsiveSchema = [
            'type' => 'object',
            'properties' => [
                'mobile' => ['type' => 'boolean'],
                'tablet' => ['type' => 'boolean'],
                'desktop' => ['type' => 'boolean'],
            ],
        ];

        $args = [
            'type' => 'object',
            'show_in_rest' => [
                'schema' => [
                    'type' => 'object',
                    'properties' => [
                        'enabled' => ['type' => 'boolean'],
                        'generalSetting' => $generalSettingSchema,
                        'borderSetting' => $borderSettingSchema,
                        'dimensionSetting' => $dimensionSettingSchema,
                        'colorSetting' => $colorSettingSchema,
                        'advancedSetting' => $advancedSettingSchema,
                        'responsive' => $responsiveSchema,
                    ],
                ],
            ],
            'description' => 'Go2Top Plugin Settings',
        ];

        register_setting('options', self::SETTINGS_KEY, $args);
    }
}

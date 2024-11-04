<?php
add_action('wp_footer', 'ls_g2t_settings');

function ls_g2t_settings()
{
    $settings = get_option('go2top');

    // Extract settings for better readability
    $enabled     = $settings['enabled'];
    $advanced    = $settings['advancedSetting'];

    if (!$enabled) {
        return;
    }

    $icon = generateIcon($settings['generalSetting']);

    //Extract Advanced setting values
    $animationSpeed = isset($advanced['animationSpeed']) ?  $advanced['animationSpeed'] : 500;
    $scrollOffset   = isset($advanced['scrollOffset']) ?  $advanced['scrollOffset'] : 200;

    $styles =  ls_g2t_styles($settings);


    // Output the HTML and CSS
    echo <<<HTML
    <div class="ls_g2top_container">
        <div class="ls_g2top_icon">
            $icon
        </div>
    </div>
    <style>
        {$styles}
    </style>
 <script>
        jQuery(document).ready(function($) {
            var animationSpeed = $animationSpeed;
            var scrollOffset = $scrollOffset;

            function toggleIconVisibility() {
                var windowWidth = $(window).width();
                var iconVisible = false;

                if (windowWidth <= 480) {
                    iconVisible = $('.ls_g2top_icon').css('display') !== 'none';
                } else if (windowWidth <= 819) {
                    iconVisible = $('.ls_g2top_icon').css('display') !== 'none';
                } else {
                    iconVisible = $('.ls_g2top_icon').css('display') !== 'none';
                }

                if (iconVisible) {
                    $(window).on('scroll', function() {
                        if ($(this).scrollTop() >= scrollOffset) {
                            $('.ls_g2top_icon').fadeIn(300);
                        } else {
                            $('.ls_g2top_icon').fadeOut(300);
                        }
                    });
                }
            }

            toggleIconVisibility(); // Initial check
            $(window).resize(toggleIconVisibility); // Recheck on window resize

            $('.ls_g2top_icon').on('click', function() {
                $('html, body').animate({scrollTop: 0}, animationSpeed);
                return false;
            });
        });
    </script>
HTML;
}

// Generate icon
function generateIcon($general)
{
    $icons = [
        'angleUp' => '<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M201.4 137.4c12.5-12.5 32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 205.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160z" /></svg>',
        'anglesUp' => '<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M246.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L224 109.3 361.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160zm160 352l-160-160c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L224 301.3 361.4 438.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3z" /></svg>',
        'arrowUp' => '<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z" /></svg>',
        'turnUp' => '<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><path d="M350 177.5c3.8-8.8 2-19-4.6-26l-136-144C204.9 2.7 198.6 0 192 0s-12.9 2.7-17.4 7.5l-136 144c-6.6 7-8.4 17.2-4.6 26s12.5 14.5 22 14.5h88l0 192c0 17.7-14.3 32-32 32H32c-17.7 0-32 14.3-32 32v32c0 17.7 14.3 32-32 32l80 0c70.7 0 128-57.3 128-128l0-192h88c9.6 0 18.2-5.7 22-14.5z" /></svg>'
    ];

    return $icons[$general['selectedIcon']];
}

function ls_g2t_styles($settings)
{
    $general = $settings['generalSetting'];
    $dimension = $settings['dimensionSetting'];
    $color = $settings['colorSetting'];
    $border = $settings['borderSetting'];

    $mobile = !$settings['responsive']['mobile'] ? 'flex' : 'none';
    $tablet = !$settings['responsive']['tablet'] ? 'flex' : 'none';
    $desktop = !$settings['responsive']['desktop'] ? 'flex' : 'none';

    $padding = isset($dimension['padding']) ? 'padding:' . implode(' ', $dimension['padding']) . '' : '';
    $margin = isset($dimension['margin']) ? 'margin:' . implode(' ', $dimension['margin']) . '' : '';

    $buttonColorDefault = isset($color['buttonColor']) ? 'background-color:' . $color['buttonColor']['default'] . '' : '';
    $buttonColorHover = isset($color['buttonColor']) ? 'background-color:' . $color['buttonColor']['hover'] . '' : '';
    $iconColorDefault = isset($color['iconColor']) ? 'fill:' . $color['iconColor']['default'] . '' : '';
    $iconColorHover = isset($color['iconColor']) ? 'fill:' . $color['iconColor']['hover'] . '' : '';

    $borderSize = isset($border['border']) ? 'border:' . implode(' ', $border['border']) . '' : '';
    $radius = isset($border['radius']) ? 'border-radius:' . $border['radius'] . '' : '';

    $iconSize = isset($dimension['iconSize']) ? 'width:' . $dimension['iconSize'] . '' : '';

    return <<<CSS
        .ls_g2top_container {
            position: fixed;
            bottom: 25px;
            z-index: 10;
            width: 100%;
            display: flex;
            justify-content: {$general['buttonPosition']};
        }

        .ls_g2top_icon {
            $padding;
            $margin;
            $buttonColorDefault;
            $borderSize;
            $radius;
            display: {$desktop};
            cursor: pointer;
        }

        .ls_g2top_icon:hover {
            $buttonColorHover;
        }

        .ls_g2top_icon:hover .ls_g2top_icon svg {
            $iconColorHover;
        }

        .ls_g2top_icon svg {
            $iconColorDefault;
            $iconSize;
        }

        @media only screen and (max-width: 480px) {
            .ls_g2top_icon {
                display: {$mobile};
            }
        }

        @media only screen and (min-width: 481px) and (max-width: 819px) {
            .ls_g2top_icon {
                display: {$tablet};
            }
        }
    CSS;
}

function ls_g2t_enqueue_scripts()
{
    wp_enqueue_script('jquery', 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.0/jquery.min.js');

    // Load style.css.
    wp_register_style(
        'go-to-top-frontend',
        plugins_url('style.css', WGTT_PLUGIN_FILE),
        [],
    );
    wp_enqueue_style('go-to-top-frontend');
}
add_action('wp_enqueue_scripts', 'ls_g2t_enqueue_scripts');

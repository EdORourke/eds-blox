<?php 
use EdORourkeDotNet\EdsBlox;

$block_wrapper_attributes = get_block_wrapper_attributes();
?>

<div <?php echo $block_wrapper_attributes; ?> style="display:flex;flex-direction:column;">

    <div class="gallery-thumbnails">
        <?php echo $content; ?>
    </div>
    <div class="image-preview-frame">
        <img class="image-preview" />
    </div>



</div>
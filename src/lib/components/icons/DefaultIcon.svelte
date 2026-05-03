<script lang="ts">
    interface Props {
        width?: number;
        height?: number;
        fill?: string;
        stroke?: string;
    }

    let { width = 62, height = 62, fill = 'none', stroke = 'black' }: Props = $props();
</script>

<svg width={width} height={height} viewBox="0 0 62 62" fill={fill} xmlns="http://www.w3.org/2000/svg">
    <circle cx="31" cy="31" r="28" stroke={stroke} stroke-width="6" />
</svg>

